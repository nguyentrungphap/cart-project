import React, { use, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { product } from '../modules/product'
import { useDispatch } from 'react-redux'
import { addtoCart } from '../store/cart.ts'

type Props = {}

const Detail = (props: Props) => {
  const {slug} = useParams()
  const [quantity, setQuantity] = useState(1)
  const [detail, setDetail]= useState<{
    id: number;
    name: string;
    price: number;
    image: string;
    descript: string;
    slug: string;
  } | null>(null)
 const dispatch = useDispatch()
  useEffect(() => {
    const findDetail = product.filter(product=>product.slug === slug)
         if(findDetail.length > 0){
           setDetail(findDetail[0])
         }else{
          window.location.href = '/'
         }
  }, [slug])

  const handleMinusQuantity = () => {
    setQuantity(quantity - 1 < 1 ? 1 : quantity - 1)
  }
  const handlePlusQuantity = () => {
    setQuantity(quantity + 1 )
  }
  const handleAddToCart =()=>{
    if (detail) {
      dispatch(addtoCart({
          productId: detail.id, 
          quantity: quantity
        }))
    }
  }
  return (
    <div>
      <h2 className='text-3xl text-center'>product detail</h2>
      {detail &&
      <div className='grid grid-cols-2 gap-5 mt-5'>
        <div>
        <img src={detail.image} alt="" />
        </div>
        <div className='flex flex-col gap-5'>
          <h1 className='text-4xl uppercase font-bold'>{detail.name}</h1>
          <p className='font-bold text-3xl'>${detail.price}</p>
          <div className='flex gap-5'>
          <div className='flex gap-2 justify-center items-center'>
            <button className='bg-gray-100 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center' onClick={handleMinusQuantity}>-</button>
            <span className='bg-gray-100 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center'>{quantity}</span>
            <button className='bg-gray-100 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center' onClick={handlePlusQuantity}>+</button>
          </div>
          <button className='bg-slate-900 text-white px-7 rounded-xl shadow-2xl' onClick={handleAddToCart}>Add To Cart</button>
        </div>
        </div>
        <p>{detail.descript}</p>
      </div>
        }
    </div>
  )
}

export default Detail