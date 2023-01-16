import {BrowserRouter, Routes, Route} from "react-router-dom"
import Add from "./pages/Add"
import Update from "./pages/Update";
import Search from "./pages/Search";
import Restaurants from "./pages/Restaurants";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <div className="App">
    <Routes>
      <Route path="/" element={<Restaurants />}/>
      <Route path="/add" element={<Add />}/>
      <Route path="/search" element={<Search />}/>
      <Route path="/update/:restaurantId" element={<Update />}/>
      <Route path="/register" element={<Register/>}/>
    </Routes>  
    </div>
    </BrowserRouter>
  );
}

export default App;
