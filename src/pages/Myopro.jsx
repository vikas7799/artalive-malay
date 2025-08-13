import React, { useEffect } from "react";
import ServiceSection from "../components/ServiceSection";
import Faq from "../components/Faq";
import TestimonialSection from "../components/TestimonialSection";
import ContactSection from "../components/ContactSection";
import "./LowerLimbProsthetics.css";
import Myoproimage from "/images/myopro/banner.webp";
import Stroke from "/images/myopro/Stroke.webp";
import Cerebral from "/images/myopro/Cerebral Palsy.jpg";
import Brachial from "/images/myopro/Brachial Plexus Injury.webp";
import Spinal from "/images/myopro/Spinal Cord Injury.webp";
import Multiple from "/images/myopro/multiple sclerosis.jpg";
import myoproworks from "/images/myopro/how-myopro-works-v3.png";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import TopRightButton from "./TopRightButton";
import { Helmet } from "react-helmet";
const Myopro = () => {
  const myopro = [
  {
    title: "Strok (CVA)",
    description:
      "Lumpuh separa atau kelemahan otot (hemiparesis) pada satu bahagian badan, biasanya selepas strok. MyoPro menyokong pergerakan pada lengan yang terjejas dengan mengesan dan bertindak balas terhadap isyarat otot yang masih aktif walaupun terdapat kekurangan fizikal.",
    image: Stroke,
    whatsappMessage:
      "Hai, saya ingin bertanya tentang Ortosis MyoPro untuk Strok (CVA).",
  },
  {
    title: "Palsi Serebrum (CP)",
    description:
      "Kekakuan atau kelemahan otot akibat kecederaan otak awal, selalunya sejak lahir. Jika individu masih mempunyai isyarat otot yang aktif, MyoPro boleh membantu dalam fungsi harian seperti menulis, makan, atau mengangkat objek.",
    image: Cerebral,
    whatsappMessage:
      "Hai, saya ingin bertanya tentang Ortosis MyoPro untuk Palsi Serebrum (CP).",
  },
  {
    title: "Kecederaan Plexus Brakial (BPI)",
    description:
      "Kerosakan saraf yang menjejaskan pergerakan pada bahu, lengan, dan tangan — biasanya akibat trauma atau kemalangan. MyoPro membantu memulihkan fungsi asas lengan dengan menggunakan isyarat otot dari lengan atas untuk menyokong pergerakan yang disengajakan.",
    image: Brachial,
    whatsappMessage:
      "Hai, saya ingin bertanya tentang Ortosis MyoPro untuk Kecederaan Plexus Brakial (BPI).",
  },
  {
    title: "Kecederaan Saraf Tunjang (SCI)",
    description:
      "Fungsi lengan terhad akibat kecederaan pada saraf tunjang bahagian atas — tanpa lumpuh sepenuhnya. MyoPro membantu pergerakan melalui sokongan bermotor yang bertindak balas kepada isyarat otot sukarela pengguna.",
    image: Spinal,
    whatsappMessage:
      "Hai, saya ingin bertanya tentang Ortosis MyoPro untuk Kecederaan Saraf Tunjang (SCI).",
  },
  {
    title: "Sklerosis Berbilang (MS)",
    description:
      "Keadaan neurologi progresif yang melemahkan kawalan lengan dari semasa ke semasa akibat kerosakan saraf. Pada peringkat awal hingga sederhana, MyoPro boleh membantu menstabilkan dan menyokong pergerakan tangan serta lengan bagi mengekalkan kebebasan fungsi.",
    image: Multiple,
    whatsappMessage:
      "Hai, saya ingin bertanya tentang Ortosis MyoPro untuk Sklerosis Berbilang (MS).",
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
  <title>Kembalikan Fungsi Lengan dengan MyoPro Orthosis di Kuala Lumpur | Artalive</title>
  <meta
    name="description"
    content="Dapatkan MyoPro Orthosis di Kuala Lumpur bersama Artalive. Pulihkan pergerakan lengan & tangan untuk anggota yang lemah atau lumpuh. Tempah konsultasi percuma dengan pakar kami hari ini!"
  />
  <link rel="canonical" href="https://artalive.com.my/my/myopro-orthosis" />
  <meta name="robots" content="index, follow" />
  <meta
    property="og:title"
    content="Kembalikan Fungsi Lengan dengan MyoPro Orthosis di Kuala Lumpur | Artalive"
  />
  <meta
    property="og:description"
    content="Dapatkan MyoPro Orthosis di Kuala Lumpur bersama Artalive. Pulihkan pergerakan lengan & tangan untuk anggota yang lemah atau lumpuh. Tempah konsultasi percuma dengan pakar kami hari ini!"
  />
  <meta property="og:url" content="https://artalive.com.my/my/myopro-orthosis" />
  <meta property="og:type" content="website" />
</Helmet>


      <div className="container-fluid  bg-section p-0 line m-0">
        <h1 className="text-desktop  d-none d-md-block display-2 ">
          MyoPro Orthosis di Malaysia
        </h1>
        <h2 className="text-mobile  d-lg-none display-2 ">MyoPro Orthosis di Malaysia</h2>

        <img
          src={Myoproimage}
          alt="Regain Arm Function with MyoPro Orthosis"
          className="img-fluid w-100 h-100 object-fit-cover position-absolute top-0 start-0 img-dark"
        />
      </div>

      <div className="container-xl px-3 mb-5" data-aos="fade-up">
        <div className="row align-items-center text-center ">
          <div className="col-12">
            <p>
              MyoPro ialah peranti ortotik berkuasa yang direka untuk lengan dan tangan. Ia menyokong individu dengan anggota atas yang lemah atau lumpuh dengan membolehkan mereka melakukan pergerakan penting dan aktiviti harian yang mungkin tidak dapat dicapai. Selain sokongan berfungsi, MyoPro boleh membantu dalam pemulihan dengan menggalakkan pendidikan semula otot dan meningkatkan julat pergerakan.
            </p>
          </div>
        </div>
      </div>

      <div className=" p-lg-5 p-3 bg-white ">
        <div className="container-xl  my-5">
          <div className="row align-items-center g-5 ">
            <div className="col-lg-6" data-aos="fade-up">
              <h2 className="mb-4 display-4">Bagaimanakah MyoPro berfungsi?</h2>
              <p className="fs-6">
               Pada asalnya dibangunkan di MIT dengan Sekolah Perubatan Harvard, peranti ortosis lengan dan tangan MyoPro berfungsi dengan membaca isyarat saraf yang lemah (isyarat mioelektrik) dari permukaan kulit (tidak invasif sepenuhnya, tanpa implan) kemudian mengaktifkan motor kecil untuk menggerakkan anggota badan seperti yang dikehendaki pengguna (tiada rangsangan elektrik).<br></br>
Pengguna mengawal sepenuhnya tangan, pergelangan tangan, siku,
                dan lengan, manakala pendakap lengan mioelektrik menguatkan otot yang lemah
                isyarat untuk membantu menggerakkan anggota atas. Ia telah dipanggil "kuasa
                kemudi untuk lengan awak.”<br></br>
                Sedangkan produk pendakap gigi banyak untuk yang rugi
                lengan, tangan atau kaki mereka, dan semasa terdapat produk ortotik
                untuk menyokong kaki yang lemah, MyoPro ialah satu-satunya myoelektrik yang boleh dipakai
                peranti di pasaran untuk membantu memulihkan fungsi bagi mereka yang
                masih mempunyai lengan dan tangan tetapi tidak dapat menggunakannya.
              </p>
            </div> 
            <div className="col-lg-6" data-aos="fade-up">
              <img src={myoproworks} alt=" MyoPro arm and hand orthosis device working" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>

      <section className="bg-section-white p-lg-5 p-3" data-aos="fade-up">
        <div className="container-xl my-5">
          <h2 className="display-5 mb-5 text-orange">
          Myopro Orthosis – Sesuai Untuk Digunakan Dalam
          </h2>
          <div className="row align-items-stretch">
            {myopro.map((item, index) => {
              const whatsappLink = `https://api.whatsapp.com/send?phone=60123774437&text=${encodeURIComponent(
                item.whatsappMessage
              )}`;
              return (
                <div className="col-md-4 mb-5" key={index}>
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
                        className="btn button3"
                        target="_blank"
                        rel="noopener noreferrer"
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

export default Myopro;
