import React from 'react';

const ReportModal = () => {
  return (
    <>
      <div className="report__modal modal fade" id="reportmodal" tabIndex="-1" 
      aria-labelledby="reportmodal" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="report__close">
              <button type="button" className="report__close-btn" data-bs-dismiss="modal" aria-label="Close"><i className="fa-regular fa-xmark"></i></button>
            </div>
            <div className="report__wrapper">
              <h3 className="report__title">Why are you reporting ?</h3>
              <p>Describe briefly about your report.</p>
              <form action="#">
                <div className="report__input-box">
                  <h4>Message</h4>
                </div>
                <div className="report__input">
                  <textarea placeholder="Write your message"></textarea>
                </div>
                <div className="report__button">
                  <button type="button" className="tp-btn-square">Send </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReportModal;