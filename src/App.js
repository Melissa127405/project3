import './App.css';
import React, {useState} from'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Components/Header';
import Contactpage from './Pages/Contactpage';
import Groompage from './Pages/Groompage';
import Homepage from './Pages/Homepage';

function App() {
   return (

      <div className="App">
         <Header/>
         <Homepage />
         <Contactpage />
         <Groompage />
      
</div>
   
   );
  }

 
export default App;