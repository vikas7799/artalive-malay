import React from "react";
import whyus from "/images/whychoose.jpg";
import w1 from "/images/whyus/24-hour-service.png";
import w2 from "/images/whyus/doctor.png";
import w3 from "/images/whyus/medical-report.png";
import w4 from "/images/whyus/medical-staff.png";
import w5 from "/images/whyus/nursing-room.png";
import w6 from "/images/whyus/shield.png";

const highlights = [
  {
    icon: w2,
    alt: "Pengendalian oleh Pakar Klinikal Bertauliah",
    title: "Pengendalian oleh Pakar Klinikal Bertauliah",
    desc: "Rawatan anda akan dikendalikan oleh pakar prostetik dan ortotik yang diiktiraf serta berpengalaman, memastikan tahap penjagaan yang terbaik.",
  },
  {
    icon: w3,
    alt: "Waranti Kelengkapan 6 Bulan",
    title: "Waranti Kelengkapan 6 Bulan",
    desc: "Sebarang isu berkaitan pemasangan akan dibincangkan dalam tempoh 6 bulan pertama untuk ketenangan fikiran anda. (*Tertakluk kepada Terma & Syarat)",
  },
  {
    icon: w6,
    alt: "Jaminan Pecah Soket Selama 5 Tahun",
    title: "Jaminan Pecah Soket Selama 5 Tahun",
    desc: "Komponen penyesuai tersuai kami dilindungi oleh jaminan 5 tahun untuk memastikan prestasi jangka panjang. (*Tertakluk kepada Terma & Syarat)",
  },
  {
    icon: w5,
    alt: "Latihan GAIT Lanjutan",
    title: "Latihan GAIT Lanjutan",
    desc: "Artalive Malaysia menyediakan senaman berjalan yang disesuaikan untuk membantu anda menyesuaikan diri dengan prostesis anda secara semula jadi dan berkesan.",
  },
  {
    icon: w1,
    alt: "Perkhidmatan Percuma Sepanjang Hayat",
    title: "Perkhidmatan Percuma Sepanjang Hayat",
    desc: "Dapatkan perkhidmatan penyelenggaraan percuma sepanjang hayat prostesis anda. (*Tertakluk kepada Terma & Syarat)",
  },
  {
    icon: w4,
    alt: "Konsultasi Klinikal Percuma",
    title: "Konsultasi Klinikal Percuma",
    desc: "Temu janji klinikal pertama anda adalah percuma, termasuk penilaian dan cadangan rawatan oleh pakar kami.",
  },
];

const WhyChooseSection = () => {
  return (
    <>
      <div className="p-lg-5 p-3 bg-section">
        <div className="container-xl mt-5 ">
          <div className="row align-items-center ">
            <div className="col-lg-6" data-aos="fade-up">
              <h2 className="mb-4 display-4">Kenapa Artalive Malaysia?</h2>
              <p className="">
                Di Artalive, kami menyediakan kepakaran klinikal yang diperakui, jangka panjang
                jaminan perkhidmatan dan pemulihan peribadi untuk memastikan setiap
                pesakit menerima penjagaan yang boleh dipercayai dan penuh belas kasihan — daripada
                perundingan pertama untuk sokongan sepanjang hayat dan keyakinan sepanjang
                perjalanan mereka.
              </p>
            </div>
            <div className="col-lg-6" data-aos="fade-up">
              <img
                src={whyus}
                className="rounded img-fluid "
                height="250px"
                alt="Our Team of Certified Prosthetic & Orthotics Specialist"
              ></img>
            </div>
          </div>

          <div className="row mt-5 aligns-items-start">
            {highlights.map((item, index) => (
              <div className="col-md-4 mb-4" key={index} data-aos="fade-up">
                <div
                  className="  shadow-sm rounded p-3  bg-white"
                  style={{ height: "280px" }}
                >
                  <div className="mb-3 text-white d-inline-flex align-items-center justify-content-center rounded-circle">
                    <img
                      src={item.icon}
                      alt={item.alt}
                      style={{
                        width: "64px",
                        height: "64px",
                      }}
                    ></img>
                  </div>
                  <h5 className="fs-4 mb-3">{item.title}</h5>
                  <p className="" style={{ fontSize: "15px" }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseSection;
