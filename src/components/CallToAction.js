import { Link } from "react-router-dom";
import restaurantfood from '../images/restauranfood.png'

const CallToAction = () => {
    return (
        <section className="calltoaction">
            <div className="container">
                <div className="root">
                <div className="left">
                    <div>
                        <h1>Little Lemon</h1>
                        <h2>Chicago</h2>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <Link to="/booking" className="btn">Reserve a Table</Link>
                    </div>
                </div>
                <div className="right">
                    <img src={restaurantfood} alt="Restaurant food"/>
                </div>
                </div>
            </div>
        </section>
    );
};
export default CallToAction;