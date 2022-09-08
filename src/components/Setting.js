import React, { useEffect,useRef } from 'react'


function Setting({setOpen,setLanguage,languages,language}) {
    const ref=useRef()
    const handleChange=(e)=>{
        const value=e.target.value
        for (let index = 0; index < languages.length; index++) {
            if(languages[index].language===value){
                setLanguage(languages[index])
            }
        }
        ref.current.click()
    }

    return (
        <div className='mx-12 bg-white'>
            <div className="head flex mt-5 ">
                <div className='bg-gray-300 inline-block rounded-md h-10 w-10 flex justify-center ml-5  p-2'>
                    <i className="fa-solid fa-xmark text-xl cursor-pointer" ref={ref} onClick={()=>{setOpen(false)}}></i>
                </div>
                <button className='font-bold text-white py-2 px-4 border-blue-700 ml-5 rounded bg-blue-500 h-10 w-28 '>Setting</button>
                <div className='border-r-2 border-gray ml-5 '></div>
                <div className='ml-5 my-auto '>
                    <p>Search History</p>
                </div>
            </div>
            <div className='border-2 bg-gray-50 border-gray rounded-md flex justify-between h-16 mt-5'>
                <h1 className='font-bold text-xl my-auto mx-2 '>Setting</h1>
                <button className='font-bold text-white py-2 px-4 border-blue-700 my-auto  ml-5 rounded-lg bg-blue-500 h-10 w-40 mr-3'>Reset all Setting</button>
            </div>
            <div className='border-2 border-gray rounded-md mt-5 '>
                <div className='border-b-2 border-gray flex bg-gray-50 h-16 '>
                    <h1 className='font-bold text-xl my-auto mx-2'>Interface</h1>
                </div>
                <div className="selector flex flex-col mt-5 p-2 ">
                    <div className='flex  justify-between '>
                        <span>Display Language</span>
                        <select className='mr-3 p-1 border-2 border-gray rounded-md w-36' name="language" id="language" onChange={handleChange}>
                            <option value="English">English</option>
                            <option value="Hindi">Hindi</option>
                            <option value="Bengali">Bengali</option>
                            <option value="Telugu">Telugu</option>
                            <option value="Marathi">Marathi</option>
                            <option value="Tamil">Tamil</option>
                            <option value="Gujarati">Gujarati</option>
                            <option value="Kannada">Kannada</option>
                            <option value="Malyalam">Malyalam</option>
                            <option value="Panjabi">Panjabi</option>
                        </select>
                    </div>
                    <div className='flex mt-4 justify-between'>
                        <span>Display Mode</span>
                        <select className='mr-3 p-1 border-2 border-gray rounded-md w-36' name="mode" id="">
                            <option value="Auto">Auto</option>
                            <option value="dark">Dark</option>
                            <option value="Light">Light</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className='border-2 border-gray rounded-md mt-5 '>
                <div className='border-b-2 border-gray flex bg-gray-50 h-16 '>
                    <h1 className='font-bold text-xl my-auto mx-2'>Search Result</h1>
                </div>
                <div className="selector flex flex-col mt-5 p-2 ">
                    <div className='flex  justify-between '>
                        <span>Country</span>
                        <select className='mr-3 p-1 border-2 border-gray rounded-md w-36' name="language" id="">
                            <option value="All Country">All Country</option>
                            <option value="Afghanistan">Afghanistan</option>
                            <option value="Albania">Albania</option>
                            <option value="Algeriya">Algeriya</option>
                            <option value="Andorra">Andorra</option>
                            <option value="Gujarati">Bharain</option>
                            <option value="Bharain">Bangladesh</option>
                            <option value="Belarus">Belarus</option>
                            <option value="Benin">Benin</option>
                            <option value="Canada">Canada</option>
                            <option value="Cape varde">Cape varde</option>
                            <option value="Chad">Chad</option>
                            <option value="Chile">Chile</option>
                            <option value="Cuba">Cuba</option>
                        </select>
                    </div>
                    <div className='flex mt-4 justify-between'>
                        <span>Search language</span>
                        <select className='mr-3 p-1 border-2 border-gray rounded-md w-36' name="mode" id="">
                        <option value="English">English</option>
                            <option value="Hindi">Hindi</option>
                            <option value="Bengali">Bengali</option>
                            <option value="Telugu">Telugu</option>
                            <option value="Marathi">Marathi</option>
                            <option value="Tamil">Tamil</option>
                            <option value="Gujarati">Gujarati</option>
                            <option value="Kannada">Kannada</option>
                            <option value="Malyalam">Malyalam</option>
                            <option value="Panjabi">Panjabi</option>
                        </select>
                    </div>
                    <div className='flex mt-4 justify-between'>
                        <span>Result per page</span>
                        <select className='mr-3 p-1 border-2 border-gray rounded-md w-36' name="mode" id="">
                            <option value="dark">10</option>
                            <option value="Light">20</option>
                        </select>
                    </div>
                    <div className='flex mt-4 justify-between'>
                        <span>Open search in neew tab</span>
                        <div className="flex justify-center mr-3">
                            <label className="switch">
                                <input type="checkbox" />
                                <span className="slider round"></span>
                            </label>
                        </div>
                    </div>
                    <div className='flex mt-4 justify-between'>
                        <span>Safe search</span>
                        <div className="flex justify-center mr-3">
                            <label className="switch">
                                <input type="checkbox" />
                                <span className="slider round"></span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div className='border-2 border-gray rounded-md mt-5 '>
                <div className='border-b-2 border-gray flex bg-gray-50 h-16 '>
                    <h1 className='font-bold text-xl my-auto mx-2'>General</h1>
                </div>
                <div className="selector flex flex-col mt-2 p-2 ">
                    <div className='flex mt-4 justify-between'>
                        <span>Search suggestion</span>
                        <div className="flex justify-center mr-3">
                            <label className="switch">
                                <input type="checkbox" checked />
                                <span className="slider round"></span>
                            </label>
                        </div>
                    </div>
                    <div className='flex mt-4 justify-between'>
                        <span>Voice search</span>
                        <div className="flex justify-center mr-3">
                            <label className="switch">
                                <input type="checkbox" checked/>
                                <span className="slider round"></span>
                            </label>
                        </div>
                    </div>
                    <div className='flex mt-4 justify-between'>
                        <span>Search history</span>
                        <div className="flex justify-center mr-3">
                            <label className="switch">
                                <input type="checkbox" checked/>
                                <span className="slider round"></span>
                            </label>
                        </div>
                    </div>
                </div >

            </div >

        </div >
    )
}

export default Setting
