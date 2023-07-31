import React from 'react'

const Nav = ()=>{
    return (
        <section className='flex w-4/6 justify-between px-6 py-10'>
            <div className='flex gap-3 font-semibold text-xl'>
                <p>Today</p>
                <p>Week</p>
                <p>Map</p>
            </div>
            <div className='flex gap-3'>
                <p className='bg-gray-800  drop-shadow-lg  text-gray-200 w-8 h-8 flex items-center justify-center rounded-full font-medium '>&#8451;</p>
                <p className='bg-gray-50 w-8 h-8 flex items-center justify-center rounded-full font-medium '>&#8457;</p>
                <div className='bg-gray-50 w-20 h-8 rounded-xl flex items-center p-2  '>
                    <span className='w-6 h-6 bg-red-400 rounded-full text-transparent transition-all duration-300 active:translate-x-10 dark:translate-x-10  '>a</span>{/* sa scot acitveul dupa ce bag dark mode */}
                </div>
            </div>
        </section>
    )
}

export default Nav;