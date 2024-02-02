import Link from 'next/link';
import NiceSelect from '../../ui/NiceSelect';

const footerWidget = [
  {
    id: 1,
    col: '2',
    title: 'Marketplace',
    lists: [
      { id: 1, url: '/', text: 'Create A Store' },
      { id: 2, url: '/', text: 'Start Selling' },
      { id: 3, url: '/', text: 'My Account' },
      { id: 4, url: '/', text: 'Job' },
      { id: 5, url: '/', text: 'List a Item' },
    ]
  },
  {
    id: 2,
    col: '3',
    title: 'Community',
    lists: [
      { id: 1, url: '/', text: 'Art' },
      { id: 2, url: '/', text: 'Digital Art' },
      { id: 3, url: '/', text: 'Photography' },
      { id: 4, url: '/', text: 'Games' },
      { id: 5, url: '/', text: 'Music' },
    ]
  },
  {
    id: 3,
    col: '4',
    title: 'Resources',
    lists: [
      { id: 1, url: '/', text: 'Explore NFTs' },
      { id: 2, url: '/', text: 'Platform Status' },
      { id: 3, url: '/', text: 'Help center' },
      { id: 4, url: '/', text: 'Partners' },
      { id: 5, url: '/', text: 'Marketplace' },
    ]
  },
]

const FooterOne = ({bg_color}) => {
  const slectHandler = e => {
    // 
  }
  return (
    <>
      <footer>
        <div className={`footer__area ${bg_color ? bg_color : ''}`}>
          <div className="footer__top">
            <div className="container tp-container">
              <div className="footer__top-border pt-65 pb-40">
                <div className="row">
                  <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-sm-6">
                    <div className="footer__widget mb-50">
                      <div className="footer__info">
                        <div className="footer__logo">
                          <a href="#">
                            <img className="logo-white" src="assets/img/logo/logo.png" alt="" />
                            <img className="logo-black" src="assets/img/logo/logo-black.png" alt="" />
                          </a>
                        </div>
                        <p>Raroin is a shared liquidity NFT market smart contract which is used by multiple websites to provide the users.</p>

                        <div className="footer__social">
                          <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                          <a href="#"><i className="fa-brands fa-twitter"></i></a>
                          <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {
                    footerWidget.map(item => (
                      <div key={item.id} className="col-xxl-2 col-xl-2 col-lg-4 col-md-4 col-sm-6">
                        <div className={`footer__widget footer-col-${item.col} mb-50`}>
                          <h3 className="footer__widget-title">{item.title}</h3>

                          <ul>
                            {item.lists.map(list => (
                              <li key={list.id}><Link href={`${list.url}`}><a>{list.text}</a></Link></li>
                            ))}
                          </ul>

                        </div>
                      </div>
                    ))
                  }


                  <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-sm-6">
                    <div className="footer__widget footer-col-5 mb-50">
                      <h3 className="footer__widget-title">Language</h3>

                      <div className="footer__lang-wrapper">
                        <div className="footer__lang mb-25 footer-select">
                          <NiceSelect
                            options={[
                              { value: "English", text: "English" },
                              { value: "Spanish", text: "Spanish" },
                              { value: "Chines", text: "Chines" },
                              { value: "Portuguese", text: "Portuguese" },
                            ]}
                            defaultCurrent={0}
                            onChange={slectHandler}
                            name="English"
                          />
                        </div>
                        <div className="footer__lang-certificate">
                          <img className="dark" src="assets/img/footer/verifay-dark.png" alt="" />
                          <img className="light" src="assets/img/footer/verifay-light.png" alt="" />
                        </div>
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
                    <p><a href="#">©Bitakon</a>, 2022 All rights reserved.</p>
                  </div>
                </div>
                <div className="col-xxl-6 col-sm-6">
                  <div className="footer__menu text-sm-end">
                    <a href="#">Terms</a>
                    <a href="#">Privacy policy</a>
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

export default FooterOne;