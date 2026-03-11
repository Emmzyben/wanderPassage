import AboutTwo from "@/components/sections/about/aboutTwo"
import PartnersOne from "@/components/sections/partners/partnersOne"
import ProjectsThree from "@/components/sections/projects/projectsThree"
import PageTitle from "@/components/sections/pageTitle"

const About = () => {
  return (
    <>
      <PageTitle
        title="About Us"
        currentPage="About Us"
        backgroundImage="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1920"
      />
      <AboutTwo />
      <ProjectsThree />
      <PartnersOne />
    </>
  )
}

export default About