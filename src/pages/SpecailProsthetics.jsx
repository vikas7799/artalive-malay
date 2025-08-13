import React, { useEffect } from "react";
import ServiceSection from "../components/ServiceSection";
import Faq from "../components/Faq";
import TestimonialSection from "../components/TestimonialSection";
import ContactSection from "../components/ContactSection";
import "./LowerLimbProsthetics.css";
import specailprostheticsbanner from "/images/specailprosthetics/specailprosthetics-1.webp";
import prostesisrotationplasty from "/images/specailprosthetics/prostesisrotationplasty.jpg";
import prostesiskalisair from "/images/specailprosthetics/prostesiskalisair.jpg";
import prostesissukan from "/images/specailprosthetics/prostesissukan.jpg";
import prostesiscetakan from "/images/specailprosthetics/prostesiscetakan.jpg";
import Hemipelvektomi from "/images/specailprosthetics/Hemipelvektomi.jpg";
import TopRightButton from "./TopRightButton";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
const SpecailProsthetics = () => {
  const scrollToFaq = () => {
    const faqElement = document.getElementById("faq");
    if (faqElement) {
      faqElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const specialProsthetics = [
  {
    title: "Prostesis Rotationplasty",
    description:
      "Direka khusus untuk pesakit yang telah menjalani prosedur rotationplasty, prostesis ini menyokong fungsi buku lali sebagai pengganti lutut, membolehkan pergerakan yang lebih semula jadi dan aktif.",
    image: prostesisrotationplasty,
    whatsappMessage:
      "Hai, saya ingin bertanya tentang Prostesis Rotationplasty.",
  },
  {
    title: "Prostesis Kalis Air (Aqua Limb)",
    description:
      "Prostesis kalis air yang sesuai untuk aktiviti basah seperti mandi atau berenang. Diperbuat daripada bahan tahan kakisan dan mudah dibersihkan, ia sesuai untuk kegunaan harian serta aktiviti rekreasi.",
    image: prostesiskalisair,
    whatsappMessage:
      "Hai, saya ingin bertanya tentang Prostesis Kalis Air (Aqua Limb).",
  },
  {
    title: "Prostesis Sukan (Larian)",
    description:
      "Prostesis berprestasi tinggi yang direka untuk aktiviti sukan seperti berlari dan pergerakan berintensiti tinggi. Diperbuat daripada bahan ringan dan fleksibel untuk menyokong pergerakan pantas serta hentakan kuat.",
    image: prostesissukan,
    whatsappMessage:
      "Hai, saya ingin bertanya tentang Prostesis Sukan (Larian).",
  },
  {
    title: "Prostesis Cetakan 3D",
    description:
      "Menggunakan teknologi cetakan 3D untuk penyelesaian yang ringan dan kos efektif. Boleh disesuaikan mengikut bentuk dan keperluan reka bentuk unik pengguna.",
    image: prostesiscetakan,
    whatsappMessage:
      "Hai, saya ingin bertanya tentang Prostesis Cetakan 3D.",
  },
  {
    title: "Prostesis Disartikulasikan Pinggul / Hemipelvektomi",
    description:
      "Prostesis kompleks yang direka untuk individu yang kehilangan anggota di bahagian pinggul atau pelvis. Ia memberikan sokongan struktur dan fungsi untuk meningkatkan kestabilan serta mobiliti harian.",
    image: Hemipelvektomi,
    whatsappMessage:
      "Hai, saya ingin bertanya tentang Prostesis Disartikulasikan Pinggul / Hemipelvektomi.",
  },
];


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
      <Helmet>
        <title>Prostetik Khas in Malaysia | Artalive Sdn Bhd</title>
        <meta
          name="description"
          content="Explore Artalive’s custom prosthetics for hand, arm, leg & thigh. Expertly crafted to restore mobility and comfort after amputation."
        />
        <link
          rel="canonical"
          href="https://artalive.com.my/prostetik-khas"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Prostetik Khas in Malaysia | Artalive Sdn Bhd"
        />
        <meta
          property="og:description"
          content="Explore Artalive’s custom prosthetics for hand, arm, leg & thigh. Expertly crafted to restore mobility and comfort after amputation."
        />
        <meta
          property="og:url"
          content="https://artalive.com.my/prostetik-khas"
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <TopRightButton label="Soalan Lazim" onClick={scrollToFaq} />

      <div className="container-fluid  bg-section p-0 line m-0">
        <h1 className="text-desktop  d-none d-md-block display-2 ">
          Prostetik Khas di Malaysia
        </h1>
        <h2 className="text-mobile  d-lg-none display-2 ">
          Prostetik Khas di Malaysia
        </h2>

        <img
          src={specailprostheticsbanner}
          alt="Banner"
          className="img-fluid w-100 h-100 object-fit-cover position-absolute top-0 start-0 img-dark"
        />
      </div>

      <div className="container-xl px-3 mb-5" data-aos="fade-up">
        <div className="row align-items-center text-center ">
          <div className="col-12">
            <p>
              Rangkaian Prostetik Khas kami termasuk penyelesaian komprehensif untuk anggota atas dan bawah, termasuk prostesis tangan, lengan, kaki dan paha. Direka untuk menggantikan bahagian badan yang hilang akibat amputasi pada mana-mana peringkat—sama ada di jari, pergelangan tangan, siku, bahu, lutut atau pinggul—setiap prostesis disesuaikan mengikut keperluan anatomi dan fungsi pengguna.
            </p>
          </div>
        </div>
      </div>

      <section className="bg-section-white p-lg-5 p-3" data-aos="fade-up">
        <div className="container-xl my-5">
          <h2 className="display-5 mb-5 text-orange">Prostetik Khas</h2>
          <div className="row align-items-stretch">
            {specialProsthetics.map((item, index) => {
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

export default SpecailProsthetics;
