export interface TestimonialType {
    id: number;
    name: string;
    role: string;
    image: string;
    icon: string;
    stars: number;
    feedback: string;
}

export const testimonialsTwoData: TestimonialType[] = [
    {
        id: 1,
        name: 'Chidi Okoro',
        role: 'MSc Student, Toronto',
        image: 'https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?q=80&w=400&auto=format&fit=crop',
        icon: '/img/testimonial/icon.png',
        stars: 5,
        feedback: "WanderPassage made my dream of studying in Canada a reality. Their guidance on university selection and the visa process was flawless. I couldn't have done it without their expert team!",
    },
    {
        id: 2,
        name: 'Sarah Williams',
        role: 'Skilled Worker, Australia',
        image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=400&auto=format&fit=crop',
        icon: '/img/testimonial/icon.png',
        stars: 5,
        feedback: "The migration process to Australia seemed daunting until I met the consultants at WanderPassage. They handled my profile evaluation and job assistance with utmost professionalism.",
    },
    {
        id: 3,
        name: 'Amina Bello',
        role: 'Undergraduate, UK',
        image: 'https://images.unsplash.com/photo-1589156229687-496a31ad1d1f?q=80&w=400&auto=format&fit=crop',
        icon: '/img/testimonial/icon.png',
        stars: 5,
        feedback: "Getting my UK student visa was so stressful before I found WanderPassage. They simplified everything and kept me informed at every step. Highly recommended for any student!",
    },
];