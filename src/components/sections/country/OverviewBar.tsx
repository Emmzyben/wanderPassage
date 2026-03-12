import React from 'react';

interface OverviewItem {
    label: string;
    value: string;
    icon: string;
}

interface OverviewBarProps {
    items: OverviewItem[];
}

const OverviewBar: React.FC<OverviewBarProps> = ({ items }) => {
    return (
        <section className="overview-section">
            <div className="container">
                <div className="overview-bar">
                    {items.map((item, idx) => (
                        <div key={idx} className="overview-item">
                            <i className={`fa-solid ${item.icon}`}></i>
                            <div className="details">
                                <span>{item.label}</span>
                                <strong>{item.value}</strong>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OverviewBar;
