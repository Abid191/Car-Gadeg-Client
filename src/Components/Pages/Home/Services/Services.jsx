import { useEffect, useState } from "react";
import Card from "./Card";


const Services = () => {

    const [services,setServices] = useState([]) 
    useEffect( ()=>{
        fetch('Service.json')
        .then(res=> res.json())
        .then(data=>setServices(data))
    },[])

    return (
        <div className='mt-32 '>
            <h2 className="text-orange-400 text-2xl text-center font-bold">Service</h2>
            <h1 className="text-4xl font-bold text-center mt-5">Our Service Area</h1>
            <p className="text-center mt-5"> the majority have suffered alteration in some form, by injected humour, or randomised <br />words which don't look even slightly believable. </p>
            <div className="grid grid-cols-1 lg:grid-cols-3 mt-10 gap-y-5" >
                {
                    services.map(ServiceItem => 
                    <Card key={ServiceItem._id}
                          ServiceItem={ServiceItem}
                    ></Card>)
                }
            </div>
        </div>
    );
};

export default Services;