import RootLayout from "@/layout/root";
import Error from "@/pages/404";
import About from "@/pages/about";
import Australia from "@/pages/australia";
import Usa from "@/pages/usa";
import Germany from "@/pages/germany";
import NewZealand from "@/pages/new-zealand";
import Singapore from "@/pages/singapore";
import Poland from "@/pages/poland";
import Italy from "@/pages/italy";
import Malta from "@/pages/malta";
import France from "@/pages/france";
import Portugal from "@/pages/portugal";
import Spain from "@/pages/spain";
import Sweden from "@/pages/sweden";
import Switzerland from "@/pages/switzerland";
import Hungary from "@/pages/hungary";
import Finland from "@/pages/finland";
import India from "@/pages/india";
import China from "@/pages/china";
import SouthKorea from "@/pages/south-korea";
import Japan from "@/pages/japan";
import CanadaImmigration from "@/pages/immigration-canada";
import AustraliaImmigration from "@/pages/immigration-australia";
import UkImmigration from "@/pages/immigration-uk";
import Canada from "@/pages/canada";
import Uk from "@/pages/uk";
import Ireland from "@/pages/ireland";
import Belgium from "@/pages/belgium";
import Blog from "@/pages/blog";
import BlogDetails from "@/pages/blog-details";
import BlogStandard from "@/pages/blog-standard";
import Contact from "@/pages/contact";
import StudentLogin from "@/pages/student-login";
import StudentPortal from "@/pages/student-portal";
import AdminPortal from "@/pages/admin-portal";
import Home from "@/pages/home";
import ProtectedRoute from "@/components/ProtectedRoute";
import AdminProtectedRoute from "@/components/auth/AdminProtectedRoute";
import VisaProcessing from "@/pages/visa-processing";
import TravelAssistance from "@/pages/travel-assistance";
import TestPreparation from "@/pages/test-preparation";
import PrivacyPolicy from "@/pages/privacy-policy";
import TermsOfService from "@/pages/terms-of-service";
import MigrationCanadaPR from "@/pages/migration-canada-pr";
import MigrationCanadaWork from "@/pages/migration-canada-work";
import MigrationCanadaVisitor from "@/pages/migration-canada-visitor";
import MigrationAustraliaPR from "@/pages/migration-australia-pr";
import MigrationUkSkilled from "@/pages/migration-uk-skilled";
import StudentAccommodation from "@/pages/student-accommodation";
import StudentVisa from "@/pages/student-visa";
import RegistrationSuccess from "@/pages/registration-success";
import ForgotPassword from "@/pages/forgot-password";
import Apply from "@/pages/apply";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/study-abroad/australia',
                element: <Australia />
            },
            {
                path: '/study-abroad/usa',
                element: <Usa />
            },
            {
                path: '/study-abroad/germany',
                element: <Germany />
            },
            {
                path: '/study-abroad/new-zealand',
                element: <NewZealand />
            },
            {
                path: '/study-abroad/singapore',
                element: <Singapore />
            },
            {
                path: '/study-abroad/poland',
                element: <Poland />
            },
            {
                path: '/study-abroad/italy',
                element: <Italy />
            },
            {
                path: '/study-abroad/malta',
                element: <Malta />
            },
            {
                path: '/study-abroad/france',
                element: <France />
            },
            {
                path: '/study-abroad/portugal',
                element: <Portugal />
            },
            {
                path: '/study-abroad/spain',
                element: <Spain />
            },
            {
                path: '/study-abroad/sweden',
                element: <Sweden />
            },
            {
                path: '/study-abroad/switzerland',
                element: <Switzerland />
            },
            {
                path: '/study-abroad/hungary',
                element: <Hungary />
            },
            {
                path: '/study-abroad/finland',
                element: <Finland />
            },
            {
                path: '/study-abroad/india',
                element: <India />
            },
            {
                path: '/study-abroad/china',
                element: <China />
            },
            {
                path: '/study-abroad/south-korea',
                element: <SouthKorea />
            },
            {
                path: '/study-abroad/japan',
                element: <Japan />
            },
            {
                path: '/study-abroad/canada',
                element: <Canada />
            },
            {
                path: '/study-abroad/uk',
                element: <Uk />
            },
            {
                path: '/study-abroad/ireland',
                element: <Ireland />
            },
            {
                path: '/study-abroad/belgium',
                element: <Belgium />
            },
            {
                path: '/immigration/canada',
                element: <CanadaImmigration />
            },
            {
                path: '/immigration/australia',
                element: <AustraliaImmigration />
            },
            {
                path: '/immigration/uk',
                element: <UkImmigration />
            },
            {
                path: '/services/visa-processing',
                element: <VisaProcessing />
            },
            {
                path: '/services/travel-assistance',
                element: <TravelAssistance />
            },
            {
                path: '/services/test-preparation',
                element: <TestPreparation />
            },
            {
                path: '/migration/canada-pr',
                element: <MigrationCanadaPR />
            },
            {
                path: '/migration/canada-work',
                element: <MigrationCanadaWork />
            },
            {
                path: '/migration/canada-visitor',
                element: <MigrationCanadaVisitor />
            },
            {
                path: '/migration/australia-pr',
                element: <MigrationAustraliaPR />
            },
            {
                path: '/migration/uk-skilled',
                element: <MigrationUkSkilled />
            },
            {
                path: '/student-services/accommodation',
                element: <StudentAccommodation />
            },
            {
                path: '/student-services/visa',
                element: <StudentVisa />
            },



            {
                path: '/404',
                element: <Error />
            },
            {
                path: '/news',
                element: <Blog />
            },
            {
                path: '/news-standard',
                element: <BlogStandard />
            },
            {
                path: '/news-details/:slug',
                element: <BlogDetails />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/student-login',
                element: <StudentLogin />
            },
            {
                path: '/apply',
                element: <Apply />
            },
            {
                path: '/student-portal',
                element: (
                    <ProtectedRoute>
                        <StudentPortal />
                    </ProtectedRoute>
                )
            },
            {
                path: '/admin-portal',
                element: (
                    <AdminProtectedRoute>
                        <AdminPortal />
                    </AdminProtectedRoute>
                )
            },
            {
                path: '/privacy-policy',
                element: <PrivacyPolicy />
            },
            {
                path: '/terms-of-service',
                element: <TermsOfService />
            },
            {
                path: '/registration-success',
                element: <RegistrationSuccess />
            },
            {
                path: '/forgot-password',
                element: <ForgotPassword />
            },
        ]
    },
    {
        path: '*',
        element: <Error />
    },


])