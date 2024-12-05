import React from "react";

function Hero() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <h1 style={{ fontSize: "50px", fontWeight: "598", marginTop: "8rem" }}>
          Charges
        </h1>
        <p className="text-muted fs-3" style={{ marginBottom: "10rem" }}>
          List of all charges and taxes
        </p>

        <div className="col-4 p-5">
          <img src="media/pricing0.svg" alt="" style={{ width: "74%" }} />
          <h1 className="fs-3 mb-3">Free equity delivery</h1>
          <p className="text-muted fs-8">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4 p-5">
          <img src="media/intradayTrades.svg" alt="" style={{ width: "74%" }} />
          <h1 className="fs-3 mb-3">Intraday and F&O trades</h1>
          <p className="text-muted fs-8">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4 p-5">
          <img src="media/pricingMF.svg" alt="" style={{ width: "74%" }} />
          <h1 className="fs-3 mb-3">Free direct MF</h1>
          <p className="text-muted fs-8">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
      <div className="container2">
        <div className="row">
          <h3 style={{ marginLeft: "3rem" }}>Charges Explained</h3>
          <div className="col-6 p-5">
            <h2 className="text-muted fs-5">
              Securities/Commodities transaction tax
            </h2>
            <p className="text-muted mt-3" style={{ fontSize: "13px" }}>
              Tax by the government when transacting on the exchanges. Charged
              as above on both buy and sell sides when trading equity delivery.
              Charged only on selling side when trading intraday or on F&O.{" "}
              <br />
              <br /> When trading at Zerodha, STT/CTT can be a lot more than the
              brokerage we charge. Important to keep a tab.
            </p>
            <h2 className="text-muted fs-5">Transaction/TurnOver Charges </h2>
            <p className="text-muted mt-3" style={{ fontSize: "13px" }}>
              Charged by exchanges (NSE, BSE, MCX) on the value of your
              transactions. <br />
              <br />
              BSE has revised transaction charges in XC, XD, XT, Z and ZP groups
              to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been
              merged into a new group X w.e.f 01.12.2017) <br />
              <br /> BSE has revised transaction charges in SS and ST groups to
              ₹1,00,000 per crore of gross turnover. <br />
              <br /> BSE has revised transaction charges for group A, B and
              other non exclusive scrips (non-exclusive scrips from group E, F,
              FC, G, GC, W, T) at ₹375 per crore of turnover on flat rate basis
              w.e.f. December 1, 2022. <br />
              <br /> BSE has revised transaction charges in M, MT, TS and MS
              groups to ₹275 per crore of gross turnover.
            </p>
            <h2 className="text-muted fs-5">Call & trade</h2>
            <p className="text-muted mt-3" style={{ fontSize: "13px" }}>
              Additional charges of ₹50 per order for orders placed through a
              dealer at Zerodha including auto square off orders.
            </p>
            <h2 className="text-muted fs-5">Stamp charges</h2>
            <p className="text-muted mt-3" style={{ fontSize: "13px" }}>
              Stamp charges by the Government of India as per the Indian Stamp
              Act of 1899 for transacting in instruments on the stock exchanges
              and depositories.
            </p>
            <h2 className="text-muted fs-5">NRI brokerage charges</h2>
            <p className="text-muted mt-3" style={{ fontSize: "13px" }}>
              <ul>
                <li>₹100 per order for futures and options. </li>
                <li>
                  For a non-PIS account, 0.5% or ₹100 per executed order for
                  equity (whichever is lower).
                </li>
                <li>
                  For a PIS account, 0.5% or ₹200 per executed order for equity
                  (whichever is lower).
                </li>
                <li>
                  ₹500 + GST as yearly account maintenance charges (AMC)
                  charges.
                </li>
              </ul>
            </p>
            <h2 className="text-muted fs-5">Account with debit balance</h2>
            <p className="text-muted mt-3" style={{ fontSize: "13px" }}>
              If the account is in debit balance, any order placed will be
              charged ₹40 per executed order instead of ₹20 per executed order.
            </p>
            <h2 className="text-muted fs-5">
              Charges for Investor's Protection Fund Trust (IPFT) by NSE
            </h2>
            <p className="text-muted mt-3" style={{ fontSize: "13px" }}>
              <ul>
                <li>
                  Equity and Futures - ₹10 per crore + GST of the traded value.
                </li>
                <li>
                  Options - ₹50 per crore + GST traded value (premium value).
                </li>
                <li>
                  Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2
                  per lakh + GST of premium for Options.
                </li>
              </ul>
            </p>
          </div>
          <div className="col-6 p-5 ">
            <h2 className="text-muted fs-5">GST</h2>
            <p className="text-muted mt-3" style={{ fontSize: "13px" }}>
              Tax levied by the government on the services rendered. 18% of (
              brokerage + SEBI charges + transaction charges)
            </p>
            <h2 className="text-muted fs-5">SEBI Charges</h2>
            <p className="text-muted mt-3" style={{ fontSize: "13px" }}>
              Charged at ₹10 per crore + GST by Securities and Exchange Board of
              India for regulating the markets.
            </p>
            <h2 className="text-muted fs-5">
              DP (Depository participant) charges
            </h2>
            <p className="text-muted mt-3" style={{ fontSize: "13px" }}>
              ₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is
              charged on the trading account ledger when stocks are sold,
              irrespective of quantity. <br /> <br /> Female demat account
              holders (as first holder) will enjoy a discount of ₹0.25 per
              transaction on the CDSL fee. <br /> <br /> Debit transactions of
              mutual funds & bonds get an additional discount of ₹0.25 on the
              CDSL fee.
            </p>
            <h2 className="text-muted fs-5">Pledging charges</h2>
            <p className="text-muted mt-3" style={{ fontSize: "13px" }}>
              ₹30 + GST per pledge request per ISIN.
            </p>
            <h2 className="text-muted fs-5">
              AMC (Account maintenance charges)
            </h2>
            <p className="text-muted mt-3" style={{ fontSize: "13px" }}>
              For BSDA demat account: Zero charges if the holding value is less
              than ₹4,00,000. To learn more about BSDA,{" "}
              <a href="#">Click here</a> <br />
              <br />
              For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly
              (90 days). To learn more about AMC, <a href="#">Click here</a>
            </p>
            <h2 className="text-muted fs-5">Corporate action order charges</h2>
            <p className="text-muted mt-3" style={{ fontSize: "13px" }}>
              ₹20 plus GST will be charged for OFS / buyback / takeover /
              delisting orders placed through Console.
            </p>
            <h2 className="text-muted fs-5">Off-market transfer charges</h2>
            <p className="text-muted mt-3" style={{ fontSize: "13px" }}>
              ₹25 or 0.03% of the transfer value (whichever is higher).
            </p>
            <h2 className="text-muted fs-5">Physical CMR request</h2>
            <p className="text-muted mt-3" style={{ fontSize: "13px" }}>
              First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST
              for subsequent requests.
            </p>
            <h2 className="text-muted fs-5">Payment gateway charges</h2>
            <p className="text-muted mt-3" style={{ fontSize: "13px" }}>
              ₹9 + GST (Not levied on transfers done via UPI)
            </p>
            <h2 className="text-muted fs-5">Delayed Payment Charges</h2>
            <p className="text-muted mt-3" style={{ fontSize: "13px" }}>
              Interest is levied at 18% a year or 0.05% per day on the debit
              balance in your trading account. <a href="#">Learn more.</a>
            </p>
          </div>
        </div>
      </div>
      <div className="lastPart">
        <h3 className="text-muted fs-5">Disclaimer</h3>
        <p className="text-muted mt-3" style={{ fontSize: "13px" }}>
          For Delivery based trades, a minimum of ₹0.01 will be charged per
          contract note. Clients who opt to receive physical contract notes will
          be charged ₹20 per contract note plus courier charges. Brokerage will
          not exceed the rates specified by SEBI and the exchanges. All
          statutory and regulatory charges will be levied at actuals. Brokerage
          is also charged on expired, exercised, and assigned options contracts.
          Free investments are available only for our retail individual clients.
          Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20
          (whichever is less) as delivery brokerage. A brokerage of 0.25% of the
          contract value will be charged for contracts where physical delivery
          happens. For netted off positions in physically settled contracts, a
          brokerage of 0.1% will be charged.
        </p>
      </div>
    </div>
  );
}

export default Hero;
