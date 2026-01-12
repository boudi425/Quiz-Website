import { Routes, Route } from "react-router-dom";
import Sign from "./pages/signUp.tsx"
import Home from "./pages/Home.tsx"
import Play from "./pages/Play.tsx"
import End from "./pages/End.tsx"


export default function App() {
    return (
        <Routes>
            <Route path="/sign" element={<Sign />} />
            <Route path="/home" element={<Home />} />
            <Route path="/play" element={<Play />} />
            <Route path="/end" element={<End />} />
        </Routes>
    )
}