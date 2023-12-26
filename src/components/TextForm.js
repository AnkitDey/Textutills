import React ,{useState}from "react";
// import PropTypes from 'prop-types'


export default function TextForm(props) {
  
    const handleupclick=()=>{
        console.log("uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase!" , "success" );
    }
    const handleloclick=()=>{
        console.log("uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to LowerCase!" , "success" );
    }
    const handleOnChange=(event)=>{
        console.log("on change");
        setText(event.target.value);
    }
    const handlecleartext=(event)=>{
        console.log("");
        setText(event.target.value);
        props.showAlert("Cleared Text!" , "success" );
    }
    const handleCopy = ()=>{
    let text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);

    }
    const handleExtraspaces =() =>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
    }
    const [text ,setText]= useState('Enter text here...');
    // text = "new text"; //Wrong way to change the state
//    setText ("new text") ; //corrcet way to change the state
  return (
    <>
    <div className="container"  style={{color : props.mode === 'dark'?'white':'#031838'}}>
        <h1>{props.heading} </h1>
      <div className="mb-3">
       <textarea
          className="form-control text-info"
          id="mybox"
          style={{backgroundColor : props.mode === 'dark'?'grey':'white' , color: props.mode === 'dark'?'white':'#031838'}}
          value={text}
          onChange={handleOnChange}
          rows="10"
        ></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-2  my-1" onClick={handleupclick}>Convert to Uppercase</button>
      <button  disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleloclick}>Convert to Lowercase</button>
      <button disabled={text.length===0}  className="btn btn-primary mx-2 my-1" onClick={handlecleartext}>Clear Text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy Text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraspaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-2" style={{color : props.mode === 'dark'?'white':'#031838'}}>
        <h1>Your Text Summary</h1>
        <p> {text.split(" ").filter((element)=>{return element.length !==0}).length} words and {text.length} characters</p>
        <p> {0.008 * text.split(" ").filter((element)=>{return element.length !==0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to Preview"}</p>
    </div>
    </>
  );
}
