import SectionTitle from "@/components/ui/sectionTitle";
import { Link } from "react-router-dom";

const destinationData = [
    {
        id: 1,
        country: 'Canada',
        title: 'Immigrate to Canada',
        image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1469&auto=format&fit=crop',
        delay: '.3s'
    },
    {
        id: 2,
        country: 'Australia',
        title: 'Immigrate to Australia',
        image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=1530&auto=format&fit=crop',
        delay: '.5s'
    },
    {
        id: 3,
        country: 'United Kingdom',
        title: 'Immigrate to Uk',
        image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1470&auto=format&fit=crop',
        delay: '.7s'
    },
    {
        id: 4,
        country: 'European Countries',
        title: 'Immigrate to European Countries',
        image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=1470&auto=format&fit=crop',
        delay: '.9s'
    }
];

const ImmigrationDestinations = () => {
    return (
        <section className="destination-section section-padding fix">
            <div className="container">
                <div className="section-title text-center mb-60">
                    <SectionTitle>
                        <SectionTitle.SubTitle>Our Destinations</SectionTitle.SubTitle>
                        <SectionTitle.Title>Find Your Ideal Immigration Country <br /> With the Best Immigration Consultant</SectionTitle.Title>
                    </SectionTitle>
                </div>
                <div className="row g-4">
                    {destinationData.map((item) => (
                        <div key={item.id} className="col-xl-3 col-lg-4 col-md-6 wow slideUp" data-wow-delay={item.delay}>
                            <div className="destination-card-items">
                                <div className="destination-image bg-cover" style={{ backgroundImage: `url(${item.image})` }}>
                                    <div className="content">
                                        <span>{item.country}</span>
                                        <h5><Link to="/contact">{item.title}</Link></h5>
                                        <Link to="/contact" className="theme-btn mt-3">
                                            Start Now <i className="fa-solid fa-arrow-right-long" />
                                        </Link>
                                    </div>
                                    <div className="image-overlay"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ImmigrationDestinations;
