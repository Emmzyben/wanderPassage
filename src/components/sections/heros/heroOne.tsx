import { motion } from "motion/react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import 'swiper/css';
import { Link } from "react-router-dom";

interface SlideType {
  id: number;
  image: string;
  title: string;
  heading: string;
  description: string;
  link: string;
}
const slidesData: SlideType[] = [
  {
    id: 1,
    image: '/img/hero/hero-12.jpg',
    title: 'WELCOME TO WANDER PASSAGE',
    heading: 'Navigate Your Path <br /> to Global Excellence',
    description: "Nigeria's leading study abroad consultancy. We provide comprehensive support for your international education journey, from university selection to visa success.",
    link: '/about',
  },
  {
    id: 2,
    image: '/img/hero/hero-7.jpg',
    title: 'YOUR GLOBAL EDUCATION PARTNER',
    heading: 'Unlock Your Future <br /> in Top Universities <br /> Worldwide',
    description: 'Expert guidance for students in Nigeria seeking world-class education in the UK, USA, Canada, and beyond.',
    link: '/service',
  },
];

const HeroOne = () => {
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
        navigation={{
          nextEl: ".array-prev",
          prevEl: ".array-next",
        }}
        modules={[Navigation, EffectFade, Autoplay]}
      >
        {slidesData.map((slide) => (
          <SwiperSlide key={slide.id}>
            {(({ isActive }) => <Card slide={slide} isActive={isActive} />)}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>

  )
}

export default HeroOne

const Card = ({ slide, isActive }: { slide: SlideType; isActive: boolean }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isActive ? 1 : 0 }}
    >
      <div className="hero-image bg-cover" style={{ backgroundImage: `url(${slide.image})` }} />
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-8">
            <div className="hero-content">
              <motion.h6
                initial={{ x: '100%', opacity: 0 }}
                animate={{ x: isActive ? '0' : '100%', opacity: isActive ? 1 : 0 }}
                transition={{
                  duration: .5,
                  delay: 0.3,
                  ease: 'linear',
                }}
              >
                {slide.title}
              </motion.h6>
              <motion.h1
                initial={{ x: '100%', opacity: 0 }}
                animate={{ x: isActive ? '0' : '100%', opacity: isActive ? 1 : 0 }}
                transition={{
                  duration: .5,
                  delay: 0.5,
                  ease: 'linear',
                }}
                dangerouslySetInnerHTML={{ __html: slide.heading }}></motion.h1>
              <motion.p
                initial={{ x: '100%', opacity: 0 }}
                animate={{ x: isActive ? '0' : '100%', opacity: isActive ? 1 : 0 }}
                transition={{
                  duration: .5,
                  delay: 0.7,
                  ease: 'linear',
                }}
              >
                {slide.description}
              </motion.p>
              <motion.div
                initial={{ x: '100%', opacity: 0 }}
                animate={{ x: isActive ? '0' : '100%', opacity: isActive ? 1 : 0 }}
                transition={{
                  duration: .5,
                  delay: 0.9,
                  ease: 'linear',
                }}
                className="hero-button"
              >
                <Link to={slide.link} className="theme-btn theme-color-2">
                  <span>Learn More <i className="fas fa-chevron-right" /></span>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}