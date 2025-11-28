export default function Third ({name}) {
    return (
        <div style={{padding: "50px"}}>
        <div style={{padding: "20px" ,
            backgroundColor: "violet",
            width: "200px", height: "500px",
            borderRadius: "20px", 
             boxShadow: "0px 4px 13px rgba(0, 0, 0, 0.4)" , 
            display: "flex", justifyContent: "center",
            alignItems: "center", color: "white"}}>
         <h1 style={{fontSize: "30px"}}> {name}</h1>       
        </div>
        </div>
    )
}