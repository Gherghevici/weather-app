import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMagnifyingGlass,
  faLocationCrosshairs,
  faChartSimple,
} from '@fortawesome/free-solid-svg-icons';
interface IData {
  city:{
    coord:{lat:number,lon:number},
   country:string,
    id:number,
    name:string,
    population:number,
    sunrise:number,
    sunset:number,
    timezone:number,
  }
  cnt:number,
  cod:string,
  list:{
    clouds:{all:number},
    dt:number,
    dt_txt:string,
    main:{feels_like:number,grnd_level:number,humidity:number,pressure:number,sea_level:number,temp:number,temp_kf:number,temp_max:number,temp_min:number},
    pop:number,
  sys:{pod:string},
  visibility:number,
  weather:[{description:string,icon:string,id:number,main:string}],
  wind:{deg:number,gust:number,speed:number}
  }[]
  
}

interface IProps{
  data:IData|undefined,
  units:string,
  gettingCity(val:string):any
}

const Left = (props:IProps) => {
  const [time, setTime] = useState(new Date());
  const [city, setCity] = useState<string>('');
  

  //handler for confirming search
  const setCityonClickHandler=()=>{
    if(city.length>0){
      props.gettingCity(city);
    }
   
  }


  return (
    <section className="dark:bg-slate-600/95 bg-slate-300/90  w-full h-auto md:w-1/4 rounded-l-xl flex flex-col justify-between px-6 py-5">
      <div className="flex justify-between items-center p-2 rounded-xl" id='searchBar'>
        <div className="flex gap-3" >
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="pt-1 cursor-pointer"
            onClick={setCityonClickHandler}
            
          />
          <input
            className="w-2/3 bg-transparent outline-none "
            placeholder="Search for places..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
            
          />
        </div>
        <FontAwesomeIcon icon={faLocationCrosshairs}  />
      </div>
      <div className="flex items-center justify-center">
        <img
          className="w-2/4 "
          src={`https://openweathermap.org/img/wn/${props.data?.list[0].weather[0].icon}@4x.png`}
          alt="da"
        ></img>
      </div>

      <div>
        <p className="font-bold text-2xl ">
          {props.data?.list[0].main.temp.toString().split('.')[0]} {props.units==="metric"?"C":"F"}&deg;
        </p>
        <div className="flex gap-3">
          <p>{new Date(`${props.data?.list[0].dt_txt}`).toString().slice(0,3)},</p>
          <p className="dark:text-slate-100/60 text-black/40"> {new Date().toString().slice(15,21)}</p>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between">
          <img
            className="w-1/4 h-1/4"
            src={`https://openweathermap.org/img/wn/${props.data?.list[0].weather[0].icon}@4x.png`}
            alt="da"
          ></img>
          <p>
            {props.data?.list[0].weather[0].description.toString()[0].toLocaleUpperCase()}
            {props.data?.list[0].weather[0].description.toString().slice(1)}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <FontAwesomeIcon
            icon={faChartSimple}
            className="w-10 h-10 rotate-180 text-blue-600"
          />
          <p>Humidity - {props.data?.list[0].main.humidity} %</p>
        </div>
      </div>
      <div className='flex justify-center items-center'>
        <p className='flex justify-center w-4/5 dark:bg-indigo-400 bg-slate-100 rounded-xl p-2 tracking-widest font-semibold text-lg shadow-inner border-2 border-black/20'>{props.data?.city.name}</p>
      </div>
      
    </section>
  );
};

export default Left;
