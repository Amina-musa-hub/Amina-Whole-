import { useState , useEffect} from "react";
import { FaEdit, FaSave } from "react-icons/fa";
import { MdCancel, MdDelete } from "react-icons/md";
import Divider from "@mui/material/Divider";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function FoarmCheck() {
  const [newData, setNewData] = useState([]);
  const [editData, setEditData] = useState(null);
  const [edeIndex, setIdeaiIndex] = useState(null);
  const [data, setData] = useState({
    fullname: "",
    email: "",
    age: "",
    gender: "",
  });
  
  const [showdelete, setShowDelete] = useState(false);

  const handChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handEditChange = (e) => {
    setEditData(p => ({ ...p, [e.target.name]: e.target.value }));
  };
  const handSubmit = (e) => {
    e.preventDefault(console.log("Table Data:", data));

    if (!data.fullname || !data.email || !data.age || !data.gender) {
      alert("Please you need to fill all those fields!!!");
      return;
    }
    setNewData([...newData, data]);
    localStorage.setItem("data", JSON.stringify([...newData, data]));
    setData({
      fullname: "",
      email: "",
      age: "",
      gender: "",
    });
  };
  
  const handDelete = () => {
    setShowDelete(true);    
  };
  const handleremo = () =>{
      const removeNewData = [...newData];
      removeNewData.splice(edeIndex, 1);
      setNewData(removeNewData);
      setShowDelete(false);  
      localStorage.setItem("data", JSON.stringify(removeNewData)); 
  }
  const handEdit = (index) => {
    setIdeaiIndex(index);
    setEditData(newData[index]);
    setData(newData[index]);
  };
  useEffect(() => {
    
    console.log(editData)
  },[editData,newData])
  const handleSave = (index) => {
    const editNewData = [...newData];
    editNewData[index] = editData;
    setNewData(editNewData);
    setIdeaiIndex(null);
    setEditData(null);
    setData({
      fullname: "",
      email: "",
      age: "",
      gender: "",
    });
    localStorage.setItem("data", JSON.stringify(editNewData));
  };
  const handleClose = () => {
    setShowDelete(false);
  };

  useEffect(() => {
    const storedData = localStorage.getItem("data");
    if (storedData) {
      setNewData(JSON.parse(storedData));
    }
  }, []);
  return (
    <>
       <Dialog
        
        open={showdelete}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" >
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" color="black">
            Are you sure you want to delete?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} style={{backgroundColor: "lightgreen" , color: "white"}}> No</Button>
          <Button onClick={handleremo} style={{backgroundColor: "red" , color: "white"}} autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
      <div className="bg-white rounded-md  overflow-hidden lg:p-[20px] min[320px]:w-[400px] md:p-[10px] sm:p-[15px]  min[320px]:grid-cols-1 justify-center items-center sm:gap-2 shadow-md shadow-black/30">
        <form
          onSubmit={handSubmit}
          className=" grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 min[320px]:w-[300px] min[320px]:grid-cols-1 justify-center items-center sm:gap-2 min[412px]:p-7  mb-4"
        >
          <div className="flex flex-col">
            <label className="text-black/70 mb-1">Name:</label>
            <input
              onChange={handChange}
              value={data.fullname}
              type="text"
              name="fullname"
              className="lg:w-[200px] lg:h-[40px] sm:w-[220px]  min[412px]:w-[400px] border-black/20 p-2 border rounded-md fucus:outline-none  focus:ring-black/10  focus:outline-none focus:shadow-md "
              placeholder="Enter your name"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-black/70 mb-1">Email:</label>
            <input
              onChange={handChange}
              value={data.email}
              type="email"
              name="email"
              className="lg:w-[200px] lg:h-[40px] sm:w-[220px] border-black/20 p-2 border rounded-md focus:outline-none focus:shadow-md "
              placeholder="Enter your email"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-black/70 mb-1">Age:</label>
            <input
              onChange={handChange}
              value={data.age}
              type="number"
              name="age"
              className="lg:w-[200px] lg:h-[40px] sm:w-[220px] border-black/20 p-2 border rounded-md focus:outline-none focus:shadow-md "
              placeholder="Enter your age"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-black/70 mb-1">Gender:</label>
            <select
              onChange={handChange}
              value={data.gender}
              name="gender"
              className="lg:w-[200px] lg:h-[40px] sm:w-[220px] border-black/20 p-2 border rounded-md focus:outline-none focus:shadow-md "
              placeholder="Select your gender"
            >
              <option selected>Select your gender</option>
              <option value="male">male</option>
              <option value="female">female</option>
            </select>
          </div>
          <div className="pt-7">
            <button
              type="submit"
              className=" bg-black text-white lg:w-[200px] lg:h-[40px] sm:w-[220px] border-black/20 p-2 border rounded-md focus:outline-none focus:shadow-sm "
            >
              Add
            </button>
          </div>
        </form>
        <div>
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-200 h-[40px] rounded">
                <th className="border">No</th>
                <th className="border">Name</th>
                <th className="border">Email</th>
                <th className="border">Age</th>
                <th className="border">Gender</th>
                <th className="border">Action</th>
              </tr>
            </thead>
            <tbody className="text-center ">
              {newData.map((data, index) => {
                const key = `${index}`;
                return edeIndex == index ? (
                  <tr key={key}>
                    <td className="border">{index + 1}</td>
                    <td className="border p-1">
                      <input
                        onChange={handEditChange}
                        value={editData.fullname}
                        type="text"
                        name="fullname"
                        className="border w-[100px] p-1 rounded"
                      />
                    </td>
                    <td className="border p-1">
                      <input
                        onChange={handEditChange}
                        value={editData.email}
                        type="email"
                        name="email"
                        className="border  w-[100px] p-1 rounded"
                      />
                    </td>
                    <td className="border p-1">
                      <input
                        onChange={handEditChange}
                        value={editData.age}
                        type="number"
                        name="age"
                        className="border  w-[100px] p-1 rounded"
                      />
                    </td>
                    <td className="border p-1">
                      <select
                        onChange={handEditChange}
                        value={editData.gender}
                        type="text"
                        name="gender"
                        className="border  w-[100px] p-1 rounded"
                      >
                        <option selected>Select your gender</option>
                        <option value="male">male</option>
                        <option value="female">female</option>
                      </select>
                    </td>
                    <td className="border justify-around flex p-2">
                      <FaSave
                        onClick={() => handleSave(index)}
                        className="mr-2 font-bold text-blue-900 text-3xl "
                      />
                      <Divider
                        orientation="vertical"
                        sx={{ mx: 0, borderColor: "black" }}
                        flexItem
                      />
                      <MdCancel
                        onClick={() => setIdeaiIndex()}
                        className="font-bold text-red-900 text-3xl"
                      />
                    </td>
                  </tr>
                ) : (
                  <tr key={key}>
                    <td className="border">{index + 1}</td>
                    <td className="border">{data.fullname}</td>
                    <td className="border">{data.email}</td>
                    <td className="border">{data.age}</td>
                    <td className="border">{data.gender}</td>
                    <td className="border justify-around flex pb-2">
                      <FaEdit
                        onClick={() => handEdit(index)}
                        className="mr-2 font-bold text-blue-900 text-2xl "
                      />
                      <Divider
                        orientation="vertical"
                        sx={{ mx: 0, borderColor: "black" }}
                        flexItem
                      />
                      <MdDelete
                        onClick={() => handDelete(index)}
                        className="font-bold text-red-900 text-2xl"
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default FoarmCheck;
