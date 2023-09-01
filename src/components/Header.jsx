import { Link } from 'react-router-dom';

//Icons
import { FaChevronDown } from 'react-icons/fa';
import { AiFillCloud } from 'react-icons/ai';
import { ImMobile } from 'react-icons/im';
import { MdOutlineWeb } from 'react-icons/md';
import { SiTmobile } from 'react-icons/si';

//Logo
import Logo from '../assets/images/logo/Logo.png';

//React Hooks
import { useEffect, useState,useRef } from 'react';

const Header = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    const handleOutsideClick = (e) => {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
            setDropdownOpen(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);



    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="row">
                <div className="logo">
                    <Link to="/">
                        <img src={Logo} alt="logo" />
                    </Link>
                </div>
                <div className="navBarArea">
                    <nav className="navBar">
                        <ul className="navList">
                            <li className="listItem">
                                <Link to="/" className='listItemElement'>WordPress</Link>
                            </li>
                            <li className="listItem">
                                <Link to="/" className='listItemElement'>Website Builder</Link>
                            </li>
                            <li className="listItem">
                                <Link to="/"
                                    className='listItemElement'
                                    onClick={toggleDropdown}>
                                    Hosting
                                    <FaChevronDown className={`chevron ${dropdownOpen ? 'rotated' : ''}`} />
                                </Link>
                                {dropdownOpen && (
                                    <ul className="dropDown" ref={dropdownRef}>
                                        <div className="figure"></div>
                                        <li className="dropDownItem">
                                            <Link to="/">
                                                <div className="itemBox">
                                                    <div className="icon">
                                                        <MdOutlineWeb />
                                                    </div>
                                                    <div className="letterBox">
                                                        <p>Web Hosting</p>
                                                        <span>
                                                            For small to medium websites.
                                                        </span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="dropDownItem">
                                            <Link to="/">
                                                <div className="itemBox">
                                                    <div className="icon">
                                                        <AiFillCloud />
                                                    </div>
                                                    <div className="letterBox">
                                                        <p>
                                                            Cloud Hosting
                                                        </p>
                                                        <span>
                                                            For large scale projects.
                                                        </span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="dropDownItem">
                                            <Link to="/">
                                                <div className="itemBox">
                                                    <div className="icon">
                                                        <ImMobile />
                                                    </div>
                                                    <div className="letterBox">
                                                        <p>
                                                            VPS Hosting
                                                        </p>
                                                        <span>
                                                            Dedicated resources to scale.
                                                        </span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="dropDownItem">
                                            <Link to="/">
                                                <div className="itemBox">
                                                    <div className="icon">
                                                        < SiTmobile />
                                                    </div>
                                                    <div className="letterBox">
                                                        <p>
                                                            Titan Email Hosting
                                                        </p>
                                                        <span>
                                                            Promote your business with every outreach.
                                                        </span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                    </ul>
                                )}
                            </li>
                            <li className="listItem">
                                <Link to="/" className='listItemElement'>Pro</Link>
                            </li>
                            <li className="listItem">
                                <Link to="/" className='listItemElement'>Domains</Link>
                            </li>
                            <div className="loginBox">
                                <li className="listItemLogin">
                                    <Link to="/" className='listItemElement'>Log In</Link>
                                </li>
                            </div>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
