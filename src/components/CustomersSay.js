import avatar1 from '../images/avatar-1.png'
import avatar2 from '../images/avatar-2.png'
import avatar3 from '../images/avatar-3.png'
import avatar5 from '../images/avatar-5.png'

const CustomersSay = () => {
    return (
    <section className="testimonials">
        <div className="container">
            <div className="heading">
                <h1>Testimonials</h1>
            </div>
            <div className="root">
                <ul>
                    <li>
                        <figure>
                            <figcaption>
                                <div className="figure_img">
                                    <img alt="John" src={avatar5}/>
                                </div>
                                <div>
                                    <div>John</div>
                                </div>
                            </figcaption>
                            <blockquote>
                                <p>Great food.</p>
                            </blockquote>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <figcaption>
                                <div className="figure_img">
                                    <img alt="Sheryl" src={avatar1}/>
                                </div>
                                <div>
                                    <div>Sheryl</div>
                                </div>
                            </figcaption>
                            <blockquote>
                                <p>Highly recommend.</p>
                            </blockquote>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <figcaption>
                                <div className="figure_img">
                                    <img alt="Julia" src={avatar2}/>
                                </div>
                                <div>
                                    <div>Julia</div>
                                </div>
                            </figcaption>
                            <blockquote>
                                <p>Best food in Chicago.</p>
                            </blockquote>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <figcaption>
                                <div className="figure_img">
                                    <img alt="Sam" src={avatar3}/>
                                </div>
                                <div>
                                    <div>Sam</div>
                                </div>
                            </figcaption>
                            <blockquote>
                                <p>Great restaurant.</p>
                            </blockquote>
                        </figure>
                    </li>
                </ul>
            </div>
        </div>
    </section>
    );
};
export default CustomersSay;