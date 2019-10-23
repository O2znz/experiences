import React from 'react';
// import styled from 'styled-components';
// import style from './styles/List.css';
const styled = window.styled;
import Experience from './Experience.jsx';

var ListStyling = styled.div`
    display: flex-inline;
    border: 1px solid black;
    width: 60%;
    height: 100%;
`



const List = (props) => {
    var index = Object.keys(props.items);
    return(
        <ListStyling>
        {index.map((place) =>
            <Experience item={props.items[place]} key={place} />
          )}
        </ListStyling>

    )
}

export default List;