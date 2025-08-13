import React from "react";
import "./TestimonialSection.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "bootstrap/dist/css/bootstrap.min.css";

// Sample avatars (you can replace with real URLs or import images)
const testimonials = [
  {
    name: "Kenny Lee",
    text: "Very good service and attention to detail. State of the art facilities and test to diagnose your foot before suggesting treatment methods.",
  },
  {
    name: "Thiagarajan Sathasivam",
    text: "A very friendly environment for amputees and disabled, with ramps and other facilities specifically designed for the disabled & top notch prosthetics and orthotics services provided by the team here.",
  },
  {
    name: "Selpingos",
    text: "People were very helpful and very knowledgeable. Great to know we have a facility with such professionals here. Thanks ArtaLive",
  },
  {
    name: "Bhagirath Jana",
    text: "Best Clinic in Malaysia for Prosthetic and Orthotic Devices. High end products fitted by Certified Prosthetist and Orthotist",
  },
  {
    name: "Murthy Gopal",
    text: "Thank you so much for such a great service. Our son have been using Artalive insole for more than 5 years. His foot arch have improved a lot over the years.",
  },
  {
    name: "Asty Kitts",
    text: "Came here to get my son a custom insoles and AFO for his flat feet. Good service.",
  },
  {
    name: "Arevinthran Nallasamy",
    text: "Good services and friendly staff. Highly recommended place for prosthetics. Mr. Thiaga, Ms.Rubi, Mr. Sutharsan, Mr. Swastik and others very helpful. 💯",
  },

  {
    name: "Amanina Mutalip",
    text: "Very friendly and welcoming staff.. explanation is very comprehensive and detail.. Will definitely recommend to other people.",
  },

  {
    name: "Chan Paru",
    text: "Good service and fast reply by Ms rubi, very friendly and also given very good and clear explanation by Mr.thiaga ;truly happy with the service provided by Mr.Swasti& Mr. Sudarsan. Thank you Artalive❤️",
  },

  {
    name: "Yuganes Yuga",
    text: "Highly recommended for prothesis. A very friendly environment and good explanations was given.Thank you for the explanations that has given to us.",
  },

  {
    name: "Sugeshini Rama",
    text: "Friendly staffs, good customer service, uses the latest technology for foot care.",
  },

  {
    name: "Asty Kitts",
    text: "Came here to get my son a custom insoles and AFO for his flat feet. Good service.",
  },
];

const TestimonialSection = () => {
  return (
    <section className="bg-section-white p-lg-5 p-3" data-aos="fade-up">
      <div className="container-xl my-5 text-center">
        <h2 className="display-4 mb-5">Apa Kata Orang Tentang Artalive</h2>

        <div className="container-xl d-none d-md-block">
          <Swiper
            spaceBetween={20}
            slidesPerView={3}
            modules={[Pagination, Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="testimonial-card p-4 mx-2  h-100">
                  <span className="quote-icon">❝</span>
                  {/* <img
                    src={item.image}
                    alt={item.name}
                    className="testimonial-img mb-3"
                  /> */}
                  <h5 className="testimonial-name fs-4">{item.name}</h5>
                  <p className="testimonial-text">{item.text}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="custom-swiper-pagination mt-4"></div>
        </div>

        {/* Swiper for mobile view */}

        <div className="d-md-none">
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            modules={[Pagination, Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="testimonial-card p-4 mx-2">
                  <span className="quote-icon">❝</span>
                  {/* <img
                    src={item.image}
                    alt={item.name}
                    className="testimonial-img mb-3"
                  /> */}
                  <h5 className="testimonial-name fs-4">{item.name}</h5>
                  <p className="testimonial-text">{item.text}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
