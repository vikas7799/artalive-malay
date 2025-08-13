import React, { useEffect } from "react";
import ServiceSection from "../components/ServiceSection";
import Faq from "../components/Faq";
import TestimonialSection from "../components/TestimonialSection";
import ContactSection from "../components/ContactSection";
import "./LowerLimbProsthetics.css";
import lowerlimbbracingbanner from "/images/lowerlimbbracing/lowerlimbbracing.png";
import footorthoses from "/images/lowerlimbbracing/active.jpg";
import smo from "/images/lowerlimbbracing/flex.jpg";
import afo from "/images/lowerlimbbracing/Ankle-Foot Orthoses.png";
import ko from "/images/lowerlimbbracing/Knee Orthoses.jpg";
import kafo from "/images/lowerlimbbracing/Knee Ankle-Foot Orthoses.jpg";
import hkafo from "/images/lowerlimbbracing/Hip Knee Ankle-Foot Orthoses.jpg";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import TopRightButton from "./TopRightButton";
import { Helmet } from "react-helmet";
const LowerLimbBracing = () => {
  const LowerLimbBracings = [
  {
    title: "Ortosis Kaki (FO) / Flex",
    description:
      "Tapak dalam khas yang menyokong lengkungan kaki, membantu mengurangkan kejatuhan lengkungan dan meningkatkan penjajaran serta keselesaan kaki secara keseluruhan ketika berjalan dan berdiri.",
    image: footorthoses,
    whatsappMessage:
      "Hai, saya ingin bertanya mengenai Ortosis Kaki (FO) / Flex.",
  },
  {
    title: "Ortosis Supramalleolar (SMO) / Active",
    description:
      "Pendakap yang memanjang sedikit di atas tulang buku lali untuk mengawal penjajaran kaki sambil membenarkan pergerakan bebas buku lali. Sesuai untuk kanak-kanak dengan ketidakstabilan kaki tahap ringan hingga sederhana.",
    image: smo,
    whatsappMessage:
      "Hai, saya ingin bertanya mengenai Ortosis Supramalleolar (SMO) / Active.",
  },
  {
    title: "Ortosis Buku Lali-Kaki (AFO)",
    description:
      "Pendakap yang direka untuk menyokong dan meluruskan buku lali serta kaki dengan betul. AFO membantu mengurus kelemahan otot, memperbaiki corak berjalan, dan melindungi kaki bawah daripada ketegangan atau kecederaan.",
    image: afo,
    whatsappMessage:
      "Hai, saya ingin bertanya mengenai Ortosis Buku Lali-Kaki (AFO).",
  },
  {
    title: "Ortosis Lutut (KO)",
    description:
      "Peranti yang membantu menstabilkan sendi lutut, mengurangkan tekanan pada bahagian yang sakit, dan memberikan sokongan selepas kecederaan, pembedahan, atau keadaan seperti kerosakan meniskus. Ia juga boleh digunakan untuk perlindungan pencegahan pada kanak-kanak yang aktif.",
    image: ko,
    whatsappMessage:
      "Hai, saya ingin bertanya mengenai Ortosis Lutut (KO).",
  },
  {
    title: "Ortosis Lutut-Buku Lali-Kaki (KAFO)",
    description:
      "Pendakap yang memanjang dari paha hingga ke kaki, menawarkan sokongan dan penjajaran untuk lutut, buku lali, dan kaki. KAFO membantu kanak-kanak dengan kelemahan otot yang ketara atau ketidakstabilan sendi, menggalakkan pergerakan yang lebih selamat dan berkesan.",
    image: kafo,
    whatsappMessage:
      "Hai, saya ingin bertanya mengenai Ortosis Lutut-Buku Lali-Kaki (KAFO).",
  },
  {
    title: "Ortosis Pinggul-Lutut-Buku Lali-Kaki (HKAFO)",
    description:
      "Peranti ortotik lanjutan yang menggabungkan semua ciri KAFO dengan sokongan tambahan untuk pinggul. Ia termasuk sendi pinggul berkunci dan jalur pelvis, memberikan kestabilan maksimum untuk kanak-kanak dengan keperluan mobiliti yang kompleks.",
    image: hkafo,
    whatsappMessage:
      "Hai, saya ingin bertanya mengenai Ortosis Pinggul-Lutut-Buku Lali-Kaki (HKAFO).",
  },
];


  const scrollToFaq = () => {
    const faqElement = document.getElementById("faq");
    if (faqElement) {
      faqElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".text-desktop", {
      scrollTrigger: {
        trigger: ".line",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        // markers: true,
        ease: "power1.inOut",
      },
      y: "65vh",
      fontSize: "4rem",
      duration: 200,
      scale: 0.9,

      color: "#2d2d73",
      opacity: 1,
    });

    gsap.to(".text-mobile", {
      scrollTrigger: {
        trigger: ".line",
        start: "top top",
        end: "200% 200%",
        scrub: true,
        // markers: true,
      },
      y: "60vh",
      fontSize: "2rem",
      duration: 200,
      scale: 1,
      color: "#2d2d73",
      opacity: 1,
    });
  }, []);

  return (
    <>
      <TopRightButton label="Soalan Lazim" onClick={scrollToFaq} />


<Helmet>
  <title>Pengukuhan Anggota Bawah di Malaysia untuk Mobiliti & Keselesaan Kanak-kanak | Artalive</title>
  <meta
    name="description"
    content="Temui penyelesaian Pengukuhan Anggota Bawah Artalive untuk kanak-kanak. Tingkatkan mobiliti, keselesaan & kestabilan dengan ortosis khusus. Tempah konsultasi percuma bersama pakar kami hari ini!"
  />
  <link rel="canonical" href="https://artalive.com.my/my/pengukuhan-anggota-bawah" />
  <meta name="robots" content="index, follow" />
  <meta
    property="og:title"
    content="Pengukuhan Anggota Bawah di Malaysia untuk Mobiliti & Keselesaan Kanak-kanak | Artalive"
  />
  <meta
    property="og:description"
    content="Temui penyelesaian Pengukuhan Anggota Bawah Artalive untuk kanak-kanak. Tingkatkan mobiliti, keselesaan & kestabilan dengan ortosis khusus. Tempah konsultasi percuma bersama pakar kami hari ini!"
  />
  <meta property="og:url" content="https://artalive.com.my/my/pengukuhan-anggota-bawah" />
  <meta property="og:type" content="website" />
</Helmet>


      <div className="container-fluid  bg-section p-0 line m-0">
        <h1 className="text-desktop  d-none d-md-block display-2 ">
          Pengukuhan Anggota Bawah di Malaysia
        </h1>
        <h2 className="text-mobile  d-lg-none display-2 ">
          Pengukuhan Anggota Bawah di Malaysia
        </h2>

        <img
          src={lowerlimbbracingbanner}
          alt="lower limb orthoses to support children’s mobility"
          className="img-fluid w-100 h-100 object-fit-cover position-absolute top-0 start-0 "
        />
      </div>

      <div className="container-xl px-3 mb-5" data-aos="fade-up">
        <div className="row align-items-center text-center ">
          <div className="col-12">
            <p>
              Di ArtAlive, kami mereka bentuk rangkaian ortosa anggota bawah untuk menyokong mobiliti, kestabilan dan keselesaan kanak-kanak. Setiap peranti dibuat khas untuk memenuhi keperluan khusus dan memastikan penjajaran, fungsi dan keyakinan yang betul dalam pergerakan.
            </p>
          </div>
        </div>
      </div>

      <section className="bg-section-white p-lg-5 p-3" data-aos="fade-up">
        <div className="container-xl my-5">
          <h2 className="display-5 mb-5 text-orange"> Pengukuhan Anggota Bawah</h2>
          <div className="row align-items-stretch">
            {LowerLimbBracings.map((item, index) => {
              const whatsappLink = `https://api.whatsapp.com/send?phone=60123774437&text=${encodeURIComponent(
                item.whatsappMessage
              )}`;
              return (
                <div className="col-md-4 mb-5" key={index} data-aos="fade-up">
                  <div className="service-card">
                    <img
                      src={item.image}
                      className="service-card-img"
                      alt={item.title}
                    />
                    <div className="service-card-body p-4">
                      <h5 className="service-card-title fs-4 mb-2">
                        {item.title}
                      </h5>
                      <p className="service-card-text mb-3">
                        {item.description}
                      </p>
                      <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn button3"
                      >
                        Whatsapp Now
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <ServiceSection />
      <TestimonialSection />
      <Faq />
      <ContactSection />
    </>
  );
};

export default LowerLimbBracing;
