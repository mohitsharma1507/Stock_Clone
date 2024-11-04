import React from "react";

function Hero() {
  return (
    <div className="container p-5 border-bottom mb-5">
      <div className="row text-center" style={{ marginTop: "7rem" }}>
        <h1 style={{ fontWeight: "600" }}>Zerodha Products</h1>
        <h3 className="text-muted fs-4">
          Sleek, modern, and intuitive trading platforms
        </h3>
        <p>
          Check out our &nbsp;
          <a href="#" style={{ textDecoration: "none" }}>
            investment offerings
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;
