import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules"
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import { Link } from "react-router-dom"
import { motion } from "motion/react"

const heroSlides = [
    {
        image: '/img/hero/hero-7.jpg',
        title: 'Your Future Starts in the Best Global Universities',
        description: "Nigeria's most trusted partner for international education. We bridge the gap to your overseas academic success with expert consulting.",
        link: '/about',
    },
    {
        image: '/img/hero/hero-5.jpg',
        title: 'Seamless Visa Processing & Immigration Services',
        description: 'Navigate complex visa requirements with ease. Our specialists ensure a high success rate for your study and work permit applications.',
        link: '/service',
    },
    {
        image: '/img/hero/hero-9.jpg',
        title: 'Explore New Horizons with Wander Passage',
        description: 'Unlock worldwide opportunities and transform your career. Join thousands of successful students guided by our local Nigerian expertise.',
        link: '/contact',
    },
]
const HeroFour = () => {
    return (
        <section className="hero-section hero-1">
            <div className="array-button">
                <button className="array-prev"><i className="fa fa-arrow-left" /></button>
                <button className="array-next"><i className="fa fa-arrow-right" /></button>
            </div>
            <Swiper
                loop={true}
                slidesPerView={1}
                effect="fade"
                speed={3000}
                autoplay={{
                    delay: 7000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    el: ".dot-2",
                    clickable: true,
                }}
                navigation={{
                    nextEl: ".array-prev",
                    prevEl: ".array-next",
                }}
                modules={[Navigation, Pagination, EffectFade, Autoplay]}
            >
                {heroSlides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        {(({ isActive }) => (
                            <>
                                <div className="hero-image bg-cover" style={{ backgroundImage: `url(${slide.image})` }} />
                                <div className="container">
                                    <div className="row g-4">
                                        <div className="col-lg-8">
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: isActive ? 1 : 0 }}
                                                className="hero-content"
                                            >
                                                <motion.h1
                                                    initial={{ y: 20, opacity: 0 }}
                                                    whileInView={{ y: isActive ? '0' : 20, opacity: isActive ? 1 : 0 }}
                                                    transition={{
                                                        duration: .5,
                                                        delay: 0.3,
                                                        ease: 'linear',
                                                    }}
                                                >
                                                    {slide.title}
                                                </motion.h1>
                                                <motion.p
                                                    initial={{ y: 20, opacity: 0 }}
                                                    whileInView={{ y: isActive ? '0' : 20, opacity: isActive ? 1 : 0 }}
                                                    transition={{
                                                        duration: .5,
                                                        delay: 0.5,
                                                        ease: 'linear',
                                                    }}
                                                    style={{ maxWidth: '820px' }}
                                                >
                                                    {slide.description}
                                                </motion.p>
                                                <motion.div
                                                    initial={{ y: 20, opacity: 0 }}
                                                    whileInView={{ y: isActive ? '0' : 20, opacity: isActive ? 1 : 0 }}
                                                    transition={{
                                                        duration: .5,
                                                        delay: 0.7,
                                                        ease: 'linear',
                                                    }}
                                                    className="hero-button"
                                                >
                                                    <Link to={slide.link} className="theme-btn theme-color-2" data-animation="slideUp" data-delay="1.7">
                                                        <span>Learn More <i className="fas fa-chevron-right" /></span>
                                                    </Link>
                                                </motion.div>
                                            </motion.div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ))}
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>

    )
}

export default HeroFour