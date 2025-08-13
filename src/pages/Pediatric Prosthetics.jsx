import React, { useEffect } from "react";
import ServiceSection from "../components/ServiceSection";
import Faq from "../components/Faq";
import TestimonialSection from "../components/TestimonialSection";
import ContactSection from "../components/ContactSection";
import "./LowerLimbProsthetics.css";
import pediatricprosthetics from "/images/pediatricprosthetics/Banner.webp";
import lowerlimbbracing from "/images/pediatric/Lower Limb Bracing.jpg";
import scoliosisbracing from "/images/pediatric/Scoliosis Bracing.jpg";
import cranialhelmets from "/images/pediatric/Cranial Helmets.jpg";
import pediatricprostheticss from "/images/pediatric/Pediatric Prosthetics.webp";
import upperlimbs from "/images/pediatricprosthetics/upper.jpg";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import TopRightButton from "./TopRightButton";
import { Helmet } from "react-helmet";
const PediatricProsthetics = () => {
  const PediatricProsthetic = [
  {
    title: "Prostetik Anggota Bawah",
    description:
      "Prostetik anggota bawah khusus untuk kanak-kanak, direka untuk keselesaan, kestabilan, dan aktiviti bermain yang aktif, menyokong pergerakan semula jadi serta pertumbuhan.",
    image: pediatricprostheticss,
    whatsappMessage:
      "Hai, saya ingin bertanya mengenai Prostetik Anggota Bawah Kanak-kanak.",
  },
  {
    title: "Prostetik Anggota Atas",
    description:
      "Prostetik anggota atas inovatif yang direka khas untuk kanak-kanak, membolehkan kemahiran motor halus, tugasan harian, serta penyertaan dalam hobi dan sukan.",
    image: upperlimbs,
    whatsappMessage:
      "Hai, saya ingin bertanya mengenai Prostetik Anggota Atas Kanak-kanak.",
  }
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
  <title>Prostetik Pediatrik Tersuai di Kuala Lumpur, Malaysia | Artalive</title>
  <meta
    name="description"
    content="Artalive menawarkan prostetik pediatrik tersuai untuk kanak-kanak dengan perbezaan anggota kongenital atau amputasi di Kuala Lumpur, Malaysia. Dapatkan konsultasi percuma hari ini!"
  />
  <link rel="canonical" href="https://artalive.com.my/my/pediatrik-prostetik" />
  <meta name="robots" content="index, follow" />
  <meta
    property="og:title"
    content="Prostetik Pediatrik Tersuai di Kuala Lumpur, Malaysia | Artalive"
  />
  <meta
    property="og:description"
    content="Artalive menawarkan prostetik pediatrik tersuai untuk kanak-kanak dengan perbezaan anggota kongenital atau amputasi di Kuala Lumpur, Malaysia. Dapatkan konsultasi percuma hari ini!"
  />
  <meta property="og:url" content="https://artalive.com.my/my/pediatrik-prostetik" />
  <meta property="og:type" content="website" />
</Helmet>


      <div className="container-fluid  bg-section p-0 line m-0">
        <h1 className="text-desktop  d-none d-md-block display-2 ">
          Pediatrik Prostetik di Malaysia 
        </h1>
        <h2 className="text-mobile  d-lg-none display-2 ">
          Pediatrik Prostetik di Malaysia
        </h2>

        <img
          src={pediatricprosthetics}
          alt="pediatric prosthetic for children with congenital limb differences or amputations"
          className="img-fluid w-100 h-100 object-fit-cover position-absolute top-0 start-0 "
        />
      </div>

      <div className="container-xl px-3 mb-5" data-aos="fade-up">
        <div className="row align-items-center text-center ">
          <div className="col-12">
            <p>
              Di Artalive, kami menyediakan prostetik pediatrik tersuai untuk kanak-kanak dengan perbezaan anggota kongenital
              atau amputasi. Peranti inovatif kami menyokong kehidupan harian, sukan,
              muzik, dan hobi—memperkasakan kanak-kanak untuk bergerak dengan yakin dan
              secara bebas. Kami melampaui fungsi untuk membantu kanak-kanak berkembang maju
              setiap aspek kehidupan mereka.
            </p>
          </div>
        </div>
      </div>

      <section className="bg-section-white p-lg-5 p-3" data-aos="fade-up">
        <div className="container-xl my-5">
          <h2 className="display-5 mb-5 text-orange">
            Pediatrik Prostetik
          </h2>
          <div className="row align-items-stretch">
            {PediatricProsthetic.map((item, index) => {
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

export default PediatricProsthetics;
