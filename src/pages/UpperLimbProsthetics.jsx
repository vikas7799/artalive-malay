import React, { useEffect } from "react";
import ServiceSection from "../components/ServiceSection";
import Faq from "../components/Faq";
import TestimonialSection from "../components/TestimonialSection";
import ContactSection from "../components/ContactSection";
import "./LowerLimbProsthetics.css";
import upperprostheticsbanner from "/images/upperprosthetics/upperprosthetics.webp";
import prostesiskosmetik from "/images/upperprosthetics/cosmetic.jpg";
import prostesismekanika from "/images/upperprosthetics/bodypowered.jpg";
import prostesismyoelektrik from "/images/upperprosthetics/prostesismyoelektrik.jpg";
import Hand from "/images/upperprosthetics/hand.jpg";
import TopRightButton from "./TopRightButton";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
const UpperLimbProsthetics = () => {

   const scrollToFaq = () => {
    const faqElement = document.getElementById("faq");
    if (faqElement) {
      faqElement.scrollIntoView({ behavior: "smooth" });
    }
  };


const upperLimbProsthetics = [
  {
    title: "Prostesis Kosmetik",
    description:
      "Prostesis kosmetik direka untuk memberikan penampilan estetik yang menyerupai anggota badan asal, menggunakan bahan seperti silikon atau polivinil klorida (PVC).Tujuan utama prostesis kosmesis adalah untuk meningkatkan keyakinan diri individu dengan menyediakan prostesis yang tampak semula jadi, termasuk ciri-ciri seperti urat, jeragat, rambut, dan cap jari.",
    image: prostesiskosmetik,
    whatsappMessage: "Hai, saya ingin bertanya tentang Prostesis Kosmetik."
  },
  {
    title: "Prostesis Berkuasa Badan / Prostesis Mekanikal",
    description:
      "Prostesis berkuasa badan menggunakan mekanisme yang dikawal oleh pergerakan tubuh pengguna, seperti pergerakan bahu atau lengan. Prostesis ini mudah dikendalikan dan memberikan pengendalian yang lebih semulajadi dan intuitif, ideal untuk aktiviti harian.Sistem berkuasa badan adalah pilihan yang tahan lama dan lebih murah berbanding teknologi elektrik, menjadikannya pilihan yang baik untuk individu yang mencari penyelesaian praktikal dan mudah.",
    image: prostesismekanika,
    whatsappMessage: "Hai, saya ingin bertanya tentang Prostesis Berkuasa Badan / Prostesis Mekanikal."
  },
  {
    title: " Prostesis Myo-elektrik",
    description:
      " Prostesis Myo-elektrik menggunakan isyarat elektrik daripada otot pengguna untuk mengawal pergerakan tangan atau lengan tiruan. Reka bentuk canggih ini membolehkan pergerakan yang lebih tepat dan semula jadi, meningkatkan keupayaan pengguna untuk melakukan tugas yang kompleks dengan kawalan dan fungsi yang lebih baik.",
    image: prostesismyoelektrik,
    whatsappMessage: "Hai, saya ingin bertanya tentang  Prostesis Myo-elektrik."
  },
  {
    title: "Sebahagian Tangan (Partial Hand)",
    description:
      "Prostesis sebahagian tangan menggantikan jari yang hilang atau sebahagian daripada tangan. Prostesis ini memulihkan keupayaan untuk menggenggam, memegang, dan mengendalikan objek. Reka bentuk boleh bersifat kosmetik semata-mata atau sangat berfungsi, termasuk pilihan mekanikal atau mioelektrik untuk menyokong pergerakan jari yang tepat dan semula jadi.",
    image: Hand,
    whatsappMessage: "Hai, saya ingin bertanya tentang Prostesis Sebahagian Tangan."
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
  <title>
    Penjagaan Prostetik Anggota Atas di Malaysia | Lengan Palsu Malaysia | Tangan Palsu Kosmetik | Artalive
  </title>
  <meta
    name="description"
    content="Mencari tangan palsu kosmetik atau lengan prostetik di Malaysia? Artalive menawarkan penjagaan Prostetik Anggota Atas profesional. Hubungi kami sekarang untuk konsultasi percuma dengan pakar prostetik bertauliah!"
  />
  <link rel="canonical" href="https://artalive.com.my/my/prostetik-anggota-atas" />
  <meta name="robots" content="index, follow" />
  <meta
    property="og:title"
    content="Penjagaan Prostetik Anggota Atas di Malaysia | Lengan Palsu Malaysia | Tangan Palsu Kosmetik | Artalive"
  />
  <meta
    property="og:description"
    content="Mencari tangan palsu kosmetik atau lengan prostetik di Malaysia? Artalive menawarkan penjagaan Prostetik Anggota Atas profesional. Hubungi kami sekarang untuk konsultasi percuma dengan pakar prostetik bertauliah!"
  />
  <meta property="og:url" content="https://artalive.com.my/my/prostetik-anggota-atas" />
  <meta property="og:type" content="website" />

  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Siapa yang boleh mendapat manfaat daripada prostetik atau ortotik?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sesiapa yang kehilangan anggota badan atau mempunyai cabaran mobiliti boleh mendapat manfaat daripada peranti prostetik atau ortotik untuk menyokong fungsi harian."
            }
          },
          {
            "@type": "Question",
            "name": "Adakah peranti ini dibuat khusus?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ya, semua peranti direka khas mengikut bentuk badan, gaya hidup, dan keperluan perubatan setiap individu."
            }
          },
          {
            "@type": "Question",
            "name": "Berapa lama masa untuk menyesuaikan diri dengan prostesis atau ortosis?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Tempoh penyesuaian berbeza mengikut individu, tetapi biasanya mengambil masa beberapa minggu dengan latihan dan sokongan yang betul."
            }
          },
          {
            "@type": "Question",
            "name": "Adakah saya perlu membuat janji temu untuk mendapatkan perkhidmatan?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ya, kami mengesyorkan untuk membuat janji temu bagi penilaian klinikal."
            }
          },
          {
            "@type": "Question",
            "name": "Adakah penjagaan susulan disediakan?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ya, kami menyediakan susulan berkala termasuk pelarasan semula, penyelenggaraan, dan sokongan pengguna."
            }
          },
          {
            "@type": "Question",
            "name": "Berapa lama masa yang diperlukan untuk menyiapkan peranti?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Biasanya antara 1 hari hingga 2 minggu bergantung kepada jenis peranti dan ketersediaan komponen."
            }
          }
        ]
      }
    `}
  </script>
</Helmet>




              <TopRightButton label="Soalan Lazim" onClick={scrollToFaq} />

      <div className="container-fluid  bg-section p-0 line m-0">
        <h1 className="text-desktop  d-none d-md-block display-2 ">
Prostetik Anggota Atas di Malaysia        </h1>
        <h2 className="text-mobile  d-lg-none display-2 ">
Prostetik Anggota Atas di Malaysia        </h2>

        <img
          src={upperprostheticsbanner}
          alt="Upper Limb Prosthetic"
          className="img-fluid w-100 h-100 object-fit-cover position-absolute top-0 start-0"
        />
      </div>

      <div className="container-xl px-3 mb-5" data-aos="fade-up">
        <div className="row align-items-center text-center ">
          <div className="col-12">
            <p>
Prostetik Anggota Atas di Malaysia direka untuk menggantikan bahagian badan yang hilang akibat amputasi, memulihkan fungsi dan meningkatkan kualiti hidup. Amputasi boleh berlaku pada paras bahu, siku, pergelangan tangan atau jari, dan prostesis yang betul boleh membantu dalam pemulihan fizikal dan sosial.            </p>
          </div>
        </div>
      </div>

   <section className="bg-section-white p-lg-5 p-3" data-aos="fade-up">
      <div className="container-xl my-5">
        <h2 className="display-5 mb-5 text-orange">Prostetik Anggota Atas</h2>
        <div className="row align-items-stretch">
          {upperLimbProsthetics.map((item, index) => {
            const whatsappLink = `https://api.whatsapp.com/send?phone=60123774437&text=${encodeURIComponent(item.whatsappMessage)}`;

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

export default UpperLimbProsthetics;
