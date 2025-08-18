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
import AboutUs from "../Pages/MainPages/AboutUs/AboutUs";
import Community from "../Pages/Community/Community";
import Trips from "../Pages/MainPages/Trips/Trips";
import PackageDetailsPage from "../Pages/MainPages/PackageDetailsPage/PackageDetailsPage";
import Dashboard from "../Layout/DashboardLayout/Dashboard";
import DashboardHome from "../Pages/DashboardPages/DashboardHome/DashboardHome";
import ManageProfile from "../Pages/DashboardPages/ManageProfile/ManageProfile";
import MyBookings from "../Pages/DashboardPages/MyBookings/MyBookings";
import AddStories from "../Pages/DashboardPages/AddStories/AddStories";
import ManageStories from "../Pages/DashboardPages/ManageStories/ManageStories";
import JoinAsTourGuide from "../Pages/DashboardPages/JoinAsTourGuide/JoinAsTourGuide";
import UpdateStories from "../Pages/DashboardPages/UpdateStories/UpdateStories";
import AddPackage from "../Pages/DashboardPages/AddPackage/AddPackage";
import ManageProfileGuide from "../Pages/DashboardPages/ManageProfileGuide/ManageProfileGuide";
import MyAssignedTours from "../Pages/DashboardPages/MyAssignedTours/MyAssignedTours";
import ManageUsers from "../Pages/DashboardPages/ManageUsers/ManageUsers";
import ManageCandidates from "../Pages/DashboardPages/ManageCandidates/ManageCandidates";
import ManageProfileAdmin from "../Pages/DashboardPages/ManageProfileAdmin/ManageProfileAdmin";
import Forbidden from "../Pages/MainPages/Forbidden/Forbidden";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import GuideProfile from "../Pages/MainPages/GuideProfile/GuideProfile";
import PrivateRoute from "../Context/PrivateRoute/PrivateRoute";
import AdminRoute from "../Context/AdminRoute/AdminRoute";
import TouristRoute from "../Context/TouristRoute/TouristRoute";
import CommonRoute from "../Context/CommonRoute/CommonRoute";
import GuideRoute from "../Context/GuideRoute/GuideRoute";
import Contact from "../Pages/Contact/Contact";

export const router = createBrowserRouter([
    {
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
                path: '/contact',
                Component: Contact
            },
            {
                path: '/packagedetailspage/:id',
                element: <PrivateRoute><PackageDetailsPage></PackageDetailsPage></PrivateRoute>,
            },
            {
                path: '/login',
                Component: Login
            },
            {
                path: '/signup',
                Component: Signup
            },
            {
                path: '/forbidden',
                Component: Forbidden
            },
            {
                path: '/guide/:id',
                element: <PrivateRoute><GuideProfile></GuideProfile></PrivateRoute>,
            },
        ]
    },
    {
        path: "/dashboard",
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                index: true,
                Component: DashboardHome
            },
            {
                path: "manage-profile",
                element: <CommonRoute><ManageProfile></ManageProfile></CommonRoute>
            },
            {
                path: "manage-profile-guide",
                element: <CommonRoute><ManageProfileGuide></ManageProfileGuide></CommonRoute>
            },
            {
                path: "manage-profile-admin",
                element: <AdminRoute><ManageProfileAdmin></ManageProfileAdmin></AdminRoute>
            },
            {
                path: "manage-users",
                element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
            },
            {
                path: "manage-candidates",
                element: <AdminRoute><ManageCandidates></ManageCandidates></AdminRoute>
            },
            {
                path: "my-bookings",
                element: <TouristRoute><MyBookings></MyBookings></TouristRoute>
            },
            {
                path: "my-assigned-tours",
                element: <GuideRoute><MyAssignedTours></MyAssignedTours></GuideRoute>
            },
            {
                path: "add-stories",
                element: <CommonRoute><AddStories></AddStories></CommonRoute>
            },
            {
                path: "manage-stories",
                element: <CommonRoute><ManageStories></ManageStories></CommonRoute>
            },
            {
                path: "edit-story/:id",
                element: <CommonRoute><UpdateStories></UpdateStories></CommonRoute>
            },
            {
                path: "join-as-tour-guide",
                element: <TouristRoute><JoinAsTourGuide></JoinAsTourGuide></TouristRoute>
            },
            {
                path: "addpackage",
                element: <AdminRoute><AddPackage></AddPackage></AdminRoute>
            },
        ]
    },
    {
        path: "*",
        Component: ErrorPage
    }
])