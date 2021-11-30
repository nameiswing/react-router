import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Home from "./pages/Home";
import Team from './pages/Team';
import Example from "./pages/Example";

function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/contact" element={<Contact />} />
                <Route exact path="/team" element={<Team />} />
                <Route exact path="/faq" element={<FAQ />} />
                <Route exact path="/example" element={<Example />} />
            </Routes>
        </Router>
    );
}

export default App;
