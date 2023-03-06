import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Phonelist />
    </div>
  );
}

function Phonelist() {
  const [mobilelist, setmobilelist] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/mobiles")
      .then((res) => res.json())
      .then((data) => setmobilelist(data));
  }, []);

  return (
    <div className="phone-list-container">
      {mobilelist.map((mbl, index) => (
        <Phone mobile={mbl} key={index} />
      ))}
    </div>
  );
}
function Phone({ mobile }) {
  return (
    <div className="phone-container">
      <img className="phone-picture" src={mobile.img} alt={mobile.model} />
      <h3 className="phone-name">{mobile.model}</h3>
      <p className="phone-company ">{mobile.company}</p>
    </div>
  );
}

export default App;
