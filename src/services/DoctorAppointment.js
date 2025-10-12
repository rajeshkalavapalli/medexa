import React, { useEffect, useState } from "react";
import axios from "axios";

export default function DoctorAppointment() {
  const [doctors, setDoctors] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [specialties, setSpecialties] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("");
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  // Appointment state
  const [date, setDate] = useState("");
  const [slots, setSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState("");
  const [patientName, setPatientName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [department, setDepartment] = useState("");

  // Fetch all doctors
  useEffect(() => {
    axios.get("http://localhost:5000/api/doctor")
      .then(res => {
        setDoctors(res.data);
        const uniqueStates = [...new Set(res.data.map(d => d.STATE))];
        setStates(uniqueStates);
      })
      .catch(err => console.log(err));
  }, []);

  // Update cities when state changes
  useEffect(() => {
    if (selectedState) {
      const filteredCities = [...new Set(doctors.filter(d => d.STATE === selectedState).map(d => d.CITY))];
      setCities(filteredCities);
    } else {
      setCities([]);
    }
    setSelectedCity("");
  }, [selectedState, doctors]);

  // Update specialties when city changes
  useEffect(() => {
    if (selectedCity) {
      const filteredSpecialties = [...new Set(doctors
        .filter(d => d.STATE === selectedState && d.CITY === selectedCity)
        .map(d => d.SPECIALITY))];
      setSpecialties(filteredSpecialties);
    } else {
      setSpecialties([]);
    }
    setSelectedSpecialty("");
  }, [selectedCity, selectedState, doctors]);

  // Update filtered doctors when specialty changes
  useEffect(() => {
    if (selectedSpecialty) {
      const filtered = doctors.filter(d =>
        d.STATE === selectedState &&
        d.CITY === selectedCity &&
        d.SPECIALITY === selectedSpecialty
      );
      setFilteredDoctors(filtered);
    } else {
      setFilteredDoctors([]);
    }
    setSelectedDoctor(null);
  }, [selectedSpecialty, selectedCity, selectedState, doctors]);

  // Fetch available slots when doctor or date changes
  useEffect(() => {
    if (selectedDoctor && date) {
      axios.get(`http://localhost:5000/api/appointments/slots/${selectedDoctor._id}/${date}`)
        .then(res => setSlots(res.data))
        .catch(err => console.log(err));
    } else {
      setSlots([]);
    }
  }, [selectedDoctor, date]);

  // Handle booking
  const handleBooking = async (e) => {
    e.preventDefault();
    if (!selectedSlot || !selectedDoctor) return alert("Select doctor and slot!");
    try {
      const res = await axios.post("http://localhost:5000/api/appointments", {
        doctorId: selectedDoctor._id,
        patientName,
        patientEmail: email,
        patientPhone: phone,
        date,
        timeSlot: selectedSlot,
        department
      });
      alert(res.data.message);
      // reset form
      setSelectedDoctor(null);
      setDate("");
      setSelectedSlot("");
      setPatientName("");
      setEmail("");
      setPhone("");
      setDepartment("");
    } catch (err) {
      console.log(err);
      alert("Failed to book appointment");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Find & Book Your Doctor</h1>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <select className="border p-2 rounded" value={selectedState} onChange={e => setSelectedState(e.target.value)}>
          <option value="">Select State</option>
          {states.map(s => <option key={s} value={s}>{s}</option>)}
        </select>

        <select className="border p-2 rounded" value={selectedCity} onChange={e => setSelectedCity(e.target.value)} disabled={!selectedState}>
          <option value="">Select City</option>
          {cities.map(c => <option key={c} value={c}>{c}</option>)}
        </select>

        <select className="border p-2 rounded" value={selectedSpecialty} onChange={e => setSelectedSpecialty(e.target.value)} disabled={!selectedCity}>
          <option value="">Select Specialty</option>
          {specialties.map(s => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>

      {/* Doctor List */}
      {filteredDoctors.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {filteredDoctors.map(d => (
            <div key={d._id} className={`p-4 border rounded ${selectedDoctor?._id === d._id ? "border-blue-500" : ""}`} onClick={() => setSelectedDoctor(d)}>
              <h2 className="font-bold">{d.DOCTOR_NAME}</h2>
              <p>{d.ADDRESS}</p>
              <p>{d.CITY}, {d.STATE}</p>
              <p>Specialty: {d.SPECIALITY}</p>
            </div>
          ))}
        </div>
      )}

      {/* Appointment Form */}
      {selectedDoctor && (
        <div className="p-4 bg-white shadow-md rounded">
          <h2 className="text-xl font-bold mb-4">Book Appointment with {selectedDoctor.DOCTOR_NAME}</h2>

          <div className="mb-4">
            <label className="block font-medium mb-1">Select Date:</label>
            <input type="date" className="border p-2 w-full rounded" value={date} onChange={e => setDate(e.target.value)} />
          </div>

          {slots.length > 0 && (
            <div className="mb-4">
              <label className="block font-medium mb-1">Available Slots:</label>
              <select className="border p-2 w-full rounded" value={selectedSlot} onChange={e => setSelectedSlot(e.target.value)}>
                <option value="">Select Slot</option>
                {slots.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
          )}

          <form onSubmit={handleBooking} className="space-y-2">
            <input type="text" placeholder="Patient Name" className="border p-2 w-full rounded" value={patientName} onChange={e => setPatientName(e.target.value)} required />
            <input type="email" placeholder="Email" className="border p-2 w-full rounded" value={email} onChange={e => setEmail(e.target.value)} required />
            <input type="text" placeholder="Phone" className="border p-2 w-full rounded" value={phone} onChange={e => setPhone(e.target.value)} required />
            <input type="text" placeholder="Department" className="border p-2 w-full rounded" value={department} onChange={e => setDepartment(e.target.value)} required />

            <button type="submit" className="bg-blue-600 text-white p-2 rounded w-full hover:bg-blue-700">Book Now</button>
          </form>
        </div>
      )}
    </div>
  );
}
