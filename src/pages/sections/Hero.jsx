//Section Image
import handmade from "../../assets/images/photos/handmade-ceramics-2x-521363.webp"

//Icons
import { FaCheck } from 'react-icons/fa';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { AiFillStar } from 'react-icons/ai';
import { SiAdguard } from 'react-icons/si';

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
    const countdownDuration = 2 * 24 * 60 * 60;

    const [countdown, setCountdown] = useState(countdownDuration);

    useEffect(() => {
        const interval = setInterval(() => {
            if (countdown > 0) {
                setCountdown(countdown - 1);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [countdown]);

    const formatTime = (time) => {
        const days = Math.floor(time / (24 * 60 * 60));
        const hours = Math.floor((time % (24 * 60 * 60)) / (60 * 60));
        const minutes = Math.floor((time % (60 * 60)) / 60);
        const seconds = time % 60;

        return `${days} : ${hours} : ${minutes} : ${seconds} `;
    };


    return (
        <section className='hero'>
            <div className="container">
                <div className="row">
                    <div className="left">
                        <div className="top">
                            <h2>
                                Up to
                                <span>75%</span>
                                off
                                Website Builder
                            </h2>
                            <h1>AI Website Builder – Go Live in 4 Clicks</h1>
                        </div>
                        <div className="middle">
                            <div className="services">
                                <FaCheck className="check" />
                                24/7 Customer Support
                            </div>
                            <div className="services">
                                <FaCheck className="check" />
                                Free Domain
                                <AiOutlineInfoCircle className="info" />
                                <div className="infoBoxFirst infoBox">
                                    Register one free .net, .xyz,
                                    .com, .online, .link, .shop,
                                    .live, .digital, .tech, .space, .website,
                                    .email, .fun, .click, .site, .uno, .in,
                                    .host, .store, .press, .me, .help with
                                    purchase of a new annual plan (1 year or
                                    longer term). Additional terms apply.
                                </div>
                            </div>
                            <div className="services">
                                <FaCheck className="check" />
                                eCommerce Features
                                <AiOutlineInfoCircle className="info" />
                                <div className="infoBoxSecond infoBox">Sell up to 500 products,
                                    manage orders and stocks, set up shipping options,
                                    and enable appointment bookings conveniently in
                                    one place.
                                </div>
                            </div>
                        </div>
                        <div className="bottom">
                            <div className="price">
                                <span className="priceTime">$</span>
                                <span className="priceNum">2.99</span>
                                <span className="priceTime">/mo</span>
                            </div>
                            <div className="month">+ 3 Months Free</div>
                            <div className="countDownBox">
                                {countdown > 0 ? ` ${formatTime(countdown)}` : 'Süre doldu!'}
                            </div>
                            <div className="btnBox">
                                <Link to="/">
                                    <button> Claim Deal </button>
                                </Link>
                                <div className="guard">
                                    <SiAdguard />
                                    <p>30-Day Money-Back Guarantee</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="imgBox">
                            <img src={handmade} alt="handmade" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero

