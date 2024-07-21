import Navbar from "./components/Navbar";
import Textarea from "./components/Textarea";
// import About from "./components/About";
import React, { useState} from 'react';
import Alert from "./components/Alert";

// import {
//   BrowserRouter as Router,
//   Switch,
//   ,
//   Link
// } from "react-router-dom";
function App() {
  const [mode, setmode] = useState("light")
  const [alert, setalert] = useState(null);

  const showalert = (message,type)=>{
      setalert({
        msg:message,
        type:type
      })
      setTimeout(()=>{
        setalert(null);
      },1500)
  }
  // const removeClass=()=>{
  //   document.body.classList.remove("bg-primary");
  //   document.body.classList.remove("bg-secondary");
  //   document.body.classList.remove("bg-warning");
  //   document.body.classList.remove("bg-dark");
  // }
  const toggelmode = ()=> {
    // removeClass();
    // document.body.classList.add("bg-"+cls);
    if(mode === "light"){
      
      setmode("dark");
      document.body.style.backgroundColor = "black";
      showalert("This is dark mode","dark");
    }
    else{
      setmode("light");
      document.body.style.backgroundColor = "white";
      showalert("This is light mode","light");
    }
  }
  return (
    <>
    {/* {/* <Router> */}
   
    <Navbar title = "textUtils" abouttext = "About" mode = {mode} toggelmode = {toggelmode} />
    <Alert alert={alert} showalert={showalert}/>
    <div className="container  my-3">
    {/* <Switch> */}
          {/* <Route exact path="/about"> */}
          {/* <About mode={mode} toggelmode = {toggelmode}/> */}
          {/* </Route> */}
          {/* <Route exact path="/"> */}
        <Textarea heading = "Enter Your Text Here To Analayze" mode = {mode} showalert={showalert}/>
        
        
    {/* </Switch> */}
    </div>
 {/* </Router> */}
    </>
  );
}

export default App;