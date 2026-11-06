import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/home";
import About from "./pages/about";
import './App';

function App() {
  return (
    <div className="fundraise-page">
      <BrowserRouter>

        <main className="site" id="content">
          <span className="ring ring-left" aria-hidden="true" />
          <span className="ring ring-right" aria-hidden="true" />
          
          <Header />

          <div className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
          
          <Footer />
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
