import './App.css';
import React from'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Main from './Components/Main';
import Contactpage from './Components/Pages/Contactpage';
import Groompage from './Components/Pages/Groompage';
import Homepage from './Components/Pages/Homepage';

function App() {
   

   return (
      <BrowserRouter>
  <Header />   

 <Routes>
    <Route path="/" element={<Main />} />
    <Route path="/contactpage" element={<Contactpage />} />
    <Route path="/groompage" element={<Groompage />} />
    <Route path="/homepage" element={<Homepage />} />
  </Routes>
</BrowserRouter>
   );
}
     
export default App;