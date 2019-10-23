import React from 'react';
// import styled from 'styled-components';
// import style from './styles/Experience.css';
const styled = window.styled;
import Pictures from "./Pictures.jsx"
import $ from "jquery";


var ExpStyling = styled.div`
    display: flex;
    // margin: 10px;
    border: 1px solid black;
    width: 100%;
    height: 300px;
`
var TypeStyling = styled.div`
    font-size: 12px;
    font-weight: bold;
    color: grey;
`
var TitleStyling = styled.div`
    fontSize: 25px;
`
var FaqStyling = styled.div`
    color: grey;
`
var WhatDoStyling = styled.div`
    font-weight: bold;
`
var DescStyling = styled.div`
    width: 600px;
    height: 100px;
`

const Experience = (props) => {

// console.log(props.item.text.desciption)
//**************** STYLING  ****************//
//******************************************** */

    return(
        <ExpStyling>
            <Pictures pics={props.item.images}/>
            <div>
                <br></br>
                <TypeStyling>ACTIVITY TYPE</TypeStyling>
                <br></br>
                <TitleStyling>{props.item.text.title}</TitleStyling>
                <FaqStyling>6 hours · Short description of what is included</FaqStyling>
                <br></br>
                <br></br>
                <WhatDoStyling>What we'll do:</WhatDoStyling>
                <DescStyling>{props.item.text.desciption}</DescStyling>
            </div>
        </ExpStyling>
    )
}

export default Experience;