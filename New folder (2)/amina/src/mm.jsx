import { useState } from "react"

function Mm() {
    const [inputt,setInputt] = useState("")
    function onChan(event) {
    setInputt(event.target.value)
    }
    return (
        <>
            <h1 className="text-3xl font-bold underline mt-2">Hello world!</h1>
            <input
             value={inputt}
             onChange={onChan} className="bg-gray-100 mt-2 p-2 rounded text-black"/>
        </>
    )
}

export default Mm