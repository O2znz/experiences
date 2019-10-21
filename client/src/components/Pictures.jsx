import React from 'react';
import styled from 'styled-components';
import style from './styles/Pictures.css';

var PicDiv = styled.div`
    width: 300px;
    height: 265.72px;

    `
var Pic1Style = styled.img`
    width: 33%;
    height: 50%;
`
var Pic2Style = styled.img`
    width: 66%;
    height: 100%;
    float: right;
`

const Pictures = (props) => {

    return (
        <PicDiv>
            <Pic1Style src="https://a0.muscache.com/im/pictures/lombard/MtTemplate-378744-media_library/original/261d560d-b91d-401b-acf3-613d8c31d298.jpeg?aki_policy=poster"></Pic1Style>
            <Pic2Style src="https://a0.muscache.com/im/pictures/lombard/MtTemplate-378744-media_library/original/d83cd060-ccb6-4b9a-addd-f2fad6f32e17.jpeg?aki_policy=poster"></Pic2Style>
            <Pic1Style src="https://a0.muscache.com/im/pictures/lombard/MtTemplate-378744-media_library/original/13743122-1250-4c12-b5c4-dcd23851b3c6.jpeg?aki_policy=poster"></Pic1Style>
        </PicDiv>
    )
}

export default Pictures;