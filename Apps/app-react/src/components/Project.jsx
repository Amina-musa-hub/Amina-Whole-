import order from "../assets/order.png"
import glint from "../assets/glint.png"
import form from "../assets/form.png"
import todo from "../assets/to-do.png"
import calc from "../assets/calc.png"
import api from "../assets/api.png"


function Project() {
    const project = [
        {
            id:1,
            img:order,
            title:"Order",
            demo:"https://demo1.com"
        },
        {
            id:2,
            img:glint,
            title:"Glint",
            demo:"https://demo2.com"
        },
        {
            id:3,
            img:form,
            title:"Form",
            demo:"https://demo3.com"
        },
        {
            id:4,
            img:todo,
            title:"To Do List",
            demo:"https://demo4.com"
        },
        {
            id:5,
            img:calc,
            title:"Calculator",
            demo:"https://demo5.com"
        },
        {
            id:6,
            img:api,
            title:"API ",
            demo:"https://demo6.com"
        }
    ]
    return (
        <>
          <div className="lg:px-30 md:px-20 sm:px-10 min-[320px]:px-10">
                <h1 className="m-[30px] text-orange-50 lg:text-[50px] md:text-[50px] sm:text-[40px] min-[320px]:text-[30px] text-center">My Projects</h1>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-[30px] mb-[30px]">
                    {project.map((data) =>{
                        return(
                            <article key={data.id} className="overflow-hidden h-[370px]  flex flex-col p-[17px] bg-orange-50/80 rounded-lg">
                                <div>
                                    <img className="w-910 h-60 rounded shadow-lg" src={data.img}/>
                                </div>
                                <h3 className="text-black/50 my-[10px] text-[26px] ">{data.title}</h3>
                                <div>
                                    <a className="bg-orange-50 p-2 rounded-lg text-black hover:shadow-lg text-sm" href={data.demo}>Live Preview</a>
                                </div>
                            </article>
                        )
                    })}
                </div>
          </div>
        
        </>
    )
}

export default Project