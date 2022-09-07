import React from 'react'

function Home() {
    return (
        <div>
            <div className="header m-3 isible lg:invisible ">
                <svg className="MuiSvgIcon-root w-5 h-5 inline fill-blue-500 " focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71s-.51-.2-.71 0l-1.48 1.48C13.85 1.23 12.95 1 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31C6.97 3.26 6 5.01 6 7h12c0-1.99-.97-3.75-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z"></path></svg>
                <p className='inline text-blue-500 ml-2 font-bold'>Download App</p>
            </div>
            <div className="languages">
                <div className="center flex justify-center ">
                    <img className='my-2 w-80 h-36' src="https://qmamu.com/static/media/qmamu.1f67baae.svg" alt="" />
                </div>
                <div className="boxes flex justify-center">
                    <div className="box w-20">
                        <img className='w-7 h-7 m-auto ' src="https://qmamu.com/static/media/web.bc47ec9a.svg" alt="" />
                        <p><b>All</b></p>
                    </div>
                    <div className="box w-20">
                        <img className='w-7 h-7 m-auto ' src="https://qmamu.com/static/media/images.622fbaa2.svg" alt="" />
                        <p><b>Images</b></p>
                    </div>
                    <div className="box w-20">
                        <img className='w-7 h-7 m-auto ' src="https://qmamu.com/static/media/videos.c9144333.svg" alt="" />
                        <p><b>Video</b></p>
                    </div>
                    <div className="box w-20">
                        <img className='w-7 h-7 m-auto ' src="https://qmamu.com/static/media/news.abff090e.svg" alt="" />
                        <p><b>News</b></p>
                    </div>
                    <div className="box w-20">
                        <img className='w-7 h-7 m-auto ' src="https://qmamu.com/static/media/shopping.ab2f9e3e.svg" alt="" />
                        <p><b>Shopping</b></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
