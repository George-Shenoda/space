import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Navbar from "./components/navbar";
import Dist from "./pages/dist";
import Crew from "./pages/crew";
import Tech from "./pages/tech";

export default function App() {
    return (
        <BrowserRouter>
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/destination" element={<Dist />} />
                <Route path="/crew" element={<Crew />} />
                <Route path="/technology" element={<Tech />} />
            </Routes>
        </BrowserRouter>
    );
}
