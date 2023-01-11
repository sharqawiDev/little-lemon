import Logo from '../images/logo_footer.png'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
          <div className="container">
            <div className="left">
                <img src={Logo} alt="Footer Logo"/>
            </div>
            <div className="right">
              <div>
                <h3>Doormat Navigation</h3>
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/booking">About</Link></li>
                  <li><Link to="/booking">Menu</Link></li>
                  <li><Link to="/booking">Reservations</Link></li>
                  <li><Link to="/booking">Order Online</Link></li>
                  <li><Link to="/booking">Login</Link></li>
                </ul>
              </div>
              <div>
                <h3>Contact</h3>
                <ul>
                  <li><Link to="/booking">Address</Link></li>
                  <li><Link to="/booking">Phone number</Link></li>
                  <li><Link to="/booking">Email</Link></li>
                </ul>
              </div>
              <div>
                <h3>Social Media Links</h3>
                <ul>
                  <li><Link to="/booking">Address</Link></li>
                  <li><Link to="/booking">Phone number</Link></li>
                  <li><Link to="/booking">Email</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
    );
  };
  export default Footer;