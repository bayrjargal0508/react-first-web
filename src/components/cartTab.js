import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from './cartItem';
import { toggleStatusTab } from '../stores/cart';
import { images } from '../products'; 
import { useNavigate } from 'react-router-dom'; 

const CartTab = () => {
  const carts = useSelector(store => store.cart.items);
  const statusTab = useSelector(store => store.cart.statusTab);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCloseTabCart = () => {
    dispatch(toggleStatusTab());
  };

  const handleCheckout = () => {
    dispatch(toggleStatusTab()); 
    navigate("/checkout");  
  };

  return (
    <div className={`fixed top-0 right-0 bg-gray-500 shadow-2xl lg:w-96 md:w-52 h-full grid grid-rows-[60px_1fr_60px] 
      transform transition-transform duration-500 ${statusTab === false ? "translate-x-full" : ""}`}>
      <h2 className='p-5 text-black text-2xl'>Shopping Cart</h2>
      <div className='p-5'>
        {carts.map((item, key) => (
          <CartItem key={key} data={item} image={images[item.productId]} />
        ))}
      </div>
      <div className='grid grid-cols-2'>
        <button className='bg-black text-white' onClick={handleCloseTabCart}>CLOSE</button>
        <button className='bg-amber-600 text-white' onClick={handleCheckout}>CHECKOUT</button> 
      </div>
    </div>
  );
};

export default CartTab;
