import React from 'react'
import iconCart from '../assets/images/iconCart.png';
import { Link } from 'react-router-dom';
import { UseSelector, useDispatch } from 'react-redux';
import { addtoCart } from '../store/cart.ts';

interface Props {
    data: {
        id: number;
        name: string;
        price: number;
        image: string;
        descript: string;
        slug: string;
    };
}
const ProductCart = (props: Props) => {
    const { data: product } = props;

    const dispatch = useDispatch();
    const handleAdd = () => {
       dispatch(addtoCart({productId: product.id, quantity: 1}));}
        console.log(product.id)
  return (
        <div className='bg-white p-5 rounded-xl shadow-lg'>
                   <Link to={product.slug}>
                       <img src={product.image} alt={product.name} className='w-full h-80 object-cover object-top' />
                       </Link> 
                       <div className='mt-5'>
                           <h2 className='text-2xl font-semibold text-center py-3'>{product.name}</h2>
                           <div className='flex justify-between'>
                               <p className='text-2xl font-medium'>{product.price}</p>

                               <button className='bg-gray-400 p-2 rounded-md text-sm hover:bg-gray-500 flex gap-2'>
                                   <img src={iconCart} alt="" className='w-5' onClick={handleAdd} />
                                   Add To Cart</button>
                           </div>
                       </div>
                 
   
               </div>
  )
}

export default ProductCart