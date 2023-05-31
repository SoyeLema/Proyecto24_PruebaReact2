import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "./Context";

import './App.css'

import Navbar from "./components/Navbar";

import Home from "./views/Home";
import Carrito from "./views/Carrito";
import Pizza from "./views/Pizza";

function App() {


  return (
    <div>
      <BrowserRouter>
        <Provider >
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/pizza/:id" element={<Pizza />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </div>
  )
}

export default App
