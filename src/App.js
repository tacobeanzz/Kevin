import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./Components/NavBar/Navbar";
import Footer from "./Components/FooterNew/Footer";
import home from "./Pages/home";
import aboutpage from "./Pages/aboutpage";
import NotFound from "./Pages/NotFound";
import contact from "./Pages/contact";
import portfolio from "./Pages/portfolio";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={home} />
          <Route path="/about" component={aboutpage} />
          <Route path="/contact" component={contact} />
          <Route path="/portfolio" component={portfolio} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
