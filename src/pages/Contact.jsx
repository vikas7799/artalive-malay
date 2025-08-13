import React from "react";
import ContactSection from "../components/ContactSection";
import { Helmet } from "react-helmet";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Hubungi Kami - Pusat Prostetik & Ortotik di Malaysia</title>
        <meta
          name="description"
          content="Hubungi Artalive untuk konsultasi percuma dengan pakar prostetik & ortotik bertauliah (CPO). Dapatkan panduan profesional—hubungi sekarang atau tempah janji temu anda secara dalam talian!"
        />
        <link rel="canonical" href="https://artalive.com.my/my/hubungi-kami" />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Hubungi Kami - Pusat Prostetik & Ortotik di Malaysia"
        />
        <meta
          property="og:description"
          content="Hubungi Artalive untuk konsultasi percuma dengan pakar prostetik & ortotik bertauliah (CPO). Dapatkan panduan profesional—hubungi sekarang atau tempah janji temu anda secara dalam talian!"
        />
        <meta
          property="og:url"
          content="https://artalive.com.my/my/hubungi-kami"
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <ContactSection />

      <div className="bg-section p-lg-5 p-3 " data-aos="fade-up">
        <div className="container-xl  my-5">
          <div className="row align-items-center ">
            <div className="col-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3605.031262215142!2d101.69383687447043!3d3.1762521529864784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc49b62d003ff1%3A0x273e19c7d665e3a9!2sArtalive%20Sdn%20Bhd%20-%20Pusat%20Kaki%20Palsu%2C%20Prosthetic%20Limb%2C%20Artificial%20Limb%2C%20Malaysia.!5e1!3m2!1sen!2sin!4v1750756061338!5m2!1sen!2sin"
                width="100%"
                height="600"
                style={{ border: "0", borderRadius: "16px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
