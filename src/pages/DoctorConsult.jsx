import DoctorConsultimg from '../assets/images/doctor_consult.png';

export function DoctorConsult() {
  return (
    <div className="text-center py-8 bg-[#F9F7FF]">
      {/* Title */}
      <h1 className="text-2xl font-bold text-[#012E40] mb-6">
        Consult Your Doctor Here
      </h1>

      {/* Image Section */}
      <div className="w-full h-[370px] overflow-hidden flex justify-center">
        <img
          src={DoctorConsultimg}
          alt="Consult Your Doctor"
          className="w-full h-full object-cover object-top rounded-2xl shadow-lg"
        />
      </div>
    </div>
  );
}
