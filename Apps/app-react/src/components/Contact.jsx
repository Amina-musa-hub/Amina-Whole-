import { MdOutlineMail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { FaSnapchatGhost } from "react-icons/fa";
import React, { useRef } from 'react';
import { useState } from "react";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./Header";

function Contact () {
   const [input, setInput] = useState([{
    name: "",
    email: "",
    message: "",
   }]);

   function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault(console.log(input));
      setInput({
      name: "",
      email: "",
      message: "",
    });
     emailjs
      .sendForm(
        "service_nagx2ke", 
        "template_471hgmr", 
        form.current,
        "c92YZpVMTe-Rn8k_T"  
      )
      .then(
        () => {
          toast.success(" The message has been sent successfully!", {
            position: "top-center",
            autoClose: 3000,
          });
          e.target.reset();
        },
        () => {
          toast.error(" The message has not been sent", {
            position: "top-center",
            autoClose: 3000,
          });
        }
      );
    };
    return (
        <div id="contact" className="lg:px-30 md:px-20 sm:px-10 min-[412px]:px-10 flex flex-col justify-center items-center min-h-screen ">
            <h1 className="text-orange-50 text-center text-4xl mb-4 mt-8 ">Contact Me</h1> 
            <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 lg:mt-[90px] md:mt-[100px] sm:mt-[70px] min-[412px]:mt-[50px] items-center justify-center ">
                <div className=" overflow-hidden justify-center items-center flex min-[412px]:pl-0 lg:pl-[200px] justify-center items-center grid lg:grid-cols-1 md:grid-cols-2 sm:grid-cols-2 min-[412px]:grid-cols-1 gap-3 min-[412px]:px-10 min-[412px]:gap-3 md:mb-[50px] sm:mb-[50px] min-[412px]:mb-[50px] lg:mb-0">
                    <div className="flex gap-2 text-black flex-col lg:h-[120px] bg-orange-50/90 lg:w-50 min-[412px]:w-[390px] min-[412px]:h-[200px] rounded-lg text-center lg:p-2 md:p-2 sm:p-2 min-[412px]:pt-10  ">
                        <a className="text-black text-white flex text-center  items-center justify-center flex"><MdOutlineMail className="text-4xl"/></a>
                        <p>Email</p>
                        <p>usuujdjdj@gmail.com</p>
                    </div>
                    <div className="min-[412px]:w-[390px] min-[412px]:h-[200px] lg:h-[120px] flex gap-2 text-black flex-col bg-orange-50/90 lg:w-50 lg:mb-0 l rounded-lg text-center lg:p-2 md:p-2 sm:p-2 min-[412px]:pt-10 ">
                        <a className="text-white  items-center justify-center flex"><BsWhatsapp className="text-4xl"/></a>
                        <p>Whatsapp</p>
                        <p>08107841013</p>
                    </div>
                    <div className="min-[412px]:w-[390px] min-[412px]:h-[200px] lg:h-[120px] flex gap-2 text-black flex-col bg-orange-50/90 lg:w-50 rounded-lg text-center lg:p-2 md:p-2 sm:p-2 min-[412px]:pt-10 lg:mt-0 ">
                        <a className="text-white items-center justify-center flex block"><FaSnapchatGhost className="text-4xl "/></a>
                        <p>Snapchat</p>
                        <p>username</p>
                     </div>
                </div>
                <div>
                    <form ref={form} onSubmit={sendEmail} className="min-[320px]:mb-10 lg:mb-0" >
                        <div className="grid lg:grid-cols-1 ">
                            <input onChange={handleChange} value={input.name} name="name" type="text"  className=" border border-orange-50 text-orange-50 p-2 rounded-md lg:w-[500px]  mb-4 h-[50px] sm:w-[400px] md:w-[400px] min-[412px]:w-[400px]" placeholder="Your Name" />
                            <input  onChange={handleChange}value={input.email} name="email" type="email"  className="border border-orange-50 text-orange-50 p-2 rounded-md lg:w-[500px]  mb-4 h-[50px] sm:w-[400px] md:w-[400px] min-[412px]:w-[400px]" placeholder="Your Email" />
                            <textarea onChange={handleChange} value={input.message} name="message" className="border border-orange-50 text-orange-50 p-2 rounded-md lg:w-[500px] h-[150px]  mb-4 sm:w-[400px] md:w-[400px] min-[412px]:w-[400px]" placeholder="Your Message " ></textarea>
                            <button className="text-black bg-orange-50 rounded-md w-[130px] h-[50px]">Send Message</button>
                        </div>
                    </form>
                    <ToastContainer />
                </div>
                 <Header/>
            </div>
        </div>
    )
}

export default Contact