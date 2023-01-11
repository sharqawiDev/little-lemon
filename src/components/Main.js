import {Routes, Route, useNavigate} from 'react-router-dom'
import Homepage from './Homepage'
import BookingPage from './BookingPage'
import ConfirmedBooking from './ConfirmedBooking';
import {useReducer} from "react";

const Main = () => {
    const navigate = useNavigate();
    const seededRandom = function (seed) {
        var m = 2**35 - 31;
        var a = 185852;
        var s = seed % m;
        return function () {
            return (s = s * a % m) / m;
        };
    }

    const fetchAPI = function(date) {
        let result = [];
        let random = seededRandom(date.getDate());

        for(let i = 17; i <= 23; i++) {
            if(random() < 0.5) {
                result.push(i + ':00');
            }
            if(random() < 0.5) {
                result.push(i + ':30');
            }
        }
        return result;
    };
    const submitAPI = function(formData) {
        return true;
    };


    function updateTimes(state, action) {
        const currentDate = new Date();
        return fetchAPI(currentDate);
    }
    function initializeTimes() {
        const currentDate = new Date();
        return fetchAPI(currentDate);
    }

    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

    const handleChange = () => {
        dispatch(availableTimes);
    }

    function submitForm(formData) {
        if (submitAPI(formData)) {
            navigate("/confirmedBooking")
        }
    }

    return (
        <main>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/booking" element={<BookingPage times={availableTimes} updateTimes={handleChange} submitForm={submitForm} />} />
                <Route path="/confirmedBooking" element={<ConfirmedBooking />} />
            </Routes>
        </main>
    );
  };
  export default Main;