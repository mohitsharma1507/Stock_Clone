import React from "react";

function Award() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 p-5">
          <img src="media/largestBroker.svg" alt="Awards" />
        </div>
        <div className="col-6 p-5 mt-3">
          <h1>Largest Stock Broker in India</h1>
          <p className="mb-5">
            2+ millons Zerodha clients contribute to over 15% of all retail
            order volumes in india daily trading and investing in:
          </p>
          <div className="row">
            <div className="col-6 ">
              <ul>
                <li>
                  <p>Futures and Options</p>
                </li>
                <li>
                  <p>Commodity derivates</p>
                </li>
                <li>
                  <p>Currency derivates</p>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>
                  <p>Stocks & IPOs</p>
                </li>
                <li>
                  <p>Direct mutual funds</p>
                </li>
                <li>
                  <p>Bonds and Govt. Sercurities</p>
                </li>
              </ul>
            </div>
          </div>
          <img src="media/pressLogos.png" style={{ width: "90%" }} />
        </div>
      </div>
    </div>
  );
}

export default Award;
