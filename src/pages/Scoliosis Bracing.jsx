import React, { useEffect } from "react";
import ServiceSection from "../components/ServiceSection";
import Faq from "../components/Faq";
import TestimonialSection from "../components/TestimonialSection";
import ContactSection from "../components/ContactSection";
import "./LowerLimbProsthetics.css";
import ScoliosisBracingBanner from "/images/scoliosisbracing/ScoliosisBracingBanner.jpg";
import adolescent from "/images/scoliosisbracing/7.jpg";
import neuromuscular from "/images/scoliosisbracing/8.jpg";
import congenital from "/images/scoliosisbracing/9.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import TopRightButton from "./TopRightButton";
import { Helmet } from "react-helmet";
const ScoliosisBracing = () => {
 const ScoliosisBracings = [
  {
    title: "Scoliosis Idiopatik Remaja",
    description:
      "Jenis Scoliosis yang biasa berlaku semasa pertumbuhan pesat antara umur 9 hingga 16 tahun, tanpa punca khusus yang diketahui. Selalunya dikesan semasa pemeriksaan rutin atau saringan kesihatan.",
    image: adolescent,
    whatsappMessage:
      "Hai, saya ingin bertanya mengenai Scoliosis Idiopatik Remaja.",
  },
  {
    title: "Scoliosis Neuromuskular",
    description:
      "Berlaku disebabkan keadaan neurologi atau otot yang mendasari, seperti cerebral palsy atau distrofi otot, yang menyebabkan ketidakseimbangan otot dan kelengkungan tulang belakang.",
    image: neuromuscular,
    whatsappMessage:
      "Hai, saya ingin bertanya mengenai Scoliosis Neuromuskular.",
  },
  {
    title: "Scoliosis Kongenital",
    description:
      "Berlaku apabila tulang belakang tidak terbentuk dengan sempurna sebelum kelahiran, menyebabkan lengkungan yang wujud sejak lahir. Diagnosis awal dan pemantauan adalah penting untuk perancangan rawatan.",
    image: congenital,
    whatsappMessage:
      "Hai, saya ingin bertanya mengenai Scoliosis Kongenital.",
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
  <title>Effective Pendakap Scoliosis in Malaysia | Pediatric Support | ArtaLive</title>
  <meta
    name="description"
    content="Get expert scoliosis bracing in Malaysia at ArtAlive. Early intervention with custom braces helps correct spine curvature in children. Book your consultation now!"
  />
  <link rel="canonical" href="https://artalive.com.my/pendakap-scoliosis

" />
  <meta name="robots" content="index, follow" />
  <meta
    property="og:title"
    content="Effective Pendakap Scoliosis in Malaysia | Pediatric Support | ArtaLive"
  />
  <meta
    property="og:description"
    content="Get expert scoliosis bracing in Malaysia at ArtAlive. Early intervention with custom braces helps correct spine curvature in children. Book your consultation now!"
  />
  <meta property="og:url" content="https://artalive.com.my/pendakap-scoliosis

" />
  <meta property="og:type" content="website" />
</Helmet>


      <div className="container-fluid  bg-section p-0 line m-0">
        <h1 className="text-desktop  d-none d-md-block display-2 ">
          Pendakap Scoliosis di Malaysia
        </h1>
        <h2 className="text-mobile  d-lg-none display-2 ">Pendakap Scoliosis di Malaysia</h2>

        <img
          src={ScoliosisBracingBanner}
          alt="scoliosis bracing in Malaysia"
          className="img-fluid w-100 h-100 object-fit-cover position-absolute top-0 start-0 "
        />
      </div>

      <div className="container-xl px-3 mb-5" data-aos="fade-up"> 
        <div className="row align-items-center text-center ">
          <div className="col-12">
            <p>
             Scoliosis, kelengkungan tulang belakang ke sisi, sering muncul semasa zaman kanak-kanak atau remaja. Campur tangan awal dengan pendakap tersuai boleh menjadi penting dalam mencegah perkembangan dan mengekalkan kesihatan tulang belakang. Di ArtAlive, kami pakar dalam pendakap skoliosis pediatrik menggunakan teknologi pengimbasan termaju dan teknik fabrikasi untuk memastikan kesesuaian yang tepat dan sokongan optimum.
            </p>
          </div>
        </div>
      </div>

      <section className="bg-section-white p-lg-5 p-3" data-aos="fade-up">
        <div className="container-xl my-5">
          <h2 className="display-5 mb-5 text-orange">
            Jenis Scoliosis Berkaitan
          </h2>
          <div className="row align-items-stretch">
            {ScoliosisBracings.map((item, index) => {
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

export default ScoliosisBracing;
