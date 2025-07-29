import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import UseAxiosSecure from '../../../Hooks/UseAxiosSecure/UseAxiosSecure';
import { useAuth } from '../../../Hooks/UseAuth/UseAuth';
// import useTrackingLogger from '../../../../Hooks/TrakingLogger/TrakingLogger';

const CheckoutForm = ({ id, setIsModalOpen, refetch}) => {
    const { user } = useAuth()
    const useSecure = UseAxiosSecure()
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState("")
    const navigate = useNavigate()
    // const { logTracking } = useTrackingLogger()
    const [paymentLoading, setPaymentLoading] = useState(false)

    const { isPending, data: singleData = {} } = useQuery({
        queryKey: ["bookings", id],
        queryFn: async () => {
            const data = await useSecure.get(`/bookings/single/${id}`)
            return data.data
        }

    })

    if (isPending) {
        return <span className="loading loading-infinity loading-xl"></span>
    }

    const amount = singleData?.price;
    const newAmmount = parseInt(amount)
    const amountInCents = newAmmount * 100;

    const amountObject = {
        amountInCents,
        parcelId: singleData._id
    }


    const CheckoutFormHandler = async (e) => {
        e.preventDefault()
        setPaymentLoading(true)

        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement);
        if (!card) {
            return
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setError(error.message)
        }
        else {
            setError("")
            console.log("paymentMethod Message", paymentMethod);
        }

        const res = await useSecure.post(`/create-payment-intent`, amountObject)
        const clientSecret = res.data.clientSecret

        const result = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: user?.displayName,
                    email: user?.email
                },
            },
        });
        console.log(result);
        if (result.error) {
            console.log(result.error.message);
        }
        else {
            if (result.paymentIntent.status === 'succeeded') {
                console.log('Payment succeeded!');

                const paymentRecord = {
                    tourId: singleData._id,
                    touristEmail: user?.email,
                    price: amountInCents,
                    transactionId: result.paymentIntent.id,
                    paymentMethod: result.paymentIntent.payment_method_types
                }
                const res = await useSecure.post(`/payments`, paymentRecord)
                console.log(res);
                if (res.data.insertResult.insertedId && res.data.updateResult.modifiedCount) {
                    setPaymentLoading(false)
                    Swal.fire({
                        icon: 'success',
                        title: 'Payment Successful!',
                        html: `
                <p>Transaction ID: <b>${result.paymentIntent.id}</b></p>
            `,
                        confirmButtonText: 'Go to My bookings',
                        confirmButtonColor: '#28a745',
                        allowOutsideClick: false,
                    }).then(async () => {
                        // await logTracking({
                        //     tracking_id: singleData.tracking_id,
                        //     status: "payment_successfully",
                        //     details: `Created by ${user.displayName}`,
                        //     updated_by: user.email,
                        // })
                        // Redirect করার জন্য
                        setIsModalOpen(false)
                        refetch()
                        navigate('/dashboard/my-bookings');
                    });
                }
            }
        }

    }
    return (
        <form onSubmit={CheckoutFormHandler} className="w-full max-w-md mx-auto p-6 bg-white shadow-lg rounded-2xl flex flex-col gap-6">
            <CardElement options={{
                style: {
                    base: {
                        fontSize: '16px',
                        color: '#1f2937', // text-gray-800
                        '::placeholder': {
                            color: '#9ca3af', // text-gray-400
                        },
                    },
                    invalid: {
                        color: '#dc2626', // text-red-600
                    },
                },
            }}>
            </CardElement>
            <button type='submit' disabled={!stripe} className={`w-full py-3 rounded-lg duration-200 text-base-content font-bold transition
      ${stripe ? 'bg-primary' : 'bg-gray-400 cursor-not-allowed'}
    `}>

                Pay ${singleData.cost} For Booking {paymentLoading && <><span className="loading loading-dots loading-xs"></span>
                    <span className="loading loading-dots loading-sm"></span></>}
            </button>
            {
                error && <h1 className='text-red-600'>{error}</h1>
            }

        </form>

    );
};

export default CheckoutForm;