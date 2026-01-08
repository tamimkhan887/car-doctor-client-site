import React from 'react';
import { BsArrowRight} from "react-icons/bs";

const SingleServiceArea = ({service}) => {
    const {title , img ,price} = service;
    return (
        <div className='p-6 shadow rounded-lg'>
            <img src={img} alt="" className='lg:h-60 rounded-lg w-full' />
            <h3 className='font-bold text-2xl text-[#444444] mt-4'>{title}</h3>
            <div className='flex justify-between items-center'>
                <p className='text-[#FF3811] font-semibold text-xl '>Price : ${price}</p>
                <button className='btn btn-ghost btn-circle'><BsArrowRight size={24} color='#FF3811'></BsArrowRight></button>
            </div>
        </div>
    );
};

export default SingleServiceArea;