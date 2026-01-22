import { useLocation } from "react-router-dom";
import  ProgressCircle from "../components/scoreCircle.tsx";
export default function End() {
    const location = useLocation();
    return <div className="bg-green-500">
            {JSON.stringify(location.state.userAnswers)};
            <ProgressCircle />
        </div>
}