import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Patients from "./Pages/Patients";

export default function App() {
    return (
        <Routes>
            {/* Layout wrapper */}
            <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/patients" element={<Patients />} />
            </Route>
        </Routes>
    );
}
