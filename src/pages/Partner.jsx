import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const partner = [
  { src: "/images/partner/1.png", alt: "iFIT Prosthetics" },
  { src: "/images/partner/2.png", alt: "Invent Medical" },
  { src: "/images/partner/3.png", alt: "ISPO (International Society for Prosthetics and Orthotics)" },
  { src: "/images/partner/4.png", alt: "Ugani Prosthetics" },
  { src: "/images/partner/5.png", alt: "MGM Department of Prosthetics & Orthotics" },
  { src: "/images/partner/6.png", alt: "Myomo - My Own Motion" },
];


const partners = [
  { src: "/images/partner/7.png", alt: "Ossur - Life Without Limitations" },
  { src: "/images/partner/8.png", alt: "Ottobock" },
  { src: "/images/partner/9.png", alt: "Regal Prosthetics" },
  { src: "/images/partner/10.png", alt: "University of Malaya" },
  { src: "/images/partner/11.png", alt: "Voxelcare - Online CAD/CAM Systems" },
  { src: "/images/partner/12.png", alt: "UTM - Universiti Teknologi Malaysia" },
];


const Partner = () => {
  return (
    <section className="bg-white p-lg-5 p-3" data-aos="fade-up">
      <div className="container-xl my-5 text-center">
        <h2 className="display-4 mb-5">Rakan Kongsi Dipercayai</h2>

        {/* First Slider: left to right */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={50}
          slidesPerView={"auto"}
          loop={true}
          speed={3000}
          autoplay={{ delay: 0, disableOnInteraction: false }}
          allowTouchMove={true}
          className="mb-4"
          data-aos="fade-up"
        >
          {partner.map((partner, index) => (
            <SwiperSlide key={index} style={{width:"200px"}}>
              <img
                src={partner.src}
                alt={partner.alt}
                className="img-fluid rounded bg-white p-1"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Second Slider: right to left (using reverse direction) */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={50}
          slidesPerView={"auto"}
          loop={true}
          speed={3000}
          autoplay={{
            delay: 0,
            reverseDirection: true,
            disableOnInteraction: false,
          }}
          allowTouchMove={true}
          data-aos="fade-up"
        >
          {partners.map((partner, index) => (
            <SwiperSlide key={`reverse-${index}`} style={{ width: "200px" }}>
              <img
                src={partner.src}
                alt={partner.alt}
                className="img-fluid rounded bg-white p-1"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Partner;
