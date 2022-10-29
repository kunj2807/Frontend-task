import React, {useState} from 'react'
import {Link} from "react-router-dom"
import Setting from './Setting';

function Home({ languages }) {
    const [language, setLanguage] = useState(languages[0])
    const [open,setOpen]=useState(false)
    const handleClick = (str) => {
        for (let index = 0; index < languages.length; index++) {
            if (languages[index].language === str) {
                setLanguage(languages[index]);
                break;
            }
        }
    }
    const { all, video, images, news, shopping } = language
    return (
        <div className='flex flex-col min-h-screen p-3' style={{"overflow":"hidden","position":"relative"}}>
            <div className="header mx-auto visible lg:invisible ">
                <svg className="MuiSvgIcon-root w-5 h-5 inline fill-blue-500 " focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71s-.51-.2-.71 0l-1.48 1.48C13.85 1.23 12.95 1 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31C6.97 3.26 6 5.01 6 7h12c0-1.99-.97-3.75-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z"></path></svg>
                <p className='inline text-blue-500 ml-2 font-bold'>Download App</p>
            </div>
            <div className="images">
                <div className="center flex justify-center ">
                    <img className=' w-56 mt-20 sm:mt-8 h-20 md:w-80 md:h-36' src="https://qmamu.com/static/media/qmamu.1f67baae.svg" alt="" />
                </div>
                <div className="boxes flex justify-center">
                    <div className="box mx-2 w-20">
                        <img className='w-8 h-8 m-auto ' src="https://qmamu.com/static/media/web.bc47ec9a.svg" alt="" />
                        <p className='text-center'>{all}</p>
                    </div>
                    <div className="box mx-2 w-20">
                        <img className='w-8 h-8 m-auto ' src="https://qmamu.com/static/media/images.622fbaa2.svg" alt="" />
                        <p className='text-center'>{images}</p>
                    </div>
                    <div className="box mx-2 w-20">
                        <img className='w-8 h-8 m-auto ' src="https://qmamu.com/static/media/videos.c9144333.svg" alt="" />
                        <p className='text-center' >{video}</p>
                    </div>
                    <div className="box mx-2 w-20">
                        <img className='w-8 h-8 m-auto ' src="https://qmamu.com/static/media/news.abff090e.svg" alt="" />
                        <p className='text-center'>{news}</p>
                    </div>
                    <div className="box mx-2x w-20">
                        <img className='w-8 h-8 m-auto ' src="https://qmamu.com/static/media/shopping.ab2f9e3e.svg" alt="" />
                        <p className='text-center'>{shopping}</p>
                    </div>
                </div>
                <div className="search border-2 mt-5 md:mx-auto flex justify-around border-gray hover:shadow-md shadow-black rounded-xl w-full md:w-650">
                    <div className='p-3 w-5/6 '>
                        <input className='w-full text-xl focus:outline-none' type="text" name="search" id="" placeholder='Search Qmamu' />
                    </div>
                    <button>
                        <img src="https://qmamu.com/static/media/voice.b7436dc4.svg" width={25} height={25} alt="" />
                    </button>
                    <button className='hidden md:block'>
                        <img src="https://qmamu.com/static/media/search_button_blue.1102fac3.svg" width={25} height={25} alt="" />
                    </button>
                </div>
                <div className='flex mt-5 lg:flex-row flex-col justify-center language-container'>
                    <div className='m-auto lg:m-0'>
                        <p>Languages:</p>
                    </div>
                    <div className="languages m-auto lg:m-0">
                        <button className='mx-1 text-sm hover:text-blue-700 hover:underline decoration-solid' onClick={() => { handleClick('Hindi') }}>हिन्दी</button>
                        <button className='mx-1 text-sm hover:text-blue-700 hover:underline decoration-solid' onClick={() => { handleClick('Bengali') }}>বাংলা</button>
                        <button className='mx-1 text-sm hover:text-blue-700 hover:underline decoration-solid' onClick={() => { handleClick('Telugu') }}>తెలుగు</button>
                        <button className='mx-1 text-sm hover:text-blue-700 hover:underline decoration-solid' onClick={() => { handleClick('Marathi') }}>मराठी</button>
                        <button className='mx-1 text-sm hover:text-blue-700 hover:underline decoration-solid' onClick={() => { handleClick('Tamil') }}>தமிழ்</button>
                        <button className='mx-1 text-sm hover:text-blue-700 hover:underline decoration-solid' onClick={() => { handleClick('Gujarati') }}>ગુજરાતી</button>
                        <button className='mx-1 text-sm hover:text-blue-700 hover:underline decoration-solid' onClick={() => { handleClick('Kannada') }}>ಕನ್ನಡ</button>
                        <button className='mx-1 text-sm hover:text-blue-700 hover:underline decoration-solid' onClick={() => { handleClick('Malyalam') }}>മലയാളം</button>
                        <button className='mx-1 text-sm hover:text-blue-700 hover:underline decoration-solid' onClick={() => { handleClick('Panjabi') }}>ਪੰਜਾਬੀ</button>
                        <button className='mx-1 text-sm hover:text-blue-700 hover:underline decoration-solid' onClick={() => { handleClick('English') }}>English</button>
                    </div>
                </div>
            </div>
            <footer className='flex flex-col md:flex-row justify-between border-t-2 border-gray p-2 mt-auto'>
                <div className='flex mx-auto mt-3  md:my-auto md:w-1/3'>
                    <img className='m-0 h-5 w-7 rounded-sm' src="/flag.png" alt="" />
                    <span className='ml-2'>Made in india</span>
                </div>
                <div className="social-media flex mt-3 mx-auto md:w-1/3">
                    <div className='w-10 flex justify-center  hover:bg-blue-100 rounded-md mx-1  hover:shadow-sm hover:shadow-black'>
                        <i className="fa-brands fa-facebook-f text-xl cursor-pointer text-blue-500"></i>
                    </div>
                    <div className='w-10 flex justify-center hover:bg-blue-100 rounded-md  mx-1 hover:shadow-sm hover:shadow-black'>
                        <i className="fa-brands fa-instagram  text-xl cursor-pointer text-blue-500"></i>
                    </div>
                    <div className='w-10 flex justify-center hover:bg-blue-100 rounded-md  mx-1 hover:shadow-sm hover:shadow-black'>
                        <i className="fa-brands fa-youtube  text-xl cursor-pointer text-blue-500"></i>
                    </div>
                    <div className='w-10 flex justify-center hover:bg-blue-100 rounded-md  mx-1 hover:shadow-sm hover:shadow-black'>
                        <i className="fa-brands fa-twitter  text-xl cursor-pointer text-blue-500"></i>
                    </div>
                    <div className='w-10 flex justify-center hover:bg-blue-100 rounded-md  mx-1 hover:shadow-sm hover:shadow-black'>
                        <i className="fa-brands fa-linkedin-in text-xl cursor-pointer text-blue-500"></i>
                    </div>
                </div>
                <div className="links mt-3 mx-auto md:my-auto ">
                    <ul className='flex'>
                        <li className='mx-2 text-sm hover:underline decoration-solid'><Link to='/about'>About</Link></li>
                        <li className='mx-2 text-sm hover:underline decoration-solid'><Link to='/privacy'>Privacy</Link></li>
                        <li className='mx-2 text-sm hover:underline decoration-solid'><Link to='/contact'>Contact</Link></li>
                        <li className='mx-2 text-sm hover:underline decoration-solid cursor-pointer' onClick={()=>{ setOpen(true)}}>Setting</li>
                    </ul>
                </div>
            </footer>

            <div className={`setting overflow-y-scroll  md:max-h-full ${open?'open':''} bg-white shadow-lg shadow-black rounded-lg`}>
                <Setting setOpen={setOpen} setLanguage={setLanguage} languages={languages}/>
            </div>
        </div>
    )
}

export default Home
