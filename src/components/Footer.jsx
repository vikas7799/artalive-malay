import React from "react";
import { Link } from "react-router-dom";
// import { FaFacebookF, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
// import { footerSectionss } from './footerData';
import logo from "/images/logo.png";

import "./Footer.css";
const quicklinks = [
  {
    title: " Pautan Pantas",
    links: [
      { label: "Tentang Kami", href: "/tentang-kami" },
      { label: "Hubungi Kami", href: "/hubungi-kami" },
      { label: "Perkhidmatan", href: "/perkhidmatan" },
      { label: "Galeri Video", href: "/galeri-video" },
      { label: "Dasar Privasi", href: "/dasar-privasi" },
      { label: "Terma dan Syarat", href: "/terma-dan-syarat" }
    ],
  },
];

const solutionlinks = [
  {
    title: "Perkhidmatan",
    links: [
      { label: "Prostetik Anggota Bawah ", href: "/prostetik-anggota-bawah" },
      { label: "Prostetik Anggota Atas", href: "/prostetik-anggota-atas" },
      { label: "Prostetik Khas", href: "/prostetik-khas" },
      { label: "Ortotik Anggota Bawah", href: "/ortotik-anggota-bawah" },
      { label: "Ortotik Anggota Atas", href: "/ortotik-anggota-atas" },
      { label: "Ortotik Khas", href: "/ortotik-khas" },
      {
        label: "Penyelesaian Penjagaan Kaki",
        href: "/penyelesaian-penjagaan-kaki",
      },
      {
        label: "MyoPro Orthosis",
        href: "/myopro-orthosis",
      },
      {
        label: "Prostetik 3D",
        href: "/prostetik-3d",
      },

      {
        label: "Pediatrik",
        href: "/pediatrik",
      },
    ],
  },
];

const Footer = () => {
  return (
    <>
      <footer className=" p-lg-5 p-3 bg-section-charcoal" data-aos="fade-up">
        <div className="container-xl my-5">
          <div className="row align-items-start g-4 mb-5">
            <div className="col-md-3">
              <Link>
                <img
                  src={logo}
               alt="Artalive Sdn Bdn Logo"
                  style={{
                    width: "200px",
                    height: "auto",
                  }}
                  className="mb-3 logo__link img"
                />
              </Link>
              <p className="mb-3">
                 Di Artalive Malaysia, kami menggabungkan teknologi terkini dan
                kualiti bertaraf dunia dalam menyediakan perkhidmatan prostetik
                dan ortotik serta sokongan selepas pemasangan.
              </p>
              <h5 className=" mb-1 mt-3 fs-4">Ikuti Kami Di</h5>
              <div className="d-flex gap-3 fs-4">
                <a href="https://www.facebook.com/artalive.com.my/">
                  <i className="fa-brands fa-facebook text-orange"></i>
                </a>
                <a href="https://www.linkedin.com/company/artalive">
                  <i className="fa-brands fa-linkedin text-orange"></i>
                </a>

                <a href="https://www.instagram.com/artalivemalaysia/">
                  <i className="fa-brands fa-instagram text-orange"></i>
                </a>

                <a href="https://www.youtube.com/@artalivekakipalsu7167">
                  <i className="fa-brands fa-youtube text-orange"></i>
                </a>

                <a href="https://www.tiktok.com/@kakipalsuartalive">
                  <i className="fa-brands fa-tiktok text-orange"></i>
                </a>
              </div>
            </div>

            {quicklinks.map((section, idx) => (
              <div key={idx} className="col-md-3">
                <h5 className=" mb-3 fs-4">{section.title}</h5>
                <ul className="p-0">
                  {section.links.map((link, i) => (
                    <li key={i} style={{ listStyle: "none" }} className="my-3">
                      <Link to={link.href}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {solutionlinks.map((section, idx) => (
              <div key={idx} className="col-md-3">
                <h5 className=" mb-3 fs-4">{section.title}</h5>
                <ul className="p-0">
                  {section.links.map((link, i) => (
                    <li key={i} style={{ listStyle: "none" }} className="my-3">
                      <Link to={link.href} className="text-capitalize">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="col-md-3">
              <h5 className=" mb-3 fs-4">Hubungi Kami</h5>
              <p className="mb-3">+60 3-4032 4273</p>
              <p className="mb-3">info@artalive.com.my</p>
              <p className="mb-3s">
                <a href="https://maps.app.goo.gl/cYKau2NrDE8Lay6J8">
                No 16, Persiaran 65C, Pekeliling Business Centre, Off Jalan
                Pahang Barat, 53000 Kuala Lumpur, Malaysia
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className=" mt-5 text-center ">
          2025 - ARTA LIVE SDN. BHD. (842552-X). All Rights Reserved. Made
          with ❤️ by <a href="https://aduniverse360.com/">Aduniverse360</a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
