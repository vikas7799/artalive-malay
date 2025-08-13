import React, { useState } from "react";
import "./HeroSection.css";
import Slide1 from "/videos/Slide1.mp4";
import Slide2 from "/videos/Slide2.mp4";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <>
      <div className="container-fluid p-0 m-0">
        <div
          id="videoCarousel"
          className="carousel slide "
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="carousel-caption text-start">
                <h1 className="  mb-3 white display-2 ">
                  Pusat Prostetik Terunggul di Malaysia
                </h1>

                <p className="fs-6 white">
                  Di ArtaLive, kami menggabungkan teknologi terkini dengan
                  kualiti bertaraf dunia untuk memastikan perkhidmatan yang
                  cemerlang, serta sokongan penuh selepas pemasangan untuk
                  pesakit kami.
                </p>

                <div className=" d-grid gap-3 d-md-flex">
                  <Link
                    type="button"
                    className="btn button1 me-md-2 "
                    to="/prostetik"
                  >
                    Ketahui lebih lanjut
                  </Link>
                  <Link
                    type="button"
                    className="btn button2"
                    to="/perkhidmatan"
                  >
                    Perkhidmatan Teroka
                  </Link>
                </div>
              </div>
              <div className="video-wrapper">
                <div className="video-overlay"></div>
                <video
                  className="d-block slidevideo"
                  muted
                  autoPlay
                  loop
                  playsInline
                  preload="auto"
                >
                  <source src={Slide1} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            <div className="carousel-item">
              <div className="carousel-caption text-start">
                <h2 className=" mb-3 white display-2">
                  Pusat Ortotik Terunggul di Malaysia
                </h2>
                <p className="fs-6 white">
                  Di ArtaLive, kami menggabungkan teknologi terkini dengan
                  kualiti bertaraf dunia untuk memastikan perkhidmatan yang
                  cemerlang, serta sokongan penuh selepas pemasangan untuk
                  pesakit kami.
                </p>

                <div className="d-grid gap-3 d-md-flex">
                  <Link
                    type="button"
                    className="button1 btn me-md-2 "
                    to="/ortotik"
                  >
                    Ketahui lebih lanjut
                  </Link>
                  <Link
                    type="button"
                    className="btn button2"
                    to="/perkhidmatan"
                  >
                    Perkhidmatan Teroka
                  </Link>
                </div>
              </div>
              <div className="video-wrapper">
                <div className="video-overlay"></div>
                <video
                  className="d-block slidevideo"
                  muted
                  autoPlay
                  loop
                  playsInline
                  preload="auto"
                >
                  <source src={Slide2} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>

          <button
            className="carousel-control-prev p-2"
            type="button"
            data-bs-target="#videoCarousel"
            data-bs-slide="prev"
          >
            <i className="fa-solid fa-arrow-left slide-icon"></i>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next  p-2 "
            type="button"
            data-bs-target="#videoCarousel"
            data-bs-slide="next"
          >
            <i className="fa-solid fa-arrow-right slide-icon"></i>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
