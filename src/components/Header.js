import Logo from '../images/logo.png'
import Nav from './Nav'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <Link to="/"><img src={Logo} alt="Logo"></img></Link>
            <Nav/>
        </header>
    );
};
export default Header;