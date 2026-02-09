import './App.css';
import React from'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Main from './components/Main';
import Contactpage from './components/Pages/Contactpage';
import Groompage from './components/Pages/Groompage';
import Homepage from './components/Homepage';

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