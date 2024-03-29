import React from 'react';

const TermsArea = () => {
  return (
    <>
      <section className="privacy__area pt-110 pb-90 p-relative z-index-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-10">
              <div className="privacy__wrapper">
                <div className="privacy__item">
                  <h3 className="privacy__title">Terms and Conditions</h3>
                  <p>Welcome to Bitakon!</p>
                  <p>By accessing this website we assume you accept these terms and conditions. Do not continue to use Website Name if you do not agree to take all of the terms and conditions stated on this page.</p>
                </div>
                <div className="privacy__item">
                  <h3 className="privacy__title">Cookies</h3>
                  <p>We employ the use of cookies. By accessing Bitakon, you agreed to use cookies in agreement with the Bitakon Privacy Policy.</p>
                  <p>Most interactive websites use cookies to let us retrieve the {"user's"} details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.</p>
                </div>
                <div className="privacy__item">
                  <h3 className="privacy__title">License</h3>
                  <p>Unless otherwise stated, Company Name and/or its licensors own the intellectual property rights for all material on Website Name. All intellectual property rights are reserved. You may access this from Website Name for your own personal use subjected to restrictions set in these terms and conditions.</p>

                  <p>You must not:</p>
                  <ul>
                    <li>Republish material from Website Name</li>
                    <li>Sell, rent or sub-license material from Website Name</li>
                    <li>Reproduce, duplicate or copy material from Website Name</li>
                    <li>Redistribute content from Website Name</li>
                  </ul>
                </div>
                <div className="privacy__item">
                  <h3 className="privacy__title">Disclaimer</h3>
                  <p>To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will:</p>

                  <ul>
                    <li>limit or exclude our or your liability for death or personal injury;</li>
                    <li>limit or exclude our or your liability for fraud or fraudulent misrepresentation;</li>
                    <li>limit any of our or your liabilities in any way that is not permitted under applicable law; or</li>
                    <li>exclude any of our or your liabilities that may not be excluded under applicable law.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsArea;