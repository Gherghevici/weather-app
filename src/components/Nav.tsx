import React,{useEffect, useState} from 'react'
import {
    faBars,
    faX,
  } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface props{
    dayWeek:string,
    unitsType:string,
    gettingDayWeek(val:string):any,
    passingMetric(val:string):any;
}
const Nav = (props:props)=>{
    const[menuStatus,setMenuStatus] = useState("closed");
    const [windWidth,setWindowWidth] = useState(window.innerWidth)
    
    const menuStatusClickHandler = ()=>{
        menuStatus==="closed"?setMenuStatus((prev)=>prev="open"):setMenuStatus((prev)=>prev="closed");
    }

    useEffect(()=>{
        window.addEventListener('resize',()=>{
            setWindowWidth((prev)=>prev=window.innerWidth);
           
        })
    },[windWidth])

    return (
        windWidth>768?
        <section className='flex justify-between pt-5'>
            <div className='flex gap-3 font-semibold text-xl'>
                <p className={`cursor-pointer ${props.dayWeek=="day"?"underline underline-offset-2":""} `} onClick={()=>props.gettingDayWeek("day")}>Today</p>
                <p className={`cursor-pointer ${props.dayWeek=="week"?"underline underline-offset-2":""} `}onClick={()=>props.gettingDayWeek("week")}>Week</p>
            </div>
            <div className='flex gap-3'>
                <p onClick={()=>props.passingMetric("metric")} className={`${props.unitsType==="metric"?"dark:bg-indigo-400 bg-gray-800 text-gray-200":"dark:bg-slate-600/90 bg-gray-50"}  drop-shadow-lg   w-8 h-8 flex items-center justify-center rounded-full font-medium cursor-pointer`}>&#8451;</p>
                <p onClick={()=>props.passingMetric("imperial")}className={`${props.unitsType==="imperial"?"dark:bg-indigo-400 bg-gray-800 text-gray-200":"dark:bg-slate-600/90 bg-gray-50"} w-8 h-8 flex items-center justify-center rounded-full font-medium cursor-pointer`}>&#8457;</p>
                <div className='dark:bg-indigo-400 bg-gray-50  w-20 h-8 rounded-xl flex items-center p-2 cursor-pointer '>
                    <span onClick={()=>document.body.classList.toggle("dark")}className='w-6 h-6 dark:bg-slate-700 bg-orange-400 rounded-full text-transparent transition-all duration-300 active:translate-x-10 dark:translate-x-10  '>
                        <span className='w-1.5 h-1.5 dark:bg-white/90 rounded-full flex translate-x-1 translate-y-1.5 '>.</span>
                        <span className='w-1 h-1 dark:bg-white/90 rounded-full flex translate-x-4'>.</span>
                        <span className='w-2 h-2 dark:bg-white/90 rounded-full flex translate-x-3 translate-y-0.5  '>.</span>
                    </span>
                </div>
            </div>
        </section>
        :<section className='pt-5 w-full '>
            <div className='flex justify-between w-full'>
                <button onClick={menuStatusClickHandler} >{menuStatus==="closed"?<FontAwesomeIcon icon={faBars} size='xl' /> :<FontAwesomeIcon icon={faX} size='xl'/>}</button>
                <div className='dark:bg-indigo-400 bg-gray-50  w-20 h-8 rounded-xl flex items-center p-2 cursor-pointer '>
                        <span onClick={()=>document.body.classList.toggle("dark")}className='w-6 h-6 dark:bg-slate-700 bg-orange-400 rounded-full text-transparent transition-all duration-300 active:translate-x-10 dark:translate-x-10  '>
                            <span className='w-1.5 h-1.5 dark:bg-white/90 rounded-full flex translate-x-1 translate-y-1.5 '>.</span>
                            <span className='w-1 h-1 dark:bg-white/90 rounded-full flex translate-x-4'>.</span>
                            <span className='w-2 h-2 dark:bg-white/90 rounded-full flex translate-x-3 translate-y-0.5  '>.</span>
                        </span>
                </div>
            </div>
            
            {menuStatus==="open"? <div className='flex flex-col gap-2'>
                <div className='flex flex-col  font-semibold text-xl ml-10 pt-1'>
                    <p className={`cursor-pointer ${props.dayWeek=="day"?"underline underline-offset-2":""} `} onClick={()=>props.gettingDayWeek("day")}>Today</p>
                    <p className={`cursor-pointer ${props.dayWeek=="week"?"underline underline-offset-2":""} `}onClick={()=>props.gettingDayWeek("week")}>Week</p>
                </div>
                <div className='flex gap-2 ml-10'>
                    <p onClick={()=>props.passingMetric("metric")} className={`${props.unitsType==="metric"?"dark:bg-indigo-400 bg-gray-800 text-gray-200":"dark:bg-slate-600/90 bg-gray-50"}  drop-shadow-lg   w-8 h-8 flex items-center justify-center rounded-full font-medium cursor-pointer`}>&#8451;</p>
                    <p onClick={()=>props.passingMetric("imperial")}className={`${props.unitsType==="imperial"?"dark:bg-indigo-400 bg-gray-800 text-gray-200":"dark:bg-slate-600/90 bg-gray-50"} w-8 h-8 flex items-center justify-center rounded-full font-medium cursor-pointer`}>&#8457;</p>
                </div>
            </div>
            :null}
            
        </section>
    )
    
}

export default Nav;