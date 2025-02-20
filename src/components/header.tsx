import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import iconCart from '../assets/images/iconCart.png';
import { useSelector,useDispatch } from 'react-redux';
import { toggleStatusTab } from '../store/cart';

type Props = {};

interface CartItem {
  quantity: number;
}

function Header({}: Props) {
  const [totalQuantity, setTotalQuantity] = useState(0);
  const carts = useSelector((store: any) => store.cart.items);
  const dispatch = useDispatch()
  const handleOpenTabCart = ()=>{
 dispatch(toggleStatusTab())
  }

  useEffect(() => {
    let total = 0;
    carts.forEach((item: CartItem) => total += item.quantity);
    setTotalQuantity(total);
  }, [carts]);

  return (
    <div className='flex justify-between items-center mb-5'>
      <Link to="/" className='text-xl font-semibold'>Home</Link>
      <div className='w-10 h-10 bg-gray-100 rounded-full flex justify-center items-center relative' onClick={handleOpenTabCart}>
        <img src={iconCart} alt="" className='w-6' />
        <span className='absolute top-2/3 right-1/2 bg-red-500 text-white text-sm w-5 h-5 rounded-full flex justify-center items-center'>
          {totalQuantity}
        </span>
      </div>
    </div>
  );
}

export default Header;