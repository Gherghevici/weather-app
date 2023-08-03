import React, { useEffect,useState } from 'react';
import Left from '../components/Left';
import Nav from '../components/Nav';
import SmallCard from '../components/SmallCard';
import BigCard from '../components/BigCard';


function App() {
  const [celFar,setCelFar] = useState<string>("metric");
  const [lat, setLat] = useState<number>(0);
  const [long, setLong] = useState<number>(0);
  
  //Get current location via geo location!
  const getLocalCity = (pos: GeolocationPosition) => {
    window.localStorage.setItem('lat', `${pos.coords.latitude}`);
    window.localStorage.setItem('long', `${pos.coords.longitude}`);
  };
  navigator.geolocation.getCurrentPosition(getLocalCity);
  useEffect(() => {
    if (lat === 0 && long === 0) {
      setLat((prev) => (prev = Number(window.localStorage.getItem('lat'))));
      setLong((prev) => (prev = Number(window.localStorage.getItem('long'))));
    }
  }, [lat,long]);

  //setting global celFar value
  const gettingCelFar=(val:string)=>{
    setCelFar(val);
  }

  return (
    <>
      <main className='bg-gray-100/75 w-4/5 h-3/4 rounded-xl flex flex-row'>
      <Left metric={celFar} lat={lat} long={long}/>
      <div className='flex flex-col justify-between px-6 w-4/5'>
        <Nav passingMetric={gettingCelFar}/>
        <SmallCard title='Luni' image='da' min={2} max={10}></SmallCard>
       <BigCard></BigCard>
      </div>
      
     

    </main>
    
    </>
    
  );
}

export default App;
