import React, { useEffect } from "react";
import ServiceSection from "../components/ServiceSection";
import Faq from "../components/Faq";
import TestimonialSection from "../components/TestimonialSection";
import ContactSection from "../components/ContactSection";
import "./LowerLimbProsthetics.css";
import CranialHelmetsBanner from "/images/cranialhelmets/Cranial Helmets Banner.png";
import Plagiocephaly from "/images/cranialhelmets/10.jpg";
import Brachycephaly from "/images/cranialhelmets/11.jpg";
import Asymmetric from "/images/cranialhelmets/11.jpg";
import Scaphocephaly from "/images/cranialhelmets/12.jpg";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import TopRightButton from "./TopRightButton";
import { Helmet } from "react-helmet";
const CranialHelmets = () => {
const ScoliosisBracings = [
  {
    title: "Plagiocephaly",
    description:
      "Plagiocephaly, atau 'sindrom kepala leper', adalah ketidaksimetrian tengkorak yang paling biasa, menyebabkan satu sisi kepala bayi menjadi leper dan sering membentuk bentuk seperti paralelogram akibat pergeseran ke hadapan.",
    image: Plagiocephaly,
    whatsappMessage: "Hai, saya ingin bertanya mengenai Plagiocephaly.",
  },
  {
    title: "Brachycephaly",
    description:
      "Brachycephaly biasanya kelihatan sebagai keleperan di bahagian belakang kepala dengan dahi yang menonjol, melebar di atas telinga, dan ketinggian kepala bayi mungkin kelihatan lebih tinggi.",
    image: Brachycephaly,
    whatsappMessage: "Hai, saya ingin bertanya mengenai Brachycephaly.",
  },
  {
    title: "Asymmetric Brachycephaly",
    description:
      "Asymmetric brachycephaly menggabungkan plagiocephaly dan brachycephaly, menyebabkan keleperan yang tidak sekata di bahagian belakang kepala bayi dan bentuk kepala yang kelihatan lebih lebar daripada panjangnya.",
    image: Asymmetric,
    whatsappMessage:
      "Hai, saya ingin bertanya mengenai Asymmetric Brachycephaly.",
  },
  {
    title: "Scaphocephaly",
    description:
      "Scaphocephaly biasanya dapat dilihat sebagai bentuk kepala yang panjang dan sempit. Ia sering berlaku pada bayi pramatang yang menghabiskan masa di NICU atau sentiasa berbaring di salah satu sisi kepala.",
    image: Scaphocephaly,
    whatsappMessage: "Hai, saya ingin bertanya mengenai Scaphocephaly.",
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
  <title>Topi Keledar Tengkorak
 in Kuala Lumpur | Effective Treatment for Cranial Asymmetry</title>
  <meta
    name="description"
    content="Artalive offers expert cranial helmets in Kuala Lumpur to treat plagiocephaly and cranial asymmetry in infants. Safe, comfortable, and effective. Contact us today for a free consultation!"
  />
  <link rel="canonical" href="https://artalive.com.my/topi-keledar-tengkorak

" />
  <meta name="robots" content="index, follow" />
  <meta
    property="og:title"
    content="Topi Keledar Tengkorak
 in Kuala Lumpur | Effective Treatment for Cranial Asymmetry"
  />
  <meta
    property="og:description"
    content="Artalive offers expert cranial helmets in Kuala Lumpur to treat plagiocephaly and cranial asymmetry in infants. Safe, comfortable, and effective. Contact us today for a free consultation!"
  />
  <meta property="og:url" content="https://artalive.com.my/topi-keledar-tengkorak

" />
  <meta property="og:type" content="website" />
</Helmet>


      <div className="container-fluid  bg-section p-0 line m-0">
        <h1 className="text-desktop  d-none d-md-block display-2 ">
          Topi Keledar Tengkorak di Malaysia

        </h1>
        <h2 className="text-mobile  d-lg-none display-2 ">Topi Keledar Tengkorak di Malaysia
</h2>

        <img
          src={CranialHelmetsBanner}
          alt="Topi Keledar Tengkorak
 in Kuala Lumpur"
          className="img-fluid w-100 h-100 object-fit-cover position-absolute top-0 start-0 "
        />
      </div>

      <div className="container-xl px-3 mb-5" data-aos="fade-up">
        <div className="row align-items-center text-center ">
          <div className="col-12">
            <p>
              Asimetri tengkorak, seperti plagiocephaly (sindrom kepala rata), adalah perkara biasa pada bayi dan selalunya boleh dirawat dengan jayanya dengan topi keledar membentuk semula tengkorak. Di ArtAlive, kami menyediakan topi keledar tengkorak tersuai yang direka bentuk untuk membimbing kepala anak anda dengan lembut ke dalam bentuk yang lebih semula jadi semasa mereka membesar.
            </p>
            <Link
              type="button"
              className="btn button1"
              to="/pdf/Cranial-Helmet.pdf"
              target="blank"
            >
Baca Lagi Rawatan Kepala            </Link>
          </div>
        </div>
      </div>
      <section className="bg-section-white p-lg-5 p-3" data-aos="fade-up">
        <div className="container-xl my-5">
          <h2 className="display-5 mb-5 text-orange">
            Empat Bentuk Kepala Biasa
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

export default CranialHelmets;
