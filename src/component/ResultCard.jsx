import React from "react";

const ResultCard = ({ result }) => {
  if (result === "phishing") {
    return (
      <div
        className="p-4 rounded-5"
        style={{
          maxWidth: "90%",
          backgroundColor: "#FEE9E7",
          color: "#49454F",
          borderRadius: "24px",
          fontSize: "14px",
        }}
      >
        <div className="d-flex justify-content-center mb-2">
          <i
            className="bi bi-exclamation-triangle-fill"
            style={{ fontSize: "2rem", color: "#EC221F" }}
          ></i>
        </div>

        <h2
          className="text-center fw-semibold pb-3"
          style={{ color: "#EC221F", fontSize: "24px" }}
        >
          Warning: This Link Looks Suspicious
        </h2>

        <p className="card-text  small">
          This site looks risky. It could be fake or trying to steal your info.
        </p>

        <h6 className="fw-normal  mb-1" style={{ fontSize: "14px" }}>
          Quick Details
        </h6>
        <ul className="small px-3">
          <li>Domain registered recently</li>
          <li>SSL Certificate: Missing or Invalid</li>
          <li>Phishing/malware patterns</li>
          <li>Reputation Score: 23/100</li>
        </ul>

        <div
          className="d-flex justify-content-between align-items-center px-3"
        >
          <a
            href="#"
            className="fw-medium text-decoration-none"
            style={{ color: "#EC221F", fontSize: "14px" }}
          >
            Learn More
          </a>
          <a
            href="#"
            className="fw-medium text-decoration-none d-flex align-items-center gap-1"
            style={{ color: "#EC221F", fontSize: "14px" }}
          >
            <i
              className="bi bi-arrow-right-short"
              style={{ fontSize: "1.5rem" }}
            ></i>
            Report this site
          </a>
        </div>
      </div>
    );
  }

  if (result === "safe") {
    return (
      <div
        className="p-4 rounded-5"
        style={{
          maxWidth: "90%",
          backgroundColor: "#EBFFEE",
          color: "#49454F",
          borderRadius: "24px",
          fontSize: "14px",
        }}
      >
        <div className="d-flex justify-content-center mb-2">
          <i
            className="bi bi-shield-check"
            style={{ fontSize: "2rem", color: "#14AE5C" }}
          ></i>
        </div>

        <h2
          className="text-center fw-semibold pb-3"
          style={{ color: "#14AE5C", fontSize: "24px" }}
        >
          This Website Looks Safe!
        </h2>

        <p className="card-text  small">
          All clear! No signs of malware or phishing. The site looks safe and
          secure.
        </p>

        <h6 className="fw-normal  mb-1" style={{ fontSize: "14px" }}>
          Quick Details
        </h6>
        <ul className="small px-3">
          <li>Domain Age: 5+ years</li>
          <li>SSL Status: Active & Verified</li>
          <li>Trust Score: 92/100</li>
          <li>Scan Type: Real-time URL analysis</li>
        </ul>

        <div className="d-flex justify-content-end">
          <a
            href="#"
            className="fw-semibold text-decoration-none"
            style={{ color: "#14AE5C" }}
          >
            <i className="bi bi-arrow-right-short"></i> Open Website
          </a>
        </div>
      </div>
    );
  }

  return null;
};

export default ResultCard;
