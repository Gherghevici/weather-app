import React, { useEffect,useState } from 'react';
import Left from '../components/Left';
import Nav from '../components/Nav';
import SmallCard from '../components/SmallCard';
import BigCard from '../components/BigCards/BigCardWind';
import Right from '../components/Right';
import {CityApiCallFor5Days,LatLongApiCallFor5Days} from '../utils/api';

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

function App() {
  const [data,setData] = useState<IData>();
  const [city,setCity] = useState<string>("");
  const [celFar,setCelFar] = useState<string>("metric");
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
    const aux = await LatLongApiCallFor5Days(Number(window.localStorage.getItem('lat')),Number(window.localStorage.getItem('long')),celFar);
    setData((prev)=>prev=aux);
  };
  //api call to cel/far based of cords
  useEffect(() => {
    city.length===0?latLong():getData(city);
  }, [city,celFar]);
  


  return (
    
    <>
      <main className='bg-gray-100/75 w-4/5 h-4/5 rounded-xl flex flex-row border-2 border-black/30'>
      <Left data={data} units={celFar} gettingCity={gettingCity} />
      <Right  data={data}unitsType={celFar} city={city} gettingCelFar={gettingCelFar}></Right>
    </main>
    
    </>
    
  );
}

export default App;
