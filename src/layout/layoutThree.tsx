import Footer from '@/components/sections/footer'
import HeaderThree from '@/components/headers/headerThree'
import { Outlet, ScrollRestoration } from 'react-router-dom'
import useAnimation from '@/hooks/useAnimation'
import WhatsAppButton from '@/components/ui/whatsappButton'
import ConsultationModal from '@/components/ui/ConsultationModal'
import { useEffect, useState } from 'react'

const LayoutThree = () => {
    useAnimation()
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const handleToggleModal = () => setIsModalOpen(true);
        window.addEventListener('toggle-consultation-modal', handleToggleModal);
        return () => window.removeEventListener('toggle-consultation-modal', handleToggleModal);
    }, []);

    return (
        <>
            <HeaderThree />
            <Outlet />
            <Footer />
            <WhatsAppButton />
            <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            <ScrollRestoration />
        </>
    )
}

export default LayoutThree