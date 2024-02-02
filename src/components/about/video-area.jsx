import useGlobalContext from '../../hooks/use-globalContext';
import VideoModal from '../common/modals/video-modal';

const VideoArea = () => {
  const { videoShow, handleVideoShow,handleVideoClose } = useGlobalContext()
  return (
    <>
      <section className="video__area pb-110">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="video__content">
                <div className="video__thumb w-img">
                  <img src="assets/img/video/video-bg.jpg" alt="" />
                  <div className="video__play">
                    <button onClick={handleVideoShow} className="video__play-btn popup-video">
                      <i className="fa-solid fa-play"></i></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* video modal start */}
      <VideoModal videoShow={videoShow} handleVideoShow={handleVideoShow} 
      handleVideoClose={handleVideoClose} videoId="6WQCJx_vEX4" />
      {/* video modal end */}
    </>
  );
};

export default VideoArea;