import booklab from '../assets/images/booklabtest.png'


export function Booklabtest() {
  return (
    <div className="text-center py-8 bg-[#F9F7FF]">
      <h1 className="text-2xl font-bold text-[#012E40] mb-6">
        Book Your Lab Test Here
      </h1>

      {/* Full width image, smaller height */}
      <div className="w-full h-[370px] overflow-hidden flex justify-center">
        <img
          src={booklab}
          alt="Lab Test Booking"
          className="w-full h-full object-cover object-top rounded-2xl shadow-lg"
        />
      </div>
    </div>
  );
}
