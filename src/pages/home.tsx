import AboutThree from "@/components/sections/about/aboutThree"
import AchievementTwo from "@/components/sections/achievements/achievementTwo"
import BlogsThree from "@/components/sections/blogs/blogsThree"
import HeroThree from "@/components/sections/heros/heroThree"
import PartnersOne from "@/components/sections/partners/partnersOne"
import ProjectsThree from "@/components/sections/projects/projectsThree"
import ServicesThree from "@/components/sections/services/servicesThree"
import NewsLetterTwo from "@/components/sections/newsLetterTwo"
import TestimonialThree from "@/components/sections/testimonials/testimonialThree"
import FaqHomeThree from "@/components/sections/faqHomeThree"

import ImmigrationDestinations from "@/components/sections/destinations/immigrationDestinations"
import MigrationCategory from "@/components/sections/migration/migrationCategory"

const Home = () => {
  return (
    <>
      <HeroThree />
      <AboutThree />
      <PartnersOne className="mt-80 mb-80 border-top" />
      <ServicesThree />
      <NewsLetterTwo />
      <ProjectsThree />
      <MigrationCategory />
      <ImmigrationDestinations />
      <AchievementTwo achievementWrapperClass="style-2" className="section-bg-2" />
      <TestimonialThree />
      <FaqHomeThree />
      <BlogsThree />
    </>
  )
}

export default Home