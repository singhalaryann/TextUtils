import React, { useState } from 'react';

function About() {
    const [mystyle, setmystyle] = useState({
        color: "White",
        backgroundColor: "Black",
        border: "1px solid white"
    })

    const [btnText, setbtnText] = useState("Click to Dark mode")

    const toggleStyle = () => {
        if (mystyle.color === 'White') {
            setmystyle({
                color: "Black",
                backgroundColor: "White",
                border: "1px solid white"
            });
            setbtnText("Click to enable Dark mode");
        } else {
            setmystyle({
                color: "White",
                backgroundColor: "Black",
                border: "1px solid white"
            });
            setbtnText("Click to enable Light mode");
        }
    }


    return (
        <div className='container my-3' style={mystyle}>
            <h1>About us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item" style={mystyle}>
                    <h2 className="accordion-header" >
                        <button className="accordion-button" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Item-1
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={mystyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Item-2
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={mystyle} >
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Item-3
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" >
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>
            <button type="button" className="btn btn-primary my-2" onClick={toggleStyle}>{btnText}</button>
            {/* <button type="button" className="btn btn-primary mx-2" onClick={handleLClick}>Enable Light Mode</button> */}
        </div>
    );
}

export default About;
