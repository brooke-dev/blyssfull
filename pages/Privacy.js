import React from "react";
import Header from "../Components/Header.js";
import Footer from "../Components/Footer.js";

export default function Privacy() {
  return (
    <>
      <Header />
      <div
        style={{ position: "relative", top: "100px", marginBottom: "100px" }}
      >
        <iframe
          style={{ height: "80vh", width: "100vw" }}
          src="https://app.termly.io/document/privacy-policy/ed610438-c3de-4830-a382-7a8384f47d94"
        ></iframe>
      </div>
      <Footer />
    </>
  );
}
