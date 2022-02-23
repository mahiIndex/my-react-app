import React, {useState} from 'react'
export default function TextForm(props) {

    const clickTo = ()=>{
        // console.log("text clicked");
        let uperText = text.toUpperCase();
        setText(uperText);
        props.showAlert("Uppercase is converted", "success");
    }
    const clickTolover = ()=>{
        let uperText = text.toLowerCase();
        setText(uperText);
        props.showAlert("lowercase is converted", "success");

    }
    const clickToclear = ()=>{
        let uperText = "";
        setText(uperText);
        props.showAlert("text clear", "success");

    }
    const clickTocspes = ()=>{
        let uperText = text.charAt(0).toUpperCase() + text.slice(1);
        setText(uperText);
    }
    const hande = (event)=>{
        console.log("changed text");
        setText(event.target.value)
    }
    
    const [text, setText] = useState('this is my hooks');
   

    return (
    <>
        <div className="container" style={{color: props.mode === 'dark'?'white':'black'}} >
        <h2>{props.heading}</h2>
            <div className="mb-3">
                <textarea value={text} style={{backgroundColor: props.mode === 'dark'?'gray':'white',color: props.mode === 'dark'?'white':'black'}}  className="form-control" rows="10"  onChange={hande} ></textarea>
            </div>
            <button type="submit" className="btn btn-primary mx-1" onClick={clickTo} >convert text uppercase</button>
            <button type="submit" className="btn btn-primary mx-1" onClick={clickTolover} >convert text lourcase</button>
            <button type="submit" className="btn btn-primary mx-1" onClick={clickToclear} >clear text</button>
            <button type="submit" className="btn btn-primary mx-1" onClick={clickTocspes} >capes</button>
        </div>

        <div className="container" style={{color: props.mode === 'dark'?'white':'black'}}>
        <h2>yout text summary</h2>
        <p>Words {text.split(" ").length} and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes to read</p>
        <h2>preview</h2>
        <p>{text.length>0?text:'please enter text in text box'}</p>
        </div>

    </>
  )
}











/////rfc//////
