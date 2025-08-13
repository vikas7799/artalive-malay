import React, { useEffect } from "react";
import ServiceSection from "../components/ServiceSection";
import Faq from "../components/Faq";
import TestimonialSection from "../components/TestimonialSection";
import ContactSection from "../components/ContactSection";
import "./LowerLimbProsthetics.css";
import lowerprostheticsbanner from "/images/lowerprosthetics/Lower Prosthetics Banner.webp";
import abovekeenpro from "/images/lowerprosthetics/Above Knee.jpg";
import belowkeenpro from "/images/lowerprosthetics/Below Knee.jpg";
import foot from "/images/lowerprosthetics/Partial-foot-Prosthesis.jpg";
import hip from "/images/lowerprosthetics/hip-prosthesis.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import TopRightButton from "./TopRightButton";
import { Helmet } from "react-helmet";


const LowerLimbProsthetics = () => {

  const scrollToFaq = () => {
    const faqElement = document.getElementById("faq");
    if (faqElement) {
      faqElement.scrollIntoView({ behavior: "smooth" });
    }
  };


  const lowerlimbprosthetics = [
  {
    title: "Bawah Lutut (Transtibial Prostesis)",
    description:
      "Prostesis bawah lutut direka khas untuk menggantikan anggota yang hilang dari bawah lutut hingga ke kaki. Setiap prostesis disesuaikan mengikut bentuk dan keperluan individu bagi memastikan keselesaan dan fungsi yang optimum.",
    image: belowkeenpro,
    whatsappMessage: "Hai, saya ingin bertanya tentang Bawah Lutut (Transtibial Prostesis)."
  },
  {
    title: "Atas Lutut (Transfemoral Prostesis)",
    description:
      "Prostesis atas lutut direka untuk menggantikan anggota yang hilang dari bawah pinggul hingga ke kaki. Reka bentuk khas memastikan soket yang selesa dan sesuai dengan bentuk badan pengguna secara tepat.",
    image: abovekeenpro,
    whatsappMessage: "Hai, saya ingin bertanya tentang Atas Lutut (Transfemoral Prostesis)."
  },
  {
    title: "Sebahagian Kaki (Partial Foot)",
    description:
      "Prostesis sebahagian kaki direka untuk menggantikan jari kaki atau sebahagian daripada kaki yang hilang. Reka bentuk khas ini memberikan kesesuaian tepat untuk keselesaan serta membantu memulihkan corak berjalan dan keseimbangan semula jadi.",
    image: foot,
    whatsappMessage: "Hai, saya ingin bertanya tentang Prostesis Sebahagian Kaki (Partial Foot)."
  },
  {
    title: "Pemutusan Sendi Pinggul (Hip Disarticulation - HD)",
    description:
      "Prostesis pemutusan sendi pinggul mempunyai sendi pinggul yang direka khas dan diletakkan di bahagian hadapan badan. Kedudukan ke hadapan ini membantu mengalihkan berat pengguna ke belakang sendi, meningkatkan keseimbangan dan kestabilan sambil mengurangkan risiko terjatuh.",
    image: hip,
    whatsappMessage: "Hai, saya ingin bertanya tentang Prostesis Pemutusan Sendi Pinggul (Hip Disarticulation)."
  },
];



 const prostheticFeetCategories = [
  {
    category: "Kaki Prostetik untuk Kehidupan Aktif",
    products: [
      {
        name: "Triton Low Profile (Ottobock)",
        image: "/images/feet/Triton Low Profile.avif",
      },
      {
        name: "Triton Sideflex (Ottobock)",
        image: "/images/feet/Triton Sideflex.avif",
      },
      { name: "Triton (Ottobock)", image: "/images/feet/Triton.avif" },
      { name: "Triton HD (Ottobock)", image: "/images/feet/Triton HD.jpg" },
      {
        name: "Triton Vertical Shock (Ottobock)",
        image: "/images/feet/Trito Vertical Shock.avif",
      },
      {
        name: "Triton Harmony (Ottobock)",
        image: "/images/feet/Triton Harmony.avif",
      },
      {
        name: "Vari-flex (Ossur)",
        image: "/images/feet/Vari-flex Ossur.webp",
      },
      {
        name: "Vari-flex Unity (Ossur)",
        image: "/images/feet/Vari-flex Unity Ossur.webp",
      },
      {
        name: "Re-flex Shock (Keluarga Re-flex)",
        image: "/images/feet/Re-felx Shock Ossur.webp",
      },
      {
        name: "Re-flex Unity (Keluarga Re-flex)",
        image: "/images/feet/Re-flex Shock Unity Ossur.webp",
      },
      {
        name: "Re-flex Rotate (Keluarga Re-flex)",
        image: "/images/feet/Re-flex Rotate Ossur.webp",
      },
    ],
  },
  {
    category: "Kaki Prostetik untuk Kehidupan Harian",
    products: [
      {
        name: "Taleo Low Profile (Ottobock)",
        image: "/images/feet/Taleo Low Profile.avif",
      },
      {
        name: "Taleo Adjust (Ottobock)",
        image: "/images/feet/Taleo Adjust.avif",
      },
      {
        name: "Taleo Side Flex (Ottobock)",
        image: "/images/feet/Taleo Side Flex.avif",
      },
      { name: "Evanto (Ottobock)", image: "/images/feet/Evanto.avif" },
      { name: "Aspire (Ossur)", image: "/images/feet/Aspire Ossur.webp" },
      { name: "Taleo (Ottobock)", image: "/images/feet/Taleo.avif" },
      {
        name: "Taleo Vertical Shock (Ottobock)",
        image: "/images/feet/Taleo Vertical Shock.avif",
      },
      {
        name: "Taleo Harmony (Ottobock)",
        image: "/images/feet/Taleo Harmony.avif",
      },
      {
        name: "1D35 - Dynamic Motion (Ottobock)",
        image: "/images/feet/1D35 Dynamic Motion.avif",
      },
      { name: "Toe Flex", image: "/images/feet/Toe Flex.jpg" },
    ],
  },
  {
    category: "Kaki Prostetik untuk Mobiliti Terhad",
    products: [
      { name: "Terion (Ottobock)", image: "/images/feet/Terion.avif" },
      {
        name: "1D10 - Dynamic Foot (Ottobock)",
        image: "/images/feet/1D10 Dynamic foot.avif",
      },
      { name: "Breeze (Ossur)", image: "/images/feet/Breeze foot.webp" },
      {
        name: "Kaki SACH (Regal)",
        image: "/images/feet/SACH foot Regal.jpg",
      },
    ],
  },
];


const prostheticKneesCategories = [
  {
    category: "Lutut Prostetik untuk Kehidupan Aktif",
    products: [
      { name: "Genium X4", image: "/images/knees/Genium X4.jpg" },
      { name: "C-Leg Lutut Kawalan Mikroprosesor", image: "/images/knees/C Leg.jpg" },
      { name: "Dynion", image: "/images/knees/Dynion.jpg" },
      { name: "3R80 Lutut Hidraulik Putar", image: "/images/knees/3R80 Rotary Hydraulic Knee.jpg" }
    ]
  },
  {
    category: "Lutut Prostetik untuk Kehidupan Harian",
    products: [
      { name: "3R60 Lutut EBS dengan Kawalan Hayunan Hidraulik", image: "/images/knees/3R60 EBS Knee.jpg" },
      { name: "3R106 – Lutut Pro Polisentric dengan Kawalan Hayunan Servo-pneumatik", image: "/images/knees/3R106.jpg" },
      { name: "3R78 Lutut Polisentric dengan Kawalan Hayunan Pneumatik", image: "/images/knees/3R78.jpg" },
      { name: "3R92 Lutut Brek Selesa dengan Kawalan Hayunan Pneumatik", image: "/images/knees/3R92.webp" }
    ]
  },
  {
    category: "Lutut Prostetik untuk Mobiliti Terhad",
    products: [
      { name: "3R62 Lutut EBS dengan Kawalan Hayunan Mekanikal", image: "/images/knees/3R62 EBS Knee.jpg" },
      { name: "Sendi dengan Kawalan Hayunan Mekanikal", image: "/images/knees/3R55 3R46 - 1.jpg" },
      { name: "Sendi dengan Kunci", image: "/images/knees/3R17.jpg" },
      { name: "Lutut Polisentric 4 Batang Sambungan (AK/KD)", image: "/images/knees/3R15.jpg" }
    ]
  }
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
          Prostetik Anggota Bawah Care In Malaysia | Prosthetic Leg Malaysia |
          ArtaLive
        </title>
        <meta
          name="description"
          content="Get expert Prostetik Anggota Bawah Care in Malaysia. From prosthetic leg above the knee to artificial leg below knee, kaki palsu bawah lutut | ArtaLive offers certified care. Call us for a free consultation today!"
        />
        <link
          rel="canonical"
          href="https://artalive.com.my/prostetik-anggota-bawah"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Prostetik Anggota Bawah Care In Malaysia | Prosthetic Leg Malaysia | ArtaLive"
        />
        <meta
          property="og:description"
          content="Get expert Prostetik Anggota Bawah Care in Malaysia. From prosthetic leg above the knee to artificial leg below knee, kaki palsu bawah lutut | ArtaLive offers certified care. Call us for a free consultation today!"
        />
        <meta
          property="og:url"
          content="https://artalive.com.my/prostetik-anggota-bawah"
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
            "name": "What is a transtibial prosthesis?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "It is a prosthetic limb designed for individuals with amputations below the knee."
            }
          },
          {
            "@type": "Question",
            "name": "How long does it take to make a transtibial prosthesis?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Typically 2 to 4 weeks, depending on the clinical assessment."
            }
          },
          {
            "@type": "Question",
            "name": "Can it be used for daily activities?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, transtibial prostheses are made for everyday mobility and active use."
            }
          },
          {
            "@type": "Question",
            "name": "What is a transfemoral prosthesis?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "It is a prosthesis designed for those with amputations above the knee."
            }
          },
          {
            "@type": "Question",
            "name": "Is this type of prosthesis more complex?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, it usually involves an artificial knee and higher balance control."
            }
          },
          {
            "@type": "Question",
            "name": "Is it suitable for all age groups?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, with appropriate customization and training."
            }
          },
          {
            "@type": "Question",
            "name": "What types of hand prostheses do you offer?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We offer cosmetic, body-powered, and myoelectric prosthetic options."
            }
          },
          {
            "@type": "Question",
            "name": "Can a prosthetic hand help me return to work?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, many users return to work successfully with the right prosthesis."
            }
          },
          {
            "@type": "Question",
            "name": "Do cosmetic prosthetics look like real hands?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, cosmetic prostheses closely resemble real skin, veins, and fingerprints."
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
          Prostetik Anggota Bawah di Malaysia
        </h1>
        <h2 className="text-mobile  d-lg-none display-2 ">
          Prostetik Anggota Bawah di Malaysia
        </h2>

        <img
          src={lowerprostheticsbanner}
          alt="lower limb prosthetic in malaysia"
          className="img-fluid w-100 h-100 object-fit-cover position-absolute top-0 start-0"
        />
      </div>

      <div className="container-xl px-3 mb-5" data-aos="fade-up">
        <div className="row align-items-center text-center ">
          <div className="col-12">
            <p>
              Artalive menawarkan penyelesaian prostetik anggota bawah yang disesuaikan sepenuhnya mengikut tahap anatomi, gaya hidup dan mobiliti setiap individu. Dengan menggabungkan teknologi terkini dan kepakaran klinikal, kami memastikan setiap prostesis memberikan keselesaan dan prestasi maksimum. Hanya komponen daripada jenama antarabangsa yang dipercayai digunakan untuk memastikan kualiti terbaik. Selain itu, pengguna juga mendapat latihan dan bimbingan daripada pakar prostetik bertauliah untuk memudahkan proses pemasangan. Perkhidmatan pasca pemasangan seperti pelarasan semula dan penyelenggaraan berkala juga disediakan bagi memastikan prostesis sentiasa dalam keadaan optimum.
            </p>
          </div>
        </div>
      </div>

     

       <section className="bg-section-white p-lg-5 p-3" data-aos="fade-up">
      <div className="container-xl my-5">
        <h2 className="display-5 mb-5 text-orange">Prostetik Anggota Bawah</h2>
        <div className="row align-items-stretch">
          {lowerlimbprosthetics.map((item, index) => {
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
                    <p className="service-card-text mb-3">{item.description}</p>
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

      <section className="bg-section p-lg-5 p-3" data-aos="fade-up">
        <div className="container-xl my-5">
          <h2 className="display-5 mb-5 text-orange">
Komponen Kaki Prostetik
          </h2>
          {prostheticFeetCategories.map((cat, i) => (
            <div key={i} style={{ marginBottom: "40px" }} data-aos="fade-up">
              <h2 className="mb-4">{cat.category}</h2>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                  gap: "30px",
                }}
              >
                {cat.products.map((product, j) => (
                  <div key={j} className="service-card" data-aos="fade-up">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="service-card-img"
                    />

                    <div className="service-card-body p-3">
                      <h6 className="service-card-title fs-4 text-black">
                        {product.name}
                      </h6>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

   
      <section className="bg-section p-lg-5 p-3" data-id="prosthetic-knees">
        <div className="container-xl my-5">
          <h2 className="display-5 mb-5 text-orange">
Komponen Lutut Prostetik
          </h2>
          {prostheticKneesCategories.map((cat, i) => (
            <div key={i} style={{ marginBottom: "40px" }} data-aos="fade-up">
              <h2 className="mb-4">{cat.category}</h2>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                  gap: "30px",
                }}
              >
                {cat.products.map((product, j) => (
                  <div key={j} className="service-card" data-aos="fade-up">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="service-card-img"
                    />

                    <div className="service-card-body p-3">
                      <h6 className="service-card-title fs-4 text-black">
                        {product.name}
                      </h6>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <ServiceSection />
      <TestimonialSection />

        <section className="bg-section p-lg-5 p-3" id="faq" data-aos="fade-up">
        <div className="container-xl my-5">
          <h2 className="display-4 mb-5 text-center">
            Soalan Lazim

          </h2>
          <div className="row g-md-5">
            <div className="col-md-6">
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
                      1. Apa itu prostesis transtibial?
                    </button>
                  </h2>
                  <div
                    id="faq-content-1"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist-left"
                  >
                    <div className="accordion-body">
                      Ia adalah prostesis untuk individu yang kehilangan kaki dari bawah lutut.
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
                      2. Berapa lama proses pembuatan prostesis transtibial?
                    </button>
                  </h2>
                  <div
                    id="faq-content-2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist-left"
                  >
                    <div className="accordion-body">
Biasanya antara 2 hingga 4 minggu bergantung kepada penilaian klinikal.                    </div>
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
                      3. Adakah prostesis boleh digunakan untuk aktiviti harian?
                    </button>
                  </h2>
                  <div
                    id="faq-content-3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist-left"
                  >
                    <div className="accordion-body">
                      Ya, prostesis transtibial direka untuk kegunaan harian dan aktiviti ringan hingga aktif.
                    </div>
                  </div>
                </div>

                <div className="accordion-item questions-border">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed fs-5"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-4"
                      aria-expanded="false"
                      aria-controls="faq-content-4"
                    >
                      4. Apa itu prostesis transfemoral?
                    </button>
                  </h2>
                  <div
                    id="faq-content-4"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist-left"
                  >
                    <div className="accordion-body">
                      Ia adalah prostesis untuk individu yang kehilangan kaki dari atas lutut.
                    </div>
                  </div>
                </div>

                 <div className="accordion-item questions-border">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed fs-5"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-5"
                      aria-expanded="false"
                      aria-controls="faq-content-5"
                    >
                      5. Adakah prostesis transfemoral lebih kompleks?
                    </button>
                  </h2>
                  <div
                    id="faq-content-5"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist-left"
                  >
                    <div className="accordion-body">
                      Ya, kerana melibatkan penggantian lutut tiruan dan kawalan imbangan yang lebih tinggi.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="accordion accordion-flush" id="faqlist-right">
                

                <div className="accordion-item questions-border">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed fs-5"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-6"
                      aria-expanded="false"
                      aria-controls="faq-content-6"
                    >
                      6. Adakah prostesis ini sesuai untuk semua peringkat umur?
                    </button>
                  </h2>
                  <div
                    id="faq-content-6"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist-right"
                  >
                    <div className="accordion-body">
                     Ya, tetapi memerlukan penyesuaian dan latihan yang lebih teliti.
                    </div>
                  </div>
                </div>

                <div className="accordion-item questions-border">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed fs-5"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-7"
                      aria-expanded="false"
                      aria-controls="faq-content-7"
                    >
                      7. Apakah jenis prostesis tangan yang ditawarkan?
                    </button>
                  </h2>
                  <div
                    id="faq-content-7"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist-right"
                  >
                    <div className="accordion-body">
Kami tawarkan prostesis kosmetik, body-powered dan myoelectric.                    </div>
                  </div>
                </div>

                <div className="accordion-item questions-border">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed fs-5"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-8"
                      aria-expanded="false"
                      aria-controls="faq-content-8"
                    >
                      8. Bolehkah prostesis ini membantu saya bekerja semula?
                    </button>
                  </h2>
                  <div
                    id="faq-content-8"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist-right"
                  >
                    <div className="accordion-body">
                      Ya, ramai pengguna berjaya kembali bekerja dengan prostesis yang sesuai.
                    </div>
                  </div>
                </div>

                 <div className="accordion-item questions-border">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed fs-5"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-9"
                      aria-expanded="false"
                      aria-controls="faq-content-9"
                    >
                      9. Adakah prostesis tangan kelihatan seperti tangan sebenar?
                    </button>
                  </h2>
                  <div
                    id="faq-content-9"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist-right"
                  >
                    <div className="accordion-body">
                      Ya, prostesis kosmetik direka menyerupai tangan sebenar dengan warna kulit, urat dan tekstur.
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

export default LowerLimbProsthetics;
