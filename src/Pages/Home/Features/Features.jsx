import { useEffect, useState } from "react";
import Feature from "../Feature/Feature";

const Features = () => {
    const [features , setFeatures ] = useState([])
    useEffect(()=>{
        fetch("Features.json")
        .then(res => res.json())
        .then(data => setFeatures(data))
    },[])
    return (
        <div className='mt-8 md:mt-14 lg:mt-20'>
            <p className='text-[#FF3811] font-bold text-xl text-center mb-3'>Core Features</p>
            <h3 className='text-[#151515] font-bold text-5xl text-center mb-3'>Why Choose Us</h3>
            <p className='text-[#737373] text-center'>The majority have suffered alteration in some form, by injected humour, or <br /> randomised words which don't look even slightly believable. </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 justify-center items-center gap-6 mt-10">
                {
                   features.map(feature => <Feature feature={feature} key={feature.id}></Feature>) 
                }
            </div>

        </div>
    );
};

export default Features;