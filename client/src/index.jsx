import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

var request = () => {
    $.get(`/`, null, () => {
        console.log('request recieved')
    })
}


const App = () => {

    return(
        <div>PARAGRAPH TAG SYNTAX
            <button onClick={request} ></button>
        </div>
    )
}


ReactDOM.render(<App />, document.getElementById('app'));