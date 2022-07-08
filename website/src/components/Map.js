import DottedMap from "dotted-map";
import './Component.css';

const Map = () => {
  // It’s safe to re-create the map at each render, because of the
  // pre-computation it’s super fast ⚡️
  const map = new DottedMap({ height: 50, grid: "vertical" });

  const svgMap = map.getSVG({
    radius: 0.3,
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