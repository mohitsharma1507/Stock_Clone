import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div>
            <a href={tryDemo} style={{ textDecoration: "none" }}>
              Console
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a
              href={learnMore}
              style={{ textDecoration: "none", marginLeft: "50px" }}
            >
              Kite Connect
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div className="col-6 p-5">
          <img src={imageURL} alt="" style={{ marginTop: "-8rem" }} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
