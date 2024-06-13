import React from 'react';
import { Outlet } from 'react-router-dom'; // Removed unused Link import
import { useSelector } from 'react-redux';
import Header from './header';
import CartTab from './cartTab';
import backgroundImage from '../assets/images/back.jpg'; 

const Layout = () => {
    const statusTabCart = useSelector(store => store.cart.statusTab);

    return (
        <div className="layout-container bg-gradient-to-bl" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className='bg-zinc-200'>
                <main className={`w-[1200px] h-[80px] m-auto p-5 transform transition-transform duration-500 ${statusTabCart ? "-translate-x-56" : ""}`}>
                    <Header />
                    <Outlet />
                </main>
                <CartTab />
            </div>
        </div>
    );
}

export default Layout;
