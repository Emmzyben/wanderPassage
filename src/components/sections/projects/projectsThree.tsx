import { projectsThreeData } from "@/db/projectsThreeData"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"
import 'swiper/css'
import 'swiper/css/pagination'
import ProjectCard from "./projectCard"
import SectionTitle from "@/components/ui/sectionTitle"

const ProjectsThree = () => {
    return (
        <section id="destinations" className="project-section-3 section-padding pb-0 fix bg-cover" style={{ backgroundImage: 'url("/img/map.webp")' }}>
            <div className="container">
                <div className="section-title-area">
                    <SectionTitle>
                        <SectionTitle.SubTitle style={{ fontWeight: '800', fontSize: '22px' }}>Expert Abroad Consultancy</SectionTitle.SubTitle>
                        <SectionTitle.Title>Choose Your Right Study Destination</SectionTitle.Title>
                    </SectionTitle>
                </div>
                <p className="mt-3 mb-5 wow slideUp" data-delay=".5" style={{ maxWidth: '800px' }}>
                    Find the perfect study destination with our expert foreign study consultancy in Nigeria, ensuring the best opportunities for your global education journey.
                </p>
                <div className="project-wrapper style-2">
                    <Swiper
                        spaceBetween={30}
                        speed={1500}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            el: '.dot-2',
                            clickable: true,
                        }}
                        breakpoints={{
                            1199: { slidesPerView: 4 },
                            991: { slidesPerView: 2 },
                            767: { slidesPerView: 2 },
                            650: { slidesPerView: 2 },
                            575: { slidesPerView: 1 },
                            0: { slidesPerView: 1 },
                        }}
                        modules={[Autoplay, Pagination]}
                    >
                        {projectsThreeData.map((project) => (
                            <SwiperSlide key={project.id}>
                                <ProjectCard project={project} className="style-2" iconCalss="arrow-icon-2" />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="swiper-dot-2 mr-left">
                    <div className="dot-2" />
                </div>
            </div>
        </section >
    )
}

export default ProjectsThree