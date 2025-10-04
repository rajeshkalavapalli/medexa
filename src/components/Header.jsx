import consult from "../assets/images/consult.png";
import lab from "../assets/images/lab.png";
import nursing from "../assets/images/nursing.png";

let images = [consult, lab, nursing];

export function Header() {
  return (
    <div className="header-container mt-10">
      {/* Images */}
      <div className="flex gap-10 justify-center">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`service-${index}`}
            className="w-72 h-40 object-cover rounded-lg shadow-md"
          />
        ))}
      </div>

      {/* Heading */}
      <div className="mt-8">
        <h1 className="medical-tag text-2xl font-bold text-center text-[#012E40] relative z-10 mr-20">
  Book Medical Services
</h1>
      </div>
    </div>
  );
}
