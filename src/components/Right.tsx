import React,{useState,useEffect} from "react";
import Nav from "../components/Nav";
import SmallCard from "../components/SmallCard";
import BigCard from "../components/BigCard";
import {CityApiCallFor5Days,LatLongApiCallFor5Days} from '../utils/api';
interface props {
  lat:number,
  long:number,
  city:string,
  unitsType:string,
  gettingCelFar(val: string): any
}

const Right = (props: props) => {
    const [data,setData] = useState<{}>();
    
 
    
    const getData = async (city: string) => {
        try {
          const aux = await CityApiCallFor5Days(city,props.unitsType);
          if (aux.cod != 404) setData((prev)=>prev=aux);
          else throw new Error();
        } catch (err) {
          console.log(err);
        }
      };

      const latLong = async () => {
        const aux = await LatLongApiCallFor5Days(props.lat, props.long,props.unitsType);
        setData((prev)=>prev=aux);
      };

    useEffect(()=>{
      latLong();
    },[])
    
  

  return (
    <div className="flex flex-col justify-between px-6 w-4/5">
      <Nav passingMetric={props.gettingCelFar} />
      <SmallCard title="da" image="da" min={2} max={10}></SmallCard>
      <BigCard></BigCard>
    </div>
  );
};

export default Right;
