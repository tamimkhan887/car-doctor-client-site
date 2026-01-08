import React from 'react';

const Feature = ({ feature }) => {
    const {
        img ,
        title
    } = feature;
    return (
        <div className='shadow-lg px-6 py-3 rounded-lg'>
            <div className='p-6 flex justify-center items-center'>
                <img src={img} alt="" />
            </div>
            <p className='text-[#444444] font-bold text-lg text-center'>{title}</p>
        </div>
    );
};

export default Feature;