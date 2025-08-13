import React, { useEffect } from "react";
import ServiceSection from "../components/ServiceSection";
import Faq from "../components/Faq";
import TestimonialSection from "../components/TestimonialSection";
import ContactSection from "../components/ContactSection";
import "./LowerLimbProsthetics.css";
import dimage from "/images/background/3dPrinted.webp";
import LightWeightImage from "/images/3d/LightWeightImage.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import TopRightButton from "./TopRightButton";
import { Helmet } from "react-helmet";
const ThreeProsthetics = () => {
  const benefits = [
  {
    title: "Tahan Pecah",
    description:
      "Bahagian yang dicetak 3D menggunakan polipropilena adalah kukuh dan tahan pecah, memastikan ketahanan jangka panjang dalam ortosis dan prostesis.",
  },
  {
    title: "Ringan",
    description:
      "Ketumpatan rendah polipropilena memastikan bahagian O&P bercetak 3D kekal ringan sambil mengekalkan kekuatan, meningkatkan keselesaan untuk kegunaan harian.",
  },
  {
    title: "Mesra Kulit",
    description:
      "Bahan yang digunakan dalam prostesis bercetak 3D diperakui selamat untuk sentuhan kulit, mengurangkan risiko kerengsaan atau tindak balas alahan.",
  },
  {
    title: "Boleh Dibentuk Semula Secara Haba",
    description:
      "Pada suhu sederhana, bahagian polipropilena boleh dibentuk semula, membolehkan pelarasan pasca-pemprosesan yang tepat untuk padanan sempurna.",
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
  <title>
    Prostetik 3D Mampu Milik di Kuala Lumpur, Malaysia | Penyelesaian Tangan Tersuai
  </title>
  <meta
    name="description"
    content="Dapatkan prostetik tangan bercetak 3D yang ringan dan tersuai di Kuala Lumpur, Malaysia. Reka bentuk canggih memastikan keselesaan, kebolehsuaian & harga berpatutan. Tempah konsultasi percuma hari ini!"
  />
  <link rel="canonical" href="https://artalive.com.my/my/prostetik-3d" />
  <meta name="robots" content="index, follow" />
  <meta
    property="og:title"
    content="Prostetik 3D Mampu Milik di Kuala Lumpur, Malaysia | Penyelesaian Tangan Tersuai"
  />
  <meta
    property="og:description"
    content="Dapatkan prostetik tangan bercetak 3D yang ringan dan tersuai di Kuala Lumpur, Malaysia. Reka bentuk canggih memastikan keselesaan, kebolehsuaian & harga berpatutan. Tempah konsultasi percuma hari ini!"
  />
  <meta property="og:url" content="https://artalive.com.my/my/prostetik-3d" />
  <meta property="og:type" content="website" />
</Helmet>


      <div className="container-fluid  bg-section p-0 line m-0">
        <h1 className="text-desktop  d-none d-md-block display-2 ">
          Prostetik 3D di Malaysia
        </h1>
        <h2 className="text-mobile  d-lg-none display-2 ">Prostetik 3D di Malaysia</h2>

        <img
          src={dimage}
          alt="3D-printed hand prosthetics in Malaysia"
          className="img-fluid w-100 h-100 object-fit-cover position-absolute top-0 start-0"
        />
      </div>

      <div className="container-xl px-3 mb-5" data-aos="fade-up">
        <div className="row align-items-center text-center ">
          <div className="col-12">
            <p>
              Prostetik tangan cetakan 3D ialah tangan tiruan rekaan khas yang dibuat menggunakan teknologi cetakan 3D termaju. Mereka menyediakan penyelesaian yang berpatutan, ringan dan boleh disesuaikan untuk individu yang kehilangan tangan separa atau penuh. Peranti ini boleh memulihkan fungsi tangan asas seperti menggenggam, memegang atau mencubit, dan selalunya direka dengan komponen mekanikal atau mioelektrik untuk pergerakan. Sesuai untuk kanak-kanak dan orang dewasa, prostetik tangan 3D menawarkan keseimbangan fungsi, keselesaan dan kebolehcapaian—menjadikan pemulihan tangan diperibadikan lebih praktikal dan tersedia secara meluas.
            </p>
          </div>
        </div>
      </div>

      <section className="bg-section-white p-lg-5 p-3" data-aos="fade-up">
        <div className="container-xl my-5">
          <h2 className="display-5 mb-5 text-orange">
        Faedah Prostetik 3D
          </h2>
          <div className="row align-items-center">
            {/* Left Side: Image */}
            <div className="col-md-6 mb-4 mb-md-0" data-aos="fade-up">
              <img
                src={LightWeightImage}
                alt="Benefits of 3D Prosthetics"
                className="img-fluid rounded"
              />
            </div>

            {/* Right Side: Benefits List */}
            <div className="col-md-6" data-aos="fade-up">
              {benefits.map((item, index) => (
                <div className="mb-5" key={index}>
                  <h5 className="fs-4 mb-2">{item.title}</h5>
                  <p className="mb-2">{item.description}</p>
                </div>
              ))}
            </div>
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

export default ThreeProsthetics;
