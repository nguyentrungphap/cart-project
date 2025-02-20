import React, { useEffect, useState } from 'react'
import { product } from '../modules/product';
import { changeQuantity } from '../store/cart';
import { useDispatch } from 'react-redux';

type Props = {
    data: any;
  }

function CartItem({ data }: Props) {
    const {productId, quantity} = data;
    const [detail, setDetail] = useState<any>({});
    const dispatch = useDispatch();
    const handleMinusQuantity = () => {
      dispatch(changeQuantity({productId:productId, quantity: quantity - 1}));
    }
    const handlePlusQuantity = () => {
      dispatch(changeQuantity({productId:productId, quantity: quantity + 1}));
    }

    useEffect(() => {
        const findDetail = product.filter(products => products.id === productId)[0];
        setDetail(findDetail);
    }, [productId]);
  return (
    <div className='flex justify-center items-center bg-slate-600 text-white p-2 border-b-2 border-slate-700 gap-5 rounded-md'>
            <img src={detail.image} alt="" className='w-12' />
            <h3>{detail.name}</h3>
            <p>{detail.price * quantity}</p>
            <div className='w-20 flex justify-between gap-2'>
                  <button className='bg-gray-200 rounded-full w-6 h-6 text-cyan-600' onClick={handleMinusQuantity}>-</button>
                  <span>{quantity}</span>
                  <button className='bg-gray-200 rounded-full w-6 h-6 text-cyan-600' onClick={handlePlusQuantity}>+</button>
            </div>
    </div>
  )
}

export default CartItem