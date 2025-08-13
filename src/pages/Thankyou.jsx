import React from "react";
import thankyou from "/images/open.png";


const ThankYou = () => {
  return (
    <div className="container-fulid text-center m-3 p-5 my-5" data-aos="fade-up">
      <div className="row justify-content-center align-items-center">
        <div className="col-12">
            <img src={thankyou}  className="thank-img"></img>
          <h1 className="display-4 text-warning fw-semibold ">Thank You!</h1>
          <p className="fs-6 mb-4">Your submission has been received.</p>
          <a href="/" className="button-secondary">Go Back Home</a>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
