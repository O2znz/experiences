import React from 'react';
import style from './styles/Pictures.css';

var picStyle = {
    display: "flex-fit",
    width: "30%"
}
var pic1Style = {
    width: "33%",
    height: "50%"
}
var pic2Style = {
    width: "66%",
    height: "100%",
    float: "right",
}

const Pictures = (props) => {

    return (
        <div style={picStyle}>
            <img src="https://a0.muscache.com/im/pictures/lombard/MtTemplate-378744-media_library/original/261d560d-b91d-401b-acf3-613d8c31d298.jpeg?aki_policy=poster" style={pic1Style}></img>
            <img src="https://a0.muscache.com/im/pictures/lombard/MtTemplate-378744-media_library/original/d83cd060-ccb6-4b9a-addd-f2fad6f32e17.jpeg?aki_policy=poster" style={pic2Style}></img>
            <img src="https://a0.muscache.com/im/pictures/lombard/MtTemplate-378744-media_library/original/13743122-1250-4c12-b5c4-dcd23851b3c6.jpeg?aki_policy=poster" style={pic1Style}></img>
        </div>
    )
}

export default Pictures;