import React from "react";
import Imgslider from "../components/Imgslider";
import Button from "react-bootstrap/Button";

const Home = () => {
  return (
    <>
      <div className="homepage">
        <div className="hometext">
          <h1 style={{ color: "#490B3D", fontSize: "bold" }}>Welcome to</h1>
          <h1 style={{ color: "#BD1E51", fontSize: "bold" }}>
            Pal's Electricals
          </h1>
          <h5 style={{ color: "#F1B814", fontSize: "bold" }}>
            One solution for all your Electircal needs
          </h5>
          <Button href="/home" variant="outline-dark">
            Shop Now
          </Button>
        </div>
        <div className="home1 rounded">
          <Imgslider className="slider shadow-lg p-3 mb-5 bg-white" />
        </div>
      </div>
    </>
  );
};

export default Home;
