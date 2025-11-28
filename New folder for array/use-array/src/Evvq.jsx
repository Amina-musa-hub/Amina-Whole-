function Evvq() {
    // let count = 0

    // const handaleDoubleClick = (name) =>{
    //     if(count < 3){
    //           count++
    //           console.log(`${name} you clicked me ${count} times`)
    //     }else{
    //         console.log(`${name} stop clicking me`)
    //     }}
   
    const handaleDoubleClick = (e) => console.log(e) 
    return (
        <>
            <button onClick={(e) =>handaleDoubleClick(e)}>Click me</button>
        </>
    )
}

export default Evvq