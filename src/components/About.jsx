import React from 'react'

function About() {
    return (
        <div className='w-full p-20 bg-[#cdea68] rounded-tl-3xl rounded-tr-3xl text-black'>
            <h1 className='font-["Neue_Montreal"] text-[3.5vw] leading-[3.5vw] tracking-tight'>
                Ochi is a strategic partner for fast growing tech businesses that need to raise funds, sell products , explain complex ideas, and hire great people.
            </h1>

            <div className='w-full flex gap-5 border-t-[1px] pt-10 mt-20 border-[#a1b562]'>
                <div className='w-1/2'>

                    <h1 className='text-7xl'>Our Approach</h1>
                    <button className='flex uppercase gap-10 items-center px-9 py-5 bg-zinc-900 mt-10 rounded-full text-white'>
                        Read More
                        <div className='w-3 h-3 rounded-full bg-zinc-100'></div>
                    </button>

                </div>

                <div className='w-1/2 h-[65vh] rounded-3xl bg-[#92ba25]'></div>
            </div>
        </div>
    )
}

export default About
