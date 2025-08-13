import React, { useState } from "react";
import "./ServiceSection.css";
import { Link } from "react-router-dom";
import Faqimage from "/images/faq.jpg";

const ServiceSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);

  const cardData = [
    {
      image: "/images/background/lowerpro.webp",
      title: "Prostetik Anggota Bawah",
    },
    {
      image: "/images/background/upperpro.png",
      title: "Prostetik Anggota Atas",
    },
    {
      image: "/images/background/specialpro.webp",
      title: "Prostetik Khas",
    },
    {
      image: "/images/background/lowerorth.png",
      title: "Ortotik Anggota Bawah",
    },
    {
      image: "/images/background/upperort.jpg",
      title: "Ortotik Anggota Atas",
    },
    {
      image: "/images/background/specialort.webp",
      title: "Ortotik Khas",
    },
    {
      image: "/images/background/custom.webp",
      title: "Penyelesaian Penjagaan Kaki",
    },
    {
      image: "/images/background/Myomo.webp",
      title: "MyoPro Orthosis",
    },
    {
      image: "/images/background/3dPrinted.webp",
      title: "Prostetik 3D",
    }
  
  ];

  const changeBackground = (index, imageUrl) => {
    setHoveredIndex(index);
    document.querySelector(
      ".imagefill"
    ).style.backgroundImage = `url('${imageUrl}')`;
    const allCards = document.querySelectorAll(".card");
    allCards.forEach((otherCard, i) => {
      if (i !== index) {
        otherCard.style.opacity = "0";
        otherCard.style.border = "1px solid white";
      }
    });
  };

  const resetBackground = () => {
    setHoveredIndex(null);
    document.querySelector(".imagefill").style.backgroundImage = "none";
    const allCards = document.querySelectorAll(".card");
    allCards.forEach((card) => {
      card.style.opacity = "1";
    });
  };

  return (
    <>
      <div className="container-fluid imagefill p-lg-5 p-3" data-aos="fade-up">
        <div className="row my-5">
          <h2 className="text-center display-4 mb-4 heading">Perkhidmatan </h2>
          <div className="col d-flex d-md-block g-4 ">
            <div className=" row row-cols-2 row-cols-md-4  g-4 justify-content-center">
              <Link
                key={0}
                className={`col-md-3 card ${
                  0 === hoveredIndex ? "hovered" : ""
                } ${0 === activeIndex ? "active" : ""}`}
                onMouseOver={() => changeBackground(0, cardData[0].image)}
                onMouseOut={resetBackground}
                to="/prostetik-anggota-bawah"
              >
                <i className="fa-solid fa-socks card-icon"></i>
                <h5 className="card-title">{cardData[0].title}</h5>
              </Link>

              {/* Second Card */}
              <Link
                key={1}
                className={`col-md-3 card ${
                  1 === hoveredIndex ? "hovered" : ""
                } ${1 === activeIndex ? "active" : ""}`}
                onMouseOver={() => changeBackground(1, cardData[1].image)}
                onMouseOut={resetBackground}
                to="/prostetik-anggota-atas"
              >
                <i className="fa-solid fa-hand card-icon"></i>
                <h5 className="card-title">{cardData[1].title}</h5>
              </Link>

              {/* Third Card */}
              <Link
                key={2}
                className={`col-md-3 card ${
                  2 === hoveredIndex ? "hovered" : ""
                } ${2 === activeIndex ? "active" : ""}`}
                onMouseOver={() => changeBackground(2, cardData[2].image)}
                onMouseOut={resetBackground}
                to="/prostetik-khas"
              >
                <i className="fa-solid fa-shoe-prints card-icon"></i>
                <h5 className="card-title">{cardData[2].title}</h5>
              </Link>

              {/* Fourth Card */}
              <Link
                key={3}
                className={`col-md-3 card ${
                  3 === hoveredIndex ? "hovered" : ""
                } ${3 === activeIndex ? "active" : ""}`}
                onMouseOver={() => changeBackground(3, cardData[3].image)}
                onMouseOut={resetBackground}
                to="/ortotik-anggota-bawah"
              >
                <i className="fa-solid fa-wheelchair-move card-icon"></i>
                <h5 className="card-title">{cardData[3].title}</h5>
              </Link>
            </div>

            <div
              className="row row-cols-2 row-cols-md-4 g-4 align-self-center justify-content-center
          "
            >
              {/* Fifth Card */}
              <Link
                key={4}
                className={`col-md-3 card ${
                  4 === hoveredIndex ? "hovered" : ""
                } ${4 === activeIndex ? "active" : ""}`}
                onMouseOver={() => changeBackground(4, cardData[4].image)}
                onMouseOut={resetBackground}
                to="/ortotik-anggota-atas"
              >
                <i className="fa-solid fa-bacon card-icon"></i>
                <h5 className="card-title">{cardData[4].title}</h5>
              </Link>

              {/* Sixth Card */}
              <Link
                key={5}
                to="/ortotik-khas"
                className={`col-md-3 card ${
                  5 === hoveredIndex ? "hovered" : ""
                } ${5 === activeIndex ? "active" : ""}`}
                onMouseOver={() => changeBackground(5, cardData[5].image)}
                onMouseOut={resetBackground}
              >
                <i className="fa-solid fa-circle-half-stroke card-icon"></i>
                <h5 className="card-title">{cardData[5].title}</h5>
              </Link>

              {/* Seventh Card */}
              <Link
                key={6}
                className={`col-md-3 card ${
                  6 === hoveredIndex ? "hovered" : ""
                } ${6 === activeIndex ? "active" : ""}`}
                onMouseOver={() => changeBackground(6, cardData[6].image)}
                onMouseOut={resetBackground}
                to="/penyelesaian-penjagaan-kaki"
              >
                <i className="fa-solid fa-hand-holding-hand card-icon"></i>
                <h5 className="card-title">{cardData[6].title}</h5>
              </Link>
            </div>

            <div
              className="row row-cols-2 row-cols-md-4 g-4  align-self-center justify-content-center
           "
            >
              {/* Eight Card */}
              <Link
                key={7}
                className={`col-md-3 card ${
                  7 === hoveredIndex ? "hovered" : ""
                } ${7 === activeIndex ? "active" : ""}`}
                onMouseOver={() => changeBackground(7, cardData[7].image)}
                onMouseOut={resetBackground}
                to="/myopro-orthosis"
              >
                <i className="fa-solid fa-mitten card-icon"></i>
                <h5 className="card-title">{cardData[7].title}</h5>
              </Link>

              <Link
                key={8}
                className={`col-md-3 card ${
                  8 === hoveredIndex ? "hovered" : ""
                } ${8 === activeIndex ? "active" : ""}`}
                onMouseOver={() => changeBackground(8, cardData[8].image)}
                onMouseOut={resetBackground}
                to="/prostetik-3d"
              >
                <i className="fa-solid fa-layer-group card-icon"></i>
                <h5 className="card-title">{cardData[8].title}</h5>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceSection;
