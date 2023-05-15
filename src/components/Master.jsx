import "./Master.css";
import pizza from "../assets/pizza.png";

function Master() {
  return (
    <div className="big-main">
      <div className="big-text top">
        Do good. <br /> Be nice.
      </div>
      <div className="container">
        <div className="big-text bottom">
          Order Pizza. <br /> Repeat...
        </div>
      </div>
      <img className="big-img" src={pizza} alt="pizza" />
    </div>
  );
}

export default Master;
