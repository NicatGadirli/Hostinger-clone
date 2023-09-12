import { GrStar } from 'react-icons/gr';
import { Link } from 'react-router-dom';

const Evaluations = () => {
    return (
        <section className="evaluations">
            <div className="container">
                <div className="row">
                    <div className="left">
                        <Link>
                            <div className="top">
                                <GrStar />
                                <b>Trustpilot</b>
                            </div>
                            <div className="middle">
                                <div className="iconBox">
                                    <GrStar />
                                </div>                                <div className="iconBox">
                                    <GrStar />
                                </div>                                <div className="iconBox">
                                    <GrStar />
                                </div>                                <div className="iconBox">
                                    <GrStar />
                                </div>
                                <div className="iconBox">
                                    <GrStar />
                                </div>
                            </div>
                            <div className="bottom">
                                <span>
                                    TrustScore
                                    <p>4.6 | 19,425</p>
                                    reviews
                                </span>
                            </div>
                        </Link>
                    </div>
                    <div className="right">
                        <strong>Google</strong>
                        <div className="starBox">
                            <GrStar />
                            <GrStar />
                            <GrStar />
                            <GrStar />
                            <GrStar />
                        </div>
                        <div className="starinfo">
                            <span>Rating:
                                <p>4.8/5|1,237</p>
                                reviews
                            </span>
                        </div>
                    </div>
                </div>
                <div className="contentBox">
                    <h2>Easy to Start, Easy to Scale</h2>
                    <p>Try now. It’s risk free with a 30-day money-back guarantee.</p>
                </div>
            </div>
        </section>
    )
}

export default Evaluations