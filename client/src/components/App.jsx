import React from 'react';
import $ from 'jquery';
import styled from 'styled-components';
import style from './styles/App.css';
import List from './List.jsx';
import Map from './Map.jsx';

/* BEGINNING OF STYLING */
var appStyle = {
    width: "inherit",
    height: "inherit",
    display: "flex"
}
var Container = styled.div`
    color: "red";
    height: "20px";
    width: "20px";
    font-size: 20px;
    background-color: "red";
`
var Page = styled.div`
`
/* END OF STYLING*/
var request = () => {
    $.get(`/`, null, () => {
        console.log('request sent')
    })
}
var testData = () => {
    $.get('/experiences/', null, (experiences) => {
        console.log({experiences: experiences})
    })
}

const App = () => {

    return(
        <Page>
            <Container>SOME TEXT
            </Container>

            <button /*className={style.request}*/ onClick={request} >request</button>
            <button onClick={testData} >test data</button>
        <div className="app" style={appStyle}>
        <List />
        <Map />
        </div>
        </Page>
    )
}

export default App;