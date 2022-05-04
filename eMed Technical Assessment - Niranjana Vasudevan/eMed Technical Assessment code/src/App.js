import React from 'react';
import Index from './Home';
import Secondpage from './Secondpage';
import { Routes, Route } from 'react-router';



function App() {
  return (

    
    <div>
        <Routes>

<Route path="/" element={<Index/>} />

<Route path="/second" element={<Secondpage/>} />


</Routes>
         

      
    </div>
      
  );
}

export default App;