import React, { useEffect } from "react";
import ServiceSection from "../components/ServiceSection";
import Faq from "../components/Faq";
import TestimonialSection from "../components/TestimonialSection";
import ContactSection from "../components/ContactSection";
import "./LowerLimbProsthetics.css";
import upperorthotics from "/images/upperorthotics/upperorthotics.jpg";
import OrtosisPegun from "/images/upperorthotics/static-ortho.jpg";
import OrtosisDinamik from "/images/upperorthotics/dynamic-hand.jpg";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import TopRightButton from "./TopRightButton";
import { Helmet } from "react-helmet";
const UpperLimbOrthotics = () => {
  const upperLimbOrthotics = [
    {
      title: "Ortosisi Pegun",
      description:
        "Ortosisi pegun direka untuk mengehadkan atau sepenuhnya menghalang pergerakan pada sendi tertentu. Ia digunakan untuk immobilisasi selepas kecederaan, pembedahan, atau dalam keadaan kronik yang memerlukan sendi direhatkan sepenuhnya bagi mempercepatkan proses penyembuhan.",
      image: OrtosisPegun,
      whatsappMessage: "Hai, saya ingin bertanya tentang Ortosis Pegun.",
    },
    {
      title: "Ortosisi Dinamik/Fungsional",
      description:
        "Ortosisi dinamik atau fungsional membenarkan julat pergerakan tertentu sambil memberikan sokongan dan bantuan kepada pergerakan otot atau sendi. Ia digunakan dalam pemulihan neuromuskular atau untuk membantu pesakit melakukan aktiviti harian dengan lebih berkesan, seperti dalam kes strok atau kecederaan saraf.",
      image: OrtosisDinamik,
      whatsappMessage:
        "Hai, saya ingin bertanya tentang Ortosis Dinamik/Fungsional.",
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
  <title>
    Penjagaan Ortotik Anggota Atas di Malaysia | Penjagaan Ortotik Lengan Bertauliah | Artalive
  </title>
  <meta
    name="description"
    content="Dapatkan penjagaan pakar untuk ortotik anggota atas di Malaysia. Artalive menawarkan penyelesaian ortotik lengan bertauliah. Hubungi kami hari ini untuk konsultasi percuma bersama pakar prostetik berpengalaman."
  />
  <link
    rel="canonical"
    href="https://artalive.com.my/my/ortotik-anggota-atas"
  />
  <meta name="robots" content="index, follow" />
  <meta
    property="og:title"
    content="Penjagaan Ortotik Anggota Atas di Malaysia | Penjagaan Ortotik Lengan Bertauliah | Artalive"
  />
  <meta
    property="og:description"
    content="Dapatkan penjagaan pakar untuk ortotik anggota atas di Malaysia. Artalive menawarkan penyelesaian ortotik lengan bertauliah. Hubungi kami hari ini untuk konsultasi percuma bersama pakar prostetik berpengalaman."
  />
  <meta
    property="og:url"
    content="https://artalive.com.my/my/ortotik-anggota-atas"
  />
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
              "text": "Sesiapa yang kehilangan anggota atau mempunyai cabaran mobiliti boleh mendapat manfaat daripada peranti prostetik atau ortotik untuk menyokong fungsi harian."
            }
          },
          {
            "@type": "Question",
            "name": "Adakah peranti dibuat secara khas?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ya, semua peranti direka khas untuk memenuhi bentuk badan, gaya hidup, dan keperluan perubatan setiap individu."
            }
          },
          {
            "@type": "Question",
            "name": "Berapa lama masa diperlukan untuk menyesuaikan diri dengan prostesis atau ortosis?",
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
              "text": "Ya, kami mengesyorkan membuat janji temu untuk penilaian klinikal."
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
            "name": "Berapa lama masa diambil untuk peranti siap?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Biasanya antara 1 hari hingga 2 minggu bergantung pada jenis peranti dan ketersediaan komponen."
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
          Ortotik Anggota Atas di Malaysia
        </h1>
        <h2 className="text-mobile  d-lg-none display-2 ">
          Ortotik Anggota Atas di Malaysia
        </h2>

        <img
          src={upperorthotics}
          alt="Ortotik Anggota Atas in malaysia"
          className="img-fluid w-100 h-100 object-fit-cover position-absolute top-0 start-0"
        />
      </div>

      <div className="container-xl px-3 mb-5" data-aos="fade-up">
        <div className="row align-items-center text-center ">
          <div className="col-12">
            <p>
              Ortotik Anggota Atas ialah peranti luaran yang direka untuk
              menyokong, menstabilkan, atau membetulkan fungsi tangan,
              pergelangan tangan, lengan bawah, dan siku. Ia digunakan untuk
              membantu dalam pemulihan selepas kecederaan, menyokong otot atau
              sendi yang lemah, dan menguruskan keadaan seperti strok, cerebral
              palsy, dan arthritis. Sokongan ini membantu pesakit mendapatkan
              semula fungsi harian dan meningkatkan kebebasan pergerakan.
            </p>
          </div>
        </div>
      </div>

      <section className="bg-section-white p-lg-5 p-3" data-aos="fade-up">
        <div className="container-xl my-5">
          <h2 className="display-5 mb-5 text-orange">Ortotik Anggota Atas</h2>
          <div className="row align-items-stretch">
            {upperLimbOrthotics.map((item, index) => {
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

export default UpperLimbOrthotics;
