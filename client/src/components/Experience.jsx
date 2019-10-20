import React from 'react';
import style from './styles/Experience.css';
import Pictures from "./Pictures.jsx"
import $ from "jquery";

const Experience = () => {


//**************** STYLING  ****************//
    var expStyling = {
        display: "flex",
        // margin: "10px",
        border: "1px solid black",
        width: "100%",
        height: "300px"
    }
    var typeStyling = {
        "fontSize": "12px",
        "fontWeight": "bold",
        "color": "grey"

    }
    var titleStyling = {
        "fontSize": "25px"
    }
    var faqStyling = {
        "color": "grey"
    }
    var whatDoStyling = {
        fontWeight: "bold"
    }
    var descStyling = {

    }
//******************************************** */

// var input
// $.get('/experiences/', null, (experiences) => {
//     // console.log({experiences: experiences})
//     var input = {experiences: experiences}
//     console.log(input);
// })
// console.log(input);

    return(
        <div style={expStyling}>
            <Pictures />
            <div>
                <br></br>
                <div style={typeStyling}>ACTIVITY TYPE</div>
                <br></br>
                <div style={titleStyling}>TITLE FOR THE ACTIVITY</div>
                <div style={faqStyling}>6 hours · Short description of what is included</div>
                <br></br>
                <br></br>
                <div style={whatDoStyling}>What we'll do:</div>
                <div style={descStyling}> Some wall of text that will no doubt give a reasonable description of the exerience.</div>
            </div>
        </div>
    )
}

export default Experience;