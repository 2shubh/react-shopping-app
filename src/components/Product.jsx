import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { remove,add } from '../redux/CartSlice';


const Product = (props) => {
    const post=props.post;
    
    const {cart}=useSelector((state)=>state );
    
    const dispatch=useDispatch();

    function removeFromCart() {
      dispatch(remove(post.id));
      toast.error("Item removed ");

    }
    function addToCart(){
      dispatch(add(post));
      toast.success("Item added to cart")


    }

  return (
    <div className='flex flex-col items-center justify-between 
    bg-gray-100 hover:scale-110 bg-white hover:shadow-xl transition duration-300 ease-in-out  outline
    gap-3 p-4 mt-10 ml-5 rounded-xl'>
      <div>
        <p className='text-grey-700 font-semibold text-lg text-left truncate w-40 mt-1'>{post.title}</p>
      </div>
      <div>
        <p className='w-40 text-grey-400 font-normal text-[10px] text-left'>{post.description.split(" ").slice(0,10).join(" ")+"..."}</p>
      </div>
      <div className='h-[180px]'>
        <img src= {post.image} className='h-full w-full ' alt='error'/>
      </div>

      <div className='flex gap-12 item-center justify-between w-full mt-5'>
       <div>
        <p className='text-green-600 font-semibold '> ${post.price} </p>
       </div>
       {
       cart.some((p)=> p.id === post.id) ?
       (
        <button className='text-gray-700 border-2 border-gray-700 rounded-full font-semibold
        text-[12px] p-1 px-3 uppercase hover:bg-gray-700
        hover:text-white transition duration-300 ease-in '
        onClick={removeFromCart}>
        Remove Item
        </button>
       ):
       (
        <button className='text-gray-700 border-2 border-gray-700 rounded-full font-semibold
        text-[12px] p-1 px-3 uppercase hover:bg-gray-700
        hover:text-white transition duration-300 ease-in '
        onClick={addToCart}>
          Add to cart
        </button>
       )
}
      </div>
    </div>
  )
}

export default Product