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
                                style={{ marginBottom: '20px' }}
                            >
                                Study Abroad <br /> Consultants in Nigeria
                            </motion.h1>
                            <motion.p
                                className="text-white mb-5"
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                                style={{ opacity: '0.9', maxWidth: '650px' }}
                            >
                                At WanderPassage Travels and Tours, our experienced study abroad consultants are dedicated to helping you achieve your international education dreams. Based in Nigeria, our expert advisors provide end-to-end guidance, from university selection to visa processing and pre-departure support.
                            </motion.p>
                            <motion.div
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.8 }}
                                className="hero-button"
                                style={{ marginTop: '0', display: 'flex', gap: '15px', flexWrap: 'wrap' }}
                            >
                                <Link to="/student-login" className="theme-btn hover-white">
                                    <span>
                                        Apply Now
                                        <i className="fa-solid fa-arrow-right-long" />
                                    </span>
                                </Link>
                                <button
                                    onClick={() => window.dispatchEvent(new CustomEvent('toggle-consultation-modal'))}
                                    className="theme-btn bg-white"
                                >
                                    <span>
                                        Book Consultation
                                        <i className="fa-solid fa-arrow-right-long" />
                                    </span>
                                </button>
                            </motion.div>
                        </div>
                    </div>
                    <div className="col-lg-5 d-none d-lg-block">
                        <motion.div
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="hero-right-image"
                            style={{ padding: '20px' }}
                        >
                            <img
                                src="/img/students.jpg"
                                alt="Two students laughing"
                                style={{
                                    objectFit: 'cover',
                                    borderRadius: '15px',
                                    border: '8px solid rgba(255,255,255,0.2)',
                                    boxShadow: '0 15px 35px rgba(0,0,0,0.4)',
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
