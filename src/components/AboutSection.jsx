import React from "react";
import "./AboutSection.css";
import aboutus from "/images/aboutus.jpg";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <div className="bg-section-white p-lg-5 p-3 ">
      <div className="container-xl  my-5">
        <div className="row align-items-center g-5 ">


          <div className="col-lg-6" data-aos="fade-up">
            <h2 className="mb-4 display-4">Tentang Artalive Malaysia</h2>
            <p className="fs-6">
Di Artalive Malaysia, kami menggabungkan teknologi terkini dan kualiti bertaraf dunia dalam menyediakan perkhidmatan prostetik dan ortotik serta sokongan selepas pemasangan. Pasukan kami terdiri daripada pakar Prostetik & Ortotik yang diperakui secara klinikal, dengan pengalaman yang luas, dan berdaftar dengan badan profesional seperti Persatuan Prostetik dan Orthotik Antarabangsa (ISPO), IAAT, IPA dan Majlis Pemulihan India (RCI).

            </p>

            {/* <h4 className="mb-4 text-black">Lokasi Kami</h4> */}
            <div className="address-list">
              <a className="address-item d-flex align-items-center mb-3" href="https://maps.app.goo.gl/cYKau2NrDE8Lay6J8">
                <i className="fa-solid fa-hospital me-3 fs-4 text-orange"></i>
                <p className="mb-0">
                  No 16, Persiaran 65C, Pekeliling Business Centre, Off Jalan
                  Pahang Barat, 53000 Kuala Lumpur, Malaysia
                </p>
              </a>
              
            </div>

            <div className=" mt-4 d-grid gap-3 d-md-flex">
              <Link
                type="button"
                className="btn button3 "
                to="https://maps.app.goo.gl/S6ganYj4FsKdBVjF9"
              >
                Lihat Lokasi
              </Link>
              <Link type="button" className=" btn button1" to="/tentang-kami">
                Ketahui lebih lanjut
           </Link>
            </div>
          </div>


          <div className="col-lg-6"   data-aos="fade-up">
            <img src={aboutus} alt="Artalive Malaysia-Team comprises of clinically certified Prosthetic & Orthotic specialists, with extensive experience" className="img-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
