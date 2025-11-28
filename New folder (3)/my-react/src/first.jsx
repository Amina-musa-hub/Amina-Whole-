export default function Header({name}) {
    return (
        <div style={{ background: "pink" ,
         width: "100%",
          height: "120px",
           padding: "10px",
            textAlign: "center",
            boxShadow: "0px 4px 13px rgba(0, 0, 0, 0.1)",
            }}>
          <div>
            <h1 style={{color: "white" , fontSize: "40px", padding: "20px"}}>{name}</h1>
          </div>
        </div>
    );
}