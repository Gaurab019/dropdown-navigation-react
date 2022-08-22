import "./DDElement.css";

function DDElement({ textVal }) {
  return (
    <div className="DDElement mobileLinksAlign">
      <h1 className="DDText">{textVal}</h1>
      <img src="assets/images/iconADown.svg" alt="Expand" className="DDIcon" />
    </div>
  );
}

export { DDElement };
