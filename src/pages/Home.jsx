import React from "react";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ServiceSection from "../components/ServiceSection";
import WhyChoose from "../components/WhyChoose";
import Video from "../components/Video";
import ContactSection from "../components/ContactSection";
import Faq from "../components/Faq";
import TestimonialSection from "../components/TestimonialSection";
import Partner from "./Partner";
import TopRightButton from "./TopRightButton";
import w1 from "/images/whyus/24-hour-service.png";
import w2 from "/images/whyus/doctor.png";
import w3 from "/images/whyus/medical-report.png";
import w4 from "/images/whyus/medical-staff.png";
import w5 from "/images/whyus/nursing-room.png";
import w6 from "/images/whyus/shield.png";
import { Helmet } from "react-helmet";
const Home = () => {
  const scrollToFaq = () => {
    const faqElement = document.getElementById("faq");
    if (faqElement) {
      faqElement.scrollIntoView({ behavior: "smooth" });
    }
  };

const highlights = [
  {
    icon: w2,
    alt: "Pengendalian oleh Pakar Klinikal Bertauliah",
    title: "Pengendalian oleh Pakar Klinikal Bertauliah",
    desc: "Rawatan anda akan dikendalikan oleh pakar prostetik dan ortotik yang diiktiraf serta berpengalaman, memastikan tahap penjagaan yang terbaik.",
  },
  {
    icon: w3,
    alt: "Waranti Kelengkapan 6 Bulan",
    title: "Waranti Kelengkapan 6 Bulan",
    desc: "Sebarang isu berkaitan pemasangan akan dibincangkan dalam tempoh 6 bulan pertama untuk ketenangan fikiran anda. (*Tertakluk kepada Terma & Syarat)",
  },
  {
    icon: w6,
    alt: "Jaminan Pecah Soket Selama 5 Tahun",
    title: "Jaminan Pecah Soket Selama 5 Tahun",
    desc: "Komponen penyesuai tersuai kami dilindungi oleh jaminan 5 tahun untuk memastikan prestasi jangka panjang. (*Tertakluk kepada Terma & Syarat)",
  },
  {
    icon: w5,
    alt: "Latihan GAIT Lanjutan",
    title: "Latihan GAIT Lanjutan",
    desc: "Artalive Malaysia menyediakan senaman berjalan yang disesuaikan untuk membantu anda menyesuaikan diri dengan prostesis anda secara semula jadi dan berkesan.",
  },
  {
    icon: w1,
    alt: "Perkhidmatan Percuma Sepanjang Hayat",
    title: "Perkhidmatan Percuma Sepanjang Hayat",
    desc: "Dapatkan perkhidmatan penyelenggaraan percuma sepanjang hayat prostesis anda. (*Tertakluk kepada Terma & Syarat)",
  },
  {
    icon: w4,
    alt: "Konsultasi Klinikal Percuma",
    title: "Konsultasi Klinikal Percuma",
    desc: "Temu janji klinikal pertama anda adalah percuma, termasuk penilaian dan cadangan rawatan oleh pakar kami.",
  },
];

  return (
    <>
     <Helmet>
        <title>
          Prosthetics & Orthotics Centre in Malaysia | Pusat Kaki Palsu, Prosthetic Limb, Artificial Limb | ArtaLive
        </title>
        <meta
          name="description"
          content="Trusted Prosthetics & Orthotics Centre in Malaysia. Get expert prosthetic care, kaki palsu, prosthetic limbs, orthotics & free consultation with certified prosthetists. Visit ArtaLive today."
        />
        <link rel="canonical" href="https://artalive.com.my/" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Prosthetics & Orthotics Centre in Malaysia | ArtaLive" />
        <meta
          property="og:description"
          content="Trusted Prosthetics & Orthotics Centre in Malaysia. Get expert prosthetic care, kaki palsu, prosthetic limbs, orthotics & free consultation with certified prosthetists. Visit ArtaLive today."
        />
        <meta property="og:url" content="https://artalive.com.my/" />
        <meta property="og:type" content="website" />
      </Helmet>

      <TopRightButton label="Soalan Lazim" onClick={scrollToFaq} />

      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <WhyChoose />

      <div className="p-lg-5 p-3 bg-section" data-aos="fade-up">
        <div className="container-xl mt-5 ">
          <div className="row mt-5 aligns-items-start">
            {highlights.map((item, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div
                  className="  shadow-sm rounded p-3  bg-white"
                  style={{ height: "280px" }}
                >
                  <div className="mb-3 text-white d-inline-flex align-items-center justify-content-center rounded-circle">
                    <img
                      src={item.icon}
                      style={{
                        width: "64px",
                        height: "64px",
                      }}
                      alt={item.alt}
                    ></img>
                  </div>
                  <h5 className="fs-4 mb-3">{item.title}</h5>
                  <p className="" style={{ fontSize: "15px" }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Video />
      <Partner />
      <TestimonialSection />
      <Faq />
      <ContactSection />
    </>
  );
};

export default Home;
