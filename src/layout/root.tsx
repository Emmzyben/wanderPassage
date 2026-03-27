import Footer from '@/components/sections/footer'
import HeaderThree from '@/components/headers/headerThree'
import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom'
import useAnimation from '@/hooks/useAnimation';
import WhatsAppButton from '@/components/ui/whatsappButton'
import ConsultationModal from '@/components/ui/ConsultationModal'
import { useEffect, useState } from 'react'

const RootLayout = () => {
    useAnimation()
    const { pathname } = useLocation();
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const handleToggleModal = () => setIsModalOpen(true);
        window.addEventListener('toggle-consultation-modal', handleToggleModal);
        return () => window.removeEventListener('toggle-consultation-modal', handleToggleModal);
    }, []);

    const isDashboard = pathname === '/student-portal' || pathname === '/admin-portal';

    return (
        <>
            {!isDashboard && <HeaderThree />}
            <Outlet />
            {!isDashboard && <Footer />}
            {!isDashboard && <WhatsAppButton />}
            <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            <ScrollRestoration />
        </>
    )
}

export default RootLayout