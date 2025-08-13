import React, { useEffect } from "react";
import ServiceSection from "../components/ServiceSection";
import Faq from "../components/Faq";
import TestimonialSection from "../components/TestimonialSection";
import ContactSection from "../components/ContactSection";
import "./LowerLimbProsthetics.css";
import lowerlimborthotics from "/images/lowerorthotics/lowerlimborthotics.png";
import ortosiskaki from "/images/lowerorthotics/OrtosisKaki.jpg";
import OrtosisBukuLaliKak from "/images/lowerorthotics/OrtosisBukuLaliKak.jpg";
import OrtosisLututBukuLaliKaki from "/images/lowerorthotics/Ortosis Lutut-Buku Lali-Kaki.jpg";
import OrtosisLutut from "/images/lowerorthotics/Ortosis Lutut.jpg";
import Hip from "/images/lowerorthotics/Hip.jpg";

import PendakapLututPelepasTekanan from "/images/lowerorthotics/Pendakap Lutut Pelepas Tekanan.jpg";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import TopRightButton from "./TopRightButton";
import { Helmet } from "react-helmet";
const LowerLimbOrthotics = () => {
const lowerLimbOrthotics = [
  {
    title: "Ortosisi Kaki",
    description:
      "Tapak dalam tersuai yang direka untuk menyokong lengkungan kaki, membetulkan ketidakseimbangan biomekanikal, dan mengurangkan tekanan pada bahagian tertentu. Sesuai untuk keadaan seperti plantar fasciitis, kaki leper, dan sakit tumit.",
    image: ortosiskaki,
    whatsappMessage: "Hai, saya ingin bertanya tentang Ortosis Kaki.",
  },
  {
    title: "Ortosisi Buku Lali-Kaki (AFO)",
    description:
      "Alat sokongan yang menyokong kaki dan buku lali untuk membantu pergerakan yang lebih stabil serta mencegah 'foot drop'. Lazim digunakan dalam rawatan strok, cerebral palsy, dan kecederaan saraf periferi.",
    image: OrtosisBukuLaliKak,
    whatsappMessage:
      "Hai, saya ingin bertanya tentang Ortosis Buku Lali-Kaki (AFO).",
  },
  {
    title: "Ortosisi Lutut-Buku Lali-Kaki (KAFO)",
    description:
      "Peranti ortotik penuh dari paha hingga ke kaki yang menyokong sendi lutut, buku lali, dan kaki. Sesuai untuk individu dengan kelemahan otot atau ketidakstabilan sendi pada keseluruhan anggota bawah.",
    image: OrtosisLututBukuLaliKaki,
    whatsappMessage:
      "Hai, saya ingin bertanya tentang Ortosis Lutut-Buku Lali-Kaki (KAFO).",
  },
  {
    title: "Ortosisi Lutut",
    description:
      "Pendakap lutut yang memberikan kestabilan dan sokongan kepada sendi lutut. Sesuai untuk individu dengan kecederaan ligamen, osteoartritis, atau dalam tempoh pemulihan selepas pembedahan lutut.",
    image: OrtosisLutut,
    whatsappMessage: "Hai, saya ingin bertanya tentang Ortosis Lutut.",
  },
  {
    title: "Pendakap Lutut Pelepas Tekanan",
    description:
      "Ortosisi khas yang direka untuk mengurangkan tekanan pada bahagian lutut yang terjejas akibat osteoartritis. Ia membantu melegakan kesakitan dan meningkatkan mobiliti dengan mengalihkan beban daripada kawasan yang rosak.",
    image: PendakapLututPelepasTekanan,
    whatsappMessage:
      "Hai, saya ingin bertanya tentang Pendakap Lutut Pelepas Tekanan.",
  },
  {
    title: "Ortosisi Pinggul",
    description:
      "Ortosisi pinggul menyokong sendi pinggul pada kanak-kanak, meningkatkan kestabilan, membimbing penjajaran yang betul, menguruskan kehelan, dan membantu pergerakan selepas pembedahan atau dalam keadaan seperti displasia pinggul atau gangguan neuromuskular.",
    image: Hip,
    whatsappMessage: "Hai, saya ingin bertanya tentang Ortosisi Pinggul.",
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

  <title>Ortotik Anggota Bawah In Malaysia | ArtaLive</title>
  <meta
    name="description"
    content="Lower limb orthotics are specialist external devices that are used in certain areas of the lower limb to correct an abnormal alignment."
  />
  <link rel="canonical" href="https://artalive.com.my/ortotik-anggota-bawah" />
  <meta name="robots" content="index, follow" />
  <meta
    property="og:title"
    content="Ortotik Anggota Bawah In Malaysia | ArtaLive"
  />
  <meta
    property="og:description"
    content="Lower limb orthotics are specialist external devices that are used in certain areas of the lower limb to correct an abnormal alignment."
  />
  <meta property="og:url" content="https://artalive.com.my/ortotik-anggota-bawah" />
  <meta property="og:type" content="website" />



  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Who can benefit from prosthetics or orthotics?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Anyone who has lost a limb or has mobility challenges can benefit from prosthetic or orthotic devices to support daily functions."
            }
          },
          {
            "@type": "Question",
            "name": "Are the devices custom-made?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, all devices are tailored to suit each individual's body, lifestyle, and medical needs."
            }
          },
          {
            "@type": "Question",
            "name": "How long does it take to adapt to a prosthesis or orthosis?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Adaptation varies by person, but typically takes a few weeks with proper training and support."
            }
          },
          {
            "@type": "Question",
            "name": "Do I need an appointment to get services?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we recommend scheduling an appointment for a clinical assessment."
            }
          },
          {
            "@type": "Question",
            "name": "Is follow-up care available?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we provide regular follow-ups including readjustments, maintenance, and user support."
            }
          },
          {
            "@type": "Question",
            "name": "How long does it take for a device to be ready?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Typically between 1 day to 2 weeks depending on device type and component availability."
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
          Ortotik Anggota Bawah di Malaysia
        </h1>
        <h2 className="text-mobile  d-lg-none display-2 ">
          Ortotik Anggota Bawah di Malaysia
        </h2>

        <img
          src={lowerlimborthotics}
          alt="Ortotik Anggota Bawah in malaysia"
          className="img-fluid w-100 h-100 object-fit-cover position-absolute top-0 start-0"
        />
      </div>

      <div className="container-xl px-3 mb-5" data-aos="fade-up">
        <div className="row align-items-center text-center ">
          <div className="col-12">
            <p>
              Ortotik Anggota Bawah di Malaysia ialah peranti sokongan luaran khusus yang digunakan untuk menstabilkan, menjajarkan dan membetulkan keadaan yang menjejaskan kaki, buku lali, lutut atau pinggul. Penyelesaian ortotik ini membantu meningkatkan mobiliti, mengurangkan kesakitan, dan memperbaiki postur dan gaya berjalan. Jenis biasa termasuk insole tersuai, pendakap dan splint—setiap satu disesuaikan dengan keperluan khusus pesakit untuk keselesaan dan fungsi maksimum. Sama ada untuk pemulihan, keadaan kongenital atau sakit kronik, Ortotik Anggota Bawah di Malaysia menyediakan penjagaan peribadi yang berkesan untuk menyokong pergerakan harian dan kesejahteraan jangka panjang.
            </p>
          </div>
        </div>
      </div>

      <section className="bg-section-white p-lg-5 p-3" data-aos="fade-up">
        <div className="container-xl my-5">
          <h2 className="display-5 mb-5 text-orange">Ortotik Anggota Bawah</h2>
          <div className="row align-items-stretch">
            {lowerLimbOrthotics.map((item, index) => {
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

export default LowerLimbOrthotics;
