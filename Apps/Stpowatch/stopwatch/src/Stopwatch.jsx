import React, {useState , useEffect , useRef,} from 'react';
function Stopwatch() {
     const [isRunning, setIsRunning] = useState(false);
     const [time, setTime] = useState(0);
     const intervalRef = useRef(null);
     const startTimeRef = useRef(0);
    
    useEffect(() => {
        if(isRunning) {
         intervalRef.current = setInterval(() => {
            setTime(Date.now() - startTimeRef.current)

         }, 10)       
        }
        
        return () => {
            clearInterval(intervalRef.current)
        }
    }, [isRunning]) 
    function start() {
       setIsRunning(true) 
       startTimeRef.current = Date.now() - time;
       console.log(startTimeRef.current)
    }
    function stop() {
       setIsRunning(false)  
    }
    function reset() {
        setIsRunning(false)
        setTime(0)
    }
    function formatTime() {
        let hours = Math.floor(time / (1000 * 60 * 60));
        let muinutes = Math.floor(time / (1000 * 60 ) % 60);
        let seconds = Math.floor(time / (1000) % 60);
        let milliseconds = Math.floor(time % 1000 / 10);

        return `${hours}:${muinutes}:${seconds}:${milliseconds}`
    }
    return(
        <>
          <div className='bg-gray-800 text-white p-10 w-[500px] rounded-xl shadow-xl'>
              <div className='flex justify-center  font-bold  text-5xl py-10'>{formatTime()}</div>
              <div className='flex justify-center gap-5'>
                  <button className='bg-green-500 hover:bg-green-900 py-2 px-4 rounded-xl text-lg' onClick={start}>Start</button>
                  <button className='bg-red-500 hover:bg-red-900 py-2 px-4 rounded-xl text-lg' onClick={stop}>Stop</button>
                  <button className='bg-blue-500 hover:bg-blue-900 py-2 px-4 rounded-xl text-lg' onClick={reset}>Reset</button>
              </div>
          </div>
        </>
    )
};

export default Stopwatch