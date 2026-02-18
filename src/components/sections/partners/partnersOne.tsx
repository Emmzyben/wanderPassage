import { partnetsOneData } from "@/db/partnersOneData"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import 'swiper/css';
const PartnersOne = ({ className }: { className?: string }) => {
    return (
        <div className={`brand-section fix section-padding ${className}`}>
            <div className="container">
                <div className="brand-wrapper">
                    <h6 className="text-center wow slideUp" data-delay=".3">Working with Top Universities Around the Globe</h6>
                    <Swiper
                        breakpoints={{
                            1199: {
                                slidesPerView: 7,
                            },
                            991: {
                                slidesPerView: 5,
                            },
                            767: {
                                slidesPerView: 4,
                            },
                            575: {
                                slidesPerView: 3,
                            },
                            0: {
                                slidesPerView: 2,
                            },
                        }}
                        spaceBetween={20}
                        speed={1300}
                        loop
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}
                    >
                        {
                            partnetsOneData.map(({ id, img }) => {
                                return (
                                    <SwiperSlide key={id}>
                                        <div className="brand-image">
                                            <img src={img} alt="university-logo" />
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </div>
            </div>
        </div>

    )
}

export default PartnersOne