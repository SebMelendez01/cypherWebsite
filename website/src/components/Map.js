import DottedMap from "dotted-map";
import './Component.css';
import React from "react";




const Map = () => {
  // It’s safe to re-create the map at each render, because of the
  // pre-computation it’s super fast ⚡️
  const map = new DottedMap({ height: 60, grid: "vertical" });
  
  map.addPin({
    lat: 40.73061,
    lng: -73.935242,
    svgOptions: { color: "#FA3667", radius: 0.5 }
  });

  const svgMap = map.getSVG({
    radius: 0.35,
    color: "#000000",
    shape: "circle",
    backgroundColor: "#FFFFFF"
  });
//   https://www.react-simple-maps.io/examples/

  return (
    <div>
      <img
          src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
          alt=""
        />              
    </div>
  );
};

export default Map;