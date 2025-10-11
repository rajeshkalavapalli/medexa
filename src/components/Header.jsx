import { Link } from "react-router-dom";
import consult from "../assets/images/consult.png";
import lab from "../assets/images/lab.png";
import nursing from "../assets/images/nursing.png";
import consult1 from "../assets/images/consult1.png";
import labtest1 from "../assets/images/labtest1.png";
import nursing1 from "../assets/images/nursing1.png";

const services = [
  { img: consult, route: "/doctor-consultation" },
  { img: lab, route: "/book-lab-test" },
  { img: nursing, route: "/book-nursing-service" }
];

const services1 = [
  { img: consult1, route: "/doctor-consultation" },
  { img: labtest1, route: "/book-lab-test" },
  { img: nursing1, route: "/book-nursing-service" }
];

export function Header() {
  return (
    <div className="header-container mt-10">
      {/* Top Images */}
      <div className="flex gap-10 justify-center">
        {services.map((service, index) => (
          <Link key={index} to={service.route}>
            <img
              src={service.img}
              alt={`service-${index}`}
              className="w-74 h-40 object-cover rounded-lg shadow-md cursor-pointer"
            />
          </Link>
        ))}
      </div>

      {/* Heading */}
      <div className="mt-8">
        <h1 className="medical-tag text-2xl font-bold text-center text-[#012E40] relative z-10 mr-20">
          Book Medical Services
        </h1>
      </div>

      {/* Bottom Images */}
      <div className="flex gap-10 justify-center mt-7">
        {services1.map((service, index) => (
          <Link key={index} to={service.route}>
            <img
              src={service.img}
              className="w-72 h-43 object-cover rounded-lg shadow-md cursor-pointer"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
