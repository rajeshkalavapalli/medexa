   let my_adress = [{
        "Float":101,
        "name":"Zolo vibe",
        "street":"perungudi",
        "landmark":"near honda showroom",
        "state":"chennai",


    }]

    let services = ["General Physician","Pediatrician","Dermatologist","Gynecologist & Obstetrician","Cardiologist","Cardiologist","Ophthalmologist","Neurologist","Gastroenterologist"]


export function Footer() {



    return (
        <div className="Footer-container">
            <div className="logo-adress mr-[240px]">
                <h1 className="w-2/5 h-9/10 text-[30px]" >Medexa</h1>
                <h2 className="mr-[480px] text-[#405071]">“Your health, our care — anytime, anywhere.”</h2>
            </div>
            <div>
                
                <ul>
                    {my_adress.map(adress=><div className="ml-[170px] text-justify text-[#f8f8f8] text-[17px]">
                        <li>{adress.Float},{adress.name},</li>
                        <li>{adress.landmark},</li>
                        <li>{adress.state}</li>
                
                    </div>)}
                </ul>
            </div>
            <div>
                <ul>
                    
                </ul>
            </div>
        </div>
    )
}