import booknursing from '../assets/images/booknursing.png';

export function BookNursingService() {
  return (
    <div className="text-center py-8 bg-[#F9F7FF]">
      {/* Title */}
      <h1 className="text-2xl font-bold text-[#012E40] mb-6">
        Book Your Nursing Service
      </h1>

      {/* Image Section */}
      <div className="w-full h-[370px] overflow-hidden flex justify-center">
        <img
          src={booknursing}
          alt="Book Nursing Service"
          className="w-full h-full object-cover object-top rounded-2xl shadow-lg"
        />
      </div>
    </div>
  );
}
