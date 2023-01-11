
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/booking">About</Link></li>
                <li><Link to="/booking">Menu</Link></li>
                <li><Link to="/booking">Reservations</Link></li>
                <li><Link to="/booking">Order Online</Link></li>
                <li><Link to="/booking">Login</Link></li>
            </ul>
        </nav>
    );
};
export default Nav;