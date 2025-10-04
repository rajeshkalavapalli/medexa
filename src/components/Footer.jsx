let my_adress = [{
    "Float": 101,
    "name": "Zolo vibe",
    "street": "perungudi",
    "landmark": "near honda showroom",
    "state": "chennai",
    "phone":`Contact: 9866667073`


}]

let services = ["General Physician", "Pediatrician", "Dermatologist", "Gynecologist & Obstetrician", "Cardiologist", "Cardiologist", "Ophthalmologist", "Neurologist", "Gastroenterologist"]


let usefull_links = ["Return","latest News", "Our Sitemap", "Contact Us", "privacy", "Terms & Conditions"]

export function Footer() {



    return (
        <div className="Footer-container  flex">
            <div className="logo-adress flex flex-col mr-[240px]">
                <h1 className="text-[30px] mr-[30px]">Medexa</h1>
                <h2 className="text-[#405071] ml-[180px]">“Your health, our care — anytime, anywhere.”</h2>
                <ul className="list-disc list-inside mt-5 text-justify ml-[180px] text-[#f8f8f8]">
                    {my_adress.map((adress, index) => (
                        <li key={index} className="block ">
                            {adress.Float}, <br />{adress.name},<br /> {adress.street}, {adress.landmark},<br /> {adress.state} <br /> <strong>{adress.phone}</strong>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="mr-[130px] ">
                    <h1 className="text-[25px]">SERVICES</h1>
                <ul>
                    {services.map((service, index) => (

                        <li key={index}>{service}</li>

                    ))}
                </ul>
                

            </div>
            <div className="mr-[120px]" >
                <h1 className="text-[25px]">USEFULL LINKS</h1>
                <ul>
                    {usefull_links.map((links,index)=>(
                        <li>{links}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}