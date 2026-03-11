export interface ServiceDataType {
    id: number | string;
    title: string;
    description: string;
    icon: string;
    lucideIcon?: any;
    link: string;
    delay: string;
    active?: boolean;
    image?: string;
}

export const serviceOneData: ServiceDataType[] = [
    {
        id: 1,
        title: "Visa Processing & Guidance",
        description: "Expert assistance with student, work, and visitor visa applications end-to-end.",
        icon: "fa-certificate",
        link: "/services/visa-processing",
        delay: '.3'
    },
    {
        id: 2,
        title: "Australia PR Visa",
        description: "Strategic guidance for Subclass 189, 190, and 491 migration programs.",
        icon: "fa-passport",
        link: "/immigration/australia",
        delay: '.5',
        active: true
    },
    {
        id: 3,
        title: "Canada Immigration",
        description: "Express Entry, PNP, and Study-to-PR pathways specialist consulting.",
        icon: "fa-map-location-dot",
        link: "/immigration/canada",
        delay: '.7'
    },
    {
        id: 4,
        title: "UK Skilled Worker Visa",
        description: "Assistance with Certificate of Sponsorship (CoS) and 70-point threshold.",
        icon: "fa-briefcase",
        link: "/immigration/uk",
        delay: '.9'
    },
    {
        id: 5,
        title: "Travel & Accommodation",
        description: "Booking flights, finding safe student housing, and airport pick-up services.",
        icon: "fa-plane-departure",
        link: "/services/travel-assistance",
        delay: '.3'
    },
    {
        id: 6,
        title: "Test Preparation",
        description: "Specialized coaching for IELTS, TOEFL, PTE, GRE, and GMAT examinations.",
        icon: "fa-person-chalkboard",
        link: "/services/test-preparation",
        delay: '.5'
    }
];
