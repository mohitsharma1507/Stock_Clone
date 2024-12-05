import React from "react";

function Brokerage() {
  return (
    <div className="container">
      <div className="row">
        <h3 style={{ fontWeight: "592", marginBottom: "35px" }}>
          Charges for account opening
        </h3>
        <div className="table">
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              border: "1px solid #ddd",
            }}
          >
            <thead>
              <tr>
                <th
                  style={{
                    textAlign: "left",
                    padding: "8px",
                    borderBottom: "1px solid #ddd",
                  }}
                >
                  Type of account
                </th>
                <th
                  style={{
                    textAlign: "left",
                    padding: "8px",
                    borderBottom: "1px solid #ddd",
                  }}
                >
                  Charges
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: "8px", borderBottom: "1px solid #ddd" }}>
                  Online account
                </td>
                <td
                  style={{
                    padding: "8px",
                    color: "white",
                    fontWeight: "bold",
                    borderBottom: "1px solid #ddd",
                  }}
                >
                  <button className="btn btn-success"> Free</button>
                </td>
              </tr>
              <tr style={{ backgroundColor: "#E5E4E2" }}>
                <td style={{ padding: "8px", borderBottom: "1px solid #ddd" }}>
                  Offline account
                </td>
                <td
                  style={{
                    padding: "8px",
                    color: "white",
                    fontWeight: "bold",
                    borderBottom: "1px solid #ddd",
                  }}
                >
                  <button className="btn btn-success"> Free</button>
                </td>
              </tr>
              <tr>
                <td style={{ padding: "8px", borderBottom: "1px solid #ddd" }}>
                  NRI account (offline only)
                </td>
                <td style={{ padding: "8px", borderBottom: "1px solid #ddd" }}>
                  ₹ 500
                </td>
              </tr>
              <tr style={{ backgroundColor: "#E5E4E2" }}>
                <td style={{ padding: "8px" }}>
                  Partnership, LLP, HUF, or Corporate accounts (offline only)
                </td>
                <td style={{ padding: "8px" }}>₹ 500</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="row mt-5">
        <h3 style={{ fontWeight: "592", marginBottom: "35px" }}>
          Charges for optional value added services
        </h3>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            border: "1px solid #ddd",
          }}
        >
          <thead>
            <tr>
              <th
                style={{
                  textAlign: "left",
                  padding: "8px",
                  borderBottom: "1px solid #ddd",
                }}
              >
                Service
              </th>
              <th
                style={{
                  textAlign: "left",
                  padding: "8px",
                  borderBottom: "1px solid #ddd",
                }}
              >
                Billing Frequency
              </th>
              <th
                style={{
                  textAlign: "left",
                  padding: "8px",
                  borderBottom: "1px solid #ddd",
                }}
              >
                Charges
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: "8px", borderBottom: "1px solid #ddd" }}>
                Tickertape
              </td>
              <td style={{ padding: "8px", borderBottom: "1px solid #ddd" }}>
                Monthly / Annual
              </td>
              <td style={{ padding: "8px", borderBottom: "1px solid #ddd" }}>
                Free: 0 | Pro: 249/2399
              </td>
            </tr>
            <tr style={{ backgroundColor: "#E5E4E2" }}>
              <td style={{ padding: "8px", borderBottom: "1px solid #ddd" }}>
                Smallcase
              </td>
              <td style={{ padding: "8px", borderBottom: "1px solid #ddd" }}>
                Per transaction
              </td>
              <td style={{ padding: "8px", borderBottom: "1px solid #ddd" }}>
                Buy & Invest More: 100 | SIP: 10
              </td>
            </tr>
            <tr>
              <td style={{ padding: "8px" }}>Kite Connect</td>
              <td style={{ padding: "8px" }}>Monthly</td>
              <td style={{ padding: "8px" }}>
                Connect: 2000 | Historical: 2000
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Brokerage;
