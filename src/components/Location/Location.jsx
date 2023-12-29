import React from "react";

const Location = () => {
  return (
    <div>
      <div>
        <div className="container pb-10">
          <h1 className="inline-block border-l-8 border-primary/50 py-2 pl-2 mb-4 text-xl font-bold sm:text-3xl">
            Location to visit
          </h1>
          <div>
            <div className="rounded-xl ">
              <iframe
                // src="https://maps.app.goo.gl/KuyDKAgTYmeLq9CQ6"
                // src="https://www.google.com/maps/place/Indian+Institute+of+Technology+Indore/@22.5203597,75.8445054,13z/data=!4m10!1m2!2m1!1siit+indore!3m6!1s0x3962efcccbce7145:0x784e8cb69818596b!8m2!3d22.5203597!4d75.9207231!15sCgppaXQgaW5kb3JlIgOIAQGSARR0ZWNobmljYWxfdW5pdmVyc2l0eeABAA!16s%2Fm%2F04yf6vy?entry=ttu"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7116.040113933064!2d83.97168138953894!3d26.90285855661167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39938d631905f7c1%3A0x189dbadf0b42da46!2sNew%20Mobile%20World!5e0!3m2!1sen!2sin!4v1700902186385!5m2!1sen!2sin"
                width="100%"
                height="360"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                style={{ borderRadius: "20px" }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
