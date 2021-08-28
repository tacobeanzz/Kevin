import "./App.css";
import Footer from "./Components/FooterNew/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/NavBar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;
