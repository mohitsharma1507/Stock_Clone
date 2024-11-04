import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(240,240,240)" }}>
      <div className="container border-top mt-5">
        <div className="row mt-5">
          <div className="col">
            <img src="media/logo.svg" style={{ width: "50%" }} />

            <br />
            <br />
            <p className="text-muted " style={{ fontSize: "14px" }}>
              &copy; 2018 -2024 ,Zerodha Broking Ltd. <br />
              All Rights reserved
            </p>
            <span>
              <i
                className="fa-brands fa-x-twitter fs-5"
                style={{
                  marginRight: "28px",
                }}
              ></i>
              <i
                className="fa-brands fa-facebook fs-5"
                style={{ marginRight: "28px" }}
              ></i>
              <i
                className="fa-brands fa-instagram fs-5 "
                style={{ marginRight: "28px" }}
              ></i>
              <i
                className="fa-brands fa-linkedin-in fs-5"
                style={{ marginRight: "28px" }}
              ></i>{" "}
              <hr />
              <i
                className="fa-brands fa-youtube fs-5"
                style={{ marginRight: "28px" }}
              ></i>
              <i
                className="fa-brands fa-whatsapp fs-5"
                style={{ marginRight: "28px" }}
              ></i>
              <i
                className="fa-brands fa-telegram fs-5"
                style={{ marginRight: "28px" }}
              ></i>
            </span>
          </div>
          <div className="col">
            <p>Company</p>

            <a
              href="#"
              style={{
                color: "#666",
                textDecoration: "none",
              }}
            >
              About
            </a>

            <br />

            <a href="#" style={{ color: "#666", textDecoration: "none" }}>
              Products
            </a>

            <br />

            <a href="#" style={{ color: "#666", textDecoration: "none" }}>
              Pricing
            </a>

            <br />

            <a href="#" style={{ color: "#666", textDecoration: "none" }}>
              Referral programe
            </a>

            <br />

            <a href="#" style={{ color: "#666", textDecoration: "none" }}>
              Carrers
            </a>

            <br />

            <a href="#" style={{ color: "#666", textDecoration: "none" }}>
              Zerodha tech
            </a>

            <br />

            <a href="#" style={{ color: "#666", textDecoration: "none" }}>
              Press & Media
            </a>

            <br />

            <a href="#" style={{ color: "#666", textDecoration: "none" }}>
              Zerodha cares(CSR)
            </a>
          </div>
          <div className="col">
            <p>Support</p>
            <a href="#" style={{ color: "#666", textDecoration: "none" }}>
              Contact
            </a>
            <br />
            <a href="#" style={{ color: "#666", textDecoration: "none" }}>
              Support portal
            </a>
            <br />
            <a href="#" style={{ color: "#666", textDecoration: "none" }}>
              Z-Connect blog
            </a>
            <br />
            <a href="#" style={{ color: "#666", textDecoration: "none" }}>
              List of charges
            </a>
            <br />
            <a href="#" style={{ color: "#666", textDecoration: "none" }}>
              Downloads & Resources
            </a>
          </div>
          <div className="col">
            <p>Account</p>
            <a href="#" style={{ color: "#666", textDecoration: "none" }}>
              Open an account{" "}
            </a>
            <br />
            <a href="#" style={{ color: "#666", textDecoration: "none" }}>
              {" "}
              Fund traveler
            </a>
            <br />
            <a href="#" style={{ color: "#666", textDecoration: "none" }}>
              60 days challenge
            </a>
          </div>
        </div>
        <div className="mt-5  text-muted" style={{ fontSize: "14px" }}>
          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
            no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
            Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity
            Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001
            – SEBI Registration no.: INZ000038238 Registered Address: Zerodha
            Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence
            Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka,
            India. For any complaints pertaining to securities broking please
            write to <a href="#">complaints@zerodha.com</a>, for DP related to{" "}
            <a href="#">dp@zerodha.com</a>. Please ensure you carefully read the
            Risk Disclosure Document as prescribed by SEBI | ICF <br />
            <br />
            Procedure to file a complaint on <a href="#">SEBI SCORES: </a>{" "}
            Register on SCORES portal. Mandatory details for filing complaints
            on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits:
            Effective Communication, Speedy redressal of the grievances
            <br />
            <br />
            <a href="#">
              Smart Online Dispute Resolution | Grievances Redressal Mechanism
            </a>
            <br />
            <br />
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
            <br />
            <br />
            Attention investors: (1) Stock brokers can accept securities as
            margins from clients only by way of pledge in the depository system
            w.e.f September 01, 2020. (2) Update your e-mail and phone number
            with your stock broker / depository participant and receive OTP
            directly from depository on your e-mail and/or mobile number to
            create pledge. (3) Check your securities / MF / bonds in the
            consolidated account statement issued by NSDL/CDSL every month.
            <br />
            <br />
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services, please{" "}
            <a href="#"> create a ticket here.</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
