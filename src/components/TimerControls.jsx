export const TimerControls = ({timerRef, setTime, isRunning, setIsRunning}) => {
    const toggleTimer = () => {
        if (isRunning) {
            clearInterval(timerRef.current)
            timerRef.current = null;
        } else {
            timerRef.current = setInterval(() => {
                setTime((prevTime) => prevTime + 1)
            }, 1000)
        }

        setIsRunning(!isRunning);
    };

    const resetTimer = () => {
        clearInterval(timerRef.current);
        setIsRunning(false);
        setTime(0);
        timerRef.current = null;
    };

    return (
        <>
            <button
                onClick={toggleTimer}
                className="mt-3 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">{isRunning ? "Pause" : "Start"}
            </button>

            <button
                onClick={resetTimer}
                className="mt-3 ml-3 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Reset
            </button>
        </>
    )
}