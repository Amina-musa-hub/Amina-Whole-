import { useState } from "react";

export default function myForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
    isage: false,
    country: "",
    statuse: "",
  });

  const handChange = (e) => {
    if (e.target.type === "checkbox") {
      return setForm({ ...form, [e.target.name]: e.target.checked });
    }
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handSubmit = (e) => {
    e.preventDefault(console.log("Form Data:", form));

    setForm({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      gender: "",
      isage: false,
      country: "",
      statuse: "",
    });
  };

  return (
    <>
      <div>
        <div className="h-[100vh] w-[50%] bg-violet-700 float-left p-10 rounded-rt-[200px]">
          <h1 className="text-[50px] font-bold text-white mt-[100px] text-center">
            Hello world!
          </h1>
        </div>
        <div className="flex justify-center mt-[100px] bg-white rounded shadow-md py-6 w-[30%] align-center absolute left-[60%]">
          <form className="grid w-[80%]" onSubmit={handSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              value={form.name}
              onChange={handChange}
              className="mt-2 mb-2 bg-gray-100 p-1 rounded-md"
              type="text"
              name="name"
              id="name"
            />
            <label htmlFor="email">Email:</label>
            <input
              value={form.email}
              onChange={handChange}
              className=" mt-2 mb-2 bg-gray-100 p-1 rounded-md"
              type="email"
              name="email"
              id="email"
            />
            <label htmlFor="password">Password:</label>
            <input
              value={form.password}
              onChange={handChange}
              className="mt-2 mb-2 bg-gray-100 p-1 rounded-md"
              type="password"
              name="password"
              id="password"
            />
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              value={form.confirmPassword}
              onChange={handChange}
              onBlur={() => {
                form.password === form.confirmPassword
                  ? console.log("true")
                  : alert("the password does not match");
              }}
              className="mt-2 mb-2 bg-gray-100 p-1 rounded-md"
              type="password"
              name="confirmPassword"
              id="confirmPassword"
            />
            <label>Message:</label>
            <textarea
              onChange={handChange}
              name="gender"
              id="gender"
              className="mt-2 mb-2 bg-gray-100 p-1 rounded-md"
              value={form.gender}
            ></textarea>
            <div className=" p-1 rounded-md flex justify-between">
              <label>Are you 18?</label>
              <input
                onChange={handChange}
                name="isage"
                // id="isage"
                type="checkbox"
                checked={form.isage}
              />
            </div>
            <select
              name="country"
              id="country"
              value={form.country}
              onChange={handChange}
            >
              <option>KSA</option>
              <option>USA</option>
              <option>NIG</option>
            </select>
            <div className="flex justify-between">
              <label>Teacher</label>
              <input
                type="radio"
                name="statuse"
                id="Teacher"
                value={"Teacher"}
                checked={form.statuse === "Teacher"}
                onChange={handChange}
              />
            </div>
            <div className="flex justify-between">
              <label>Student</label>
              <input
                type="radio"
                name="statuse"
                id="Student"
                value={"Student"}
                checked={form.statuse === "Student"}
                onChange={handChange}
              />
            </div>
            <button
              type="submit"
              className="mt-6 bg-violet-700 shadow-md text-white rounded-full p-1 leading-6"
            >
              Log in
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
