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
      if (aux.cod != 404) {
        setData((prev)=>prev=aux)
        document.getElementById("searchBar")?.classList.remove(...["border-2","border-red-700","transition-all","duration-75","animate-pulse"])
      }
      else throw new Error();
    } catch (err) {
      console.log(err);
      document.getElementById("searchBar")?.classList.add(...["border-2","border-red-700","transition-all","duration-75","animate-pulse"])
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
      <main className='dark:bg-gray-600/80 bg-gray-100/75 dark:text-slate-100/90 w-full h-full lg:w-4/5 lg:h-4/5 2xl:w-3/4 2xl:h-3/4 lg:rounded-xl flex flex-col sm:flex-row  lg:border-2  border-black/30 '>
      <Left data={data} units={celFar} gettingCity={gettingCity} />
      <Right  data={data}unitsType={celFar} city={city} gettingCelFar={gettingCelFar}></Right>
    </main>
    
    </>
    
  );
}

export default App;
