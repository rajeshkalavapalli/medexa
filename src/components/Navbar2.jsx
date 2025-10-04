let navlist = [
  "Home",
  "Doctor Consultation",
  "Book Nursing Service",
  "Book Lab Test",
  "Health Packages"
];

export function Navbar2() {
  return (
    <nav className="nav2-container w-full">
      <ul className=" nav2-sub flex justify-center gap-10 list-none  h-full items-center">
        {navlist.map((nav, index) => (
          <li key={index}>{nav}</li>
        ))}
      </ul>
    </nav>
  );
}
