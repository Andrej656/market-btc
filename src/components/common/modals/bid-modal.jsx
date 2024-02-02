import React from 'react';

const BidModal = () => {
  return (
    <>
      <div className="bid__modal modal fade" id="bidmodal" tabIndex="-1" 
      aria-labelledby="bidmodal" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="bid__modal-close">
              <button type="button" className="bid__modal-close-btn" data-bs-dismiss="modal" aria-label="Close"><i className="fa-regular fa-xmark"></i></button>
            </div>
            <div className="bid__modal">
              <h3 className="bid__modal-title">Place your bid</h3>
              <p>You are about to place bid on this product</p>

              <div className="bid__modal-form">
                <form action="#">
                  <div className="bid__modal-input">
                    <input type="text" placeholder="Enter your bid" />
                    <span className="bid__modal-price">ETH</span>
                  </div>
                  <div className="bid__modal-info">
                    <p>Your Balance <span>254 ETH</span></p>
                    <p>Service fee <span>10 ETH</span></p>
                    <p>Total <span className="color-theme">264 ETH</span></p>
                  </div>
                  <div className="bid__modal-btn">
                    <button type="submit" className="tp-btn-3">Place bid</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BidModal;