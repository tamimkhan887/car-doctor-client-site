import React, { useEffect, useState } from 'react';
import SingleServiceArea from '../SingleServiceArea/SingleServiceArea';

const ServiceArea = () => {
    const [services , setServices] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:3000/services")
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className='mt-10 md:mt-26'>
            <h3 className='text-[#FF3811] font-bold text-xl text-center'>Service</h3>
            <h1 className='text-[#151515] font-bold text-4xl md:text-5xl text-center mt-3'>Our Service Area</h1>
            <p className='text-[#737373] text-center mt-2'>the majority have suffered alteration in some form, by injected humour, or randomised <br className='hidden md:flex' /> words which don't look even slightly believable. </p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-9'>
                {
                    services.map(service => <SingleServiceArea service={service} key={service._id}></SingleServiceArea>)
                }
            </div>
        </div>
    );
};

export default ServiceArea;