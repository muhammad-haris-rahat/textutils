import React, { useState } from 'react'

export default function TextForm(props) {

    const [text, setText] = useState("Enter your text here");
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to UpperCase ' , 'success')
    }
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Converted to LowerCase ' , 'success')

    }

    const clear = () => {
        let newText = "";
        setText(newText);
        props.showAlert('Textbox has been cleared ' , 'success')

    }

    const handleReverse = () => {

        let strArr = text.split("");
        strArr = strArr.reverse();
        let newText = strArr.join("");
        setText(newText);
        props.showAlert('Text has been reversed ' , 'success')

    };


    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }

    return (

        <>
            <div className="mb-3"style={{color : props.mode==='dark'?'white' : '#042743'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" onChange={handleOnChange} style={{backgroundColor : props.mode==='dark'?'grey' : 'white' , color :props.mode==='dark'?'white' : '#042743'}} value={text} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary my-3 mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
                <button className="btn btn-primary my-3 mx-2" onClick={handleLowClick}>Convert to LowerCase</button>
                <button className="btn btn-primary my-3 mx-2" onClick={handleReverse}>Reverse</button>
                <button type="submit" onClick={speak} className="btn btn-primary mx-2 my-2">Speak</button>
                <button className="btn btn-primary my-3 mx-2" onClick={clear}>Clear All</button>
            </div>

            <div className="container my-3" style={{color : props.mode==='dark'?'white' : '#042743'}}>

                <h1>Your text summary</h1>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minures Read </p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
            </div>




        </>

    )
}
