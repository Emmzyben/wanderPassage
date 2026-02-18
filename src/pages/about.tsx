import AboutTwo from "@/components/sections/about/aboutTwo"
import MarqueTwo from "@/components/sections/marques/marqueTwo"
import PartnersOne from "@/components/sections/partners/partnersOne"
import ProjectsTwo from "@/components/sections/projects/projectsTwo"
import Offer from "@/components/sections/offer"
import PageTitle from "@/components/sections/pageTitle"
import TeamesThree from "@/components/sections/teames/teamesThree"

const About = () => {
  return (
    <>
      <PageTitle
        title="About Us"
        currentPage="About Us"
        backgroundImage="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1920"
      />
      <AboutTwo />
      <Offer />
      <ProjectsTwo />
      <MarqueTwo className="section-padding" />
      <TeamesThree />
      <PartnersOne />
    </>
  )
}

export default About