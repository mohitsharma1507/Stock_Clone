import React from "react";

function Signup() {
  return (
    <div className="container p-5">
      <div className="row p-5" style={{ marginTop: "15px" }}>
        <div className="col-6 p-5">
          <img src="media/signup.png" style={{ width: "110%" }} />
        </div>

        <div className="col-6 p-5">
          <h1 className="mb-2 fs-3 fw-bold">SignUp Now</h1>
          <p className="text-muted fs-5">Or track your existing application.</p>
        </div>
      </div>
      <div
        className="mt-5  text-muted"
        style={{ fontSize: "14px", marginLeft: "9rem" }}
      >
        <p>
          I authorise Zerodha to contact me even if my number is registered on
          DND. I authorise Zerodha to fetch my KYC information from the C-KYC
          registry with my PAN.
        </p>
        <br />
        <p style={{ marginLeft: "23rem", marginTop: "-21px" }}>
          Please visit <a href="#">this article</a> to know more.
        </p>
        <br />
        <p style={{ marginLeft: "7rem", marginTop: "-18px" }}>
          If youare looking to open a HUF, Corporate, Partnership, or NRI
          account, you have to use the offline forms. For help,
          <a href="3">click here.</a>
        </p>
      </div>
    </div>
  );
}

export default Signup;
