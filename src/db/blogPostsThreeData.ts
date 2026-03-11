export interface BlogPostDataType {
    id: number;
    date: {
        day: string;
        month: string;
        year: string
    };
    image: string;
    author: string;
    category: string;
    title: string;
    link: string;
    delay: string;
    description: string;
}


export const blogPostsThreeData: BlogPostDataType[] = [
    {
        id: 1,
        date: { day: '17', month: 'Feb', year: '2025' },
        image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=800&auto=format&fit=crop',
        author: 'Admin',
        category: 'Study Abroad',
        title: 'Top 5 Destination Countries for Study Abroad in 2025',
        link: '/news-details',
        description: '',
        delay: '.3'
    },
    {
        id: 2,
        date: { day: '20', month: 'May', year: '2025' },
        image: 'https://images.unsplash.com/photo-1517090504586-fde19ea6066f?q=80&w=800&auto=format&fit=crop',
        author: 'Admin',
        category: 'Immigration',
        title: 'Understanding the Express Entry Process for Canada',
        link: '/news-details',
        description: '',
        delay: '.3'
    },
    {
        id: 3,
        date: { day: '10', month: 'Feb', year: '2025' },
        image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=800&auto=format&fit=crop',
        author: 'Admin',
        category: 'Visa Guide',
        title: 'UK Student Visa: A Step-by-Step Guide for Students',
        link: '/news-details',
        description: '',
        delay: '.3'
    },
    {
        id: 4,
        date: { day: '20', month: 'May', year: '2025' },
        image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=800&auto=format&fit=crop',
        author: 'Admin',
        category: 'Skilled Migration',
        title: 'Why Australia is the Choice for Skilled Workers',
        link: '/news-details',
        description: '',
        delay: '.3'
    },
    {
        id: 5,
        date: { day: '10', month: 'Feb', year: '2025' },
        image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=800&auto=format&fit=crop',
        author: 'Admin',
        category: 'Europe',
        title: 'Most Affordable European Countries for Education',
        link: '/news-details',
        description: '',
        delay: '.3'
    },
    {
        id: 6,
        date: { day: '20', month: 'May', year: '2025' },
        image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop',
        author: 'Admin',
        category: 'Test Prep',
        title: 'How to Prepare for English Proficiency Tests',
        link: '/news-details',
        description: '',
        delay: '.3'
    },
];