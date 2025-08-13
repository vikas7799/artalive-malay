import React from "react";

const partners = [
  { src: "/images/partner/1.png" },
  { src: "/images/partner/2.png" },
  { src: "/images/partner/3.png" },
  { src: "/images/partner/4.png" },
  { src: "/images/partner/5.png" },
  { src: "/images/partner/6.png" },
  { src: "/images/partner/7.png" },
  { src: "/images/partner/8.png" },
  { src: "/images/partner/9.png" },
  { src: "/images/partner/10.png" },
  { src: "/images/partner/11.png" },
  { src: "/images/partner/12.png" },
];

const PartnerGrid = () => {
  return (
    <section className="bg-white py-5" data-aos="fade-up">
      <div className="container text-center">
        <h2 className="display-4 mb-5">Rakan Kongsi Dipercayai</h2>
        <div className="row justify-content-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="col-6 col-sm-4 col-md-3 col-lg-3 mb-4 d-flex align-items-center justify-content-center" data-aos="fade-up"
            >
              <img
                src={partner.src}
                alt={`Partner ${index + 1}`}
                className="img-fluid rounded bg-white p-2"
                            />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerGrid;
