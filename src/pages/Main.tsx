import React, { useEffect,useState } from 'react';
import Left from '../components/Left';
import Nav from '../components/Nav';
import SmallCard from '../components/SmallCard';
import BigCard from '../components/BigCard';
import Right from '../components/Right';
import {CityApiCallFor5Days,LatLongApiCallFor5Days} from '../utils/api';

interface data {
  coord:{lat:number,lon:number},
  country:string,
  id:number,
  name:string,
  population:number,
  sunrize:number,
  sunset:number,
  timezone:number,
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
  weather:[{description:string,icon:string,id:number,main:string}]
  length:number
  }[],
  
}

function App() {
  const [data,setData] = useState<data>();
  const [city,setCity] = useState<string>("");
  const [celFar,setCelFar] = useState<string>("metric");
  const [lat, setLat] = useState<number>(Number(window.localStorage.getItem('lat')));
  const [long, setLong] = useState<number>(Number(window.localStorage.getItem('long')));
  //setting global values
  const gettingCelFar=(val:string)=>{
    setCelFar(val);
  }
  const gettingCity=(val:string)=>{
    setCity(val);
  }
  console.log(data);
  //Get current location via geo location!
  const getLocalCity = (pos: GeolocationPosition) => {
    window.localStorage.setItem('lat', `${pos.coords.latitude}`);
    window.localStorage.setItem('long', `${pos.coords.longitude}`);
  };
  navigator.geolocation.getCurrentPosition(getLocalCity);
 
  
  //get data
  const getData = async (city: string) => {
    try {
      const aux = await CityApiCallFor5Days(city,celFar);
      if (aux.cod != 404) setData((prev)=>prev=aux);
      else throw new Error();
    } catch (err) {
      console.log(err);
    }
  };

  const latLong = async () => {
    const aux = await LatLongApiCallFor5Days(lat,long,celFar);
    setData((prev)=>prev=aux);
  };
  //api call to cel/far based of cords
  useEffect(() => {
    city.length===0?latLong():getData(city);
  }, [data]);
  


  return (
    <>
      <main className='bg-gray-100/75 w-4/5 h-3/4 rounded-xl flex flex-row'>
      <Left description={data?.list[0].weather[0].description} humidity={data?.list[0].main?.humidity} icon={data?.list[0].weather[0].icon} name={data?.name} temp={data?.list[0].main?.temp} time={data?.list[0].dt_txt} units={celFar} gettingCity={gettingCity} />
     { data?<Right lat={lat} long={long} unitsType={celFar} city={city} gettingCelFar={gettingCelFar}></Right>:null}
    </main>
    
    </>
    
  );
}

export default App;
