import React from "react";


export default function InputFile({setImgSrc})
{
    
    var loadFile = function(event) {
        setImgSrc(URL.createObjectURL(event.target.files[0]));
    };
return(
<>
<label htmlFor="file">Choose a picture for the meme </label>
    <input   type="file" id="file" accept="image/*" onChange={loadFile} ></input>
    </>
)
}