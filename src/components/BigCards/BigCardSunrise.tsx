import Reac, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowUp
} from '@fortawesome/free-solid-svg-icons';
interface IProps{
    title:string,
    sunrise:number|undefined,
    sunset:number|undefined,
    timezone:number|undefined
}

const BigCardSunrise = (props:IProps)=>{   
    return(
        <div className='bg-gray-100 w-56 h-40 rounded-xl p-2 pl-4 flex flex-col justify-between'>
            <h3 className='text-black/40'>{props.title}</h3>
            <div className='flex flex-col justify-around h-3/4'>
                <div className='flex gap-3'>
                <p className=' w-5 h-5 rounded-full p-4 flex justify-center items-center bg-orange-500 '><FontAwesomeIcon icon={faArrowUp} className='text-black/40'/></p>
                <p>{new Date(Number(props.sunrise)+Number(props.timezone)*60000).toString().slice(15,21)}</p>
                </div>
                <div className='flex gap-3'>
                <p className='w-5 h-5 rounded-full p-4 flex justify-center items-center bg-orange-500'><FontAwesomeIcon icon={faArrowUp} className='rotate-180 text-black/40'/></p>
                <p>{new Date(Number(props.sunset)+Number(props.timezone)*60000).toString().slice(15,21)}</p>
                </div>
            </div>
        </div>
    )
}

export default BigCardSunrise;