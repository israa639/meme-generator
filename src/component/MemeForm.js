import React from "react";
import InputFile from "./InputFile";

import MemeImage from "./MemeImage";

export default function MemeForm()
{
    var [imgSrc,setImgSrc]=React.useState("");
    var [formData,setFormData]=React.useState({upperText:"",lowerText:"",textColor:"black"});


    var handleUploadFile = function(event) {
        setImgSrc(event);
        setFormData({upperText:"",lowerText:"" ,textColor:"black"})
    };
    var handleText = function(event) {
        const {name,value}=event.target;
      
        setFormData(prevData=>({...prevData,[name]:value}))
    };
  
    
return(
    <main>
        <div className="form">
        <div className="meme-input-text">
        <input  placeholder={"write upper text"}
         className="text-input"
          onChange={handleText} 
           value={formData.upperText} 
          name="upperText"></input>
        
        <input  
          placeholder={"write lower text"} 
          onChange={handleText} 
          className="text-input"
          value={formData.lowerText}
          name="lowerText" />
            </div>
      < InputFile setImgSrc={handleUploadFile}/>
      <MemeImage imgSrc={imgSrc}
        upperText={formData.upperText}
        lowerText={formData.lowerText}
        textColor={formData.textColor}
        />

       <fieldset className="text-color">
        <legend>meme text color</legend>
        
        <input type="radio" className="black-btn" id="black-btn" name="textColor" value="black"  checked={formData.textColor==="black"} onChange={handleText}></input>
        <label htmlFor="black-btn">black</label>
        <input type="radio" className="white-btn"  id="white-btn" name="textColor" checked={formData.textColor==="white"}  value="white"  onChange={handleText}></input>
        <label htmlFor="white-btn">white</label>
       </fieldset>
        
    
    </div>
    </main>
)



}