import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked  " + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase","success");
    }
    
    const handleLwClick = ()=>{
        // console.log("Uppercase was clicked  " + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase","success");
    }
    
    const handleCopy = ()=>{
        // console.log("Uppercase was clicked  " + text);
        let newText = document.getElementById("myBox");
        newText.select();
        navigator.clipboard.writeText(newText.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Text copied","success");
        // setText(newText)
    }
    
    // const speak= ()=>{
        //     // console.log("Uppercase was clicked  " + text);
        //     let msg = new SpeechSynthesisUtterance();
        //     msg.text = text;
        //     Window.speechSysnthesis.speak(msg.text);
        // }
        const handleClear = ()=>{
            // console.log("Uppercase was clicked  " + text);
            let newText = " ";
            setText(newText)
            props.showAlert("Clear Text","success");
        }
        
        const handleExtraSpaces = ()=>{
            // console.log("Uppercase was clicked  " + text);
            let newText = text.split(/[ ]+/);
            setText(newText.join(" "))
            props.showAlert("Extra spaces removed","success");
    }

    
    
    const handleOnChange = (event)=>{
        console.log("On change");
        setText(event.target.value);
    }

    const [text,setText] = useState("");
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
    <h2 classname="mb-2">{props.heading}</h2>
        <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label"></label>
        <textarea className="form-control" value = {text} id= "myBox" onChange = {handleOnChange}  rows="8" style={{backgroundColor: props.mode==='light'?'dark':'light'}}></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLwClick}>Convert to Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClear}>Clear Text</button>
        {/* <button className="btn btn-primary mx-2 my-2"  onClick={speak}>Speech</button> */}
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2"  onClick={handleCopy}>Text Copy</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2"  onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-2" style={{color: props.mode==='dark'?'#dadada':'black'}}>
        <h2>Your Text summary</h2>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words, {text.length} characters</p>
        <p> {0.008*text.split(" ").filter((element)=>{return element.length!==0}).length } minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to Preview"}</p>
    </div>
    </>
  )
}
