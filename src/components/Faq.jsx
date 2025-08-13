import React from "react";
import "./Faq.css";
import Faqimage from "/images/faq.jpg";

const Faq = () => {
  return (
    <>
      <section className="bg-section p-lg-5 p-3" id="faq">
        <div className="container-xl my-5">
          <div className="row align-items-center g-5">
            <div className=" col-md-6" data-aos="fade-up">
              <img
                src={Faqimage}
                className="img-fluid rounded"
                alt="certified Prosthetic & Orthotic specialists"
                style={{ objectFit: "cover", height: "400px" }}
                // style={{ height: "100%" }}
              ></img>
            </div>

            <div className=" col-md-6" data-aos="fade-up">
              <h2 className="display-4  mb-4">Soalan Lazim</h2>
              <div className="accordion accordion-flush" id="faqlist">
                <div className="accordion-item questions-border">
                  <h2 className="accordion-header ">
                    <button
                      className="accordion-button collapsed  fs-5"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-1"
                    >
                      1. Siapa yang boleh menggunakan prostetik atau ortotik?
                    </button>
                  </h2>
                  <div
                    id="faq-content-1"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist"
                  >
                    <div className="accordion-body ">
                      Sesiapa yang mengalami kehilangan anggota atau mempunyai masalah pergerakan boleh menggunakan prostetik atau ortotik untuk membantu sokongan dan fungsi harian.
                    </div>
                  </div>
                </div>

                <div className="accordion-item questions-border">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed fs-5 "
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-2"
                    >
                      2. Adakah prostetik dan ortotik disesuaikan ikut individu?
                    </button>
                  </h2>
                  <div
                    id="faq-content-2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist"
                  >
                    <div className="accordion-body ">
                     Ya, semua peranti direka khas mengikut bentuk badan, keperluan dan gaya hidup individu.
                    </div>
                  </div>
                </div>

                <div className="accordion-item questions-border">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed  fs-5"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-3"
                    >
                      3. Berapa lama tempoh penyesuaian dengan prostetik/ortotik?
                    </button>
                  </h2>
                  <div
                    id="faq-content-3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist"
                  >
                    <div className="accordion-body ">
                     Ia berbeza mengikut individu, biasanya beberapa minggu dengan latihan dan bimbingan.
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
                    >
                      4. Perlukah temujanji untuk mendapatkan perkhidmatan?
                    </button>
                  </h2>
                  <div
                    id="faq-content-4"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist"
                  >
                    <div className="accordion-body ">
                  Ya, kami menggalakkan anda buat temujanji untuk pemeriksaan dan penilaian klinikal.
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
                    >
                      5.Adakah perkhidmatan susulan disediakan?
                    </button>
                  </h2>
                  <div
                    id="faq-content-5"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist"
                  >
                    <div className="accordion-body ">
Ya, termasuk pelarasan semula, penyelenggaraan berkala dan sokongan sepanjang penggunaan.                    </div>
                  </div>
                </div>

                <div className="accordion-item questions-border">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed fs-5"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-6"
                    >6. Berapa lama masa diambil untuk peranti siap?  
                    </button>
                  </h2>
                  <div
                    id="faq-content-6"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist"
                  >
                    <div className="accordion-body ">
                      Antara 1 hari hingga 2 minggu, bergantung kepada jenis peranti dan ketersediaan komponen.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
