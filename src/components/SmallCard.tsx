import React from 'react'

interface smallCard {
    title:string,
    image:string,
    min:number,
    max:number
}

const SmallCard = (props:smallCard)=>{
    return (
        <div className='bg-gray-100 flex flex-col items-center justify-around w-24 h-28 rounded-xl'>
            <div>{props.title}</div>
            <img src={props.image} alt='da'></img>
            <div className='flex justify-around w-full'>
                <span>{props.max}&deg;</span>
                <span className='text-black/40'>{props.min}&deg;</span>
            </div>
        </div>
    )
}

export default SmallCard;