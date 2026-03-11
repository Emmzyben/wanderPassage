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
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop',
        icon: '',
        lucideIcon: UserCheck,
        title: 'Free Personal Counseling',
        description: 'Get expert advice tailored to your goals and aspirations for studying abroad.',
        link: '/service-details',
        delay: '0.2s'
    },
    {
        id: 2,

        image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=600&auto=format&fit=crop',

        icon: '',
        lucideIcon: GraduationCap,
        title: 'University & Course Selection',
        description: 'Find the perfect match from hundreds of top-tier universities worldwide.',
        link: '/service-details',
        delay: '0.2s'
    },
    {
        id: 3,
        image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=600',
        icon: '',
        lucideIcon: FileText,
        title: 'University Application',
        description: 'Step-by-step guidance to ensure your application stands out to admissions committees.',
        link: '/service-details',
        delay: '0.2s'
    },
    {
        id: 4,
        image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600',
        icon: '',
        lucideIcon: Gift,
        title: 'Guidance for Scholarship',
        description: 'Assistance in identifying and applying for financial aid and merit-based scholarships.',
        link: '/service-details',
        delay: '0.2s'
    },
    {
        id: 5,
        image: 'https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?q=80&w=600&auto=format&fit=crop',
        icon: '',
        lucideIcon: Landmark,
        title: 'Education Loan Assistance',
        description: 'Help with documentation and processing for secured and unsecured education loans.',
        link: '/service-details',
        delay: '0.2s'
    },
    {
        id: 6,
        image: 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=600&auto=format&fit=crop',
        icon: '',
        lucideIcon: CreditCard,
        title: 'Free Visa Application Assistance',
        description: 'Comprehensive support for visa documentation and mock interview preparation.',
        link: '/service-details',
        delay: '0.2s'
    },
    {
        id: 7,
        image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=600',
        icon: '',
        lucideIcon: Home,
        title: 'Accommodation Assistance',
        description: 'Finding safe and affordable housing near your chosen university.',
        link: '/service-details',
        delay: '0.2s'
    },
];
