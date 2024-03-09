
import './App.css';
import {Slider} from "@mui/material";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
      <Routes>
          <Route path={"/"} element={<Login/>}  />
          <Route path={"/dashboard"} element={<Home/>}  />
      </Routes>
  );
}

export default App;
