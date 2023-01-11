import BookingForm from "./BookingForm";

const BookingPage = ({times, updateTimes, submitForm}) => {
    return (
        <section className="booking">
            <div className="container">
            <div className="heading">
                <h1>Table Reservation</h1>
            </div>
                <BookingForm times={times} updateTimes={updateTimes} submitForm={submitForm} />
            </div>
        </section>
    );
};
export default BookingPage;