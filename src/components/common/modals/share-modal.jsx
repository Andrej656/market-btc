import React from 'react';

const ShareModal = () => {
  return (
    <>
      <div className="share__modal modal fade" id="sharemodal" tabIndex="-1" aria-labelledby="sharemodal" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="share__modal-content text-center">
              <div className="share__nft-content">
                <div className="share__thumb">
                  <img src="/assets/img/bid/bid-img-1.jpg" alt="" />
                </div>

              </div>
              <div className="share__social">
                <h3>Share this NFT</h3>
                <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                <a href="#"><i className="fa-brands fa-twitter"></i></a>
                <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                <a href="#"><i className="fa-brands fa-instagram"></i></a>
                <a href="#"><i className="fa-brands fa-youtube"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShareModal;