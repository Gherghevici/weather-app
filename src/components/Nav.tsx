import React,{useState} from 'react'


interface props{
    dayWeek:string,
    unitsType:string,
    gettingDayWeek(val:string):any,
    passingMetric(val:string):any;
}
const Nav = (props:props)=>{
    
    return (
        <section className='flex justify-between pt-5'>
            <div className='flex gap-3 font-semibold text-xl'>
                <p className={`cursor-pointer ${props.dayWeek=="day"?"underline underline-offset-2":""} `} onClick={()=>props.gettingDayWeek("day")}>Today</p>
                <p className={`cursor-pointer ${props.dayWeek=="week"?"underline underline-offset-2":""} `}onClick={()=>props.gettingDayWeek("week")}>Week</p>
                <p className={`cursor-pointer ${props.dayWeek=="map"?"underline underline-offset-2":""}`} onClick={()=>props.gettingDayWeek("map")}>Map</p>
            </div>
            <div className='flex gap-3'>
                <p onClick={()=>props.passingMetric("metric")} className={`${props.unitsType==="metric"?"bg-gray-800 text-gray-200":"bg-gray-50"}  drop-shadow-lg   w-8 h-8 flex items-center justify-center rounded-full font-medium cursor-pointer`}>&#8451;</p>
                <p onClick={()=>props.passingMetric("imperial")}className={`${props.unitsType==="imperial"?"bg-gray-800 text-gray-200":"bg-gray-50"} w-8 h-8 flex items-center justify-center rounded-full font-medium cursor-pointer`}>&#8457;</p>
                <div className='bg-gray-50 w-20 h-8 rounded-xl flex items-center p-2 cursor-pointer '>
                    <span className='w-6 h-6 bg-red-400 rounded-full text-transparent transition-all duration-300 active:translate-x-10 dark:translate-x-10  '>a</span>{/* sa scot acitveul dupa ce bag dark mode */}
                </div>
            </div>
        </section>
    )
}

export default Nav;