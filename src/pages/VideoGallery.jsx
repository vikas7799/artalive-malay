import React, { useState, useEffect } from "react";

// Full YouTube video URLs and titles
const videoData = [
  { url: "https://youtube.com/shorts/DWZl2aHCWgc", title: "Myopro" },
  { url: "https://www.youtube.com/watch?v=rnM7dPiE-Gk", title: "Myopro" },
  { url: "https://www.youtube.com/shorts/WByvPS71WNg", title: "Above Knee" },
  { url: "https://www.youtube.com/watch?v=y91wIPBQ3wA", title: "Foot Care" },
  { url: "https://www.youtube.com/watch?v=eNXgMtBqNhk", title: "Foot Care" },
  { url: "https://www.youtube.com/watch?v=kWAuBtDRWxk", title: "Spinal" },
  { url: "https://www.youtube.com/watch?v=RU3Pf3GJJNs", title: "Feedback" },
  { url: "https://www.youtube.com/shorts/xykzl8JFEhY", title: "Feedback" },
];

const VideoGallery = () => {
  const [visibleCount, setVisibleCount] = useState(9);
  const [selectedVideoId, setSelectedVideoId] = useState(null);

 const extractIdInline = (url) => {
  const match = url.match(
    /(?:youtube\.com\/(?:watch\?v=|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  );
  return match ? match[1] : "";
};

  const openModal = (url) => {
    const id = extractIdInline(url);
    setSelectedVideoId(id);
    const modal = new window.bootstrap.Modal(
      document.getElementById("videoModal")
    );
    modal.show();
  };

  useEffect(() => {
    const modalEl = document.getElementById("videoModal");
    const handleClose = () => setSelectedVideoId(null);
    modalEl.addEventListener("hidden.bs.modal", handleClose);
    return () => modalEl.removeEventListener("hidden.bs.modal", handleClose);
  }, []);

  const loadMore = () => setVisibleCount((prev) => prev + 9);
  const hasMore = visibleCount < videoData.length;

  return (
    <div className="bg-section p-lg-5 p-3">
      <div className="container-xl my-5">
        <h2 className="text-center display-4 mb-5">Galeri Video</h2>
        <div className="row g-4 justify-content-center">
          {videoData.slice(0, visibleCount).map(({ url, title }, index) => {
            const id = extractIdInline(url);
            return (
              <div
                key={index}
                className="col-sm-6 col-md-4 col-lg-4 video-card animate-fade-in"
              >
                <div
                  className="ratio ratio-16x9 rounded shadow-sm"
                  style={{ cursor: "pointer" }}
                  onClick={() => openModal(url)}
                >
                  <img
                    src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
                    alt={title}
                    loading="lazy"
                    className="img-fluid rounded-2"
                  />
                </div>
                <p className="text-center mt-2 fw-medium">{title}</p>
              </div>
            );
          })}
        </div>

        {hasMore && (
          <div className="text-center mt-4">
            <button className="btn button1" onClick={loadMore}>
              Load More
            </button>
          </div>
        )}
      </div>

      {/* Bootstrap Modal */}
      <div
        className="modal fade"
        id="videoModal"
        tabIndex="-1"
        aria-labelledby="videoModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content bg-dark">
            <div className="modal-header border-0">
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body p-0">
              {selectedVideoId && (
                <div className="ratio ratio-16x9">
                  <iframe
                    src={`https://www.youtube.com/embed/${selectedVideoId}?autoplay=1`}
                    title="YouTube Video"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    referrerPolicy="strict-origin-when-cross-origin"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoGallery;
