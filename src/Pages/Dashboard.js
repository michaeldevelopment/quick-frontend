import React from "react";
import Slider from "react-slick";
import Carousel from "react-bootstrap/Carousel";

export default function Dashboard() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <Carousel variant="dark" indicators="false">
        <Carousel.Item>
          <div>
            <h3>1</h3>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div>
            <h3>2</h3>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div>
            <h3>3</h3>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div>
            <h3>4</h3>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div>
            <h3>5</h3>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div>
            <h3>6</h3>
          </div>
        </Carousel.Item>
      </Carousel>
    </Slider>
  );
}
