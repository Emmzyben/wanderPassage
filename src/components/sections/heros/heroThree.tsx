import { motion } from "motion/react"
import { Link } from "react-router-dom";

const HeroThree = () => {
    return (
        <section className="hero-section hero-3" style={{ display: 'flex', alignItems: 'center', overflow: 'hidden', position: 'relative' }}>
            <div
                className="hero-image bg-cover"
                style={{ backgroundImage: `url('/img/hero/hero-5.jpg')` }}
            />
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7">
                        <div className="hero-content" style={{ padding: '0px' }}>
                            <motion.h6
                                className="text-white mb-3"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                style={{
                                    backgroundColor: 'var(--theme)',
                                    display: 'inline-block',
                                    padding: '6px 16px',
                                    borderRadius: '4px',
                                    fontSize: '14px',
                                    fontWeight: '600',
                                    textTransform: 'uppercase'
                                }}
                            >
                                Trusted Overseas Education Consultants
                            </motion.h6>
                            <motion.h1
                                className="text-white"
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                style={{ lineHeight: '1.2', marginBottom: '20px', fontSize: '56px' }}
                            >
                                Study Abroad <br /> Consultants in Nigeria
                            </motion.h1>
                            <motion.p
                                className="text-white mb-5"
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                                style={{ fontSize: '18px', opacity: '0.9', maxWidth: '650px', lineHeight: '1.6' }}
                            >
                                At Wander Passage Travels and Tours, our experienced study abroad consultants are dedicated to helping you achieve your international education dreams. Based in Nigeria, our expert advisors provide end-to-end guidance, from university selection to visa processing and pre-departure support.
                            </motion.p>
                            <motion.div
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.8 }}
                                className="hero-button"
                                style={{ marginTop: '0', display: 'flex', gap: '15px', flexWrap: 'wrap' }}
                            >
                                <Link to="/contact" className="theme-btn hover-white">
                                    <span>
                                        Apply Now
                                        <i className="fa-solid fa-arrow-right-long" />
                                    </span>
                                </Link>
                                <Link to="/contact" className="theme-btn bg-white">
                                    <span>
                                        Book Consultation
                                        <i className="fa-solid fa-arrow-right-long" />
                                    </span>
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <motion.div
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="hero-right-image"
                            style={{ padding: '20px' }}
                        >
                            <img
                                src="/img/hero/hero-11.jpg"
                                alt="Study Abroad Students"
                                style={{
                                    width: '110%',
                                    height: '350px',
                                    maxHeight: '350px',
                                    borderRadius: '15px',
                                    border: '8px solid rgba(255,255,255,0.2)',
                                    boxShadow: '0 15px 35px rgba(0,0,0,0.4)',
                                    margin: '0 auto'
                                }}
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default HeroThree
