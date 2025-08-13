import React, { useEffect } from "react";
import ServiceSection from "../components/ServiceSection";
import ContactSection from "../components/ContactSection";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import logo from "/images/cranialhelmets/Cranial Helmets Banner.png";
import lowerlimbbracing from "/images/pediatric/Lower Limb Bracing.jpg";
import scoliosisbracing from "/images/pediatric/Scoliosis Bracing.jpg";
import cranialhelmets from "/images/pediatric/Cranial Helmets.jpg";
import pediatricprosthetics from "/images/pediatric/Pediatric Prosthetics.webp";

import { Link } from "react-router-dom";
import WhyChooseSection from "../components/WhyChooseSection";
import { Helmet } from "react-helmet";

const Pediatrics = () => {
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
          Pediatric Orthotics for Children in Malaysia | Custom Fit Solutions |
          ArtaLive
        </title>
        <meta
          name="description"
          content="ArtaLive offers customized pediatric orthotics to enhance mobility, comfort, and growth. Support your child’s development with expert care. Book a free consultation today!"
        />
        <link rel="canonical" href="https://artalive.com.my/pediatrics" />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Pediatric Orthotics for Children in Malaysia | Custom Fit Solutions | ArtaLive"
        />
        <meta
          property="og:description"
          content="ArtaLive offers customized pediatric orthotics to enhance mobility, comfort, and growth. Support your child’s development with expert care. Book a free consultation today!"
        />
        <meta property="og:url" content="https://artalive.com.my/pediatrics" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="container-fluid  bg-section p-0 line m-0">
        <h1 className="text-desktop  d-none d-md-block display-2 ">
          Pediatrik di Malaysia
        </h1>
        <h2 className="text-mobile  d-lg-none display-2 ">Pediatrik di Malaysia </h2>

        <img
          src={logo}
          alt="Pediatric Orthotics"
          className="img-fluid w-100 h-100 object-fit-cover position-absolute top-0 start-0"
        />
      </div>

      <div className="container-xl px-3 mb-5" data-aos="fade-up">
        <div className="row align-items-center text-center ">
          <div className="col-12">
            <p className="fs-6">
              Di ArtAlive, kami memahami bahawa badan yang semakin meningkat memerlukan penjagaan khas. Pasukan Orthotics Pediatrik kami yang berdedikasi bekerja rapat dengan keluarga dan penyedia penjagaan kesihatan untuk menyampaikan penyelesaian tersuai yang menyokong perkembangan, mobiliti dan keselesaan kanak-kanak.
              <br></br>
              <br></br>
              Daripada menguruskan keadaan kompleks seperti scoliosis kepada memastikan betul
              membentuk tengkorak dan sokongan anggota bawah, ortos pediatrik kami adalah
              direka dengan ketepatan, keselamatan dan pendekatan mesra kanak-kanak. Kami
              menggunakan teknologi dan bahan terkini untuk memastikan setiap peranti adalah
              ringan, tahan lama dan disesuaikan dengan keperluan unik anak anda.
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
              <h2 className=" mb-4 display-5">Pengukuhan Anggota Bawah</h2>
              <p className="">
                Kanak-kanak dengan keadaan neurologi, otot atau ortopedik sering memerlukan sokongan tambahan untuk mencapai matlamat mobiliti mereka. Penyelesaian pendakap anggota bawah kami direka khas untuk memberikan kestabilan, menggalakkan penjajaran sendi yang betul dan menggalakkan pergerakan yang lebih semula jadi. Daripada orthoses pergelangan kaki (AFO) hingga ortosa kaki lutut (KAFO), kami mereka bentuk pendakap yang ringan, tahan lama dan selesa—memperkasakan kanak-kanak untuk berjalan, berdiri dan bermain dengan yakin.
              </p>
              <Link
                type="button"
                className=" btn button1"
                to="/pengukuhan-anggota-bawah
"
              >
                Pengukuhan Anggota Bawah
              </Link>
            </div>
            <div className="col-lg-6" data-aos="fade-up">
              <img
                src={lowerlimbbracing}
                className="img-mobile rounded "
                style={{ height: "300px" }}
                alt="Lower Limb Bracing in malaysia for Children’s Mobility"
              ></img>
            </div>
          </div>

          <div
            className="row flex-row-reverse
  align-items-start  fade-in g-5  mb-5"
          >
            <div className="col-lg-6 " data-aos="fade-up">
              <h2 className=" mb-4 display-5">Pendakap Scoliosis</h2>
              <p className="">
                Scoliosis boleh berkembang semasa tahun pertumbuhan kanak-kanak dan, jika tidak dirawat, boleh berkembang dan menjejaskan kesihatan tulang belakang. Pendakap scoliosis tersuai kami direka dengan teliti agar sesuai dengan lengkung tulang belakang unik anak anda, membantu mencegah kelengkungan selanjutnya dan mengekalkan postur. Dengan bahan moden dan reka bentuk yang anggun, pendakap gigi kami adalah bijak dan selesa, membolehkan kanak-kanak kekal aktif dan terlibat dalam kehidupan seharian mereka.
              </p>
              <Link
                type="button"
                className=" btn button1"
                to="/pendakap-scoliosis

"
              >
                Pendakap Scoliosis
              </Link>
            </div>
            <div className="col-lg-6" data-aos="fade-up">
              <img
                src={scoliosisbracing}
                className="img-mobile  rounded "
                style={{ height: "300px" }}
              ></img>
            </div>
          </div>

          <div className="row align-items-start g-5 mb-5 fade-in ">
            <div className="col-lg-6" data-aos="fade-up">
              <h2 className=" mb-4 display-5">Topi Keledar Tengkorak
</h2>
              <p className="">
                Ketidakteraturan bentuk kepala seperti plagiocephaly adalah perkara biasa pada bayi dan selalunya boleh dibetulkan dengan campur tangan yang lembut. Topi keledar tengkorak kami dipasang khas untuk membimbing pertumbuhan tengkorak bayi anda kepada bentuk yang lebih seimbang dan semula jadi. Ia ringan, bernafas dan direka dengan bahan yang lembut dan mesra kulit—menyediakan rawatan yang berkesan sambil memastikan anak anda selesa dan gembira.
              </p>
              <Link
                type="button"
                className=" btn button1"
                to="/topi-keledar-tengkorak

"
              >
                Topi Keledar Tengkorak

              </Link>
            </div>
            <div className="col-lg-6" data-aos="fade-up">
              <img
                src={cranialhelmets}
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
              <h2 className=" mb-4 display-5">Pediatrik Prostetik</h2>
              <p className="">
                ovative devices support daily life, sports, music, and
                Di Artalive, kami menyediakan prostetik pediatrik tersuai untuk kanak-kanak dengan perbezaan anggota kongenital atau amputasi. Peranti inovatif kami menyokong kehidupan harian, sukan, muzik dan hobi—memperkasakan kanak-kanak untuk bergerak dengan yakin dan berdikari. Kami melampaui fungsi untuk membantu kanak-kanak berkembang maju dalam setiap aspek kehidupan mereka.
              </p>
              <Link
                type="button"
                className=" btn button1"
                to="/pediatrik-prostetik"
              >
                Pediatrik Prostetik
              </Link>
            </div>
            <div className="col-lg-6" data-aos="fade-up">
              <img
                src={pediatricprosthetics}
                className="img-mobile  rounded "
                style={{ height: "300px" }}
              ></img>
            </div>
          </div>
        </div>
      </div>

      <ContactSection />
    </>
  );
};

export default Pediatrics;
