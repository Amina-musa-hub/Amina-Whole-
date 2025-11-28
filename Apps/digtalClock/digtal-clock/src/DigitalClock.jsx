 import background from './assets/bgg.jpg'
 import React ,{ useState , useEffect } from 'react'
 function DigitalClock() {

    const [time , setTime] = useState(new Date());

    useEffect(() => {
       
        const interval = setInterval(() => {
          setTime(new Date());
        }, 1000);
    
        return () => {
          clearInterval(interval);
        }
    } ,[])

    function formatTime() {
        let hours = time.getHours();
        let minutes = time.getMinutes();
        let seconds = time.getSeconds();
        let meridian = hours >= 12 ? 'PM' : 'AM';

        hours = hours % 12 || 12 ;

        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${padZero(meridian)}`
    }

    function padZero(number) {
        return (number < 10 ? '0': '' )+ number
        
    }
    return (
        <div className='font-[monospace] h-screen w-screen bg-cover bg-center p-50' style={{backgroundImage:`url(${background})`}}>
            <div className='text-white flex justify-center items-center p-10 bg-white/20 backdrop-blur-md border-4 border-black/30 bg-opacity-40'>
                <span  className='text-6xl '>{formatTime()}</span>
            </div>
        </div>
    )
}

export default DigitalClock