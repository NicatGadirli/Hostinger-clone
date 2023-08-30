//Section Image
import handmade from "../../assets/images/photos/handmade-ceramics-2x-521363.webp"

//Icons
import { BsCheck } from 'react-icons/bs';
import { AiOutlineInfoCircle } from 'react-icons/ai';

const Hero = () => {
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
                                <div className="first">
                                    <BsCheck />
                                    24/7 Customer Support
                                </div>                                <div className="first">
                                    <BsCheck />
                                    Free Domain
                                    <AiOutlineInfoCircle />
                                </div>                                <div className="first">
                                    <BsCheck />
                                    eCommerce Features
                                    <AiOutlineInfoCircle />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero