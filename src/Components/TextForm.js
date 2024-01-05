import React,{useState} from 'react'

export default function Textform(props) {
  const [text, setText]=useState('Enter Text here');
  const handleUpClick=()=>{
    //console.log("Uppercase is Clicked"+text);
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase","success");
  }
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!", "success");
}
  const firLetterUp = () => {
    let newText = text.split(" ");
    let finalArr = []
    newText.forEach((element) => {
      let afterUp = element[0].toUpperCase();
      afterUp = afterUp.concat(element.substring(1))
      finalArr.push(afterUp);
    })
    setText(finalArr.join(" "));
  }
  const handleLowClick=()=>{
    //console.log("Uppercase is Clicked"+text);
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase","success");
  }
  const handleCopy=()=>{
    navigator.clipboard.writeText(text);
  }
  const handleClearClick=()=>{
    //console.log("Uppercase is Clicked"+text);
    let newText="";
    setText(newText);
  }
  const handleOnChange=(event)=>{
    //console.log("On Change")
    setText(event.target.value);
  }
  return (
    <>
    <div className="container">
      <h1>{props.head}</h1>
<div className="mb-3">
  <label for="myBox" class="form-label" >Input Text</label>
  <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-3" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-3" onClick={handleLowClick}>Convert to Lowercase</button>
<button className="btn btn-primary mx-3" onClick={firLetterUp}>Camel Case</button>
<button className="btn btn-dark mx-3" onClick={handleCopy}>Copy</button>
<button className="btn btn-dark mx-3" onClick={handleExtraSpaces}>Remove Extra Space</button>
<button className="btn btn-danger mx-3" onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className="container my-3">
      <h2>Your Text Summary</h2>
      <p>{text.split(" ").length-1} words and {text.length} characters</p>
      <p>It may take {0.008*text.split(" ").length} to read.</p>
      <h3>Preview</h3>
      <p>{text}</p>
    </div>
    </>
  )
}
