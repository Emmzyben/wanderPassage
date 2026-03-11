import SectionTitle from "@/components/ui/sectionTitle";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const achievementData = [
    {
        id: 1,
        icon: '/img/achievement-icon/01.svg',
        count: 2500,
        description: 'Successful Visas',
        delay: '.3',
    },
    {
        id: 2,
        icon: '/img/achievement-icon/02.svg',
        count: 650,
        description: 'Partner Institutions',
        delay: '.5',
    },
    {
        id: 3,
        icon: '/img/achievement-icon/03.svg',
        count: 45,
        description: 'Global Destinations',
        delay: '.7',
    },

];


const AchievementTwo = ({ achievementWrapperClass, className }: { achievementWrapperClass?: string, className?: string }) => {
    const { ref, inView } = useInView({
        threshold: 1,
        triggerOnce: true
    });
    return (
        <section className={`achievement-section-2 fix ${className}`}>
            <div className="container">
                <div className={`achievement-wrapper ${achievementWrapperClass}`}>
                    <SectionTitle className="mb-0">
                        <SectionTitle.SubTitle className="text-white">Our Milestones</SectionTitle.SubTitle>
                        <SectionTitle.Title className="text-white">Navigating Your Path to <br /> Global Excellence</SectionTitle.Title>
                    </SectionTitle>
                    <div className="counter-area" ref={ref}>
                        {achievementData.map((item) => (
                            <div
                                key={item.id}
                                className="counter-items wow slideUp"
                                data-delay={item.delay}
                            >
                                <div className="icon">
                                    <img src={item.icon} alt="icon-img" />
                                </div>
                                <div className="content">
                                    {
                                        inView &&
                                        <h2>
                                            <span className="count"><CountUp end={item.count} /></span>+
                                        </h2>
                                    }
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

    )
}

export default AchievementTwo