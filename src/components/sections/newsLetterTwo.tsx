import { Link } from "react-router-dom"
import { motion } from "motion/react"

const NewsLetterTwo = () => {
    return (
        <section className="counseling-cta-section section-padding fix bg-cover" style={{ backgroundColor: 'var(--theme)', position: 'relative', zIndex: '2' }}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="cta-content">
                            <motion.span
                                className="subtitle text-white mb-3"
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                style={{ display: 'block', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', opacity: '0.9' }}
                            >
                                WE ARE READY TO HELP YOU
                            </motion.span>
                            <motion.h2
                                className="text-white mb-4"
                                initial={{ y: 30, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                style={{ fontSize: '42px', fontWeight: '800', lineHeight: '1.2' }}
                            >
                                Free Counseling
                            </motion.h2>
                            <motion.p
                                className="text-white mb-4"
                                initial={{ y: 30, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                style={{ fontSize: '18px', opacity: '0.9', lineHeight: '1.7' }}
                            >
                                Our expert counselors will guide you through the entire process—be it selecting the right course, university, visa requirements, or understanding cultural nuances. With tailored advice based on your goals and aspirations, we ensure that you receive the support you need to take the next step confidently. Reach out today and start your journey with a clear direction!
                            </motion.p>
                            <motion.div
                                initial={{ y: 30, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                            >
                                <Link to="/contact" className="theme-btn bg-white">
                                    <span>
                                        Book A Consultation
                                        <i className="fa-solid fa-arrow-right-long" />
                                    </span>
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                    <div className="col-lg-6 mt-5 mt-lg-0">
                        <motion.div
                            className="cta-image text-center"
                            initial={{ x: 50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <img
                                src="/img/about/06.png"
                                alt="Counseling Image"
                                style={{
                                    width: '100%',
                                    maxWidth: '550px',
                                    borderRadius: '20px',
                                    border: '10px solid rgba(255,255,255,0.1)',
                                    boxShadow: '0 15px 35px rgba(0,0,0,0.2)'
                                }}
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NewsLetterTwo