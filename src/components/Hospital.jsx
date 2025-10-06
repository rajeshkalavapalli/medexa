 
 const PopularHospitals = [
  {
    id: 1,
    name: "Apollo Hospitals Group",
    type: "Hospital Chain",
    focus: "Multi-Specialty (Nationwide Presence)",
  },
  {
    id: 2,
    name: "Medanta – The Medicity",
    type: "Hospital (Gurugram)",
    focus: "Quaternary Care, Organ Transplants",
  },
  {
    id: 3,
    name: "Fortis Healthcare",
    type: "Hospital Chain",
    focus: "Super-Specialty, Cardiac & Oncology Care",
  },
  {
    id: 4,
    name: "Max Healthcare",
    type: "Hospital Chain",
    focus: "Multi-Specialty (Strong in Delhi-NCR)",
  },
  {
    id: 5,
    name: "Manipal Hospitals",
    type: "Hospital Chain",
    focus: "Multi-Specialty (Pan-India Presence)",
  },
  {
    id: 6,
    name: "Narayana Health",
    type: "Hospital Chain (Bangalore)",
    focus: "Cardiac Care, Affordable Multi-Specialty",
  },
  {
    id: 7,
    name: "Christian Medical College (CMC), Vellore",
    type: "Institution",
    focus: "Teaching & Multi-Specialty (Ethical Care)",
  },
  {
    id: 8,
    name: "All India Institute of Medical Sciences (AIIMS)",
    type: "Institution (New Delhi)",
    focus: "Government Tertiary/Quaternary Care & Research",
  },
  {
    id: 9,
    name: "Kokilaben Dhirubhai Ambani Hospital",
    type: "Hospital (Mumbai)",
    focus: "Multi-Specialty (Advanced Technology)",
  },
  {
    id: 10,
    name: "Sir Ganga Ram Hospital",
    type: "Hospital (New Delhi)",
    focus: "Comprehensive Private Healthcare",
  },
];


const PopularDiagnosticLabs = [
  {
    id: 1,
    name: "Dr Lal PathLabs",
    type: "Diagnostic Chain",
    focus: "Pathology and Blood Testing (Widespread Network)",
  },
  {
    id: 2,
    name: "Metropolis Healthcare Ltd",
    type: "Diagnostic Chain",
    focus: "Specialized Testing & Pathology Services",
  },
  {
    id: 3,
    name: "SRL Diagnostics",
    type: "Diagnostic Chain",
    focus: "Pathology, Radiology, and Testing Services",
  },
  {
    id: 4,
    name: "Thyrocare",
    type: "Diagnostic Chain",
    focus: "Preventive Health Check-ups (Automated Processing)",
  },
  {
    id: 5,
    name: "Apollo Diagnostics",
    type: "Diagnostic Chain",
    focus: "Integrated Diagnostic Services",
  },
  {
    id: 6,
    name: "Vijaya Diagnostic Centre",
    type: "Diagnostic Chain (South India)",
    focus: "Radiology & Pathology Services",
  },
];


export function Hospital () {
    return(
        <div className="bg-[#F9F7FF]">
             <div className="mt-8">
                <h1 className="medical-tag text-2xl font-bold text-center text-[#012E40] relative z-10 mr-20">Popular hospital and labs in india</h1>
            </div>
            <div>
                <div className="popular-hospitals flex gap-7 list-none h-55 mt-6">
                   {PopularHospitals.map((hospital,index)=>(
                    <ul>
                        <li key={index}>
                            {hospital.name}
                        </li>
                    </ul>
                   ))}

                
                </div>
            </div>
            <div>
                <div>
                    <button className="item-center">Show more</button>
                </div>
            </div>
        </div>
    )
}