import Navbar from "./components/Navbar";
import Textarea from "./components/Textarea";

import React, { useState} from 'react';
import Alert from "./components/Alert";
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
 
  const toggelmode = ()=> {
  
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

   
    <Navbar title = "textUtils" abouttext = "About" mode = {mode} toggelmode = {toggelmode} />
    <Alert alert={alert} showalert={showalert}/>
    <div className="container  my-3">
      <Textarea heading = "Enter Your Text Here To Analayze" mode = {mode} showalert={showalert}/>
    </div>

    </>
  );
}

export default App;