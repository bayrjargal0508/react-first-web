import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart, toggleStatusTab } from '../stores/cart';
import image1 from '../assets/images/1.jpg';
import image2 from '../assets/images/2.jpg';
import image3 from '../assets/images/3.jpg';
import iconCart from '../assets/images/iconCart.png';

const images = {
  '1': image1,
  '2': image2,
  '3': image3,
};

const Tools = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const imageId = params.get('image');
  const [quantity, setQuantity] = useState(1); 
  const dispatch = useDispatch();

  const handlePlusQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleMinusQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const addToCartHandler = () => {
    if (imageId) {
      dispatch(addToCart({ productId: imageId, quantity }));
      dispatch(toggleStatusTab()); // Open the cart tab
    }
  };

  return (
    <div className="text-center p-4 ml-[-75%] h-[70%]">
      {imageId && (
        <img src={images[imageId]} alt="Selected" className="w-80 h-auto mx-auto" />
      )}
       
       <div className='ml-[70%] mt-[-20%]'>
       <h3 className='text-4xl py-3 text-center font-medium'>ABINGDON UPHOLSTERED CHAIR SWIVEL</h3>
       
                
                <b className='text-4xl font-medium ml-[-80%]'>
                    $<span >100</span>
                </b>
               
                



          
      <div>
        <div className="flex gap-2 rounded-none mt-10 ml-6">
          <button
            className="bg-gray-100 w-10 h-10 font-bold text-xl rounded-xl flex justify-center items-center"
            onClick={handleMinusQuantity}
          >
            -
          </button>
          <span class="bg-gray-200 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center">{quantity}</span>
          <button
            className="bg-gray-100 w-10 h-10 font-bold text-xl rounded-xl flex justify-center items-center"
            onClick={handlePlusQuantity}
          >
            +
          </button>
        </div>
        <p className='mt-10'>
        Mollit anim consectetur adipisicing aute pariatur ad mollit ad. Officia amet aliqua non laborum dolore sint sit eu sit sunt laboris. Dolor tempor ipsum culpa Lorem ipsum ullamco ullamco dolor sit do. Do proident quis ad laborum et proident laborum. Non voluptate eiusmod aute labore ea aute.
        </p>
      </div>
       </div>
       <div className='ml-[85%] mt-[-178px]'>
        <button onClick={addToCartHandler} className="bg-gray-300 text-black px-7 py-3 h-10 rounded-xl shadow-2xl flex items-center">
            <img src={iconCart} alt="Add to Cart" className="w-5 mr-2" />
            Add To Cart
        </button>
        </div>
<p className='mt-80'></p>
    </div>
  );
};

export default Tools;
