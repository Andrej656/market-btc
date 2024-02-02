import Link from 'next/link';

const walletData = [
  {
    firstTag: 'popular',
    icon: 'assets/img/icon/wallet/metamask.png',
    title: 'Metamask'
  },
  {
    icon: 'assets/img/icon/wallet/coinbase.png',
    title: 'Coinbase Wallet',
    bg: 'wallet-blue-bg'
  },
  {
    icon: 'assets/img/icon/wallet/wallet.png',
    title: 'Wallet Connect',
    bg: 'wallet-cyan-bg'
  },
  {
    icon: 'assets/img/icon/wallet/bitski.png',
    title: 'Bitski',
    bg: 'wallet-red-bg'
  },
  {
    icon: 'assets/img/icon/wallet/formatic.png',
    title: 'Fortmatic',
    bg: 'wallet-purple-bg'
  },
  {
    icon: 'assets/img/icon/wallet/authereum.png',
    title: 'Authereum',
    bg: 'wallet-orange-bg'
  },
  {
    icon: 'assets/img/icon/wallet/torus.png',
    title: 'Torus',
    bg: 'wallet-navy-bg'
  }
]
const WalletArea = () => {
  return (
    <>
      <section className="wallet__area pt-95 pb-90 p-relative z-index-2">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-6">
              <div className="wallet__des text-center">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis.</p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            {walletData.map((item,index) => (
            <div key={index} className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <div className={`wallet__item ${item.bg ? item.bg : ''} mb-30`}>
                <div className="wallet__item-fix">
                  {item.firstTag && <span className="wallet__popular">popular</span>}
                  <div className="wallet__item-inner text-center">
                    <div className="wallet__icon mb-20">
                      <img src={item.icon} alt="" />
                    </div>
                    <div className="wallet__content">
                      <h3 className="wallet__title">
                        <Link href="/profile">
                          <a >{item.title}</a>
                        </Link>
                      </h3> 
                    </div>
                  </div>
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WalletArea;