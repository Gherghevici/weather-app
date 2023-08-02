import React from 'react';
import Left from '../components/Left';
import Nav from '../components/Nav';
import SmallCard from '../components/SmallCard';
import BigCard from '../components/BigCard';

function App() {
  return (
    <>
      <main className='bg-gray-100/75 w-4/5 h-3/4 rounded-xl flex flex-row'>
      <Left/>
      <div className='flex flex-col justify-around px-6 w-4/5'>
        <Nav/>
        <SmallCard title='Luni' image='da' min={2} max={10}></SmallCard>
       <BigCard></BigCard>
      </div>
      
     

    </main>
    
    </>
    
  );
}

export default App;
