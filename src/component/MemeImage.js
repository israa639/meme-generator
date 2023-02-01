import React from "react";





export default function MemeImage({imgSrc,upperText,lowerText,textColor}){


return (

<section className="meme-section">
{imgSrc && <img src={imgSrc} className="meme-image"></img>}
<p className="upper-text" style={{
        color:textColor
    }}>{upperText}</p>
<p className="lower-text"style={{
        color:textColor
    }}>{lowerText}</p>
</section>
)




}