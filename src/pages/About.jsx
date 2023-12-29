import React from "react";
import Location from "../components/Location/Location"

const About = () => {
  return (
    <div className="container p-14">
      <div className="py-10">
        <h1
          className="my-8 border-l-8
        border-primary/50 py-2 pl-2 text-3xl font-bold"
        >
          About Us
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          veniam eum ipsum mollitia eligendi ullam obcaecati iure accusamus quam
          tempora, doloremque repudiandae reprehenderit odit? Dolore placeat
          quia similique, doloremque odio laudantium asperiores repudiandae
          nobis quasi enim velit incidunt cum magnam non odit corrupti sint
          delectus totam culpa nostrum iure mollitia. Id exercitationem
          voluptatibus omnis sit minima velit maxime modi nisi.
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          ullam ratione labore error nihil architecto modi eius voluptatum iusto
          enim natus asperiores cum nobis officiis, unde, tenetur blanditiis
          aspernatur optio. Magni veniam accusantium consectetur reiciendis ex,
          ipsam a quia autem.
        </p>
      </div>
      <Location />
    </div>
  );
};

export default About;
