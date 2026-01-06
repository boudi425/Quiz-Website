import { useNavigate, Link } from "react-router-dom";
export default function App() {
    const navigate = useNavigate();
    return ( 
    <div className="bg-amber-500">
        Sign Up Page
        <button onClick={() => navigate('/home')}>Go to Home</button>
        <button onClick={() => navigate('/play')}>Go to Play</button>
        <button onClick={() => navigate('/end')}>Go to End</button>
    </div>
    )
}