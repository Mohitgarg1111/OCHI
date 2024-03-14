import React from 'react'

function Cards() {
    return (
        // main div 
        <div className='w-full h-screen bg-zinc-800 flex items-center px-32 gap-5'>
            {/* 1st box for green card */}
            <div className="cardcontainer h-[50vh] w-1/2">
                {/* 1st card  */}
                <div className='card relative w-full rounded-xl h-full bg-[#004d43] flex items-center justify-center'>

                    <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                    <button className='absolute left-7 bottom-7 px-5 py-1 border-2  border-green-600 rounded-full'>&copy; 2019-2022</button>

                </div>

            </div>
            {/* 2nd main box for both cards */}
            <div className="cardcontainer flex gap-5 w-1/2 h-[50vh]">
                {/* 2nd card */}
                <div className='card relative flex items-center justify-center w-1/2 rounded-xl h-full bg-[#1b1b1b]'>

                    <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                    <button className='absolute left-7 bottom-7 px-5 py-1 border-2  border-zinc-100 rounded-full'>Rating 5.0 on clutch</button>

                </div>
                {/* 3rd card */}
                <div className='card relative flex items-center justify-center w-1/2 rounded-xl h-full bg-[#202020]'>

                    <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                    <button className='absolute left-7 bottom-7 px-5 py-1 border-2  border-zinc-100 rounded-full'>&copy; Business</button>

                </div>

            </div>

        </div>
    )
}

export default Cards
