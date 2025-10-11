import { Link } from "react-router-dom";

let navlist = [
  { name: "Home", path: "/" },
  { name: "Doctor Consultation", path: "/doctor-consultation" },
  { name: "Book Nursing Service", path: "/book-nursing-service" },
  { name: "Book Lab Test", path: "/book-lab-test" },
  { name: "Health Packages", path: "/health-packages" }
];

export function Navbar2() {
  return (
    <nav className="nav2-container w-full">
      <ul className=" nav2-sub flex justify-center gap-10 list-none  h-full items-center">
        {navlist.map((item, index) => (
          <li key={index}><Link to={item.path}>{item.name}</Link></li>
        ))}
      </ul>
    </nav>
  );
}
