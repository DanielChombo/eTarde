import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Opiniao from "./Opiniao";
import Sobre from "./Sobre";
import Login from "./Login";
import Conta from "./Conta";
import NavBar from "./NavBar";

function Rotas() {

    return (
        <BrowserRouter>
            <Routes>
                
                <Route path="/" element={<Home/>}/>
                <Route path="/opiniao" element={<Opiniao/>}/>
                <Route path="/sobre" element={<Sobre/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/conta" element={<Conta/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;