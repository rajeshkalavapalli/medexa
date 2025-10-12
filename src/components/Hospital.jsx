import React from "react";

const PopularHospitals = [
  { id: 1, name: "Apollo Hospitals Group", type: "Hospital Chain", focus: "Multi-Specialty (Nationwide Presence)" },
  { id: 2, name: "Medanta – The Medicity", type: "Hospital (Gurugram)", focus: "Quaternary Care, Organ Transplants" },
  { id: 3, name: "Fortis Healthcare", type: "Hospital Chain", focus: "Super-Specialty, Cardiac & Oncology Care" },
  { id: 4, name: "Max Healthcare", type: "Hospital Chain", focus: "Multi-Specialty (Strong in Delhi-NCR)" },
  { id: 5, name: "Manipal Hospitals", type: "Hospital Chain", focus: "Multi-Specialty (Pan-India Presence)" },
  { id: 6, name: "Narayana Health", type: "Hospital Chain (Bangalore)", focus: "Cardiac Care, Affordable Multi-Specialty" },
  { id: 7, name: "Christian Medical College (CMC), Vellore", type: "Institution", focus: "Teaching & Multi-Specialty (Ethical Care)" },
  { id: 8, name: "All India Institute of Medical Sciences (AIIMS)", type: "Institution (New Delhi)", focus: "Government Tertiary/Quaternary Care & Research" },
];

const PopularDiagnosticLabs = [
  { id: 1, name: "Dr Lal PathLabs", type: "Diagnostic Chain", focus: "Pathology and Blood Testing (Widespread Network)" },
  { id: 2, name: "Metropolis Healthcare Ltd", type: "Diagnostic Chain", focus: "Specialized Testing & Pathology Services" },
  { id: 3, name: "SRL Diagnostics", type: "Diagnostic Chain", focus: "Pathology, Radiology, and Testing Services" },
  { id: 4, name: "Thyrocare", type: "Diagnostic Chain", focus: "Preventive Health Check-ups (Automated Processing)" },
  { id: 5, name: "Apollo Diagnostics", type: "Diagnostic Chain", focus: "Integrated Diagnostic Services" },
  { id: 6, name: "Vijaya Diagnostic Centre", type: "Diagnostic Chain (South India)", focus: "Radiology & Pathology Services" },
];

export function Hospital() {
  return (
    <div className="bg-[#F9F7FF] py-10 px-5 md:px-16">
      
      {/* Hospitals Heading */}
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-center text-[#012E40]">
          Popular Hospitals in India
        </h1>
      </div>

      {/* Hospitals Carousel */}
      <div className="overflow-hidden relative">
        <div className="flex animate-scroll gap-6">
          {PopularHospitals.concat(PopularHospitals).map((hospital, idx) => (
            <div
              key={idx}
              className="min-w-[250px] bg-white rounded-xl shadow-md p-4"
            >
              <h2 className="font-semibold text-lg text-[#012E40]">{hospital.name}</h2>
              <p className="text-gray-500 text-sm mt-1">{hospital.type}</p>
              <p className="text-gray-400 text-sm mt-2">{hospital.focus}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Labs Heading */}
      <div className="mt-10 mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-center text-[#012E40]">
          Popular Diagnostic Labs in India
        </h1>
      </div>

      {/* Labs Carousel */}
      <div className="overflow-hidden relative">
        <div className="flex animate-scroll gap-6">
          {PopularDiagnosticLabs.concat(PopularDiagnosticLabs).map((lab, idx) => (
            <div
              key={idx}
              className="min-w-[250px] bg-white rounded-xl shadow-md p-4"
            >
              <h2 className="font-semibold text-lg text-[#012E40]">{lab.name}</h2>
              <p className="text-gray-500 text-sm mt-1">{lab.type}</p>
              <p className="text-gray-400 text-sm mt-2">{lab.focus}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
