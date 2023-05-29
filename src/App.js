import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FlighsPage from "./pages/FlightsPage";
import HotelPage from "./pages/HotelsPage";
import ItemHotel from "./components/ItemHotel";
import ItemFlight from "./components/ItemFlight";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<HomePage/>}/>
        <Route path="/tickets" element = {<FlighsPage/>}/>
        <Route path="/tickets/:destino" element = {<FlighsPage/>}/>
        <Route path="/destino/:id" element = {<ItemFlight/>}/>
        <Route path="/hotels" element = {<HotelPage/>}/>
        <Route path="/hotels/:destino" element = {<HotelPage/>}/>
        <Route path="/hotel/:id" element = {<ItemHotel/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
