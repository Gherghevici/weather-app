import React,{useState,useEffect} from "react";
import Nav from "../components/Nav";
import SmallCard from "../components/SmallCard";
import BigCardWind from "./BigCards/BigCardWind";
import BigCardSunrise from "./BigCards/BigCardSunrise"
import {CityApiCallFor5Days,LatLongApiCallFor5Days} from '../utils/api';
import BigCardVisibility from "./BigCards/BigCardVisibility";

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
  }[],
  
}

interface IProps {
  data:IData|undefined,
  city:string,
  unitsType:string,
  gettingCelFar(val: string): any
}

const Right = (props: IProps) => {
    const [dayWeek,setDayWeek] = useState<string>("day");

    const gettingDayWeek=(val:string)=>{
      setDayWeek(val);
    }

  return (
    <div className="flex flex-col gap-5   px-6 dark:bg-gray-600  bg-gray-200 lg:w-4/5 lg:rounded-r-xl ">
      <Nav dayWeek={dayWeek} gettingDayWeek={gettingDayWeek} unitsType={props.unitsType} passingMetric={props.gettingCelFar} />
      <div className="flex flex-col sm:flex-row gap-5">
      {
        dayWeek=="day"?
        props.data?.list.map((val,index)=>{
        
          return(
            index<5?
            <span key={index} className="w-full flex sm:items-start items-start justify-center">
                <SmallCard time={val.dt_txt.split(" ")[1].slice(0,5).toString()} key={index} title={new Date(val.dt_txt).toString().slice(0,3)} image={val.weather[0].icon} max={Number(val.main.temp_max.toString().split(".")[0])}></SmallCard>
            </span>
            :
            null
          )
        }):dayWeek=="week"?
        props.data?.list.map((val,index)=>{
        
          return(
            val.dt_txt.toString().split(" ")[1].split(":")[0]==="12"?
            <span key={index} className="w-full flex items-center justify-center">
                <SmallCard key={index} time={val.dt_txt.split(" ")[1].slice(0,5).toString()} title={new Date(val.dt_txt).toString().slice(0,3)} image={val.weather[0].icon} max={Number(val.main.temp_max.toString().split(".")[0])}></SmallCard>
            </span>
            :
            null
          )
        }):
        null
      }
      
      </div>
      <h1 className="font-semibold text-2xl lg:text-xl flex justify-center md:justify-start">Today's Highlights</h1>
      <div className="flex flex-col gap-5 sm:flex-row items-center md:items-start ">
       <BigCardWind title="Wind Status" windSpeed={`${props.data?.list[0].wind.speed} km/h`} deg={props.data?.list[0].wind.deg}/>
       <BigCardSunrise title="Sunrise & Sunset" sunrise={props.data?.city.sunrise} sunset={props.data?.city.sunset} timezone={props.data?.city.timezone} />
      <BigCardVisibility title="Visibility" visibility={`${props.data?.list[0].visibility} km`}/>
      </div>
      
    </div>
  );
};

export default Right;
