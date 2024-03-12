
import './App.css';
import {Slider} from "@mui/material";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import AddFlat from "./pages/AddFlat";
import Flats from "./pages/Flats";

function App() {
  return (
      <Routes>
          <Route path={"/"} element={<Login/>}  />
          <Route path={"/dashboard"} element={<Home/>}  />
          <Route path={"/flats"} element={<Flats/>}  />
          <Route path={"/flats/new"} element={<AddFlat/>}  />
      </Routes>
  );
}

export default App;
