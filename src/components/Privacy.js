import React from 'react'

function Privacy() {
    return (
        <div className='flex flex-col'>
            <h1 className='text-center text-xl font-bold my-7'>Privacy Policy</h1>
            <div className=' mx-4 md:w-600  md:m-auto'>
                <b><h1 className=' bg-gray-100 p-2 rounded-lg'>Application</h1></b>
                <p>
                This Privacy Policy describes Our policies and rules of services we provide, use and disclosure of your information when you use the Service and tells you about your privacy rights and how the law protects you.
                </p>
            </div>
            <div className=' mx-4 md:w-600 mt-10 md:mx-auto'>
                <b><h1 className=' bg-gray-100 p-2 rounded-lg'>Security of Your Personal Data</h1></b>
                <p>
                The security of your personal data is very important to us, but no source or services on the internet can be 100% secure. While We strive to use commercially acceptable means to protect the Personal Data of you, we cannot guarantee absolute security of it.
                </p>
               
            </div>
            <div className=' mx-4 md:w-600 mt-10 md:mx-auto'>
                <b><h1 className=' bg-gray-100 p-2 rounded-lg'>Changes to this Privacy Policy</h1></b>
                <p>
                We may update our privacy policy on time. We will notify every update on this page.
                </p>
                <p className='pt-4'>We will let you know about the changes through email or you can check it on the “last updated” section given at the top</p>
                <p>
                You advise you to review this Privacy Policy periodically for any changes made. Changes and updates to this Privacy Policy are effective when they are posted on this page.
                </p>
            </div>
        </div>
    )
}

export default Privacy
