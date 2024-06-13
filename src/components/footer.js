import React from 'react';
import { Link } from 'react-router-dom';
import image1 from '../assets/images/1.jpg';
import image2 from '../assets/images/2.jpg';
import image3 from '../assets/images/3.jpg';
import iconCart from '../assets/images/heart.png';

const Footer = () => {
  return (
    <div>
      <div className="bg-zinc-200 w-[540px] h-[530px] border flex flex-col items-center justify-center mt-9 ml-[100px]">
      <img src={image2} alt="image2" className="border p-4 max-w-full max-h-full" />

      </div>
      <Link to="/tools?image=2">
        <button className='bg-gray-300 p-2 rounded-md text-sm hover:bg-gray-400 flex gap-2 mt-[40px] ml-[100px]'>
          More Info
          <img src={iconCart} alt="iconCart" className='w-5' />

        </button>
      </Link>

      <div className="bg-zinc-200 w-[540px] h-[527px] border flex items-center justify-center ml-[680px] mt-[-607px]">
        <img src={image1} alt="image1" className="border p-4 max-w-full max-h-full" />
      </div>
      <Link to="/tools?image=1">
        <button className='bg-gray-300 p-2 rounded-md text-sm hover:bg-gray-400 flex gap-2 mt-[40px] ml-[680px]'>
          More Info
          <img src={iconCart} alt="Add to Cart" className='w-5' />
        </button>
      </Link>

      <div className="bg-zinc-200 w-[540px] h-[527px] border flex items-center justify-center ml-[1260px] mt-[-604px]">
        <img src={image3} alt="image3" className="border p-4 max-w-full max-h-full" />
      </div>
      <Link to="/tools?image=3">
        <button className='bg-gray-300 p-2 rounded-md text-sm hover:bg-gray-400 flex gap-2 mt-[40px] ml-[1260px]'>
          More Info
          <img src={iconCart} alt="Add to Cart" className='w-5' />
        </button>
      </Link>

      <footer className="bg-zinc-200 p-5 mt-14" style={{ height: '400px' }}>
        <div className='ml-1 break-normal'>
          <b>Join Family</b>
          <p>Bring your ideas to life with special discounts,</p>
          <p>inspiration, and lots of good things in store. It's all free.</p>
        </div>
        <button className='bg-gray-300 p-2 text-white rounded-md text-sm hover:bg-gray-400 flex gap-2'>
          Join or Login
        </button>

        <div className='ml-[550px] mt-[-100px] widest:.25em whitespace-normal'>
          <b>Help</b>
          <p>Customer service</p>
          <p>FAQ</p>
          <p>My Orders</p>
          <p>Contact us</p>
          <p>Products Recalls</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
