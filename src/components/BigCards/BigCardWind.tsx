import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCompass
} from '@fortawesome/free-solid-svg-icons';
interface IProps{
    title:string,
    windSpeed:string,
    deg:number|undefined
}

const BigCardWind = (props:IProps)=>{
    const directions = ["North", "North-West", "West", "South-West", "South", "South-East", "East", "North-East"];
    let deg = Number(props.deg);
    const index = Math.round((deg %= 360) < 0 ? deg + 360 : deg / 45) % 8;

    return(
        <div className='bg-gray-100 w-56 h-40 rounded-xl p-2 pl-4 flex flex-col justify-between'>
            <h3 className='text-black/40'>{props.title}</h3>
            <p className='text-4xl font-medium'>{props.windSpeed.split(" ")[0]} <span className='text-lg font-normal'>{props.windSpeed.split(" ")[1]}</span></p>
            <div className='flex items-center gap-5'>
                <FontAwesomeIcon icon={faCompass} className='text-xl' />
                <p className='text-xl'>{directions[index]}</p>
            </div>
        </div>
    )
}

export default BigCardWind;