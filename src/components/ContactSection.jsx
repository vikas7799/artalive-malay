import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ContactSection = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
  });

  const [formErrors, setFormErrors] = useState({
    email: "",
    phone: "",
  });

  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    // Only allow digits in phone field
    if (name === "phone" && !/^[0-9]*$/.test(value)) return;

    setFormData((prev) => ({ ...prev, [name]: value }));

    // Validate on the fly
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let errors = { ...formErrors };

    if (name === "email") {
      errors.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
        ? ""
        : "Alamat E-mel Tidak Sah";
    }

    if (name === "phone") {
      errors.phone = value.length <= 10 ? "" : "Nombor Telefon Tidak Sah";
    }

    setFormErrors(errors);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Final validation
    validateField("email", formData.email);
    validateField("phone", formData.phone);

    if (formErrors.email || formErrors.phone) {
      setSubmitStatus({
        type: "error",
        message: "Please fix the errors above.",
      });
      return;
    }

    try {
      const response = await fetch("https://artalive.com.my/mail.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData).toString(),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus({ type: "success", message: result.message });
        setFormData({ name: "", email: "", phone: "", service: "" });

        // Redirect to thank you page
        setTimeout(() => {
          window.location.href = "/thankyou";
        }, 1000);
      } else {
        setSubmitStatus({ type: "error", message: result.message });
      }
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus({
        type: "error",
        message: "Submission failed. Try again.",
      });
    }
  };

  return (
    <>
      {/* About Us */}
      <div className="bg-section-white p-lg-5 p-3">
        <div className="container-xl my-5">
          <div className="row g-5">
            <div className="col-md-6" data-aos="fade-up">
              <h3 className=" display-4 mb-2">Hubungi</h3>
              <p className="mb-5">Hubungi kami hari ini</p>

              <div className="mb-5">
                <h5 className=" mb-1 fs-4">Hubungi Kami</h5>
                <p className="mb-2">
                  <i className="fa-solid fa-envelope me-2"></i>
                  info@artalive.com.my
                </p>
                <p className="mb-2">
                  <i className="fa-solid fa-phone"></i> +60 3-4032 4273
                </p>
              </div>

              <div className="mb-5">
                <h5 className="mb-1 fs-4">Lawati Kami</h5>
                <p className="mb-2">
                  <a href="https://maps.app.goo.gl/cYKau2NrDE8Lay6J8">
                    <i className="fa-solid fa-location-dot me-2"></i>
                    No 16, Persiaran 65C, Pekeliling Business Centre, Off Jalan
                    Pahang Barat, 53000 Kuala Lumpur, Malaysia
                  </a>
                </p>
              </div>

              <div>
                <h5 className="mb-1 fs-4">Ikuti Kami Di</h5>
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
            </div>

            <div className="col-md-6" id="contact" data-aos="fade-up">
              <div className="row  bg-section p-3 py-4 rounded">
                <form onSubmit={handleSubmit}>
                  <h2 className=" mb-4 display-6">Tempah Konsultasi Percuma</h2>

                  {/* Name */}
                  <div className="my-3">
                    <label htmlFor="name" className="form-label">
                      Nama
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  {/* Email */}
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      E-mel
                    </label>
                    <input
                      type="email"
                      className={`form-control ${
                        formErrors.email ? "is-invalid" : ""
                      }`}
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                    <div className="invalid-feedback">{formErrors.email}</div>
                  </div>

                  {/* Phone */}
                  <div className="mb-3">
                    <label htmlFor="phone" className="form-label">
                      No. Telefon
                    </label>
                    <input
                      type="text"
                      className={`form-control ${
                        formErrors.phone ? "is-invalid" : ""
                      }`}
                      id="phone"
                      name="phone"
                      maxLength="11"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                    <div className="invalid-feedback">{formErrors.phone}</div>
                  </div>

                  {/* Service */}
                  <div className="mb-3">
                    <label htmlFor="service" className="form-label">
                      Perkhidmatan
                    </label>
                    <select
                      className="form-select"
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="" disabled>
                        Pilih Perkhidmatan
                      </option>

                      <option value="Prostetik">Prostetik</option>
                      <option value="Ortotik">Ortotik</option>
                      <option value="Penyelesaian Penjagaan Kaki">
                        Penyelesaian Penjagaan Kaki
                      </option>
                      <option value="Perkhidmatan Perundingan">
                        Perkhidmatan Perundingan
                      </option>
                    </select>
                  </div>

                  <button type="submit" className="button1  my-3">
                    Tempah Janji Temu
                  </button>
                </form>

                {submitStatus && (
                  <div
                    className={`mt-3 alert ${
                      submitStatus.type === "success"
                        ? "alert-success"
                        : "alert-danger"
                    }`}
                  >
                    {submitStatus.message}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactSection;
