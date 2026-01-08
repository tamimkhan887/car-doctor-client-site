import React, { useEffect } from 'react';
import { useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [products , setProducts] = useState([])
    useEffect(()=>{
        fetch("Products.json")
        .then(res=>res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div className='mt-8 md:mt-14 lg:mt-20'>
            <p className='text-[#FF3811] font-bold text-xl text-center mb-3'>Popular Products</p>
            <h3 className='text-[#151515] font-bold text-5xl text-center mb-3'>Browse Our Products</h3>
            <p className='text-[#737373] text-center'>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    products.map(product => <Product product={product} key={product.id}></Product>)
                }
            </div>
            
        </div>
    );
};

export default Products;