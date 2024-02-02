import Link from 'next/link';

import useGlobalContext from "../../hooks/use-globalContext";
import FooterWidget from '../common/footer/footer-widget';


const nft_sm_items = [
  { id: 1, user: 'assets/img/nft/user-1.jpg', name: 'CloneX #11070', eth: 0.244 },
  { id: 2, user: 'assets/img/nft/user-2.jpg', name: '@xander_hall...', eth: 0.244 },
  { id: 3, user: 'assets/img/nft/user-3.jpg', name: '#21 The Wonder', eth: 0.244 },
]
const HomeFooterThree = () => {
  const { footerWidget } = useGlobalContext();
  return (
    <>
      <footer>
        <div className="footer__area footer__style-3 footer__gradient">
          <div className="footer__top">
            <div className="footer__top-border pt-85 pb-50">
              <div className="container">
                <div className="row">
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                    <div className="footer__widget footer-col-3-1 mb-50">
                      <div className="footer__logo">
                        <a href="#">
                          <img className="logo-white" src="assets/img/logo/logo.png" alt="" />
                          <img className="logo-black" src="assets/img/logo/logo-black.png" alt="" />
                        </a>
                      </div>
                      <div className="footer__subscribe">
                        <p>Signup for our newsletter to get the latest news in your inbox.</p>
                        <form>
                          <div className="footer__subscribe-form p-relative">
                            <div className="footer__subscribe-input">
                              <input required type="email" placeholder="E-mail" />
                              <i className="fa-light fa-envelopes"></i>
                            </div>
                            <button className="footer__subscribe-input-btn">Subscribe</button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>

                  {footerWidget.map(item => (
                    <div key={item.id} className="col-xxl-2 col-xl-2 col-lg-4 col-md-4 col-sm-6">
                      <div className={`footer__widget footer-col-3-${item.col} mb-50`}>
                        <h3 className="footer__widget-title">Marketplace</h3>
                        <ul>
                          {item.lists.map(list => (
                            <FooterWidget key={list.id} url="/home-3" list={list} />
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}

                  <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-sm-6">
                    <div className="footer__widget footer-col-3-4 mb-50">
                      <h3 className="footer__widget-title">Recent sold out</h3>
                      <div className="nft__sm">
                        {nft_sm_items.map(item => (
                          <div key={item.id} className="nft__sm-item d-flex align-items-center">
                            <div className="nft__sm-thumb mr-15">
                              <Link href={'/product-details'}>
                                <a>
                                  <img src={item.user} alt="" />
                                </a>
                              </Link>
                            </div>
                            <div className="nft__sm-content">
                              <h3 className="nft__sm-title">
                                <Link href={'/product-details'}>
                                  <a>{item.name}</a>
                                </Link>
                              </h3>
                              <div className="nft__sm-revenue d-flex align-items-center">
                                <div className="nft__sm-revenue-icon mr-10">
                                  <i className="fa-brands fa-ethereum"></i>
                                </div>
                                <div className="nft__sm-revenue-text">
                                  <p>{item.eth} ETH</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer__bottom">
            <div className="container">
              <div className="row">
                <div className="col-xxl-6 col-md-6">
                  <div className="footer__copyright">
                    <p>© 2022 <a href="#">Bitakon</a>. All rights reserved.</p>
                  </div>
                </div>
                <div className="col-xxl-6 col-md-6">
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

export default HomeFooterThree;