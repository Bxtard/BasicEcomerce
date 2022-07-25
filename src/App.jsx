import {BrowserRouter,Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/ProductDetail";
import About from "./pages/About";
import Error404 from "./pages/Error404";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Detail" element={<Detail />} />
        <Route path="/" element={<About />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
