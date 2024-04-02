import React, { useState } from 'react';

function TextForm(props) {
    const [text, setText] = useState("Start writing.");

    const handleClick = (e) => {
        console.log("Onchange Clicked");
        setText(e.target.value);
    };

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to UpperCase', 'Successfully');
    };

    const handleDownClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Converted to LowerCase', 'Successfully');
    };

    const handleClearClick = () => {
        let newText = " ";
        setText(newText);
        props.showAlert('TextCleared', 'Successfully');
    };

    return (
        <>
            <div className="container" style={{ color: props.mode === "light" ? "black" : "white" }} >
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleClick} id="exampleFormControlTextarea1" rows="8" style={{ backgroundColor: props.mode === "light" ? "white" : "dark", color: props.mode === "dark" ? "white" : "black" }}></textarea>
                </div>
                <button className='btn btn-primary' onClick={handleUpClick}>Convert to UpperCase</button>
                <button className='btn btn-primary mx-2' onClick={handleDownClick}>Convert to LowerCase</button>
                <button className='btn btn-primary mx-2' onClick={handleClearClick}>Clear</button>
            </div>
            <div className="container my-2" style={{ color: props.mode === "light" ? "black" : "white" }}>
                <h1>Your Text Summary</h1>
                <p> {text.split(" ").length} Words, {text.length} Chars</p>
            </div>
        </>
    );
}

export default TextForm;
