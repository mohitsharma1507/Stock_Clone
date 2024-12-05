import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

function Signup() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });
  const { email, password, username } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:8080/signup",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          window.location.href = "http://localhost:5174/";
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
      username: "",
    });
  };
  return (
    <div className="container p-5">
      <div className="row p-5" style={{ marginTop: "15px" }}>
        <div className="col-6 p-5">
          <img src="media/signup.png" style={{ width: "110%" }} />
        </div>

        <div className="col-6 p-5">
          <h1 className="mb-2 fs-3 fw-bold">SignUp Now</h1>
          <p className="text-muted fs-5">Or track your existing application.</p>
          <form onSubmit={handleSubmit}>
            <div style={{ margin: "30px" }}>
              <input
                style={{ width: "21rem", height: "40px", borderRadius: "5rem" }}
                type="email"
                name="email"
                value={email}
                placeholder="Enter your email"
                onChange={handleOnChange}
              />
            </div>
            <div style={{ margin: "30px" }}>
              <input
                style={{ width: "21rem", height: "40px", borderRadius: "5rem" }}
                type="text"
                name="username"
                value={username}
                placeholder="Enter your username"
                onChange={handleOnChange}
              />
            </div>
            <div style={{ margin: "30px" }}>
              <input
                style={{ width: "21rem", height: "40px", borderRadius: "5rem" }}
                type="password"
                name="password"
                value={password}
                placeholder="Enter your password"
                onChange={handleOnChange}
              />
            </div>
            <button
              style={{
                padding: "8px",
                color: "white",
                fontWeight: "bold",
                borderBottom: "1px solid #ddd",
                width: "8rem",
                marginLeft: "7rem",
                marginTop: "12px",
              }}
              type="submit"
              className="btn btn-primary"
            >
              Submit
            </button>
            <br />
            <br />
            <span style={{ marginLeft: "5rem" }}>
              Already have an account? <Link to={"/login"}>Login</Link>
            </span>
          </form>
          <ToastContainer />
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
