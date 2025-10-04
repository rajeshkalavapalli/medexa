import consult from "../assets/images/consult.png";
import health from "../assets/images/health pack.png";
import lab from "../assets/images/lab.png";
import nursing from "../assets/images/nursing.png";

// store the imported variables, not strings
let images = [consult, lab, nursing, health];

export function Header() {
  return (
    <div className="flex gap-12">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}   
          alt={`service-${index}`}
          className="w-40 h-40 object-cover rounded-lg"
        />
      ))}
    </div>
  );
}
