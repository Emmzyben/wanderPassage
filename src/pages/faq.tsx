import FaqHomeFour from "@/components/sections/faqHomeFour"
import PageTitle from "@/components/sections/pageTitle"

const Faq = () => {
    return (
        <>
            <PageTitle
                currentPage="Faq"
                title="Faq"
                backgroundImage="https://images.unsplash.com/photo-1521791136366-c87cb7309aef?auto=format&fit=crop&q=80&w=1920"
            />
            <FaqHomeFour />
        </>
    )
}

export default Faq