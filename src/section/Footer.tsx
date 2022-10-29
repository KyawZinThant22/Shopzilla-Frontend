import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const footerLink = ["Help", "About us", "FAQs", "Contact us", "Shipping", "Journal", "Order Tracking", "Privacy Policy"]

  return (
    <div className=' p-12'>
      <div className="grid grid-cols-1 lg:grid-cols-3">
        <div>
          <h2 className='font-bold text-2xl uppercase'>Shopzilla</h2>
          <p className='text-sm my-7 leading-7'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum nisi itaque excepturi labore commodi fugit?</p>
          <address className='text-xs mb-12 lg:mb-0'>
            <a href="/">shopzilla@shop.com.mm</a>
            <p>+95 969-969-969</p>
          </address>
        </div>
        <div className='grid grid-cols-2 text-sm mb-12 lg:mb-0'>
          {footerLink.map(link => (
            <a 
              key={link} 
              href="/"
              className=" mb-7"
            >
              <span className='relative nav-link hover:after:w-full hover:after:left-0'>{ link }</span>
            </a>
          ))}
        </div>
        <div>
          <h2 className='font-thin text-2xl'>Join our list</h2>
          <p className='text-sm mt-4 mb-7 lg:my-9'>Signup to be the first to hear about exclusive deals, special offers and upcoming collections</p>
          <form className='flex items-center'>
            <input 
              type="email"
              value=""
              placeholder="Your email address"
              className='min-h-[40px] py-0 px-2 text-black text-base border border-solid border-[#2C3333] rounded-t-md rounded-l-md bg-transparent hover:border-[#2C3333] outline-none'
            />
            <button
              className='min-h-[40px] -ml-1 py-1 px-2 border-none rounded-r-md rounded-b-md bg-black text-white text-base cursor-pointer transition-all duration-300 hover:bg-[#131414] hover:text-[#E7F6F2]' 
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <hr className="divider w-full h-[2px] bg-slate-50 my-8"></hr>
      <div className='flex justify-center items-center flex-col lg:flex-row lg:justify-between text-xs'>
            <p className='mb-4'>Copyright<span>&copy;</span>Shopzilla. All right reserved.</p>
            <div>
              <a href="/">Privacy Policy</a>
              <a href="/" className='mx-6'>Help</a>
              <a href="/">FAQs</a>
              <a href="/" className='ml-6'>Contact us</a>
            </div>
      </div>
    </div>
  )
};

export default Footer;
