import React from "react";

function Universe() {
  return (
    <div className="container">
      <div className="row text-center mt-5">
        <h1 className="text-muted fs-2" style={{ fontWeight: "650" }}>
          The Zerodha Universe
        </h1>
        <p className="text-muted mt-3 mb-5">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3">
          <img
            src="media/zerodhaFundhouse.png"
            alt="#"
            style={{ width: "47%" }}
          />
          <p className="text-small text-muted mt-3">
            Simple & transparent funds for your goals & objectives
          </p>
        </div>
        <div className="col-4 p-3">
          <img src="media/sensibullLogo.svg" alt="#" style={{ width: "47%" }} />
          <p className="text-small text-muted mt-3">
            Options trading platform that let you to create strategis,analyze
            positions and more.
          </p>
        </div>
        <div className="col-4 p-3">
          <img src="media/goldenpiLogo.png" alt="#" style={{ width: "47%" }} />
          <p className="text-small text-muted mt-3">
            Packed with powerful features to help you find the perfect companies
            to invest in
          </p>
        </div>
        <div className="col-4 p-3">
          <img src="media/smallcaseLogo.png" alt="#" style={{ width: "47%" }} />
          <p className="text-small text-muted mt-3">
            A smallcase is a basket of stocks that reflects an idea. smallcases
            are portfolios of stocks or ETFs, that track a theme, strategy or
            objective.
          </p>
        </div>
        <div className="col-4 p-3">
          <img src="media/streakLogo.png" alt="#" style={{ width: "34%" }} />
          <p className="text-small text-muted mt-3">
            Streak is a fully embedded workflow (CRM) and productivity software
            in Gmail, and empowers you to manage all your work right in your
            inbox.
          </p>
        </div>
        <div className="col-4 p-3">
          <img src="media/dittoLogo.png" alt="#" style={{ width: "29%" }} />
          <p className="text-small text-muted mt-3">
            Ditto is a corporate insurance agent backed by Zerodha, an Indian
            stock broker and financial services company.
          </p>
        </div>

        <button
          className="btn btn-primary fs-5 mb-5 p-2"
          style={{ width: "20%", margin: "0 auto" }}
        >
          <p> Sign Up For Free </p>
        </button>
      </div>
    </div>
  );
}

export default Universe;
