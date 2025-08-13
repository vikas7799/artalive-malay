import React, { useEffect } from "react";
import ServiceSection from "../components/ServiceSection";
import ContactSection from "../components/ContactSection";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import logo from "/images/lowerorthotics/lowerlimborthotics.png";
import lowerorthotics from "/images/lowerorthotics/lowerlimborthotics.png";
import upperorthotics from "/images/upperorthotics/upperorthotics.jpg";
import specialorthotics from "/images/specialorthotics/specialorthotics.webp";
import TopRightButton from "./TopRightButton";

import { Link } from "react-router-dom";
import WhyChooseSection from "../components/WhyChooseSection";
import { Helmet } from "react-helmet";

const Ortotik = () => {
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
    Pusat Penjagaan Ortotik Terpercaya di Kuala Lumpur, Malaysia | Artalive
  </title>
  <meta
    name="description"
    content="Pusat penjagaan ortotik terkemuka di Kuala Lumpur, Malaysia. Pakar dalam alat sokongan & pendakap. Pusat ortotik untuk penjagaan anggota atas. Lawati Artalive. Tempah konsultasi anda sekarang!"
  />
  <link rel="canonical" href="https://artalive.com.my/my/ortotik" />
  <meta name="robots" content="index, follow" />
  <meta
    property="og:title"
    content="Pusat Penjagaan Ortotik Terpercaya di Kuala Lumpur, Malaysia | Artalive"
  />
  <meta
    property="og:description"
    content="Pusat penjagaan ortotik terkemuka di Kuala Lumpur, Malaysia. Pakar dalam alat sokongan & pendakap. Pusat ortotik untuk penjagaan anggota atas. Lawati Artalive. Tempah konsultasi anda sekarang!"
  />
  <meta property="og:url" content="https://artalive.com.my/my/ortotik" />
  <meta property="og:type" content="website" />

  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Apakah itu ortosis?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ortos is ialah alat sokongan luaran seperti pendakap, AFO, dan KAFO untuk membantu penjajaran, penstabilan, dan pergerakan."
            }
          },
          {
            "@type": "Question",
            "name": "Siapa yang perlu menggunakan peranti ortotik?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sesiapa yang mempunyai masalah otot, sendi, tulang belakang, atau keadaan neurologi."
            }
          },
          {
            "@type": "Question",
            "name": "Bolehkah ortotik digunakan untuk jangka masa panjang?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ya, dengan pemantauan dan penyelenggaraan yang betul."
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
          Ortotik di Malaysia
        </h1>
        <h2 className="text-mobile  d-lg-none display-2 ">
          Ortotik di Malaysia
        </h2>

        <img
          src={logo}
          alt="Banner"
          className="img-fluid w-100 h-100 object-fit-cover position-absolute top-0 start-0"
        />
      </div>

      <div className="container-xl px-3 mb-5" data-aos="fade-up">
        <div className="row align-items-center text-center ">
          <div className="col-12">
            <p className="fs-6">
              Ortotik (untuk meluruskan, menyelaraskan) ialah kepakaran
              perubatan yang memfokuskan pada reka bentuk dan aplikasi ortosa.
              Ortosis ialah "peranti yang digunakan secara luaran yang digunakan
              untuk mengubah suai ciri struktur dan fungsi sistem neuromuskular
              dan rangka". Pakar Orthotis ialah doktor perubatan utama yang
              bertanggungjawab untuk preskripsi, pembuatan dan pengurusan
              ortosa.
            </p>

            <div className=" mt-4 d-grid gap-3 d-md-flex justify-content-md-center">
              <a type="button" className="btn button3 " href="#perkhidmatan">
                Perkhidmatan Teroka
              </a>
              <Link type="button" className=" btn button1" to="/hubungi-kami">
                Hubungi Kami
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="p-lg-5 p-3 bg-section" id="perkhidmatan">
        <div className="container-xl  my-5">
          <div className="row align-items-start g-5 mb-5 fade-in ">
            <div className="col-lg-6" data-aos="fade-up">
              <h2 className=" mb-4 display-5">Ortotik Anggota Bawah</h2>
              <p className="">
                Orthotik anggota bawah ialah peranti sokongan luaran yang direka
                untuk menyokong, menstabilkan, dan membetulkan struktur kaki,
                buku lali, lutut, atau pinggul. Mereka membantu meningkatkan
                penjajaran, mengurangkan kesakitan, dan memudahkan pergerakan
                harian. Jenis ortotik termasuk pendakap, splint dan insole
                tersuai — disesuaikan dengan keperluan pesakit untuk memastikan
                keselesaan dan keberkesanan yang optimum.
              </p>
              <Link
                type="button"
                className=" btn button1"
                to="/ortotik-anggota-bawah"
              >
                Ortotik Anggota Bawah
              </Link>
            </div>
            <div className="col-lg-6" data-aos="fade-up">
              <img
                src={lowerorthotics}
                className="img-mobile rounded"
                style={{ height: "300px" }}
              ></img>
            </div>
          </div>

          <div
            className="row flex-row-reverse
  align-items-start  fade-in g-5  mb-5"
          >
            <div className="col-lg-6 " data-aos="fade-up">
              <h2 className=" mb-4 display-5">Ortotik Anggota Atas</h2>
              <p className="">
                Orthotik anggota atas ialah peranti luaran yang direka untuk
                menyokong, menstabilkan, atau membetulkan fungsi tangan,
                pergelangan tangan, lengan bawah, dan siku. Ia digunakan untuk
                membantu dalam pemulihan selepas kecederaan, menyokong otot atau
                sendi yang lemah, dan menguruskan keadaan seperti strok,
                cerebral palsy, dan arthritis. Sokongan ini membantu pesakit
                mendapat semula fungsi harian dan meningkatkan kebebasan
                pergerakan.
              </p>
              <Link
                type="button"
                className=" btn button1"
                to="/ortotik-anggota-atas"
              >
                Ortotik Anggota Atas
              </Link>
            </div>
            <div className="col-lg-6" data-aos="fade-up">
              <img
                src={upperorthotics}
                className="img-mobile  rounded"
                style={{ height: "300px" }}
              ></img>
            </div>
          </div>

          <div className="row align-items-start g-5 mb-5 fade-in ">
            <div className="col-lg-6" data-aos="fade-up">
              <h2 className=" mb-4 display-5">Ortotik Khas</h2>
              <p className="">
                Orthotics tersuai direka bentuk secara individu untuk menangani kompleks
                keperluan yang tidak boleh disokong oleh peranti ortotik standard.
                Ia digunakan untuk keadaan seperti kecacatan teruk,
                ketidakseimbangan postur, atau keperluan biomekanikal tertentu. setiap satu
                peranti dibina dengan ketepatan tinggi untuk memastikan keselesaan,
                sokongan optimum, dan fungsi harian yang lebih baik untuk pengguna.
              </p>
              <Link type="button" className=" btn button1" to="/ortotik-khas">
                Ortotik Khas
              </Link>
            </div>
            <div className="col-lg-6" data-aos="fade-up">
              <img
                src={specialorthotics}
                className="img-mobile rounded "
                style={{ height: "300px", objectPosition: "left" }}
              ></img>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-section p-lg-5 p-3" id="faq" data-aos="fade-up">
        <div className="container-xl my-5">
          <h2 className="display-4 mb-5 text-center">Soalan Lazim</h2>
          <div className=" row g-md-5">
            <div className="col-md-12">
              <div className="accordion accordion-flush" id="faqlist-left">
                <div className="accordion-item questions-border">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed fs-5"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-1"
                      aria-expanded="false"
                      aria-controls="faq-content-1"
                    >
                      1. Apa itu ortotik?
                    </button>
                  </h2>
                  <div
                    id="faq-content-1"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist-left"
                  >
                    <div className="accordion-body">
                      Ortotik ialah peranti sokongan luaran seperti pendakap, AFO, KAFO dan lain-lain untuk membantu penjajaran, kestabilan dan fungsi anggota badan.
                    </div>
                  </div>
                </div>

                <div className="accordion-item questions-border">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed fs-5"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-2"
                      aria-expanded="false"
                      aria-controls="faq-content-2"
                    >
                      2. Siapa yang sesuai menggunakan ortotik?
                    </button>
                  </h2>
                  <div
                    id="faq-content-2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist-left"
                  >
                    <div className="accordion-body">
                     Individu dengan masalah otot, sendi, tulang belakang atau keadaan neurologi.
                    </div>
                  </div>
                </div>

                <div className="accordion-item questions-border">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed fs-5"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-3"
                      aria-expanded="false"
                      aria-controls="faq-content-3"
                    >
                      3. Adakah ortotik boleh digunakan untuk jangka masa panjang?
                    </button>
                  </h2>
                  <div
                    id="faq-content-3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist-left"
                  >
                    <div className="accordion-body">
                      Ya, dengan pemantauan dan penyelenggaraan yang betul.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
};

export default Ortotik;
