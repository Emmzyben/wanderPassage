import PageTitle from "@/components/sections/pageTitle"

const PrivacyPolicy = () => {
    return (
        <>
            <PageTitle
                title="Privacy Policy"
                currentPage="Privacy Policy"
                backgroundImage="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1920&auto=format&fit=crop"
            />
            <section className="privacy-policy-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="policy-content" style={{ lineHeight: '1.8', color: 'var(--text)' }}>
                                <h2 style={{ marginBottom: '20px', color: 'var(--header)' }}>Privacy Policy</h2>
                                <p>Last updated: March 11, 2026</p>
                                
                                <h4 style={{ marginTop: '30px', marginBottom: '15px', color: 'var(--header)' }}>1. Introduction</h4>
                                <p>WanderPassage ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, and disclosed by WanderPassage.</p>

                                <h4 style={{ marginTop: '30px', marginBottom: '15px', color: 'var(--header)' }}>2. Information We Collect</h4>
                                <p>We collect information that you provide directly to us when you register for an account, use our portal, or communicate with us. This includes:</p>
                                <ul>
                                    <li>Name, email address, and phone number</li>
                                    <li>Educational background and transcripts</li>
                                    <li>Passport details and visa history</li>
                                    <li>Any other information you choose to provide in support of your application</li>
                                </ul>

                                <h4 style={{ marginTop: '30px', marginBottom: '15px', color: 'var(--header)' }}>3. How We Use Your Information</h4>
                                <p>We use the information we collect to:</p>
                                <ul>
                                    <li>Process your study abroad applications</li>
                                    <li>Provide visa guidance and travel assistance</li>
                                    <li>Communicate with you about your application status</li>
                                    <li>Improve our services and portal functionality</li>
                                </ul>

                                <h4 style={{ marginTop: '30px', marginBottom: '15px', color: 'var(--header)' }}>4. Sharing Your Information</h4>
                                <p>We may share your information with third parties only in the following circumstances:</p>
                                <ul>
                                    <li>With educational institutions for application processing</li>
                                    <li>With visa processing centers or government agencies as required for your application</li>
                                    <li>With service providers who perform services on our behalf</li>
                                    <li>When required by law or to protect our rights</li>
                                </ul>

                                <h4 style={{ marginTop: '30px', marginBottom: '15px', color: 'var(--header)' }}>5. Security</h4>
                                <p>We implement appropriate technical and organizational measures to protect the security of your personal information. However, please note that no method of transmission over the Internet is 100% secure.</p>

                                <h4 style={{ marginTop: '30px', marginBottom: '15px', color: 'var(--header)' }}>6. Your Choices</h4>
                                <p>You may access, update, or delete your account information at any time by logging into your student portal. You may also contact us to exercise your data protection rights.</p>

                                <h4 style={{ marginTop: '30px', marginBottom: '15px', color: 'var(--header)' }}>7. Contact Us</h4>
                                <p>If you have any questions about this Privacy Policy, please contact us at support@wanderpassage.com.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PrivacyPolicy
