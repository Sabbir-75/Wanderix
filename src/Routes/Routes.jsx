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
                path: '/packagedetailspage/:id',
                Component: PackageDetailsPage
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
    },
    {
        path: "/dashboard",
        Component: Dashboard,
        children: [
            {
                index: true,
                Component: DashboardHome
            },
            {
                path: "manage-profile",
                Component: ManageProfile
            },
            {
                path: "manage-profile-guide",
                Component: ManageProfileGuide 
            },
            {
                path: "manage-profile-admin",
                Component: ManageProfileAdmin
            },
            {
                path: "manage-users",
                Component: ManageUsers 
            },
            {
                path: "manage-candidates",
                Component: ManageCandidates
            },
            {
                path: "my-bookings",
                Component: MyBookings
            },
            {
                path: "my-assigned-tours",
                Component: MyAssignedTours
            },
            {
                path: "add-stories",
                Component: AddStories
            },
            {
                path: "manage-stories",
                Component: ManageStories
            },
            {
                path: "edit-story/:id",
                Component: UpdateStories
            },
            {
                path: "join-as-tour-guide",
                Component: JoinAsTourGuide
            },
            {
                path: "addpackage",
                Component: AddPackage
            },
        ]
    }
])