import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout/MainLayout";
import Home from "../Pages/MainPages/Home/Home";
import PrivacyPolicy from "../Components/FooterMenu/PrivacyPolicy/PrivacyPolicy";
import TermsAndConditions from "../Components/FooterMenu/TermsAndConditions/TermsAndConditions";
import PublicAPI from "../Components/FooterMenu/PublicAPI/PublicAPI";
import Documentation from "../Components/FooterMenu/Documentation/Documentation";
import Guides from "../Components/FooterMenu/Guides/Guides";
import Login from "../Pages/AuthenticationPages/Login/Login";
import Signup from "../Pages/AuthenticationPages/Signup/Signup";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Community from "../Pages/Community/Community";
import Trips from "../Pages/Trips/Trips";

export const router = createBrowserRouter([{
    path: "/",
    Component: MainLayout,
    children: [
        {
            index: true,
            Component: Home
        },
        {
            path: '/privacypolicy',
            Component: PrivacyPolicy
        },
        {
            path: '/termsandconditions',
            Component: TermsAndConditions
        },
        {
            path: '/publicAPI',
            Component: PublicAPI
        },
        {
            path: '/documentation',
            Component: Documentation
        },
        {
            path: '/guides',
            Component: Guides
        },
        {
            path: '/aboutus',
            Component: AboutUs
        },
        {
            path: '/community',
            Component: Community
        },
        {
            path: '/trips',
            Component: Trips
        },
        {
            path: '/login',
            Component: Login
        },
        {
            path: '/signup',
            Component: Signup
        },
    ]
}])