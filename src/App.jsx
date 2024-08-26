import { Routes, Route, useLocation } from "react-router-dom";
import Menu from "./components/menu/Menu";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Works from "./pages/works/Works";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  const showFooter = location.pathname !== "/";

  return (
    <>
      <Menu />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works />} />
        </Routes>
      </AnimatePresence>
      {showFooter && <Footer />}
    </>
  );
}

export default App;
