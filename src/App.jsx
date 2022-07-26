import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import About from "./pages/About";
import Error404 from "./pages/Error404";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ProductDetail/:id" element={<ProductDetail />} />
        <Route path="/About" element={<About />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
