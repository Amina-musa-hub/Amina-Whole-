import Html from "../assets/html.png"
import figm from "../assets/figma.svg"
import css from "../assets/css3.svg"
import react from "../assets/react.svg"
import tailwind from "../assets/tailwindcss.svg"
import java from "../assets/javascript.svg"


function Skils () {
   const skill = [
    {
      id: 1,
      img: Html,
      title: "HTML",
      dice:"The structure or skeleton ",
    },
    {
      id: 2,
      img: css,
      title: "CSS",
      dice:"User interface ",
    },
    {
      id: 3,
      img: tailwind,
      title: "Tailwind",
      dice:"User interface ",
    },
    {
      id: 4,
      img: java,
      title: "Javascript",
      dice:"interactivity ",
    },
    {
      id: 5,
      img: react,
      title: "React",
      dice:"Framework ",
    },
     {
      id: 6,
      img: figm,
      title: "Figma",
      dice:"Design tools ",
    },
   ]
    return (
        <> 
          <div className="min-h-screen justify-center pt-[30px] px-[50px]">
            <h1 className="text-orange-50 lg:text-[50px] md:text-[50px] sm:text-[40px] min-[320px]:text-[30px] text-center">My experience</h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 min-[320px]:grid-cols-1 justify-center gap-[30px] lg:mt-[150px] md:mt-[100px] sm:mt-[80px] min-[320px]:mt-[50px] min-[320px]:mb-[50px] md:mb-0 lg:mb-0">
              {skill.map((skill) => (
                <div className="flex flex-col border border-orange-50 rounded-lg p-[20px]" key={skill.id}>
                  <div className="">
                    <img src={skill.img} alt="" className="w-[40px] h-[40px] " />
                  </div>
                  <h1 className="text-orange-100 text-[20px]">{skill.title}</h1>
                  <p className="text-white/50 text-[12px]">{skill.dice}</p>
                </div>
              ))}
            </div>
          </div>
        
        </>

    )
}
export default Skils