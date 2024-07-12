import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const car = {type:"Fiat", model:"500", color:"white"};
  const [FileList,setList]=useState({});

useEffect(() => {
 console.log("effect run")
 const fetchtraineesData = async() =>{
  console.log ("running fetchTraineeesData")

  try{ 
    const response = await fetch(localhost4000/trainees)
 console.log("Below is the trainee data", traineesData);


  }catch (error){
    alert(error);                       
  }
};

(async () => await fetchtraineesData())()
 }
)
  const trainee ={ name:"Alungile", surname:"Mbuthuma", age:"21", color:"Pink",gender:"female", location:"Umlazi"}
  const traineeData = "traineesDataURL"
  const traineesData = await.response.json();
  setList(traineesData);
  console.log("Below is the trainees data,traineesData");
  return (
    <>
<h1>My name is {trainee.name}</h1>
<p>I live at {trainee.location}, and my favorite color is {trainee.color}.</p>
    </>
  )
}

export default App
