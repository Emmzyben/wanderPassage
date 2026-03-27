import { menuData, MenuItemDataType, menuDataAuthenticated, menuDataAdmin } from "@/db/menuData";
import { Fragment, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { menuDataSingleHomePage } from "@/db/menuDataSingleHomePage";
import { useAuth } from "@/context/AuthContext";

function Navbar() {
    const { user, logout } = useAuth()
    const pathName = useLocation().pathname
    const [data, setData] = useState<MenuItemDataType[]>([])

    useEffect(() => {
        if (pathName === '/home-one-single' || pathName === '/home-two-single' || pathName === '/home-three-single' || pathName === '/home-four-single') {
            setData(menuDataSingleHomePage)
        } else if (user) {
            setData(user.role === 'admin' ? menuDataAdmin : menuDataAuthenticated)
        } else {
            setData(menuData)
        }
    }, [pathName, user]) // Included dependencies

    const handleLinkClick = (e: React.MouseEvent, link: string) => {
        if (link === '#logout') {
            e.preventDefault();
            logout();
        }
    }

    return (
        <ul>
            {data.map(({ link, title, megamenu, submenu, countrymenu }, index) => (
                <li key={index} className={`${megamenu ? 'menu-thumb' : ''} ${submenu || countrymenu ? 'has-dropdown' : ''} ${pathName === link ? 'active' : ''}`}>
                    <Link to={link} onClick={(e) => handleLinkClick(e, link)}>
                        {title}{' '}
                        {
                            megamenu || submenu || countrymenu ? <i className="fas fa-angle-down" /> : ''
                        }
                    </Link>
                    {
                        megamenu?.length &&
                        <ul className="submenu has-homemenu">
                            <li className="homemenu-items">
                                {
                                    megamenu.map(({ image, links, title }, index) => (
                                        <div key={index} className="homemenu">
                                            <div className="homemenu-thumb">
                                                <img src={image} alt="img" />
                                                <div className="demo-button">
                                                    {
                                                        links.map(({ link, title }, ind) => (
                                                            <Link key={ind} to={link} className="theme-btn">
                                                                <span>{title}</span>
                                                            </Link>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                            <div className="homemenu-content text-center">
                                                <h4 className="homemenu-title">
                                                    {title}
                                                </h4>
                                            </div>
                                        </div>
                                    ))
                                }
                            </li>
                        </ul>
                    }
                    {
                        submenu?.length &&
                        <ul className="submenu">
                            {
                                submenu.map((dropdown, ind) => {
                                    return (
                                        <Fragment key={ind}>
                                            {
                                                dropdown.submenu ?
                                                    <li className="has-dropdown">
                                                        <Link to="#">
                                                            {dropdown.title}
                                                            {' '}<i className="fas fa-angle-down" />
                                                        </Link>
                                                        <ul className="submenu">
                                                            {
                                                                dropdown.submenu.map((subDropdown, index) =>
                                                                    <li key={index}><Link to={subDropdown.link}>{subDropdown.title}</Link></li>
                                                                )
                                                            }
                                                        </ul>
                                                    </li>
                                                    :
                                                    <li ><Link to={dropdown.link}>{dropdown.title}</Link></li>
                                            }
                                        </Fragment>
                                    )
                                })
                            }
                        </ul>
                    }
                    {
                        countrymenu?.length &&
                        <ul className="submenu country-dropdown">
                            <li className="country-grid-wrapper">
                                <div className="country-grid">
                                    {countrymenu.map((country, ind) => (
                                        <Link key={ind} to={country.link} className="country-item">
                                            <img src={country.flag} alt={country.name} className="country-flag" />
                                            <span className="country-name">{country.name}</span>
                                        </Link>
                                    ))}
                                </div>
                            </li>
                        </ul>
                    }
                </li >
            ))
            }
        </ul >
    );
}

export default Navbar;
