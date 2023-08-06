import React from 'react'

interface IProps{
    title:string,
    visibility:string|undefined,
}
const BigCardVisibility = (props:IProps)=>{
    return(
        <div className='bg-gray-100 w-56 h-40 rounded-xl p-2 pl-4 flex flex-col justify-between'>
            <h3 className='text-black/40'>{props.title}</h3>
            <p className='text-4xl'>{Number(props.visibility?.split(" ")[0])/1000} <span className='text-sm'>{props.visibility?.split(" ")[1]}</span></p>
            <p>Good Visibility</p>
        </div>
    )
}

export default BigCardVisibility