import { Modal } from "react-bootstrap";

const VideoModal = ({ videoShow, handleVideoClose,videoId = "oMhby921Ux4" }) => {
  return (
    <>
      <Modal className="video_modal" show={videoShow} onHide={handleVideoClose} centered>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div>
            <div className="video-modal-wrapper">
              <p>
              <iframe src={`https://www.youtube.com/embed/${videoId}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </p>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default VideoModal;