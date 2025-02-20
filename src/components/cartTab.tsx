import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import CartItem from './cartItem'
import { toggleStatusTab } from '../store/cart'
type Props = {}

function CartTab({}: Props) {
  const carts = useSelector((store: any) => store.cart.items)
  const statusTab = useSelector((store: any) => store.cart.statusTab)
  const dispatch = useDispatch()
  const handleCloseTabCart =()=>{
    dispatch(toggleStatusTab());
  }
  return (
    <div className={`fixed top-0 right-0 bg-gray-700 shadow-2xl w-96 h-full grid grid-rows-[60px_1fr_60px]
    transform transition-transform duration-300 ease-in-out ${statusTab ===false ? "translate-x-full":""}`}>
      <h2 className="p-5 text-white text-2xl">Shopping Cart</h2>
      <div>
        {carts.map((item: any, key: number) => (
          <CartItem key={key} data={item} />
        ))}
      </div>
      <div className='grid grid-cols-2'>
        <button className='bg-black text-white' onClick={handleCloseTabCart}>CLOSE</button>
        <button className='bg-amber-600 text-white'>CHECKOUT</button>
      </div>
    </div>
  )
}

export default CartTab