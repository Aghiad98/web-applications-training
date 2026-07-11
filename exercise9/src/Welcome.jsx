import { useNavigate } from "react-router-dom";
import './Welcome.css';
function Welcome() {

    const navigate = useNavigate();

    function handleWelcome() {
        navigate("/Signup");
    }

    return (
        <div className="Welcome">
            <h1>Welcome</h1>
            
            <button onClick={handleWelcome} className='btn'>
                Let's Start
            </button>
        </div>
    );
}

export default Welcome;