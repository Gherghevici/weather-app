import React from 'react'

interface smallCard {
    time:string,
    title:string,
    image:string,
    max:number
}

const SmallCard = (props:smallCard)=>{
    return (
        <div className='bg-slate-300 flex flex-col items-center justify-around w-24  rounded-xl'>
            <div>{props.title}</div>
            <img className='w-1/2' src={`https://openweathermap.org/img/wn/${props.image}@4x.png`} alt='da'></img>
            <p className='text-black/40'>{props.time}</p>
            <div className='flex justify-around w-full '>
                <span><span className='text-sm'>Max</span> {props.max}&deg;</span>
            </div>
        </div>
    )
}

export default SmallCard;