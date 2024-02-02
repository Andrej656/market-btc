import useGlobalContext from '../../../hooks/use-globalContext';
import FooterWidget from './footer-widget';

const FooterTwo = ({tp_container = true,widget_url,gradient_overlay}) => {
  const {footerWidget} = useGlobalContext();
  return (
    <>
      <footer>
        <div className={`footer__area footer__style-2 
        ${gradient_overlay ? 'footer__gradient footer__overlay' : ''}`}>
          <div className="footer__top">
            <div className={`container ${tp_container ? 'tp-container' : ''}`}>
              <div className="footer__top-border pt-85 pb-50">
                <div className="row">
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6">
                    <div className="footer__widget mb-50 footer-col-2-1">
                      <div className="footer__info">
                        <div className="footer__logo">
                          <a href="#">
                            <img className="logo-white" src="/assets/img/logo/logo.png" alt="" />
                            <img className="logo-black" src="/assets/img/logo/logo-black.png" alt="" />
                          </a>
                        </div>
                        <p>Raroin is a shared liquidity NFT market smart contract which is used by multiple websites to provide the users.</p>

                        <div className="footer__social">
                          <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                          <a href="#"><i className="fa-brands fa-twitter"></i></a>
                          <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                          <a href="#"><i className="fa-brands fa-dribbble"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {
                    footerWidget.map(widget => (
                      <div key={widget.id} className="col-xxl-2 col-xl-2 col-lg-4 col-md-4 col-sm-6">
                        <div className={`footer__widget footer-col-2-${widget.col} mb-50`}>
                          <h3 className="footer__widget-title">{widget.title}</h3>
                          <ul>
                            {widget.lists.map(list => (
                              <FooterWidget key={list.id} url={widget_url} list={list} />
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))
                  }

                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                    <div className="footer__widget footer-col-2-4 mb-50">
                      <h3 className="footer__widget-title">Subscribe</h3>

                      <div className="footer__subscribe">
                        <p>Signup for our newsletter to get the latest news in your inbox.</p>
                        <form>
                          <div className="footer__subscribe-form p-relative">
                            <div className="footer__subscribe-input">
                              <input type="email" placeholder="E-mail" />
                              <i className="fa-light fa-envelopes"></i>
                            </div>
                            <button type='button' className="footer__subscribe-input-btn">Subscribe</button>
                          </div>
                        </form>
                        <p className="info">Your email is safe with us. We do not spam.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer__bottom">
            <div className="container tp-container">
              <div className="row">
                <div className="col-xxl-6 col-sm-6">
                  <div className="footer__copyright">
                    <p>© 2022 <a href="#">Bitakon</a>. All rights reserved.</p>
                  </div>
                </div>
                <div className="col-xxl-6 col-sm-6">
                  <div className="footer__menu text-sm-end">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms & Conditions</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterTwo;