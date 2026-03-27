import { menuData, MenuItemDataType, SubMenuDataType, menuDataAuthenticated, menuDataAdmin } from '@/db/menuData';
import { MouseEvent, useState } from 'react';
import AnimateHeight from 'react-animate-height';
import { Link } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';

const MobileNavBar = ({ onClose }: { onClose: () => void }) => {
    const { user, logout } = useAuth();
    const [openIndexes, setOpenIndexes] = useState<number[]>([]);

    const toggleSubmenu = (e: MouseEvent, index: number) => {
        e.preventDefault();
        setOpenIndexes((prev) =>
            prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
        );
    };

    const handleLogout = (e: MouseEvent) => {
        e.preventDefault();
        logout();
        onClose();
    };

    const displayData = user 
        ? (user.role === 'admin' ? menuDataAdmin : menuDataAuthenticated) 
        : menuData;

    return (
        <div className='mobile-menu-wrapper'>
            {displayData.map((item, index) => {
                const isOpen = openIndexes.includes(index);
                const isLogout = item.link === '#logout';

                return (
                    <MenuItem
                        key={index}
                        item={item}
                        index={index}
                        toggleSubmenu={toggleSubmenu}
                        isOpen={isOpen}
                        onClose={onClose}
                        onLogout={isLogout ? handleLogout : undefined}
                    />
                );
            })}
        </div>
    );
};

const MenuItem = ({ item, index, toggleSubmenu, isOpen, onClose, onLogout }: {
    item: MenuItemDataType;
    index: number;
    isOpen: boolean;
    toggleSubmenu: (e: MouseEvent, index: number) => void;
    onClose: () => void;
    onLogout?: (e: MouseEvent) => void;
}) => {
    const hasChildren = !!(item.megamenu?.length || item.submenu?.length || item.countrymenu?.length);

    return (
        <div className={`mm-item ${isOpen ? 'is-open' : ''}`}>
            <div className="mm-link-row">
                <Link to={item.link === '#' ? '#' : item.link} onClick={onLogout ? onLogout : (item.link === '#' ? (e) => toggleSubmenu(e, index) : onClose)}>
                    {item.title}
                </Link>
                {hasChildren && (
                    <button className="mm-toggle" onClick={(e) => toggleSubmenu(e, index)} aria-label="Toggle Submenu">
                        <i className={`fa-solid fa-chevron-right ${isOpen ? 'rotate-90' : ''}`}></i>
                    </button>
                )}
            </div>

            {item.megamenu?.length && (
                <AnimateHeight duration={350} height={isOpen ? 'auto' : 0}>
                    <div className="mm-sub-wrapper">
                        {item.megamenu.map((mega) => (
                            <div key={mega.title} className="mm-mega-box">
                                <h5 className="mm-mega-title">{mega.title}</h5>
                                <div className="mm-nested-links">
                                    {mega.links.map(link => (
                                        <Link key={link.link} to={link.link} onClick={onClose}>
                                            {link.title}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </AnimateHeight>
            )}

            {item.submenu?.length && (
                <AnimateHeight duration={350} height={isOpen ? 'auto' : 0}>
                    <div className="mm-sub-wrapper">
                        <Submenu submenu={item.submenu} onClose={onClose} />
                    </div>
                </AnimateHeight>
            )}

            {item.countrymenu?.length && (
                <AnimateHeight duration={350} height={isOpen ? 'auto' : 0}>
                    <div className="mm-country-grid">
                        {item.countrymenu.map((country) => (
                            <Link key={country.name} to={country.link} onClick={onClose} className="mm-country-card">
                                <img src={country.flag} alt={country.name} />
                                <span>{country.name}</span>
                            </Link>
                        ))}
                    </div>
                </AnimateHeight>
            )}
        </div>
    );
};

const Submenu = ({ submenu, onClose }: { submenu: SubMenuDataType[]; onClose: () => void }) => {
    const [openSubIndexes, setOpenSubIndexes] = useState<number[]>([]);

    const toggleNested = (e: MouseEvent, idx: number) => {
        e.preventDefault();
        setOpenSubIndexes(prev => prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]);
    };

    return (
        <div className="mm-nested-list">
            {submenu.map((sub, idx) => {
                const isSubOpen = openSubIndexes.includes(idx);
                const hasNested = !!sub.submenu?.length;
                return (
                    <div key={idx} className="mm-nested-item">
                        <div className="mm-link-row">
                            <Link to={sub.link === '#' ? '#' : sub.link} onClick={sub.link === '#' ? (e) => toggleNested(e, idx) : onClose}>
                                {sub.title}
                            </Link>
                            {hasNested && (
                                <button className="mm-toggle small" onClick={(e) => toggleNested(e, idx)}>
                                    <i className={`fa-solid fa-chevron-right ${isSubOpen ? 'rotate-90' : ''}`}></i>
                                </button>
                            )}
                        </div>
                        {hasNested && (
                            <AnimateHeight duration={300} height={isSubOpen ? 'auto' : 0}>
                                <div className="mm-deep-list">
                                    {sub.submenu!.map(deep => (
                                        <Link key={deep.link} to={deep.link} onClick={onClose}>
                                            {deep.title}
                                        </Link>
                                    ))}
                                </div>
                            </AnimateHeight>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default MobileNavBar;
