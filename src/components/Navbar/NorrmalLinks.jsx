import "./NElements.css";

function NElements({ textVal, newClass }) {
  return (
    <div className="Nelements mobileLinksAlign">
      <h1 className="NText">{textVal}</h1>
    </div>
  );
}

export default NElements;
