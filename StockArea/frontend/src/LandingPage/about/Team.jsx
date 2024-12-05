import React from "react";

function Team() {
  return (
    <div className="Container ">
      <div className="row border-top p-5 mt-5">
        <h1 className="text-center " style={{ fontWeight: "700" }}>
          {" "}
          People
        </h1>
      </div>
      <div
        className="row p-5   text-muted fs-6 text-center"
        style={{ lineHeight: "1.8rem", fontSize: "1.2em" }}
      >
        <div className="col-6 p-5 text-center">
          <img
            src="media/nithinKamath.jpg"
            alt="shakal"
            style={{ borderRadius: "50%", width: "50%", marginLeft: "9rem" }}
          />
          <h4 className="mt-5" style={{ marginLeft: "9rem" }}>
            Nithin Kamath
          </h4>
          <h6 style={{ marginLeft: "9rem" }}>Founder,CEO</h6>
        </div>
        <div className="col-6 p-5" style={{ marginLeft: "-5rem" }}>
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen</p>
          <p>
            Connect on <a href="#">Homepage</a>/ <a href="#">TrandingQnA</a> /{" "}
            <a href="#">Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
