import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Aboutus from "./pages/Aboutus";
import LowerLimbProsthetics from "./pages/LowerLimbProsthetics";
import UpperLimbProsthetics from "./pages/UpperLimbProsthetics";
import SpecailProsthetics from "./pages/SpecailProsthetics";
import LowerLimbOrthotics from "./pages/LowerLimbOrthotics";
import UpperLimbOrthotics from "./pages/UpperLimbOrthotics";
import Services from "./pages/Services";
import OrthoticsSpecial from "./pages/OrthoticsSpecial";
import FootCareSolution from "./pages/FootCareSolution";
import Prostetik from "./pages/Prostetik";
import Ortotik from "./pages/Ortotik";
import Myopro from "./pages/Myopro";
import ThreeProsthetics from "./pages/ThreeProsthetics";
import Pediatrics from "./pages/Pediatric";
import LowerLimbBracing from "./pages/LowerLimbBracing";
import ScoliosisBracing from "./pages/Scoliosis Bracing";
import CranialHelmets from "./pages/Cranial Helmets";
import PediatricProsthetics from "./pages/Pediatric Prosthetics";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsofUse";
import ThankYou from "./Thankyou";
import VideoGallery from "./pages/VideoGallery";
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    AOS.init({
      offset: 80,
      delay: 100,
      duration: 800,
      easing: "ease-in-out",
      once: false,
      mirror: true,
      anchorPlacement: "center-center",
    });
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tentang-kami" element={<Aboutus />} />
        <Route path="/hubungi-kami" element={<Contact />} />
        <Route path="/perkhidmatan" element={<Services />} />
        <Route path="/prostetik" element={<Prostetik />} />
        <Route path="/ortotik" element={<Ortotik />} />
        <Route path="/pediatrik" element={<Pediatrics />} />
        <Route path="/thankyou" element={<ThankYou />} />

        <Route
          path="/prostetik-anggota-bawah"
          element={<LowerLimbProsthetics />}
        />
        <Route
          path="/prostetik-anggota-atas"
          element={<UpperLimbProsthetics />}
        />
        <Route path="/prostetik-khas" element={<SpecailProsthetics />} />
        <Route path="/ortotik-anggota-bawah" element={<LowerLimbOrthotics />} />
        <Route path="/ortotik-anggota-atas" element={<UpperLimbOrthotics />} />
        <Route path="/ortotik-khas" element={<OrthoticsSpecial />} />
        <Route path="/penyelesaian-penjagaan-kaki" element={<FootCareSolution />} />
        <Route path="/myopro-orthosis" element={<Myopro />} />
        <Route path="/prostetik-3d" element={<ThreeProsthetics />} />
        <Route path="/pengukuhan-anggota-bawah" element={<LowerLimbBracing />} />
        <Route path="/pendakap-scoliosis" element={<ScoliosisBracing />} />
        <Route path="/topi-keledar-tengkorak" element={<CranialHelmets />} />
        <Route
          path="/pediatrik-prostetik"
          element={<PediatricProsthetics />}
        />
        <Route path="/dasar-privasi" element={<PrivacyPolicy />} />
        <Route path="/terma-dan-syarat" element={<TermsOfUse />} />
        <Route path="/galeri-video" element={<VideoGallery />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
