import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMagnifyingGlass,
  faLocationCrosshairs,
  faChartSimple,
} from '@fortawesome/free-solid-svg-icons';
import { CityApiCall, LatLongApiCall } from '../utils/api';


interface dataInterface {
  base: string;
  clouds: { all: number };
  cod: number;
  coord: { lon: number; lat: number };
  dt: number;
  id: number;
  main: {
    temp: number;
    feels_like: number;
    tempMin: number;
    tempMax: number;
    humidity: number;
    presure: number;
  };
  name: string;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  visibility: number;
  weather: [{ id: number; main: string; description: string; icon: string }];
  wind: { speed: number; deg: number };
}

interface props{
  metric:string,
  lat:number,
  long:number
}

const Left = (props:props) => {
  const [data, setData] = useState<dataInterface | null>();
  const [v,setV] = useState<string>(props.metric)
  const [time, setTime] = useState(new Date());
  const [city, setCity] = useState<string>('');
  
  console.log(data)
  

  //setting up data based of city name ->search btn
  const getData = async (city: string) => {
    try {
      const aux = await CityApiCall(city,props.metric);
      console.log(aux);
      if (aux.cod != 404) setData(aux);
      else throw new Error();
    } catch (err) {
      console.log(err);
    }
  };
  const latLong = async () => {
    const aux = await LatLongApiCall(props.lat, props.long,props.metric);
    setData(aux);
  };
  //api call to cel/far based of cords
  useEffect(() => {
    setV((prev)=>prev=props.metric);
    city.length===0?latLong():getData(city);
  }, [props.metric]);
  

  return (
    <section className="bg-red-100 w-1/3 rounded-l-xl flex flex-col justify-between px-6 py-10">
      <div className="flex justify-between items-center">
        <div className="flex gap-3">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="pt-1"
            onClick={() => city.length>0&&getData(city)}
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
          src={`https://openweathermap.org/img/wn/${data?.weather[0].icon}@4x.png`}
          alt="da"
        ></img>
      </div>

      <div>
        <p className="font-bold text-2xl">
          {data?.main.temp.toString().split('.')[0]} {v==="metric"?"C":"F"}&deg;
        </p>
        <div className="flex gap-3">
          <p>{time.toString().slice(0, 3)},</p>
          <p className="text-black/40">{time.toString().slice(15, 21)}</p>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between">
          <img
            className="w-1/4 h-1/4"
            src={`https://openweathermap.org/img/wn/${data?.weather[0].icon}@4x.png`}
            alt="da"
          ></img>
          <p>
            {data?.weather[0].description.toString()[0].toLocaleUpperCase()}
            {data?.weather[0].description.toString().slice(1)}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <FontAwesomeIcon
            icon={faChartSimple}
            className="w-10 h-10 rotate-180 text-blue-600"
          />
          <p>Humidity - {data?.main.humidity} %</p>
        </div>
      </div>
      <p className='flex justify-center'>{data?.name}</p>
    </section>
  );
};

export default Left;
