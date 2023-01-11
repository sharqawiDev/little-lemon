import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';

test('Renders the BookingForm heading', () => {
    render(<BookingForm times={["17:00","18:00","19:00","20:00","21:00"]} />);
    const headingElement = screen.getByLabelText("Choose time");
    expect(headingElement).toBeInTheDocument();
    //expect(times()).toBe("17:00,18:00,19:00,20:00,21:00");
})