import React from 'react';
import { BrowserRouter, BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
return (
    <BrowserRouter>    
        <Router>
            <div>
                <Header />
                <Route exact path={["/", "/about", "/ReactPortfolio"]} component={About} />
                <Route exact path={"/projects"} component={Projects} />
                <Route exact path={"/contact"} component={Contact} />
                <Footer />
            </div>
        </Router>
    </BrowserRouter>
  );
}

export default App;