import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import AIChatbot from "./components/AIChatbot";
import Login from "./admin/Login";
import Dashboard from "./dashboard/Dashboard";

const AppContent = () => {

    const location = useLocation();

    const hideLayout =
        location.pathname.startsWith("/dashboard")||
        location.pathname.startsWith("/admin");


    return (

    
        <>

            {!hideLayout && <Navbar />}
            {!hideLayout && <AIChatbot />}  

            <Routes>

                <Route path="/" element={<Home />} />

                <Route path="/about" element={<About />} />

                <Route path="/skills" element={<Skills />} />

                <Route path="/projects" element={<Projects />} />

                <Route path="/contact" element={<Contact />} />

                <Route path="/admin" element={<Login/>}/>

                <Route path="/dashboard/*" element={<Dashboard/>}/>

            </Routes>

        </>

    );

};

const App = () => {

    return (
        <BrowserRouter>
            <AppContent />
        </BrowserRouter>
    );
};

export default App;