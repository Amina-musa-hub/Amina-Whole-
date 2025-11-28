//  import PrayB from "./PrayB.jsx"
 import { useEffect , useState , useRef } from 'react'

//  export const UserContext = createContext()
function PrayA() {
    let [number , setNumber] = useState(0)

    const inputRef = useRef(null)

    useEffect(() => {
     
        console.log(inputRef)
    })
    // const [user , setUser] = useState('mohamed')
    // const [width, setWidth] = useState(window.innerWidth)
    // const [height, setHeight] = useState(window.innerHeight)
    // const [count , setCount] = useState(0)
    // const [color , setColor] = useState('red')
     
    // useEffect(() => {
    //     document.title = `count: ${count} ${color}`
    // } ,[count,color])

    // function addCont () {
    //     setCount(c => c + 1)
    // }

    // function subtractCaount () {
    //     setCount(c => c - 1)
    // }

    // function changColor () {
    //     setColor(c => c === 'red' ? 'blue' : 'red')
    // }
    // function handleResize () {
    //     setWidth(window.innerWidth)
    //     setHeight(window.innerHeight)
    // }

    // useEffect(() => {
    //     window.addEventListener('resize', handleResize)
    //    console.log("EVVVVENT")

    //     return () => {
    //         window.removeEventListener('resize', handleResize)
    //         console.log("EVVVVENT")
    //     }
    // }, [])

    // useEffect(() => {
    //     document.title = `size: ${width} ${height}`
    // }, [width, height])
    
    function handleClick () {
        inputRef.current.focus()
        

    }
    return(
        <>

        <button onClick={handleClick}>
            click
        </button>
        <input className='bg-blue-400' ref={inputRef}/>
        {/* <div className='border'>
            <p>Lorem ipsum dolor sit amet. section A</p>
            <h1>{`Hello ${user}`}</h1>
            <UserContext.Provider value={user}>
                  <PrayB user={user} />
            </UserContext.Provider>
        </div> */}
         
         {/* <p>width: {width}px</p>
         <p>height: {height}px</p> */}
         {/* <p style={{color: color}}>cont: {count}</p>
         <button onClick={addCont}>Add</button>
         <button onClick={subtractCaount}>Subtract</button><br/>
         <button  onClick={changColor}>Change color</button> */}
        </>
    )
}

export default PrayA