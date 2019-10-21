import React from 'react';
import style from './styles/List.css';
import Experience from './Experience.jsx';

var listStyling = {
    display: "flex-inline",
    border: "1px solid black",
    width: '60%',
    height: '100%'
}



const List = (props) => {
    var index = Object.keys(props.items);
    console.log(props.items[index["2"]]);
    return(
        <div style={listStyling}>
        {index.map((place) =>
            <Experience item={props.items[place]} key={place} />
          )}
        </div>

    )
}

export default List;