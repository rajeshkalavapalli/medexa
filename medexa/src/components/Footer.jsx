let my_adress = [
  {
    Float: 101,
    name: "Zolo vibe",
    street: "Perungudi",
    landmark: "Near Honda showroom",
    state: "Chennai",
    phone: "Contact: 9866667073",
  },
];

let services = [
  "General Physician",
  "Pediatrician",
  "Dermatologist",
  "Gynecologist & Obstetrician",
  "Cardiologist",
  "Ophthalmologist",
  "Neurologist",
  "Gastroenterologist",
];

let usefull_links = [
  "Return",
  "Latest News",
  "Our Sitemap",
  "Contact Us",
  "Privacy",
  "Terms & Conditions",
];

export function Footer() {
  return (
    <footer className="bg-[#012E40] text-white py-10 mt-20">
      <div className="container mx-auto flex justify-between px-10">
        {/* Logo + Address */}
        <div>
          <h1 className="text-[30px] font-bold">Medexa</h1>
          <h2 className="text-[#F7C331] mt-2">
            “Your health, our care — anytime, anywhere.”
          </h2>
          <ul className="mt-5 space-y-2 text-sm">
            {my_adress.map((adress, index) => (
              <li key={index}>
                {adress.Float}, <br />
                {adress.name}, <br />
                {adress.street}, {adress.landmark}, <br />
                {adress.state} <br />
                <strong>{adress.phone}</strong>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h1 className="text-[25px] mb-3 font-semibold">Services</h1>
          <ul className="space-y-2 text-[#F7C331]">
            {services.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h1 className="text-[25px] mb-3 font-semibold">Useful Links</h1>
          <ul className="space-y-2 text-[#F7C331]">
            {usefull_links.map((link, index) => (
              <li key={index}>{link}</li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
