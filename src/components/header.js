import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import iconCart from '../assets/images/iconCart.png';
import { useSelector, useDispatch } from 'react-redux';
import { toggleStatusTab } from '../stores/cart';
// import CartTab from './cartTab';

const Header = () => {
    const [totalQuantity, setTotalQuantity] = useState(0);
    const carts = useSelector(store => store.cart.items);
    const dispatch = useDispatch();
    const location = useLocation();

    const [isCartOpen, setIsCartOpen] = useState(false);

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };

    useEffect(() => {
        let total = 0;
        carts.forEach(item => total += item.quantity);
        setTotalQuantity(total);
    }, [carts]);
    
    const handleOpenTabCart = () => {
        dispatch(toggleStatusTab());
    }

    
    if (location.pathname === '/login' || location.pathname === '/signup') {
        return null; 
    }

    return (
        <header className='flex justify-between items-center mb-5'>
            <Link to="/" className='text-xl font-semibold'>Home</Link>
            <Link to="/home" className='text-xl font-semibold'>Product</Link>
            <Link to="/checkout" className='text-xl font-semibold'>CheckOut</Link>
            <Link to="/login" className='text-xl font-semibold'>Sign Up</Link>
            <div className='w-10 h-10 bg-gray-100 rounded-full
                flex justify-center items-center relative' onClick={handleOpenTabCart}>
                <img src={iconCart} alt="Cart Icon" className='w-6 cursor-pointer' onClick={toggleCart} />
                <span className='absolute top-2/3 right-1/2 bg-red-500 text-white text-sm
                    w-5 h-5 rounded-full flex justify-center items-center'>{totalQuantity}</span>
            </div>
        </header>
    )
}

export default Header;
