import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMagnifyingGlass,
  faLocationCrosshairs,
  faChartSimple,
} from '@fortawesome/free-solid-svg-icons';

interface props{
  icon:string|undefined,
  temp:number|undefined,
  units:string|undefined,
  time:string|undefined,
  description:string|undefined,
  humidity:number|undefined,
  name:string|undefined,
  gettingCity(val:string):any
}

const Left = (props:props) => {
  const [time, setTime] = useState(new Date());
  const [city, setCity] = useState<string>('');
  

  //handler for confirming search
  const setCityonClickHandler=()=>{
    if(city.length>0){
      props.gettingCity(city);
    }
   
  }


  return (
    <section className="bg-amber-200 w-1/3 rounded-l-xl flex flex-col justify-between px-6 py-10">
      <div className="flex justify-between items-center">
        <div className="flex gap-3">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="pt-1"
            onClick={setCityonClickHandler}
          />
          <input
            className="w-2/3 bg-transparent outline-none"
            placeholder="Search for places..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <FontAwesomeIcon icon={faLocationCrosshairs} />
      </div>
      <div className="flex items-center justify-center">
        <img
          className="w-2/4"
          src={`https://openweathermap.org/img/wn/${props.icon}@4x.png`}
          alt="da"
        ></img>
      </div>

      <div>
        <p className="font-bold text-2xl">
          {props.temp.toString().split('.')[0]} {props.units==="metric"?"C":"F"}&deg;
        </p>
        <div className="flex gap-3">
          <p>{props.time.slice(0, 3)},</p>
          <p className="text-black/40">{props.time.slice(15, 21)}</p>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between">
          <img
            className="w-1/4 h-1/4"
            src={`https://openweathermap.org/img/wn/${props.icon}@4x.png`}
            alt="da"
          ></img>
          <p>
            {props.description.toString()[0].toLocaleUpperCase()}
            {props.description.toString().slice(1)}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <FontAwesomeIcon
            icon={faChartSimple}
            className="w-10 h-10 rotate-180 text-blue-600"
          />
          <p>Humidity - {props.humidity} %</p>
        </div>
      </div>
      <p className='flex justify-center'>{props.name}</p>
    </section>
  );
};

export default Left;
