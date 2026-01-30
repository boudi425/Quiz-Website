import { Routes, Route } from "react-router-dom";
import Sign from "./pages/signUp.tsx"
import Home from "./pages/Home.tsx"
import Quiz from "./pages/Quiz.tsx"
import Result from "./pages/Result.tsx"


export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Sign />} />
            <Route path="/home" element={<Home />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/result" element={<Result />} />
        </Routes>
    )
}