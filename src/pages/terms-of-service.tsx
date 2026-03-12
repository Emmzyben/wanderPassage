import PageTitle from "@/components/sections/pageTitle"

const TermsOfService = () => {
    return (
        <>
            <PageTitle
                title="Terms of Service"
                currentPage="Terms of Service"
                backgroundImage="https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=1920&auto=format&fit=crop"
            />
            <section className="terms-of-service-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="terms-content" style={{ lineHeight: '1.8', color: 'var(--text)' }}>
                                <h2 style={{ marginBottom: '20px', color: 'var(--header)' }}>Terms of Service</h2>
                                <p>Last updated: March 11, 2026</p>

                                <h4 style={{ marginTop: '30px', marginBottom: '15px', color: 'var(--header)' }}>1. Acceptance of Terms</h4>
                                <p>By accessing or using WanderPassage's website and services, you agree to be bound by these Terms of Service. If you do not agree to all of these terms, do not use our services.</p>

                                <h4 style={{ marginTop: '30px', marginBottom: '15px', color: 'var(--header)' }}>2. Description of Service</h4>
                                <p>WanderPassage provides study abroad consultation, visa processing guidance, and student support services. We assist students in applying to educational institutions abroad and navigating the visa application process.</p>

                                <h4 style={{ marginTop: '30px', marginBottom: '15px', color: 'var(--header)' }}>3. User Responsibilities</h4>
                                <p>You are responsible for:</p>
                                <ul>
                                    <li>Providing accurate and complete information in your applications</li>
                                    <li>Maintaining the confidentiality of your portal credentials</li>
                                    <li>Ensuring all documents provided are legitimate and unaltered</li>
                                    <li>Adhering to the deadlines and requirements set by educational institutions and visa authorities</li>
                                </ul>

                                <h4 style={{ marginTop: '30px', marginBottom: '15px', color: 'var(--header)' }}>4. Fees and Payments</h4>
                                <p>Fees for our services are disclosed during the consultation process. All payments must be made according to the agreed schedule. Fees are generally non-refundable unless specified otherwise in writing.</p>

                                <h4 style={{ marginTop: '30px', marginBottom: '15px', color: 'var(--header)' }}>5. No Guarantee of Admission or Visa</h4>
                                <p>While WanderPassage provides expert guidance and support, we do not guarantee admission to any educational institution or the issuance of any visa. These decisions are made solely by the respective institutions and government authorities.</p>

                                <h4 style={{ marginTop: '30px', marginBottom: '15px', color: 'var(--header)' }}>6. Limitation of Liability</h4>
                                <p>To the maximum extent permitted by law, WanderPassage shall not be liable for any indirect, incidental, or consequential damages resulting from your use of our services or the outcome of your applications.</p>

                                <h4 style={{ marginTop: '30px', marginBottom: '15px', color: 'var(--header)' }}>7. Changes to Terms</h4>
                                <p>We reserve the right to modify these Terms of Service at any time. We will notify users of any significant changes by posting the new terms on our website.</p>

                                <h4 style={{ marginTop: '30px', marginBottom: '15px', color: 'var(--header)' }}>8. Contact Us</h4>
                                <p>For any questions regarding these Terms of Service, please contact us at support@wanderpassage.com.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TermsOfService
