import {useReducer} from "react";

function reducer(state, action) {
    if (action.type === 'book') return action.times;
    return state;
}

const Times = ({initializetimes}) => {
    const initialState = ["17:00","18:00","19:00","20:00","21:00"];
    const [state, dispatch] = useReducer(reducer, initializetimes());
    console.log(initializetimes)

    return (
        <>
            {state.map((item, index) => (
                <option key={index}>{item}</option>
            ))}
        </>
    );
};
export default Times;