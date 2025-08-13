import React from "react";
import thankyou from "/images/open.png";
import { Link } from "react-router-dom";


const ThankYou = () => {
  return (
    <div className="container-fulid text-center m-3 p-5 my-5">
      <div className="row justify-content-center align-items-center">
        <div className="col-12">
            <img src={thankyou}  width={"200px"} height={"200px"}></img>
          <h1 className="display-5 text-warning fw-semibold mb-4 ">Thank You!</h1>
          <p className="fs-6 mb-4">Your submission has been received.</p>
          <Link to="/" className="btn button3 me-md-2">Go Back Home</Link>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
