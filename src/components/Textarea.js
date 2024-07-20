import React ,{useState}from 'react';

export default function Textarea(props) {
    const handleonchange = (event)=>{
        settitle(event.target.value);
    };
    const handleonclickup = ()=>{
        let newTitle = title.toUpperCase();
        settitle(newTitle);
        props.showalert("Text is change to uper case","info")
    }
    const handleonclicklo = ()=>{
        let newTitle = title.toLowerCase();
        settitle(newTitle);
        props.showalert("Text is change to lower case","info")
    }
  const  Copy = async ()=>{
    try{
        await window.navigator.clipboard.writeText(title);
        props.showalert("Text is  Copy ","info")
    }catch{
        alert("no");
    }

  }
  const Clear = ()=>{
    let newTitle = "";
    settitle(newTitle);
    props.showalert("Text is Clear from text field","info")
  }


    const space = ()=>{
      let newtext = title.split(/[ ]+/);
      settitle(newtext.join(" "));
      props.showalert("Wide space is remove from text","info")
    }
   
    const[title,settitle] = useState("Enter Your text");
  return (
 <>
  <div className='container'style={{color:props.mode === "light"?"black":"white"}}>
      <div className="mb-3" >
        <h1>{props.heading}</h1>
        <textarea className="form-control" value={title} id="exampleFormControlTextarea1" rows="8" onChange={handleonchange} style={{backgroundColor:props.mode === "light"?"white":"grey",color:props.mode === "light"?"black":"white"}}></textarea>
       
    </div>
    <button className="btn btn-primary mx-3" onClick={handleonclickup} >ChanegeToUpcase</button>
    <button className="btn btn-primary mx-3" onClick={handleonclicklo} >ChangeToLocase</button>
    <button className="btn btn-primary mx-3" onClick={Copy} >Copy</button>
    <button className="btn btn-primary mx-3" onClick={Clear} >Clear</button>
    <button className="btn btn-primary mx-3" onClick={space} >Remove Extra Space</button>
    
  </div>
  <div className='container  my -3'style={{color:props.mode === "light"?"black":"white"}}>
    <h3>Your Text Summery</h3>
    <p>{title.split(" ").length} Words and {title.length} Alphabets</p>
    <p>{0.008 * title.split(" ").length} Minutes Required To Read Text</p>
  </div>
  </>
    
  )
}
