import React from 'react';
import style from './styles/List.css';
import Experience from './Experience.jsx';

var listStyling = {
    width: '60%',
    height: '100%'
}



const List = () => {
    return(
        <div style={listStyling}>
            <Experience />
            <Experience />
            <Experience />
        </div>

    )
}

export default List;