import Home from "./pages/Home";
import Kosnica from "./pages/Kosnica";
import Login from "./pages/Login";
import Produkti from "./pages/Produkti";
import Registracija from "./pages/Registracija";

import { BrowserRouter, Routes, Route } from "react-router-dom";

// Link needs to be imported from react-router-dom to
//  render the client side without reloading the page

const App = () => {
  return (
    <BrowserRouter basename={window.location.pathname || ""}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Kosnica />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Produkti />} />
        <Route path="/register" element={<Registracija />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
