import Link from 'next/link';

const CtaArea = () => {
  return (
    <>
      <section className="cta__area p-relative z-index-1">
        <div className="container">
          <div className="cta__wrapper-2 p-relative">
            <div className="cta__shape">
              <img className="cta__shape-1" src="/assets/img/cta/2/cta-shape-1.png" alt="" />
              <img className="cta__shape-2" src="/assets/img/cta/2/cta-shape-2.png" alt="" />
              <img className="cta__shape-3" src="/assets/img/cta/2/cta-shape-3.png" alt="" />
            </div>
            <div className="row align-items-center">
              <div className="col-xxl-6 col-lg-6">
                <div className="cta__thumb-2">
                  <img src="assets/img/cta/2/cta-graph.png" alt="" />
                </div>
              </div>
              <div className="col-xxl-6 col-lg-6">
                <div className="cta__content-2">
                  <h3>Explore and discover Top trending NFTs</h3>
                  <p>Raroin is a shared liquidity NFT market smart contract which is used by multiple websites to provide the users.</p>
                  <Link href={'/create-single'}>
                    <a className="tp-btn-gradient active">upload work</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CtaArea;