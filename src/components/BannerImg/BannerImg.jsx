import React from "react";

const BannerImg = ({ img }) => {
  const bgImage = {
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "400px",
  };
  return (
    <div data-aos="zoom-in" className="h-[700px] w-full" style={bgImage}></div>
  );
};

export default BannerImg;
