import React, { useState, useEffect } from "react";
import { getAllDoctors } from "../services/doctorService";

export default function Appointment() {
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [confirmation, setConfirmation] = useState("");

  // Fetch all doctors
  useEffect(() => {
    getAllDoctors().then((data) => setDoctors(data));
  }, []);

  // Example slots
  const timeSlots = {
    Morning: ["9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM"],
    Afternoon: ["12:00 PM", "12:30 PM", "1:00 PM", "2:00 PM", "3:00 PM"],
    Evening: ["5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM"],
  };

  const handleBook = () => {
    if (!selectedDoctor || !selectedDate || !selectedTime) {
      alert("Please select doctor, date and time.");
      return;
    }
    setConfirmation(
      `Appointment booked with Dr. ${selectedDoctor.name} on ${selectedDate} at ${selectedTime}`
    );
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Book an Appointment</h2>

      {/* Doctor Selection */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {doctors.map((doctor) => (
          <div
            key={doctor._id}
            onClick={() => setSelectedDoctor(doctor)}
            className={`p-4 border rounded-2xl shadow-sm cursor-pointer transition 
              ${selectedDoctor?._id === doctor._id ? "bg-blue-100 border-blue-500" : "hover:bg-gray-100"}
            `}
          >
            <h3 className="font-semibold text-xl">{doctor.name}</h3>
            <p className="text-gray-600">{doctor.specialty}</p>
            <p className="text-gray-500">{doctor.location}</p>
          </div>
        ))}
      </div>

      {/* Slot Booking Section */}
      {selectedDoctor && (
        <div className="mt-8 border-t pt-6">
          <h3 className="text-2xl font-semibold mb-4">
            Select Date & Time with Dr. {selectedDoctor.name}
          </h3>

          {/* Date Picker */}
          <div className="mb-4">
            <label className="block font-medium mb-2">Select Date:</label>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="border px-3 py-2 rounded-md"
            />
          </div>

          {/* Time Slots */}
          <div className="mb-6">
            <label className="block font-medium mb-2">Select Time Slot:</label>
            {Object.entries(timeSlots).map(([period, slots]) => (
              <div key={period} className="mb-3">
                <h4 className="font-semibold mb-2">{period}</h4>
                <div className="flex flex-wrap gap-3">
                  {slots.map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`px-4 py-2 border rounded-lg transition 
                        ${selectedTime === time ? "bg-blue-600 text-white" : "hover:bg-blue-100"}`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Book Button */}
          <button
            onClick={handleBook}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            Book Appointment
          </button>

          {/* Confirmation Message */}
          {confirmation && (
            <p className="mt-4 text-green-600 font-medium">{confirmation}</p>
          )}
        </div>
      )}
    </div>
  );
}
