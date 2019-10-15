import React from "react";
import style from "./styles/Map.css"
import $ from "jquery";


var map = "https://img.utdstc.com/screen/13/google-maps-001.png:m";

var mapStyle = {
    width: "35%",
    float: "right",
    position: "sticky"
}

const Map = () => {

return (
    <div>
     <img src={map} style={mapStyle}>
     </img>
    </div>
)
}

export default Map;