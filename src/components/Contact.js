import React from 'react'

function Contact() {
  return (
    <div className='mx-2'>
      <h1 className='text-center font-bold text-xl my-3'>Contact us</h1>
      <div className='flx lex-col my-2'>
        <div className='p-3  mt-2 border-2 border-gray rounded-lg w-full md:w-1/2 m-auto'>
          <input className='w-full text-xl focus:outline-none' type="text" name="search" id="" placeholder='Enter your name' required />
        </div>
        <div className='p-3 mt-2  border-2 border-gray rounded-lg w-full md:w-1/2 m-auto'>
          <input className='w-full text-xl focus:outline-none' type="mail" name="search" id="" placeholder='Enter your Email' required />
        </div>
        <div className='p-3 mt-2  border-2 border-gray rounded-lg w-full md:w-1/2 m-auto'>
          <input className='w-full text-xl focus:outline-none' type="number" name="search" id="" placeholder='Enter your Number' required />
        </div>
        <div className='p-3 mt-2  border-2 border-gray rounded-lg w-full md:w-1/2 m-auto'>
          <textarea className='w-full text-xl focus:outline-none' rows={4} type="number" name="search" id="" placeholder='Message' required></textarea>
        </div>
        <div className=' mt-2 w-full md:w-1/2 m-auto'>
          <button className=' font-bold text-white py-2 px-4 border-blue-700 rounded bg-blue-500 h-10 w-28 '>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default Contact
