import React, { useState } from 'react'

export default function Textform(props) {
  const handleUpclick = () => {
    //console.log("uppercase was clicked :" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!" , "success");
  }

  const handleClearclick = () => {
    //console.log("uppercase was clicked :" + text);
    let newText = (" ");
    setText(newText);
    props.showAlert("Text Cleared!" , "success");
  }
    
  const removeExtraSpaces = () => {
    let newText = text.split(/[ ]+/)
    setText(newText.join(' '))
    props.showAlert("Extra Spaces Removed!" , "success");
}
  
  /*const handleSentanceclick = () => {
    //console.log("uppercase was clicked :" + text);
    let result = text.charAt(0).toUpperCase() + text.slice(0);
    setText(result);
  }*/

  const handledCopy = ()=> {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard!" , "success"); 
  }

  const handleLoclick = () => {
    //console.log("uppercase was clicked :" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!" , "success");
  }

  function handleOnchange(event) {
    //console.log('on change');
    setText(event.target.value);
  }
  const [text, setText] = useState("");
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <label htmlFor="myBox" className="form-label">Example Text Area :-</label>
        <textarea className="form-control" value={text} onChange={handleOnchange} id="myBox" rows="11" style={{backgroundColor: props.mode==='dark'?'#042743':'white' , color: props.mode==='dark'?'white':'black'}}></textarea>
        </div>
        
        <button className="btn btn-primary my-1 mx-1" onClick={handleUpclick}>Convert to Uppercase</button>
        <button className="btn btn-primary my-1 mx-1" onClick={handleLoclick}>Convert to Lowercase</button>
        <button className="btn btn-primary my-1 mx-1" onClick={handleClearclick}>Clear Text</button>
        <button className="btn btn-primary my-1 mx-1" onClick={removeExtraSpaces}>Remove Extra Spaces</button>
        <button className="btn btn-primary my-1 mx-1" onClick={handledCopy}>Copy Text</button>
    </div>
    <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
      {console.log(text.split(' '))}
        <h2>Your text summary</h2>
        <p><b>{text.length && text.split(' ').length}</b> words and <b>{text.length}</b> characters</p>
        <p><b>{0.008 * text.trim().length}</b> Minutes to Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Something in the Textbox above to preview it!"}</p>
    </div>
    </>
  )
}
