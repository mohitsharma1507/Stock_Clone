import React from "react";

function Hero() {
  return (
    <section
      className="container-fluid"
      style={{ backgroundColor: "#387ed1", color: "white" }}
    >
      <div
        className=" mb-5 p-5"
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "5rem 160px",
          fontWeight: "680",
        }}
      >
        <h3>Support Portal</h3>
        <a href="#" style={{ color: "white" }}>
          Track Tickets
        </a>
      </div>
      <div
        className="row p-5 "
        style={{ marginLeft: "111px", marginTop: "-8rem" }}
      >
        <div className="col-6 p-5">
          <h1
            style={{
              fontSize: "22px",
              fontWeight: "600",
              marginBottom: "2rem",
            }}
          >
            Search for an answer or browse help topics to create a tickets
          </h1>
          <input
            placeholder="Eg: how do we activate F&O ,why is my order getting rejected..."
            style={{
              padding: "20px 50px",
              width: "100%",
              fontSize: "15px",
              borderRadius: "10px",
              border: "none",
            }}
          />
          <br />
          <div
            className="links"
            style={{ marginTop: "19px", marginLeft: "-8px", fontWeight: 600 }}
          >
            <a href="#" style={{ color: "white", marginLeft: "1rem" }}>
              Track account opening{" "}
            </a>
            <a href="#" style={{ color: "white", marginLeft: "1rem" }}>
              Track segment activation{" "}
            </a>
            <a href="#" style={{ color: "white", marginLeft: "1rem" }}>
              Intraday margins{" "}
            </a>
            <a
              href="#"
              style={{
                color: "white",
                marginLeft: "1.2rem",
                lineHeight: "4rem",
              }}
            >
              Kite user manual
            </a>
          </div>
        </div>
        <div className="col-6 p-5">
          <h3
            style={{ fontSize: "22px", fontWeight: "600", marginTop: "15px" }}
          >
            Featured
          </h3>
          <ol>
            <li>
              <a href="#" style={{ color: "white", fontWeight: 600 }}>
                Suspension of trading - IDFC Limited
              </a>
            </li>
            <li>
              <a
                href="#"
                style={{
                  color: "white",
                  fontWeight: 600,
                  lineHeight: "3.5rem",
                }}
              >
                Rights Entitlements listing in October 2024
              </a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
