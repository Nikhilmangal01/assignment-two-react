import { useState } from "react";
import "./App.css"
const AssignmentTwo = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [data, setData] = useState([]);
  console.log(data)

  const handleChange = (e) => {

    const {name,value} =  e.target;
    if(name==="fullname"){
        setName(value)
    }
    else if(name === "age"){
        setAge(value)
    }
    // console.log(name,"name");
    // console.log(value,"value")
  };
  const handelClick=()=>{
    const obj = {
        name:name,
        age:age
    }
    setData([...data,obj])
  }

  return (
    <div>
      <div className="box1">
       NAME:<input type="text" name="fullname" value={name} onChange={handleChange} placeholder="Enter Name"/></div>
      <div className="box2">
      AGE:<input type="text" name="age" value={age} onChange={handleChange} placeholder="Enter age"/></div>

     <div className="box3"><button onClick={handelClick} >SUBMIT</button></div> 

   <div className="main">
    {data.map((item,index)=>(
        <h1 key={index}>Name: {item.name}  |||  Age: {item.age}</h1>
    ))}</div> 




    </div>


  );
};

export default AssignmentTwo;