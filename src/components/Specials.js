import { Link } from "react-router-dom";
import greekSalad from '../images/greeksalad.png'
import bruchetta from '../images/bruchetta.png'
import lemonDessert from '../images/lemon dessert.jpg'

const Specials = () => {
    return (
        <section className="articles">
            <div className="container">
                <div className="heading">
                    <h1>This weeks specials!</h1>
                    <Link to="/booking" className="btn">Online Menu</Link>
                </div>
                <div className="cards">
                    <article>
                        <div className="cover">
                            <img src={greekSalad} alt="Order Online"/>
                        </div>
                        <Link to="/booking">
                            <span className="article_link"></span>
                            <h3>Greek salad<span className="price">$12.99</span></h3>
                        </Link>
                        <p>
                        The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.
                        </p>
                        <span className="delivery">Order a delivery<svg width="17" height="11" viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.456 1.72713C14.456 0.8993 13.7058 0.221985 12.7889 0.221985H10.2881V1.72713H12.7889V3.72145L9.88793 6.99513H6.95367V3.23227H3.61928C1.77703 3.23227 0.284889 4.57938 0.284889 6.24256V8.50028H1.95208C1.95208 9.74955 3.06911 10.758 4.45288 10.758C5.83665 10.758 6.95367 9.74955 6.95367 8.50028H10.6882L14.456 4.24825V1.72713ZM4.45288 9.25285C3.9944 9.25285 3.61928 8.91419 3.61928 8.50028H5.28647C5.28647 8.91419 4.91136 9.25285 4.45288 9.25285Z" fill="black"/>
    <path d="M6.95367 0.974548H2.78568V2.47968H6.95367V0.974548Z" fill="black"/>
    <path d="M14.456 6.24255C13.0723 6.24255 11.9552 7.251 11.9552 8.50026C11.9552 9.74952 13.0723 10.758 14.456 10.758C15.8398 10.758 16.9568 9.74952 16.9568 8.50026C16.9568 7.251 15.8398 6.24255 14.456 6.24255ZM14.456 9.25283C13.9976 9.25283 13.6224 8.91417 13.6224 8.50026C13.6224 8.08635 13.9976 7.74769 14.456 7.74769C14.9145 7.74769 15.2896 8.08635 15.2896 8.50026C15.2896 8.91417 14.9145 9.25283 14.456 9.25283Z" fill="black"/>
    </svg>
    </span>
                    </article>
                    <article>
                        <div className="cover">
                            <img src={bruchetta} alt="Book a table"/>
                        </div>
                        <Link to="/booking">
                            <span className="article_link"></span>
                            <h3>Bruchetta<span className="price">$5.99</span></h3>
                        </Link>
                        <p>
                        Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.
                        </p>
                        <span className="delivery">Order a delivery<svg width="17" height="11" viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.456 1.72713C14.456 0.8993 13.7058 0.221985 12.7889 0.221985H10.2881V1.72713H12.7889V3.72145L9.88793 6.99513H6.95367V3.23227H3.61928C1.77703 3.23227 0.284889 4.57938 0.284889 6.24256V8.50028H1.95208C1.95208 9.74955 3.06911 10.758 4.45288 10.758C5.83665 10.758 6.95367 9.74955 6.95367 8.50028H10.6882L14.456 4.24825V1.72713ZM4.45288 9.25285C3.9944 9.25285 3.61928 8.91419 3.61928 8.50028H5.28647C5.28647 8.91419 4.91136 9.25285 4.45288 9.25285Z" fill="black"/>
    <path d="M6.95367 0.974548H2.78568V2.47968H6.95367V0.974548Z" fill="black"/>
    <path d="M14.456 6.24255C13.0723 6.24255 11.9552 7.251 11.9552 8.50026C11.9552 9.74952 13.0723 10.758 14.456 10.758C15.8398 10.758 16.9568 9.74952 16.9568 8.50026C16.9568 7.251 15.8398 6.24255 14.456 6.24255ZM14.456 9.25283C13.9976 9.25283 13.6224 8.91417 13.6224 8.50026C13.6224 8.08635 13.9976 7.74769 14.456 7.74769C14.9145 7.74769 15.2896 8.08635 15.2896 8.50026C15.2896 8.91417 14.9145 9.25283 14.456 9.25283Z" fill="black"/>
    </svg>
    </span>
                    </article>
                    <article>
                        <div className="cover">
                            <img src={lemonDessert} alt="Exterior of restaurant"/>
                        </div>
                        <Link to="/booking">
                            <span className="article_link"></span>
                            <h3>Lemon Dessert<span className="price">$5.00</span></h3>
                        </Link>
                        <p>
                        This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.
                        </p>
                        <span className="delivery">Order a delivery<svg width="17" height="11" viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.456 1.72713C14.456 0.8993 13.7058 0.221985 12.7889 0.221985H10.2881V1.72713H12.7889V3.72145L9.88793 6.99513H6.95367V3.23227H3.61928C1.77703 3.23227 0.284889 4.57938 0.284889 6.24256V8.50028H1.95208C1.95208 9.74955 3.06911 10.758 4.45288 10.758C5.83665 10.758 6.95367 9.74955 6.95367 8.50028H10.6882L14.456 4.24825V1.72713ZM4.45288 9.25285C3.9944 9.25285 3.61928 8.91419 3.61928 8.50028H5.28647C5.28647 8.91419 4.91136 9.25285 4.45288 9.25285Z" fill="black"/>
    <path d="M6.95367 0.974548H2.78568V2.47968H6.95367V0.974548Z" fill="black"/>
    <path d="M14.456 6.24255C13.0723 6.24255 11.9552 7.251 11.9552 8.50026C11.9552 9.74952 13.0723 10.758 14.456 10.758C15.8398 10.758 16.9568 9.74952 16.9568 8.50026C16.9568 7.251 15.8398 6.24255 14.456 6.24255ZM14.456 9.25283C13.9976 9.25283 13.6224 8.91417 13.6224 8.50026C13.6224 8.08635 13.9976 7.74769 14.456 7.74769C14.9145 7.74769 15.2896 8.08635 15.2896 8.50026C15.2896 8.91417 14.9145 9.25283 14.456 9.25283Z" fill="black"/>
    </svg>
    </span>
                    </article>
                </div>
            </div>
        </section>
    );
  };
  export default Specials;