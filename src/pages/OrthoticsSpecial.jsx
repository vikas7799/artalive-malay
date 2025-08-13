import React, { useEffect } from "react";
import ServiceSection from "../components/ServiceSection";
import Faq from "../components/Faq";
import TestimonialSection from "../components/TestimonialSection";
import ContactSection from "../components/ContactSection";
import "./LowerLimbProsthetics.css";
import specialorthotics from "/images/specialorthotics/specialorthotics.webp";
import OrtosisElektronik from "/images/specialorthotics/Microprocessor.jpg";
import Crow from "/images/specialorthotics/crow.png";
import OrtosisTulangBelakang from "/images/specialorthotics/spinal.jpg";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import TopRightButton from "./TopRightButton";
import { Helmet } from "react-helmet";
const OrthoticsSpecial = () => {
  const OrthoticsSpecial = [
  {
    title: "Ortosisi Tulang Belakang",
    description:
      "Ortosisi tulang belakang menyokong dan menstabilkan tulang belakang, mengurangkan kesakitan, membetulkan postur, mengurus keadaan seperti skoliosis atau patah tulang, serta membantu pemulihan selepas pembedahan atau kecederaan untuk meningkatkan fungsi harian.",
    image: OrtosisTulangBelakang,
    whatsappMessage: "Hai, saya ingin bertanya tentang Ortosis Tulang Belakang.",
  },
  {
    title: "Ortosisi Elektronik/Mikroprosesor",
    description:
      "Ortosisi elektronik atau yang dikawal oleh mikroprosesor menggunakan teknologi pintar untuk meningkatkan kestabilan, kawalan pergerakan, dan tindak balas semula jadi. Ia sesuai untuk pengguna yang mengalami kelemahan neurologi atau kecederaan saraf yang kompleks.",
    image: OrtosisElektronik,
    whatsappMessage:
      "Hai, saya ingin bertanya tentang Ortosis Elektronik/Mikroprosesor.",
  },
  {
    title: "Charcot Restraint Orthotic Walker (CROW)",
    description:
      "CROW ialah ortosis khas yang direka untuk merawat kaki Charcot, yang sering dialami oleh pesakit diabetes. Ia memberikan immobilisasi penuh, perlindungan, dan sokongan untuk mencegah kecederaan lanjut.",
    image: Crow,
    whatsappMessage:
      "Hai, saya ingin bertanya tentang Charcot Restraint Orthotic Walker (CROW).",
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
   <Helmet>
  <title>Ortotik Khas di Malaysia | Artalive Sdn Bhd</title>
  <meta
    name="description"
    content="Dapatkan Ortotik Buku Lali Kaki & Ortotik Bawah Lutut khas di Artalive. Ortotik Khas direka untuk kecacatan, masalah postur & sokongan. Cari pusat ortotik berdekatan anda hari ini!"
  />
  <link
    rel="canonical"
    href="https://artalive.com.my/my/ortotik-khas"
  />
  <meta name="robots" content="index, follow" />
  <meta
    property="og:title"
    content="Ortotik Khas di Malaysia | Artalive Sdn Bhd"
  />
  <meta
    property="og:description"
    content="Dapatkan Ortotik Buku Lali Kaki & Ortotik Bawah Lutut khas di Artalive. Ortotik Khas direka untuk kecacatan, masalah postur & sokongan. Cari pusat ortotik berdekatan anda hari ini!"
  />
  <meta
    property="og:url"
    content="https://artalive.com.my/my/ortotik-khas"
  />
  <meta property="og:type" content="website" />
</Helmet>


      <TopRightButton label="Soalan Lazim" onClick={scrollToFaq} />

      <div className="container-fluid  bg-section p-0 line m-0">
        <h1 className="text-desktop  d-none d-md-block display-2 ">
          Ortotik Khas di Malaysia
        </h1>
        <h2 className="text-mobile  d-lg-none display-2 ">Ortotik Khas di Malaysia</h2>

        <img
          src={specialorthotics}
          alt="Ortotik Khas in malaysia"
          className="img-fluid w-100 h-100 object-fit-cover position-absolute top-0 start-0 img-dark"
        />
      </div>

      <div className="container-xl px-3 mb-5" data-aos="fade-up">
        <div className="row align-items-center text-center ">
          <div className="col-12">
            <p>
              Ortotik Khas direka bentuk secara individu untuk menangani keperluan kompleks yang tidak dapat disokong oleh ortotik standard. Ia digunakan untuk keadaan seperti kecacatan teruk, ketidakseimbangan postur, atau keperluan biomekanikal tertentu. Setiap peranti dibina dengan ketepatan tinggi untuk memastikan keselesaan, sokongan optimum dan fungsi harian yang dipertingkatkan untuk pemakai.
            </p>
          </div>
        </div>
      </div>

      <section className="bg-section-white p-lg-5 p-3" data-aos="fade-up">
        <div className="container-xl my-5">
          <h2 className="display-5 mb-5 text-orange">Ortotik Khas</h2>
          <div className="row align-items-stretch">
            {OrthoticsSpecial.map((item, index) => {
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

export default OrthoticsSpecial;
