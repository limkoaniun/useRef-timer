import {useRef, useState} from "react";
import {TimerDisplay} from "./components/TimerDisplay.jsx";
import {TimerControls} from "./components/TimerControls.jsx";

const App = () => {
    const timerRef = useRef(null);

    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-lg text-center">
            <TimerDisplay time={time}/>

            <TimerControls
                timerRef={timerRef}
                isRunning={isRunning}
                setIsRunning={setIsRunning}
                setTime={setTime}
            />

        </div>)
};

export default App;