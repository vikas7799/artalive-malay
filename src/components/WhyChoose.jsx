import React, { useEffect, useRef } from "react";
import why1 from "/images/why1.png";
import why2 from "/images/why2.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./WhyChoose.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./WhyChoose.css";

const WhyChoose = () => {
  const elementRef = useRef(null); // Ref for the container element

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const screenWidth = Math.min(window.innerWidth, 1600);

    const screenHeight = window.outerHeight;

    const render1Position = screenWidth;
    const render2Position = -(screenWidth * 0.59);

    gsap.to(".render1", {
      scrollTrigger: {
        trigger: ".image-render",
        start: "top top",
        end: "50% 50%",
        scrub: true,
        ease: "power1.inOut",
        // markers: true,
      },
      x: render1Position,
      y: `-${screenHeight / 1}px`,
      opacity: 0,
    });

    gsap.to(".render2", {
      scrollTrigger: {
        trigger: ".image-render",
        start: "top top",
        end: "50% 50%",
        scrub: true,

        opacity: 0,
        // markers: true,
        ease: "power1.inOut",
      },
      x: render2Position,
      y: `-${screenHeight / 2.5}px`,
      opacity: 1,
    });
  }, []);

  return (
    <>
      <div
        className="bg-section-white p-lg-5 p-3  d-none d-lg-block whyus " 
        ref={elementRef} data-aos="fade-up" >
        <div className="container-xl">
          <div className="row ">
            <h2 className="display-4 text-center ">Kenapa Pilih Artalive</h2>
            <div className="col-lg-12  image-render">
              <ul className="image-list">
                <li className="render1">
                  <img src={why1} className=" render "  alt="Certified Prosthetic and Orthotic Specialists"/>
                  <div className="row text-list mx-5">
                    <div className="col text1">
                      <h2
                        className="display-5 mb-3"
                        style={{ color: "var(--color-orange)" }}
                      >
                        CPO Berkelayakan
                      </h2>
                      <p className="">
                       Disokong oleh Pakar Prostetik dan Ortotik bertauliah yang berdaftar dengan badan profesional antarabangsa. Setiap penyelesaian direka dengan ketelitian klinikal untuk memastikan keselesaan, fungsi dan sokongan optimum kepada pesakit.


                      </p>
                    </div>
                  </div>
                </li>

                <li className="render2 ">
                  <img src={why2} className=" render img-filter"  alt="GAIT Training"/>
                  <div className="row text-list-second mx-5">
                    <div className="col text2">
                      <h2
                        className="display-5 mb-3"
                        style={{ color: "var(--color-orange)" }}
                      >
                        Latihan GAIT

                      </h2>
                      <p className="pe-2" style={{maxWidth:"90%"}}>
                        Latihan yang diketuai pakar untuk pengguna prostetik, memastikan keselesaan, mobiliti dan fungsi optimum. Sesi yang diperibadikan oleh pakar bertauliah membantu pesakit berjalan dengan yakin dan mendapatkan semula kebebasan melalui pemulihan gaya berjalan yang tepat.


                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className=" d-block d-lg-none bg-section-white p-lg-5 p-3">
        <div className=" container-lg my-5">
          <h2 className="display-4 text-center mb-4 ">Why Choose Artalive</h2>

          <Swiper
            slidesPerView={"1"}
            // spaceBetween={0}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay]}
            className="mySwiper"
            autoplay={{ delay: 10000 }} // Adding autoplay with a delay of 1000ms
            spaceBetween={20}
            loop={true}
          >
            <SwiperSlide>
              <div className="col-12 mx-auto">
                <div className="feature-card ">
                  <img src={why1} className="img-mobile rounded"  alt="Certified Prosthetic and Orthotic Specialists"/>
                  <div className="card-body   text-center">
                    <h4
                      className=" display-5 mb-3"
                      style={{ color: "var(--color-orange)" }}
                    >
                      Qualified CPO
                    </h4>
                    <p>
                      Supported by Certified Prosthetic and Orthotic Specialists
                      registered with international professional bodies. Each
                      solution is designed with clinical precision to ensure
                      optimal comfort, function and support for the patient.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="col-12 mx-auto">
                <div className="  feature-card ">
                  <img src={why2} className="rounded img-mobile img-filter"  alt="GAIT Training" />
                  <div className="card-body   text-center">
                    <h4
                      className=" display-5 mb-3"
                      style={{ color: "var(--color-orange)" }}
                    >
                      GAIT Training
                    </h4>

                    <p className="">
                      Expert-led training for prosthetic users, ensuring optimal
                      comfort, mobility, and function. Personalized sessions by
                      certified specialists help patients walk confidently and
                      regain independence through precise gait rehabilitation.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default WhyChoose;
