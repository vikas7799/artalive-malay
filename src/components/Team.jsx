import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Team.css";

const teamMembers = [
  {
    name: "Sudarsan Swain",
    experience: 14,
    role: "Ketua Pegawai Operasi (COO) – Pakar Prostetik & Ortotik Bertauliah",
    bio: "Sudarsan ialah seorang CPO yang bersemangat dengan lebih 14 tahun pengalaman di India dan Malaysia. Beliau mempunyai sijil antarabangsa dan merupakan ahli OPAI, IAAT, IPA, dan ISPO (Ahli Jawatankuasa Kecil). Beliau menggabungkan teknologi prostetik terkini dengan penjagaan pemulihan untuk memulihkan pergerakan, kebebasan, dan maruah pesakit.",
    focus:
      "Prostetik & Ortotik Anggota Atas dan Bawah, Sistem Mioelektrik & Mikroprosesor, Sistem Soket Cetakan 3D, Laporan Penilaian Prostetik Perubatan-Perundangan dan Perancangan Pemulihan",
    notable:
      "Seorang lelaki muda yang terkena polio dahulunya berjalan dengan postur bongkok dan sokongan lutut seluruh badan, mudah dikenali dari jauh. Selepas dipasang dengan KAFO elektronik, beliau kembali dapat berjalan tegak dan berkeyakinan. Kini beliau berjalan seperti orang biasa, kembali bekerja, dan sudah berkahwin serta mempunyai anak — menjalani kehidupan yang berubah sepenuhnya.",
    quote:
      "Setiap anggota yang kami pulihkan adalah sebuah kehidupan yang kami beri kuasa. Saya percaya dalam menggabungkan empati, bukti, dan inovasi untuk memberikan mobiliti yang bermakna.",
    image: "/images/team/Sudarsan.jpg",
  },
  {
    name: "Thiagarajan A/L M.Sathasivam",
    experience: 2,
    role: "Eksekutif Perjalanan & Penjagaan Pesakit",
    bio: "Membantu orang lain adalah sifat semula jadi saya. Saya suka menjadi sebahagian daripada pasukan yang membantu orang melalui masa sukar. Itulah yang membuatkan saya terus berada dalam bidang ini.",
    focus: "Motivasi",
    notable:
      "Seorang pesakit muda pernah memberitahu saya bahawa dia takut tidak dapat bermain bola sepak lagi selepas kehilangan kakinya. Tetapi selepas mendapat prostetik dan menjalani latihan, dia perlahan-lahan menjadi aktif semula. Melihat dia kembali berlari di padang membuatkan saya berasa sangat bangga.",
    quote: "Setiap tindakan kecil dalam penjagaan memberi kesan yang besar.",
    image: "/images/team/Thiagarajan.jpg",
  },
  {
    name: "Norhayati Binti Mohd Yusof",
    experience: 1,
    role: "Eksekutif Pentadbiran & Sokongan Klinikal",
    bio: "Walaupun saya datang daripada latar belakang yang berbeza, bekerja dalam bidang ini merupakan pengalaman yang benar-benar bermakna. Lama-kelamaan, saya semakin menghargai impak prostetik dalam kehidupan seseorang. Menjadi sebahagian daripada pasukan yang membantu orang lain mendapatkan semula mobiliti dan keyakinan adalah sesuatu yang membuatkan saya bersemangat dan bermotivasi untuk memberikan yang terbaik setiap hari.",
    // focus: "Penjagaan dan Sokongan Pesakit",
    notable:
      "Seperti yang anda tahu, ini bukan latar belakang saya. Apabila saya mula menyertai syarikat, terdapat seorang budak lelaki berumur 4 tahun yang dilahirkan dengan kaki kiri yang tidak berkembang dan pendek. Itu adalah kali pertama saya melihat pesakit dalam keadaan seperti itu di dunia nyata — sebelum itu, saya hanya pernah melihat kes seperti itu di media sosial. Apabila dia menerima prostetik sambungan, dia begitu gembira dan dapat berjalan semula. Saya juga berasa sangat gembira melihat detik itu.",
    quote: "Membantu orang lain bukan sekadar tugas — ia adalah satu keistimewaan.",
    image: "/images/team/Norhayati.jpg",
  },
  {
    name: "Fitri Azmy",
    experience: 1,
    role: "Eksekutif Pemasaran & Pendidikan Pesakit",
    bio: "Dengan latar belakang pemasaran dan minat terhadap pemerkasaan pesakit, saya menghasilkan kandungan yang merapatkan jurang antara penjagaan klinikal dan pemahaman umum. Saya percaya kesedaran adalah langkah pertama ke arah pemulihan dan kebebasan.",
    focus: "Pemasaran digital, kempen kesedaran pesakit, kandungan pendidikan kesihatan",
    notable:
      "Salah satu detik yang paling memuaskan ialah apabila melihat video perjalanan pesakit yang saya hasilkan membantu orang lain mendapat keberanian untuk melangkah pertama dengan prostetik.",
    quote:
      "Setiap kisah yang dikongsi, setiap siaran yang dihasilkan — semuanya menuju ke satu matlamat: membantu seseorang merasa dilihat, disokong, dan penuh harapan.",
    image: "/images/team/Fitri.jpg",
  },
];


const Team = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const openModal = (member) => {
    setSelectedMember(member);
    const modal = new window.bootstrap.Modal(
      document.getElementById("teamModal")
    );
    modal.show();
  };

  useEffect(() => {
    const modalEl = document.getElementById("teamModal");
    const handleClose = () => setSelectedMember(null);
    modalEl.addEventListener("hidden.bs.modal", handleClose);
    return () => modalEl.removeEventListener("hidden.bs.modal", handleClose);
  }, []);

  return (
    <div className="bg-section-white p-lg-5 p-3" >
      <div className="container-xl my-5">
        <h2 className="display-4 text-center mb-5" data-aos="fade-up">Temui Pasukan Kami</h2>
        <div className="row g-4">
          {teamMembers.map((member, index) => (
            <div className="col-md-6 col-lg-3 mb-4" key={index} data-aos="fade-up">
              <div className="team-card h-100 shadow-sm d-flex flex-column">
                <img
                  src={member.image}
                  className="team-img-top"
                  alt={member.name}
                />
                <div className="team-body p-3 d-flex flex-column ">
                  <h4
                    className="team-title mb-3"
                    style={{ color: "var(--color-orange)" }}
                  >
                    {member.name}
                  </h4>
                  <h5
                    className="team-role mb-3"
                    style={{ color: "var(--color-black)" }}
                  >
                    {member.role}
                  </h5>
                  <h6 className="  mb-3 text-dark">
                    {member.experience} Bertahun Pengalaman
                  </h6>
                  <p className=" mb-3">❝ {member.quote} ❞</p>
                  <button
                    className="btn button3 "
                    onClick={() => openModal(member)}
                  >
                    Baca Lagi

                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bootstrap Modal */}
      <div
        className="modal fade"
        id="teamModal"
        tabIndex="-1"
        aria-hidden="true"
        aria-labelledby="teamModalLabel"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            {selectedMember && (
              <>
                <div className="modal-header border-0">
                  <h5 className="modal-title fs-1" id="teamModalLabel">
                    {selectedMember.name}
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <div className="row">
                    <div className="col-md-4 text-center mb-3 mb-md-0">
                      <img
                        src={selectedMember.image}
                        alt={selectedMember.name}
                        className="img-fluid rounded shadow"
                      />
                    </div>
                    <div className="col-md-8">
                      {/* <h6 className="text-muted">{selectedMember.role}</h6> */}
                      {/* <p>
                        <strong>Experience:</strong> {selectedMember.experience}{" "}
                        Years
                      </p> */}
                      {/* <p>
                        <strong>Quote:</strong>{" "}
                        <em>"{selectedMember.quote}"</em>
                      </p> */}
                      <p>
                        <strong>Full Bio: </strong>
                        {selectedMember.bio}
                      </p>
                      <p>
                        <strong>Notable Experience: </strong>
                        {selectedMember.notable}
                      </p>
                      {selectedMember.focus && (
                        <p>
                          <strong>Area of specialisation / Focus: </strong>
                          {selectedMember.focus}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
