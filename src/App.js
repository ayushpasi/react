import Home from "./components/Home";
import About from "./components/About";
import Admin from "./components/Admin";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    //rendring the component
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />
          <Route
            path="*"
            element={
              <h1 style={{ textAlign: "center", color: "green" }}>
                404 Not Found
              </h1>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
