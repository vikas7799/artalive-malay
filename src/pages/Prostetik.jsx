import React, { useEffect } from "react";
import ServiceSection from "../components/ServiceSection";
import ContactSection from "../components/ContactSection";
import Video from "../components/Video";
import logo from "/images/background/lowerpro.webp";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import lowerprosthetics from "/images/background/lowerpro.webp";
import upperprosthetics from "/images/background/upperpro.png";
import specialprosthetics from "/images/specailprosthetics/specailprosthetics.jpg";

import { Link } from "react-router-dom";
import WhyChooseSection from "../components/WhyChooseSection";
import { Helmet } from "react-helmet";

const Prostetik = () => {
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
    Penjagaan Prostetik di Malaysia | Kaki Palsu, Penyelesaian Lengan & Kaki | Artalive
  </title>
  <meta
    name="description"
    content="Terokai penjagaan prostetik profesional Artalive di Malaysia. Dapatkan kaki palsu, lengan & kaki prostetik dengan keselesaan dan mobiliti terbaik. Tempah konsultasi percuma hari ini!"
  />
  <link rel="canonical" href="https://artalive.com.my/my/prostetik" />
  <meta name="robots" content="index, follow" />
  <meta
    property="og:title"
    content="Penjagaan Prostetik di Malaysia | Kaki Palsu, Penyelesaian Lengan & Kaki | Artalive"
  />
  <meta
    property="og:description"
    content="Terokai penjagaan prostetik profesional Artalive di Malaysia. Dapatkan kaki palsu, lengan & kaki prostetik dengan keselesaan dan mobiliti terbaik. Tempah konsultasi percuma hari ini!"
  />
  <meta property="og:url" content="https://artalive.com.my/my/prostetik" />
  <meta property="og:type" content="website" />
</Helmet>


      <div className="container-fluid  bg-section p-0 line m-0">
        <h1 className="text-desktop  d-none d-md-block display-2 ">
Penjagaan Prostetik di Malaysia
       </h1>
        <h2 className="text-mobile  d-lg-none display-2 ">Penjagaan Prostetik di Malaysia
 </h2>

        <img
          src={logo}
          alt="Prosthetic Center in Malaysia"
          className="img-fluid w-100 h-100 object-fit-cover position-absolute top-0 start-0"
        />
      </div>

      <div className="container-xl px-3 mb-5" data-aos="fade-up">
        <div className="row align-items-center text-center ">
          <div className="col-12">
            <p className="fs-6">
              Kami menawarkan penjagaan prostetik hujung ke hujung di Malaysia untuk orang yang diamputasi. Ini (mungkin)* termasuk kaunseling dan penilaian pra-amputasi, serta pemasangan prostetik segera selepas pembedahan. Kami menyediakan penilaian di tapak, reka bentuk dan pemasangan untuk pesakit dari semua bentuk, saiz, umur dan pelbagai peringkat amputasi.
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
              <h2 className=" mb-4 display-5">Prostetik Anggota Bawah</h2>
              <p className="">
                Prostetik anggota bawah, merujuk kepada prostetik yang menggantikan mana-mana
                bahagian anggota bawah, untuk memulihkan fungsi dan/atau
                tujuan kosmetik anggota bawah. Ini mungkin termasuk tiruan
                komponen yang menggantikan pinggul, paha, lutut, buku lali dan kaki.
              </p>
              <Link
                type="button"
                className=" btn button1"
                to="/prostetik-anggota-bawah"
              >
                Prostetik Anggota Bawah
              </Link>
            </div>
            <div className="col-lg-6" data-aos="fade-up">
              <img
                src={lowerprosthetics}
                className="img-mobile rounded "
                style={{ height: "300px" }}
              ></img>
            </div>
          </div>

          <div
            className="row flex-row-reverse
  align-items-start  fade-in g-5  mb-5"
          >
            <div className="col-lg-6 " data-aos="fade-up">
              <h2 className=" mb-4 display-5">Prostetik Anggota Atas</h2>
              <p className="">
                Prostesis adalah rawatan utama untuk hilang upaya akibat amputasi untuk memulihkan kebebasan berfungsi dan meningkatkan kualiti hidup. Punca yang paling biasa ialah trauma & trauma industri, komplikasi vaskular penyakit, dan kanser. Amputasi anggota atas boleh berlaku pada paras anterior (interscapulothoracic), bahu, trans-humeral, siku, trans-radial, pergelangan tangan, trans-scarpal, trans-metacarpal, dan trans-phalangeal.
              </p>
              <Link
                type="button"
                className=" btn button1"
                to="/prostetik-anggota-atas"
              >
                Prostetik Anggota Atas
              </Link>
            </div>
            <div className="col-lg-6" data-aos="fade-up">
              <img
                src={upperprosthetics}
                className="img-mobile  rounded"
                style={{ height: "300px" }}
              ></img>
            </div>
          </div>

          <div className="row align-items-start g-5 mb-5 fade-in ">
            <div className="col-lg-6" data-aos="fade-up">
              <h2 className=" mb-4 display-5">Prostetik Khas</h2>
              <p className="">
                Perkhidmatan Prostetik Khusus kami merangkumi penyelesaian komprehensif untuk anggota atas dan bawah, termasuk prostesis tangan, lengan, kaki dan paha. Direka untuk menggantikan bahagian badan yang hilang akibat amputasi pada mana-mana peringkat—sama ada jari, pergelangan tangan, siku, bahu, lutut atau pinggul—setiap prostesis disesuaikan mengikut keperluan anatomi dan fungsi pengguna.
              </p>
              <Link
                type="button"
                className=" btn button1"
                to="/prostetik-khas"
              >
                Prostetik Khas
              </Link>
            </div>
            <div className="col-lg-6" data-aos="fade-up">
              <img
                src={specialprosthetics}
                className="img-mobile rounded"
                style={{
                  height: "300px",
                  objectPosition: "top",
                  objectFit: "cover",
                }}
                alt="Prostetik Khas"
              />
            </div>
          </div>
        </div>
      </div>

      <ContactSection />
    </>
  );
};

export default Prostetik;
