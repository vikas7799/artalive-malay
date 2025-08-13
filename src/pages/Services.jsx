import ServiceSection from '../components/ServiceSection'
import Video from '../components/Video'
import ContactSection from '../components/ContactSection'
import TopRightButton from "./TopRightButton";
import { Helmet } from 'react-helmet';

import React, { useState } from "react";
import { Link } from "react-router-dom";

const Services = () => {

  const scrollToFaq = () => {
    const faqElement = document.getElementById("faq");
    if (faqElement) {
      faqElement.scrollIntoView({ behavior: "smooth" });
    }
  };

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

    <Helmet>
  <title>Perkhidmatan - Prostetik | Ortotik | Penyelesaian Penjagaan Kaki | Artalive</title>
  <meta
    name="description"
    content="Artalive ialah penyedia perkhidmatan prostetik, ortotik & penyelesaian penjagaan kaki terkemuka di Malaysia. Hubungi kami untuk konsultasi percuma dengan CPO."
  />
  <link rel="canonical" href="https://artalive.com.my/my/perkhidmatan" />
  <meta name="robots" content="index, follow" />
  <meta
    property="og:title"
    content="Perkhidmatan - Prostetik | Ortotik | Penyelesaian Penjagaan Kaki | Artalive"
  />
  <meta
    property="og:description"
    content="Artalive ialah penyedia perkhidmatan prostetik, ortotik & penyelesaian penjagaan kaki terkemuka di Malaysia. Hubungi kami untuk konsultasi percuma dengan CPO."
  />
  <meta property="og:url" content="https://artalive.com.my/my/perkhidmatan" />
  <meta property="og:type" content="website" />
</Helmet>




          <TopRightButton label="Soalan Lazim" onClick={scrollToFaq} />

   <div className="container-fluid imagefill p-lg-5 p-3" data-aos="fade-up">
        <div className="row my-5">
          <h1 className="text-center display-4 mb-4 heading">Perkhidmatan </h1>
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


     <section className="bg-section p-lg-5 p-3" id="faq" data-aos="fade-up"> 
        <div className="container-xl my-5">
          <h2 className="display-4 mb-5 text-center">
            Soalan Lazim
          </h2>
          <div className="row g-md-5">
            <div className="col-md-6">
              <div className="accordion accordion-flush" id="faqlist-left">
                <div className="accordion-item questions-border">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed fs-5"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-1"
                      aria-expanded="false"
                      aria-controls="faq-content-1"
                    >
                      1. Apa yang termasuk dalam perkhidmatan selepas pemasangan?
                    </button>
                  </h2>
                  <div
                    id="faq-content-1"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist-left"
                  >
                    <div className="accordion-body">
                      Pelarasan semula, latihan penggunaan, bimbingan berjalan dan penyelenggaraan berkala.
                    </div>
                  </div>
                </div>

                <div className="accordion-item questions-border">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed fs-5"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-2"
                      aria-expanded="false"
                      aria-controls="faq-content-2"
                    >
                      2. Adakah terdapat waranti untuk prostesis dan ortotik?
                    </button>
                  </h2>
                  <div
                    id="faq-content-2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist-left"
                  >
                    <div className="accordion-body">
                      Ya, kami sediakan waranti pemasangan, soket, adaptor dan khidmat penyelenggaraan.
                    </div>
                  </div>
                </div>

                <div className="accordion-item questions-border">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed fs-5"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-3"
                      aria-expanded="false"
                      aria-controls="faq-content-3"
                    >
                      3. Adakah saya perlu bawa laporan perubatan semasa temujanji?
                    </button>
                  </h2>
                  <div
                    id="faq-content-3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist-left"
                  >
                    <div className="accordion-body">
                      Sebaiknya ya, untuk memudahkan penilaian klinikal dan pelan rawatan.
                    </div>
                  </div>
                </div>

                <div className="accordion-item questions-border">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed fs-5"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-4"
                      aria-expanded="false"
                      aria-controls="faq-content-4"
                    >
                      4. Jenama apa yang digunakan untuk prostesis dan ortosis?
                    </button>
                  </h2>
                  <div
                    id="faq-content-4"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist-left"
                  >
                    <div className="accordion-body">
                     Kami menggunakan jenama antarabangsa seperti Ottobock, Ossur, Rigel, dan lain-lain.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="accordion accordion-flush" id="faqlist-right">
                <div className="accordion-item questions-border">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed fs-5"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-5"
                      aria-expanded="false"
                      aria-controls="faq-content-5"
                    >
                      5. Bolehkah saya pilih jenis komponen prostesis saya?
                    </button>
                  </h2>
                  <div
                    id="faq-content-5"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist-right"
                  >
                    <div className="accordion-body">
                      Ya, pilihan akan dibincangkan semasa sesi penilaian berdasarkan gaya hidup dan bajet.
                    </div>
                  </div>
                </div>

                <div className="accordion-item questions-border">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed fs-5"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-6"
                      aria-expanded="false"
                      aria-controls="faq-content-6"
                    >
                      6. Adakah semua produk datang dengan jaminan?
                    </button>
                  </h2>
                  <div
                    id="faq-content-6"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist-right"
                  >
                    <div className="accordion-body">
                      Ya, produk kami disertakan dengan waranti mengikut jenis komponen.
                    </div>
                  </div>
                </div>

                <div className="accordion-item questions-border">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed fs-5"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-7"
                      aria-expanded="false"
                      aria-controls="faq-content-7"
                    >
                      7. Adakah produk boleh disesuaikan untuk aktiviti sukan atau air?
                    </button>
                  </h2>
                  <div
                    id="faq-content-7"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist-right"
                  >
                    <div className="accordion-body">
                      Ya, kami sediakan prostesis khas seperti prostesis sukan dan kalis air.
                    </div>
                  </div>
                </div>

                <div className="accordion-item questions-border">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed fs-5"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-8"
                      aria-expanded="false"
                      aria-controls="faq-content-8"
                    >
                      8. Berapakah harga prostesis atau ortotik?
                    </button>
                  </h2>
                  <div
                    id="faq-content-8"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist-right"
                  >
                    <div className="accordion-body">
                      Harga berbeza mengikut keadaan fizikal pesakit, jenis peranti dan tahap amputasi atau kecederaan. Penilaian klinikal diperlukan sebelum sebarang anggaran harga dapat diberikan.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    <ContactSection/>
    </>
  )
}

export default Services