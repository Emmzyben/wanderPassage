import { ServiceDataType } from "./serviceOneData";
import {
    UserCheck,
    GraduationCap,
    FileText,
    Gift,
    Landmark,
    CreditCard,
    Home
} from "lucide-react";

export const serviceThreeData: ServiceDataType[] = [
    {
        id: 1,
        image: '/img/service/02.jpg',
        icon: '',
        lucideIcon: UserCheck,
        title: 'Free Personal Counseling',
        description: 'Get expert advice tailored to your goals and aspirations for studying abroad.',
        link: '/service-details',
        delay: '0.2s'
    },
    {
        id: 2,
        image: '/img/service/03.jpg',
        icon: '',
        lucideIcon: GraduationCap,
        title: 'University & Course Selection',
        description: 'Find the perfect match from hundreds of top-tier universities worldwide.',
        link: '/service-details',
        delay: '0.2s'
    },
    {
        id: 3,
        image: '/img/service/04.jpg',
        icon: '',
        lucideIcon: FileText,
        title: 'University Application',
        description: 'Step-by-step guidance to ensure your application stands out to admissions committees.',
        link: '/service-details',
        delay: '0.2s'
    },
    {
        id: 4,
        image: '/img/service/05.jpg',
        icon: '',
        lucideIcon: Gift,
        title: 'Guidance for Scholarship',
        description: 'Assistance in identifying and applying for financial aid and merit-based scholarships.',
        link: '/service-details',
        delay: '0.2s'
    },
    {
        id: 5,
        image: '/img/service/02.jpg',
        icon: '',
        lucideIcon: Landmark,
        title: 'Education Loan Assistance',
        description: 'Help with documentation and processing for secured and unsecured education loans.',
        link: '/service-details',
        delay: '0.2s'
    },
    {
        id: 6,
        image: '/img/service/03.jpg',
        icon: '',
        lucideIcon: CreditCard,
        title: 'Free Visa Application Assistance',
        description: 'Comprehensive support for visa documentation and mock interview preparation.',
        link: '/service-details',
        delay: '0.2s'
    },
    {
        id: 7,
        image: '/img/service/04.jpg',
        icon: '',
        lucideIcon: Home,
        title: 'Accommodation Assistance',
        description: 'Finding safe and affordable housing near your chosen university.',
        link: '/service-details',
        delay: '0.2s'
    },
];
