import React from 'react';
import styled from 'styled-components';
// import style from "./styles/Map.css"
// import $ from "jquery";


const map = 'https://img.utdstc.com/screen/13/google-maps-001.png:m';

const Mapstyle = styled.img`
    width: 40%;
    position: fixed;
`;

const Map = () => {

  return (
    <div>
      <Mapstyle src={map} />
    </div>
  );
};

export default Map;
