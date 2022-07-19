import React from "react";
import Carousel from "react-bootstrap/Carousel";
import home1 from "../images/home1.jpg";
import home4 from "../images/home4.jpg";
import home2 from "../images/home2.jpg";
const Imgslider = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={home1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={home2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={home4} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
export default Imgslider;
