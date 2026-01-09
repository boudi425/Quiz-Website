import { useNavigate, Link, useLocation } from "react-router-dom"; 

export default function Home() {
    const location = useLocation();
    console.log("Home Page Loaded");
    console.log("Home Page Loaded");
    console.log(`The Data Give: ${location.state}`);
    return (
        <div className="bg-green-500">
            Home Page
        </div>
    )
}