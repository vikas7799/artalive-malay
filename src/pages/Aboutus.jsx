import React from "react";
import ServiceSection from "../components/ServiceSection";
import ContactSection from "../components/ContactSection";
import Video from "../components/Video";
import logo from "/images/logo.png";
import vision from "/images/vision.jpg";
import mission from "/images/mission.jpg";
import strip from "/images/collage.webp";
import { Link } from "react-router-dom";
import WhyChooseSection from "../components/WhyChooseSection";
import PartnerGrid from "./PartnerGrid";
import Team from "../components/Team";
import { Helmet } from "react-helmet";

const Aboutus = () => {
  const cards = [
    {
      title: "VISI",
      description:
        "Untuk memperkasakan kehidupan dengan memulihkan mobiliti, kemerdekaan, dan keyakinan melalui penjagaan prostetik dan ortotik bertaraf dunia.",
      image: mission,
    },
    {
      title: "MISI",
      description:
        "Misi Artalive Malaysia adalah untuk memahami sepenuhnya keperluan individu setiap pesakit dan menyediakan perkhidmatan Prostetik & Ortotik yang diiktiraf di peringkat antarabangsa pada harga yang berpatutan, untuk membantu meningkatkan kualiti hidup secara keseluruhan.",
      image: vision,
    },
  ];

  return (
    <>
      <Helmet>
  <title>
    Tentang Kami | Artalive | Pusat Prostetik & Ortotik di Malaysia
  </title>
  <meta
    name="description"
    content="Pasukan kami yang berpengalaman terdiri daripada Pakar Prostetik & Ortotik bertauliah secara klinikal, berdaftar dengan International Society for Prosthetics and Orthotics."
  />
  <link rel="canonical" href="https://artalive.com.my/my/tentang-kami" />
  <meta name="robots" content="index, follow" />
  <meta
    property="og:title"
    content="Tentang Kami | Artalive | Pusat Prostetik & Ortotik di Malaysia"
  />
  <meta
    property="og:description"
    content="Pasukan kami yang berpengalaman terdiri daripada Pakar Prostetik & Ortotik bertauliah secara klinikal, berdaftar dengan International Society for Prosthetics and Orthotics."
  />
  <meta property="og:url" content="https://artalive.com.my/my/tentang-kami" />
  <meta property="og:type" content="website" />
</Helmet>


      <div className="bg-section p-lg-5 p-3 ">
        <div className="container-xl  my-5">
          <div className="row align-items-center g-5 ">
            <div className="col-lg-6" data-aos="fade-up">
              <h1 className="mb-4 display-4">Tentang Artalive Malaysia</h1>
              <p className="fs-6">
                Di Artalive Malaysia, kami menggabungkan teknologi terkini dan
                kualiti bertaraf dunia dalam menyediakan perkhidmatan prostetik
                dan ortotik serta sokongan selepas pemasangan. Pasukan kami
                terdiri daripada pakar Prostetik & Ortotik yang diperakui secara
                klinikal, berpengalaman luas, dan berdaftar dengan badan
                profesional seperti Persatuan Prostetik dan Ortotik Antarabangsa
                (ISPO), IAAT, IPA, dan Majlis Pemulihan India (RCI).
              </p>
              <p>
                Kami menawarkan penyelesaian lanjutan merangkumi bionik,
                mikropemproses, dan kosmetik untuk memenuhi pelbagai keperluan
                pengguna.
              </p>
              <p>
                Selain itu, kami turut menyediakan sokongan undang-undang yang
                komprehensif, termasuk penyediaan laporan penilaian klinikal dan
                preskripsi untuk pesakit yang terlibat dalam kes mahkamah
                berkaitan kecederaan tubuh badan.
              </p>

              <div class=" mt-4 d-grid gap-3 d-md-flex">
                <Link type="button" className="btn button3" to="/perkhidmatan">
                  Perkhidmatan Teroka
                </Link>
                <Link type="button" class=" btn button1" to="/hubungi-kami">
                  Hubungi Kami
                </Link>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-up">
              <img src={logo} alt="Artalive" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>

      <img
        data-aos="fade-up"
        src={strip}
        className="img-cover"
        style={{ borderRadius: "0px" }}
        height="250px"
        alt="Artalive Sdn Bdn -Certiffied Orthotics and prosthetics specialist | Pakar ortotik dan prostetik"
      ></img>

      <div className="p-lg-5 p-3 bg-section-white">
        <div className="container-xl my-5">
          <div className="row g-4  justify-content-evenly">
            {cards.map((card, index) => (
              <div className="col-md-5" key={index} data-aos="fade-up">
                <div
                  className="overlay-card"
                  style={{ backgroundImage: `url(${card.image})` }}
                >
                  <div className="overlay-content text-white p-4">
                    <h2 className="mb-3 text-orange">{card.title}</h2>
                    <p className="white">{card.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <WhyChooseSection />
      <Team />

      <ServiceSection />
      <PartnerGrid />

      <ContactSection />
    </>
  );
};

export default Aboutus;
