import React, { useState } from "react";
import bg from "../assets/background2.jpg";
import ResultCard from "../component/ResultCard";
import "bootstrap-icons/font/bootstrap-icons.css";

const Home = () => {
  const [url, setUrl] = useState("");
  const [scanResult, setScanResult] = useState(null);

  const handleScan = async () => {
    // Simulated logic: replace with actual backend fetch
    if (url.includes("hdmovimn")) {
      setScanResult("phishing");
    } else {
      setScanResult("safe");
    }
  };

  return (
    <div
      className="d-flex flex-column justify-content-between vh-100 text-white vw-100"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="px-4 pt-5">
        <div className="input-group glass-blur rounded-pill">
          <input
            type="text"
            className="form-control rounded-start-pill bg-transparent text-white px-4 py-2 border-0"
            placeholder="Paste any URL here..."
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <button
            className="btn bg-transparent text-white rounded-end-pill border-0"
            onClick={handleScan}
          >
            <i className="bi bi-search"></i>
          </button>
        </div>
        <p className=" mt-2 ms-3 small" style={{color: "#AEAEB2"}}>  
          Not sure if that link is safe? <br /> Paste it here and we’ll sniff it
          for fakes.
        </p>
      </div>

      <div className="flex-grow-1 d-flex align-items-center justify-content-center">
        {scanResult && <ResultCard result={scanResult} />}
      </div>

      <div className="text-center p-1 mb-5">
        <button
          className="btn btn-outline-light rounded-pill px-4 "
          onClick={handleScan}
          style={{
    backgroundColor: '#492532',
    border: 'none'
  }}
        >
          Scan Now
        </button>
      </div>
    </div>
  );
};

export default Home;
