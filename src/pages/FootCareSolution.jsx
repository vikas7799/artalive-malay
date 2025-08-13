import React, { useEffect } from "react";
import ServiceSection from "../components/ServiceSection";
import Faq from "../components/Faq";
import TestimonialSection from "../components/TestimonialSection";
import ContactSection from "../components/ContactSection";
import "./LowerLimbProsthetics.css";
import footcaresolution from "/images/footcare/footcare.webp";
import EVATrico from "/images/footcare/EVA Trico.jpg";
import EVADuo from "/images/footcare/EVA Duo.jpg";
import EVACombi from "/images/footcare/EVA Combi.jpg";
import EVOMono from "/images/footcare/EVO Mono.jpg";
import EVAHybrid from "/images/footcare/EVA Hybrid.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import TopRightButton from "./TopRightButton";
import { Helmet } from "react-helmet";
const FootCareSolution = () => {
  const footCareSolution = [
  {
    title: "EVA Trico",
    description:
      "Blok EVA Trico mempunyai lapisan atas yang menstabilkan, lapisan tengah yang lembut, dan lapisan bawah yang keras dalam tiga susunan dan kombinasi warna berbeza untuk memberikan prestasi serta kecekapan maksimum dalam pelbagai situasi.",
    image: EVATrico,
    whatsappMessage: "Hai, saya ingin bertanya tentang EVA Trico.",
  },
  {
    title: "EVA Duo",
    description:
      "Blok EVA Duo menggabungkan lapisan atas yang menstabilkan dengan lapisan bawah yang lebih keras untuk menyokong kaki dan memanjangkan jangka hayat produk. Dengan tambahan pengerasan MONO, ia ditawarkan dalam pelbagai kombinasi bagi memenuhi keperluan tertentu.",
    image: EVADuo,
    whatsappMessage: "Hai, saya ingin bertanya tentang EVA Duo.",
  },
  {
    title: "EVA Combi",
    description:
      "Blok EVA Combi dibahagikan kepada dua bahagian: ketumpatan sederhana di satu hujung dan lembut di hujung yang lain. Blok jenis ini membantu memberikan kawalan pada bahagian belakang kaki sambil menawarkan sokongan pada bahagian depan kaki.",
    image: EVACombi,
    whatsappMessage: "Hai, saya ingin bertanya tentang EVA Combi.",
  },
  {
    title: "EVO Mono",
    description:
      "Blok MONO EVA menawarkan tahap kekerasan yang sama di seluruh peranti, dari lembut ke sederhana hingga keras. Jenis blok tradisional ini merangkumi pelbagai preskripsi pembuatan ortosis dan tersedia dalam pelbagai saiz, ketebalan, serta warna.",
    image: EVOMono,
    whatsappMessage: "Hai, saya ingin bertanya tentang EVO Mono.",
  },
  {
    title: "EVA Hybrid",
    description:
      "Blok HYBRID EVA direka khas untuk digunakan dengan teknologi hibrid berpaten Voxelcare. Blok ini hadir dalam pelbagai kombinasi MONO atau DUO dengan ketebalan maksimum 14mm. Apabila diubah suai kepada satu bahagian, ia digabungkan dengan cangkerang separa tegar siap guna untuk menghasilkan produk hibrid terbaik dan revolusioner.",
    image: EVAHybrid,
    whatsappMessage: "Hai, saya ingin bertanya tentang EVA Hybrid.",
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
  <title>Foot Care Solutions in Malaysia | Custom Made Insoles in Malaysia by ArtaLive</title>
  <meta
    name="description"
    content="ArtaLive offers expert foot care solutions in Malaysia—custom insoles for flat feet & tapak kaki rata. Book your free consultation with our certified CPO today."
  />
  <link rel="canonical" href="https://artalive.com.my/penyelesaian-penjagaan-kaki" />
  <meta name="robots" content="index, follow" />
  <meta
    property="og:title"
    content="Foot Care Solutions in Malaysia | Custom Made Insoles in Malaysia by ArtaLive"
  />
  <meta
    property="og:description"
    content="ArtaLive offers expert foot care solutions in Malaysia—custom insoles for flat feet & tapak kaki rata. Book your free consultation with our certified CPO today."
  />
  <meta property="og:url" content="https://artalive.com.my/penyelesaian-penjagaan-kaki" />
  <meta property="og:type" content="website" />
</Helmet>


      <TopRightButton label="Soalan Lazim" onClick={scrollToFaq} />

      <div className="container-fluid  bg-section p-0 line m-0">
        <h1 className="text-desktop  d-none d-md-block display-2 ">
Penyelesaian Penjagaan Kaki di Malaysia        </h1>
        <h2 className="text-mobile  d-lg-none display-2 ">
Penyelesaian Penjagaan Kaki di Malaysia        </h2>

        <img
          src={footcaresolution}
          alt="Banner"
          className="img-fluid w-100 h-100 object-fit-cover position-absolute top-0 start-0"
        />
      </div>

      <div className="container-xl px-3 mb-5" data-aos="fade-up">
        <div className="row align-items-center text-center ">
          <div className="col-12">
            <p>
             Kaki memainkan peranan penting dalam membentuk dan menyokong pergerakan
              badan kita. Artalive menawarkan penyelesaian penjagaan kaki yang diperibadikan
              disesuaikan tepat dengan ukuran anda. Menggunakan tiga hala lanjutan
              pengimbasan dan reka bentuk pakar dengan teknologi terkini, utama
              kesilapan dihapuskan. Tambahan pula, teknik pengilangan lanjutan
              mempertingkatkan keberkesanan, menyampaikan buatan tersuai yang sangat cekap
              insoles.
            </p>
          </div>
        </div>
      </div>

      <section className="bg-section-white p-lg-5 p-3" >
        <div className="container-xl my-5">
          <h2 className="display-5 mb-5 text-orange" data-aos="fade-up">Penyelesaian Penjagaan Kaki</h2>
          <div className="row align-items-stretch">
            {footCareSolution.map((item, index) => {
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

export default FootCareSolution;
