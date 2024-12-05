import React from "react";

function OpenAccount() {
  return (
    <div className="Container p-5 mb-3">
      <div className="row text-center">
        <h1 className="mt-3">Open a Zerodha account </h1>
        <p>
          Modern platform and apps, &#8377;0 investment and flat &#8377;20
          intraday and F&O trades.
        </p>
        <button
          className="btn btn-primary p-3 fs-5 mb-5"
          style={{ width: "25%", margin: "0 auto" }}
        >
          Sign up Now
        </button>
      </div>
    </div>
  );
}

export default OpenAccount;
