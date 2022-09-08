import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div>
            <footer className=' bg-cyan-50 flex flex-col justify-center md:flex-row p-2'>
                <div className='flex m-auto  md:my-auto'>
                    <Link to="/">
                        <img className='h-16 w-32 rounded-sm' src="https://qmamu.com/static/media/qmamu.1f67baae.svg" alt="" />
                    </Link>
                </div>
                <div className="links m-auto md:w-1/12 ">
                    <ul className='flex'>
                        <li className='mx-3 text-sm active:text-blue-500 text-md '><Link to='/about'>About</Link></li>
                        <li className='mx-3 text-sm active:text-blue-500 text-md'><Link to='/privacy'>Privacy</Link></li>
                        <li className='mx-3 text-sm active:text-blue-500 text-md'><Link to='/contact'>Contact</Link></li>
                    </ul>
                </div>
                <div className="social-media  m-auto hidden md:flex">
                    <div className='w-10 flex justify-center rounded-md  mx-1 bg-cyan-100'>
                        <i className="fa-brands fa-facebook-f text-xl cursor-pointer text-blue-500"></i>
                    </div>
                    <div className='w-10 flex justify-center rounded-md  mx-1 bg-cyan-100'>
                        <i className="fa-brands fa-instagram  text-xl cursor-pointer text-blue-500"></i>
                    </div>
                    <div className='w-10 flex justify-center rounded-md  mx-1 bg-cyan-100'>
                        <i className="fa-brands fa-youtube  text-xl cursor-pointer text-blue-500"></i>
                    </div>
                    <div className='w-10 flex justify-center rounded-md  mx-1 bg-cyan-100'>
                        <i className="fa-brands fa-twitter  text-xl cursor-pointer text-blue-500"></i>
                    </div>
                    <div className='w-10 flex justify-center rounded-md  mx-1 bg-cyan-100'>
                        <i className="fa-brands fa-linkedin-in text-xl cursor-pointer text-blue-500"></i>
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default Header
