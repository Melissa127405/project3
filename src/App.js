import './App.css';
import React from'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Main from './Components/Main';
import Contactpage from './Components/Pages/Contactpage';
import Groompage from './Components/Pages/Groompage';
import Homepage from './Components/Homepage';

function App() {
   return (
<BrowserRouter>
      <Header />
   <Routes>
    <Route path="/" element={<Main />}>
  <Route index element={<Homepage />} />
  <Route path="homepage" element={<Homepage />} />
  <Route path="contactpage" element={<Contactpage />} />
  <Route path="groompage" element={<Groompage />} />
   </Route>
  </Routes>
</BrowserRouter>
   );
}
     
export default App;