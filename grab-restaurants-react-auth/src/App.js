import {BrowserRouter, Routes, Route} from "react-router-dom"
import Add from "./pages/Add"
import Update from "./pages/Update";
import Search from "./pages/Search";
import Restaurants from "./pages/Restaurants";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Navbar from "./components/NavBar";
import Profile from "./pages/Profile";
import AuthService from "./services/auth.service";
function App() {
  const currentUser = AuthService.getCurrentUser();
  const logOut = () =>{
    AuthService.logOut();
  }
  return (
    <BrowserRouter>
    <Navbar currentUser={currentUser} logOut={logOut}/>
    <div className="App">
    <Routes>
      <Route path="/" element={<Restaurants />}/>
      <Route path="/add" element={<Add />}/>
      <Route path="/search" element={<Search />}/>
      <Route path="/update/:restaurantId" element={<Update />}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/profile" element={<Profile/>}/>
    </Routes>  
    </div>
    </BrowserRouter>
  );
}

export default App;
