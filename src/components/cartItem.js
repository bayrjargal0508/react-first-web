import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import { useDispatch } from 'react-redux';
import { changeQuantity } from '../stores/cart';


const CartItem = ({ data, image }) => {
  const dispatch = useDispatch();

  const handleQuantityChange = (quantity) => {
    dispatch(changeQuantity({ productId: data.productId, quantity }));
  };

  ;

  return (
    <div className="flex items-center justify-between p-2 border-b border-gray-300">
      <img src={image} alt="Cart item" className="w-12 h-12 object-cover" />
      <div className="flex-1 mx-2">
        <p>Item {data.productId}</p>
        <p>Quantity: {data.quantity}</p>
        <div className="flex gap-2">
          <button
            className="bg-gray-200 rounded-full w-6 h-6 text-cyan-600"
            onClick={() => handleQuantityChange(data.quantity - 1)}
          >
            -
          </button>
          <span>{data.quantity}</span>
          <button
            className="bg-gray-200 rounded-full w-6 h-6 text-cyan-600"
            onClick={() => handleQuantityChange(data.quantity + 1)}
          >
            +
          </button>
        </div>
      </div>
      <p>${(data.quantity * 10).toFixed(2)}</p> 
      
      
    </div>
  );
};

CartItem.propTypes = {
  data: PropTypes.object.isRequired,
  image: PropTypes.string.isRequired,
};

export default CartItem;
