import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FlighsPage from "./pages/FlightsPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<HomePage/>}/>
        <Route path="/tickets" element = {<FlighsPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
