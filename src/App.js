
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import Service from "./pages/Service";

function App() {
  return (
    <>

      <Navbar />
      <Routes>
        <Route path="/" element={<Home></Home>}>
        </Route>
        <Route path="/about" element={<About></About>}>
        </Route>
        <Route path="/blogs" element={<Blogs></Blogs>}>
        </Route>
        <Route path="/services" element={<Service></Service>}>
        </Route>
      </Routes>
      <Footer />
    </>

  );
}

export default App;
