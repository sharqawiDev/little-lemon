import {useState} from "react";

const BookingForm = ({times, updateTimes, submitForm}) => {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("17:00");
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState("Birthday");

    const getIsFormValid = () => {
        return (
          date &&
          time &&
          guests >= 0 &&
          occasion
        );
    };

    const clearForm = () => {
        setDate("");
        setGuests(1);
        setOccasion("Birthday");
    };

    const handleSubmit = (e,) => {
        e.preventDefault();
        const data = new FormData(e.target);
        submitForm(data);
        clearForm();
    };

    return (
        <form className="bookingform" onSubmit={handleSubmit}>
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" value={date} onChange={(e) => {setDate(e.target.value); updateTimes();}}/>
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" value={time} onChange={(e) => {setTime(e.target.value);}}>
                {times.map((item, index) => (
                    <option key={index}>{item}</option>
                ))}
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={(e) => {setGuests(e.target.value);}}/>
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" value={occasion} onChange={(e) => {setOccasion(e.target.value);}}>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <input type="submit" className="btn" disabled={!getIsFormValid()} aria-label="On Click" value="Make Your reservation"/>
        </form>
    );
};
export default BookingForm;