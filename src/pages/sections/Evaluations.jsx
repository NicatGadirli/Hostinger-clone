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
                                <GrStar />
                                <GrStar />
                                <GrStar />
                                <GrStar />
                                <GrStar />
                            </div>
                            <div className="bottom">
                                <p>
                                    TrustScore
                                    <strong>4.6 | 19,425</strong>
                                    reviews
                                </p>
                            </div>
                        </Link>
                    </div>
                    <div className="right">
                        <p>Google</p>
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
            </div>
        </section>
    )
}

export default Evaluations