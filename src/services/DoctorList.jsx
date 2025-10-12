import React, { useEffect, useState } from "react";
import { getAllDoctors } from "../services/doctorService"; // ✅ correct import

export default function DoctorList() {
  const [doctors, setDoctors] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [specialties, setSpecialties] = useState([]);

  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("");
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [loading, setLoading] = useState(true); // ✅ new

  // ✅ Fetch all doctors on mount
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const data = await getAllDoctors();
        setDoctors(data || []);
        const uniqueStates = [
          ...new Set(data.map((d) => d.STATE).filter(Boolean)),
        ];
        setStates(uniqueStates);
      } catch (error) {
        console.error("Error fetching doctors:", error);
      } finally {
        setLoading(false); // ✅ stop loading
      }
    };

    fetchDoctors();
  }, []);

  // ✅ Update cities when state changes
  useEffect(() => {
    if (selectedState) {
      const filteredCities = doctors
        .filter((d) => d.STATE === selectedState)
        .map((d) => d.CITY)
        .filter((v, i, a) => v && a.indexOf(v) === i);
      setCities(filteredCities);
      setSelectedCity("");
      setSpecialties([]);
      setSelectedSpecialty("");
      setFilteredDoctors([]);
    }
  }, [selectedState, doctors]);

  // ✅ Update specialties when city changes
  useEffect(() => {
    if (selectedCity) {
      const filteredSpecialties = doctors
        .filter((d) => d.STATE === selectedState && d.CITY === selectedCity)
        .map((d) => d.SPECIALITY)
        .filter((v, i, a) => v && a.indexOf(v) === i);
      setSpecialties(filteredSpecialties);
      setSelectedSpecialty("");
      setFilteredDoctors([]);
    }
  }, [selectedCity, selectedState, doctors]);

  // ✅ Filter doctors when specialty selected
  useEffect(() => {
    if (selectedSpecialty) {
      const filtered = doctors.filter(
        (d) =>
          d.STATE === selectedState &&
          d.CITY === selectedCity &&
          d.SPECIALITY === selectedSpecialty
      );
      setFilteredDoctors(filtered);
    }
  }, [selectedSpecialty, selectedCity, selectedState, doctors]);

  // ✅ Loading state
  if (loading) {
    return <p className="text-center text-gray-500 mt-8">Loading doctors...</p>;
  }

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center text-blue-600">
        Find Your Doctor
      </h1>

      {/* ✅ Dropdowns */}
      <div className="flex flex-col md:flex-row gap-4 mb-6 justify-center">
        {/* State dropdown */}
        <select
          value={selectedState}
          onChange={(e) => setSelectedState(e.target.value)}
          className="p-2 border border-gray-300 rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="">Select State</option>
          {states.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>

        {/* City dropdown */}
        {cities.length > 0 && (
          <select
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            className="p-2 border border-gray-300 rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Select City</option>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        )}

        {/* Specialty dropdown */}
        {specialties.length > 0 && (
          <select
            value={selectedSpecialty}
            onChange={(e) => setSelectedSpecialty(e.target.value)}
            className="p-2 border border-gray-300 rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Select Specialty</option>
            {specialties.map((spec) => (
              <option key={spec} value={spec}>
                {spec}
              </option>
            ))}
          </select>
        )}
      </div>

      {/* ✅ Doctors List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDoctors.length > 0 ? (
          filteredDoctors.map((doctor) => (
            <div
              key={doctor._id}
              className="p-4 shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <h2 className="text-lg font-bold mb-1 text-blue-700">
                {doctor.DOCTOR_NAME}
              </h2>
              <p className="text-gray-600 mb-1">{doctor.ADDRESS}</p>
              <p className="text-gray-500 mb-1">
                {doctor.CITY}, {doctor.STATE}
              </p>
              <p className="text-blue-600 font-semibold">
                {doctor.SPECIALITY}
              </p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            Please select State, City, and Specialty to see available doctors.
          </p>
        )}
      </div>
    </div>
  );
}
