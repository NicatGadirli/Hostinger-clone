//Icons
import { FaCheck } from 'react-icons/fa';
import { AiOutlineInfoCircle } from 'react-icons/ai';


const Hosting = () => {
    return (
        <section className="hosting">
            <div className="container">
                <div className="row">
                    <div className="firstCard">
                        <ul className="cardList">
                            <li className="listItem">
                                <div>
                                    <FaCheck className="check" />
                                    <strong>Free</strong>
                                    Domain ($9.99 value)
                                </div>
                            </li>
                            <li className="listItem">
                                <div>
                                    <FaCheck className="check" />
                                    <strong>Free</strong>
                                    Email
                                </div>
                                <div>
                                    <AiOutlineInfoCircle className='info' />
                                </div>
                            </li>
                            <li className="listItem">
                                <div>
                                    <FaCheck className="check" />
                                    <strong>eCommerce</strong>
                                    Features
                                </div>
                                <div>
                                    <AiOutlineInfoCircle className='info' />
                                </div>
                            </li>
                            <li className="listItem">
                                <div>
                                    <FaCheck className="check" />
                                    <strong>Marketing</strong>
                                    Integrations
                                </div>
                                <div>
                                    <AiOutlineInfoCircle className='info' />
                                </div>
                            </li>
                            <li className="listItem">
                                <div>
                                    <FaCheck className="check" />
                                    <strong>24/7</strong>
                                    Customer Support
                                </div>
                                <div>
                                    <AiOutlineInfoCircle className='info' />
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="secondCard">
                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hosting