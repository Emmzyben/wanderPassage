import { motion } from "motion/react"

const NewsLetterTwo = () => {
    return (
        <section className="counseling-cta-section section-padding fix" style={{ backgroundColor: 'var(--theme)', position: 'relative', zIndex: '2' }}>
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
                                className="text-white mb-3"
                                initial={{ y: 30, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                style={{ fontWeight: '800', lineHeight: '1.2' }}
                            >
                                Free Counseling
                            </motion.h2>
                            <motion.p
                                className="text-white mb-3"
                                initial={{ y: 30, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                style={{ opacity: '0.9', lineHeight: '1.7' }}
                            >
                                Our expert counselors will guide you through the entire process, be it selecting the right course, university, visa requirements, or understanding cultural nuances. With tailored advice based on your goals and aspirations, we ensure that you receive the support you need to take the next step confidently. Reach out today and start your journey with a clear direction!
                            </motion.p>
                            <motion.div
                                initial={{ y: 30, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                            >
                                <button
                                    onClick={() => window.dispatchEvent(new CustomEvent('toggle-consultation-modal'))}
                                    className="theme-btn bg-white"
                                >
                                    <span>
                                        Book A Consultation
                                        <i className="fa-solid fa-arrow-right-long" />
                                    </span>
                                </button>
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
                                src="/img/counsel.jpg"
                                alt="Counseling Image"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NewsLetterTwo