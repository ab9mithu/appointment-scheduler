import React, { useState } from 'react';

const maxAllowedDate = new Date();
maxAllowedDate.setMonth(maxAllowedDate.getMonth() + 3);
const maxAllowedDateOnly = maxAllowedDate.toISOString().split('T')[0];

const currentDate = new Date();
      const currentDateOnly = currentDate.toISOString().split('T')[0];

const AppointmentScheduler = () => {
  // State to manage selected date and time
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  // Sample data for booked time slots
  const bookedTimeSlots = [
    { date: '2024-01-25', time: '10:00 AM' },
    { date: '2024-01-25', time: '2:30 PM' },
    // Add more booked time slots as needed
  ];

  // Sample available time slots
  const availableTimeSlots = ['10:00 AM', '11:00 AM', '2:30 PM', '3:30 PM'];

  // Function to handle date selection
  const handleDateChange = (event) => {
    const newDate = event.target.value;
    setSelectedDate(newDate);
    setSelectedTime(null); // Reset time when date changes
  };

  // Function to handle time selection
  const handleTimeChange = (event) => {
    const newTime = event.target.value;
    setSelectedTime(newTime);
  };

  const maxAllowedDate = new Date();
  maxAllowedDate.setMonth(maxAllowedDate.getMonth() + 3);
  const maxAllowedDateOnly = maxAllowedDate.toISOString().split('T')[0];

  // Filter out booked time slots from available time slots
  const filteredAvailableTimeSlots = availableTimeSlots.filter(
    (time) => !bookedTimeSlots.find((slot) => slot.date === selectedDate && slot.time === time)
  );

  // Function to handle booking confirmation
  const handleBookingConfirmation = () => {
    if (selectedDate && selectedTime) {
      

      // Customize the date format
      
   
      
      if (selectedDate >= currentDateOnly && selectedDate <= maxAllowedDateOnly) {
       
        const confirmationMessage = `Appointment booked on ${selectedDate} at ${selectedTime}`;
        window.alert(confirmationMessage);
      } else {
        window.alert('Cannot book on a past date or time. Please select a valid date and time.');
      }
    }
  };

  return (
    <div>
      <h2>Appointment Scheduler</h2>

      {/* Date selection */}
      <div>
        <label htmlFor="datePicker">Select Date:</label>
        <input
          type="date"
          id="datePicker"
          onChange={handleDateChange}
          min={currentDateOnly}
          max={maxAllowedDateOnly}
        />
      </div>

      {/* Time selection */}
      {selectedDate && (
        <div>
          <label htmlFor="timePicker">Select Time:</label>
          <select
            id="timePicker"
            onChange={handleTimeChange}
            value={selectedTime || ''}
          >
            <option value="" disabled>Select a time</option>
            {filteredAvailableTimeSlots.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Display available time slots */}
      {selectedDate && selectedTime && (
        <div>
          <p>Selected Date: {selectedDate}</p>
          <p>Selected Time: {selectedTime}</p>

          {/* Button to confirm booking */}
          <button onClick={handleBookingConfirmation}>Book Appointment</button>
        </div>
      )}
    </div>
  );
};

export default AppointmentScheduler;
