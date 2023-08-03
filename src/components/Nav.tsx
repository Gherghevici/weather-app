import React,{useState} from 'react'


interface props{
    passingMetric(val:string):any;
}
const Nav = (props:props)=>{
    const [celFar,setCelFar] = useState<string>("metric");
    props.passingMetric(celFar);
    return (
        <section className='flex justify-between px-6 pt-10'>
            <div className='flex gap-3 font-semibold text-xl'>
                <p className='cursor-pointer'>Today</p>
                <p className='cursor-pointer'>Week</p>
                <p className='cursor-pointer'>Map</p>
            </div>
            <div className='flex gap-3'>
                <p onClick={()=>setCelFar((prev)=>prev="metric")} className={`${celFar==="metric"?"bg-gray-800 text-gray-200":"bg-gray-50"}  drop-shadow-lg   w-8 h-8 flex items-center justify-center rounded-full font-medium cursor-pointer`}>&#8451;</p>
                <p onClick={()=>setCelFar((prev)=>prev="imperial")}className={`${celFar==="imperial"?"bg-gray-800 text-gray-200":"bg-gray-50"} w-8 h-8 flex items-center justify-center rounded-full font-medium cursor-pointer`}>&#8457;</p>
                <div className='bg-gray-50 w-20 h-8 rounded-xl flex items-center p-2 cursor-pointer '>
                    <span className='w-6 h-6 bg-red-400 rounded-full text-transparent transition-all duration-300 active:translate-x-10 dark:translate-x-10  '>a</span>{/* sa scot acitveul dupa ce bag dark mode */}
                </div>
            </div>
        </section>
    )
}

export default Nav;