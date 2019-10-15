import React from 'react';
import $ from 'jquery';
import style from './styles/App.css';
import List from './List.jsx';
import Map from './Map.jsx';

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
        <div>PARAGRAPH TAG SYNTAX
        <h1>
            <button onClick={request} >request</button>
            <button onClick={testData} >test data</button>
        </h1>
        <List />
        <Map />
        </div>
    )
}

export default App;