import "./Head.css";

function Head() {
  return (
    <div className="header">
      <div className="navhead">
        <div class="head-nav">
          <a href="#Login">Home</a>
          <div className="divider"></div>
          <a href="#Register">Order</a>
          <div className="divider"></div>
          <a href="#about">About</a>
        </div>
      </div>
    </div>
  );
}

export default Head;
