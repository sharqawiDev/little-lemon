import MarioAdrian from '../images/MarioAdrian.png'

const Chicago = () => {
    return (
        <section className="chicago">
            <div className="container">
                <div className="root">
                <div className="left">
                    <div>
                        <h1>Little Lemon</h1>
                        <h2>Chicago</h2>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
                    </div>
                </div>
                <div className="right">
                    <img src={MarioAdrian} alt="Mario and Adrian"/>
                </div>
                </div>
            </div>
        </section>
    );
};
export default Chicago;