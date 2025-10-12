
const API_BASE = "http://localhost:5000";

export async function fetchSlots(doctorId, date) {
  try {
    const res = await fetch(`${API_BASE}/api/appointments/slots?doctorId=${doctorId}&date=${date}`);
    if (!res.ok) throw new Error("Failed to fetch slots");
    return await res.json(); // expect array: [{ time: "09:00 AM", booked: false }, ...]
  } catch (err) {
    console.error("fetchSlots error:", err);
    return [];
  }
}

export async function bookAppointment(payload) {
  try {
    const res = await fetch(`${API_BASE}/api/appointments/book`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data?.message || "Booking failed");
    return data;
  } catch (err) {
    console.error("bookAppointment error:", err);
    throw err;
  }
}
