import React from 'react';
import nuurImage from '../assets/images/back.jpg'; 
import Header from '../components/header';
import Footer from '../components/footer';
import Sofa from '../assets/images/sofa.jpg'; 
import chair from '../assets/images/chair.jpg'; 
import Bed from '../assets/images/bed.jpg'; 
import Table from '../assets/images/table.jpg'; 
import sideboard from '../assets/images/sideboard.jpg'; 

const NuurPage = () => {
  return (
    <div>
      <div className='bg-zinc-200'>
        <main className={`w-[1200px] max-w-full m-auto p-5 transform transition-transform duration-500`}>
          <Header />
        </main>
      </div>
     
      <div style={{ position: 'relative', width: '100%', height: 'auto' }}>
        <img src={nuurImage} alt="Nuur" style={{ width: '100%', height: 'auto' }} />
        <div style={{ position: 'absolute', top: '50%', left: '40%', transform: 'translate(-50%, -50%)', color: 'white', fontSize: '24px', fontWeight: 'bold', textShadow: '2px 2px 4px #000000' }}>
          Get ready for summer with outdoor furniture
          Make the most of your outdoor space with our stylish and functional furniture. From comfortable loungers to durable dining sets, 
          we have everything you need to create your dream outdoor oasis. Shop now and enjoy the sunshine in style!

          <button className='bg-black p-2 rounded-md text-sm hover:bg-gray-400 flex gap-2 '> Add To Cart </button>
        </div>
      </div>
      
      <center><h1 className='p-5 text-black text-2xl'><b>Choose your interested one</b></h1></center>

      <div className="flex justify-center flex-wrap">
        <div className="bg-zinc-200 w-[640px] h-[627px] border flex items-center justify-center">
        <a href="/home">
          <img src={Sofa} alt="Sofa" className="border p-4 max-w-full max-h-full" /></a>
        </div>
        
        <div className="flex flex-col ml-6">
          <div className="flex justify-center mb-6">
            <div className="bg-zinc-200 w-[300px] h-[300px] border flex items-center justify-center">
                <a href="/home" className="bg-zinc-200 w-[300px] h-[300px] border flex items-center justify-center">
                <img src={chair} alt="Chair" className="border p-4 max-w-full max-h-full" />
                </a>
           </div>
            <div className="bg-zinc-200 w-[300px] h-[300px] border flex items-center justify-center ml-6">
                <a href="/home" className="bg-zinc-200 w-[300px] h-[300px] border flex items-center justify-center">
                <img src={Bed} alt="Chair" className="border p-4 max-w-full max-h-full" />
                </a>
            </div>
            <div className="bg-zinc-200 w-[300px] h-[300px] border flex items-center justify-center ml-6">
            <a href="/home"><img src={Table} alt="Table" className="border p-4 max-w-full max-h-full" /></a>
              
            </div>
          </div>
          <div className="bg-zinc-200 w-full h-[300px] ">
          <a href="/home">
            <img src={sideboard} alt="Sideboard" className="border p-4 max-w-full max-h-full" />
            </a>
          </div>
        </div>
      </div>

          <Footer/>

    </div>
  );
}

export default NuurPage;
