import Link from 'next/link';

const collectionData = [
  {
    id: 1,
    tag: 'Crypton',
    smImg: 'assets/img/collection/3/sm/collection-sm-7.jpg',
    bigImg: 'assets/img/collection/3/collection-7.jpg',
    title: 'Generative Art',
    nft: '12.56 NFTs',
    user_img: 'assets/img/collection/3/user/user-1.jpg',
    user_name: '@Crypto Krazie'
  },
  {
    id: 2,
    tag: 'MonoArt',
    smImg: 'assets/img/collection/3/sm/collection-sm-3.jpg',
    bigImg: 'assets/img/collection/3/collection-3.jpg',
    title: 'Mono Art',
    nft: '21.14 NFTs',
    user_img: 'assets/img/collection/3/user/user-2.jpg',
    user_name: '@Mono Art'
  },
  {
    id: 3,
    tag: 'Dreams',
    smImg: 'assets/img/collection/3/sm/collection-sm-9.jpg',
    bigImg: 'assets/img/collection/3/collection-9.jpg',
    title: 'Paper Dreams',
    nft: '12.56 NFTs',
    user_img: 'assets/img/collection/3/user/user-3.jpg',
    user_name: '@Mono Art'
  },
  {
    id: 4,
    tag: 'Travel',
    smImg: 'assets/img/collection/3/sm/collection-sm-10.jpg',
    bigImg: 'assets/img/collection/3/collection-10.jpg',
    title: <>Travel <br /> Without Moving</>,
    nft: '12.56 NFTs',
    user_img: 'assets/img/collection/3/user/user-4.jpg',
    user_name: '@galinadeinega'
  },
  {
    id: 5,
    tag: 'Dinf',
    smImg: 'assets/img/collection/3/sm/collection-sm-11.jpg',
    bigImg: 'assets/img/collection/3/collection-11.jpg',
    title: "Dante's Inferno",
    nft: '12.56 NFTs',
    user_img: 'assets/img/collection/3/user/user-5.jpg',
    user_name: '@Crypto Krazie'
  },
  {
    id: 6,
    tag: 'Streets',
    smImg: 'assets/img/collection/3/sm/collection-sm-5.jpg',
    bigImg: 'assets/img/collection/3/collection-5.jpg',
    title: "The Ineffabl",
    nft: '10.06 NFTs',
    user_img: 'assets/img/collection/3/user/user-6.jpg',
    user_name: '@Crypto Krazie'
  },
]

const FeaturedCollection = () => {
  return (
    <>
      <section className="collection__area pt-55 pb-30">
        <div className="container">
          <div className="section__title-border mb-40">
            <div className="row">
              <div className="col-xxl-6 col-md-6">
                <div className="section__title-wrapper-3">
                  <h3 className="section__title-3">Featured collections</h3>
                </div>
              </div>
              <div className="col-xxl-6 col-md-6">
                <div className="collection__more-3 text-md-end">
                  <Link href={'/collection'}>
                    <a className="tp-btn-border square">View all collections</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            {
              collectionData.map(item => (
                <div key={item.id} className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                  <div className="collection__box p-relative fix mb-30">
                    <div className="collection__box-bg" style={{ background: `url(${item.bigImg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                    <div className="collection__box-top d-flex justify-content-between">
                      <div className="collection__box-tag">
                        <Link href={'/collection'}>
                          <a>{item.tag}</a>
                        </Link>
                      </div>
                      <div className="collection__box-thumb">
                        <img src={item.smImg} alt="" />
                      </div>
                    </div>
                    <div className="collection__box-bottom">
                      <div className="collection__box-info">
                        <h3 className="collection__box-title">
                          <Link href={'/collection'}>
                            <a>{item.title}</a>
                          </Link>
                        </h3>
                        <p>{item.nft} NFTs</p>
                      </div>
                      <div className="collection__box-user d-inline-block">
                        <div className="collection__box-user-inner d-flex align-items-center">
                          <div className="collection__box-user-thumb mr-10">
                            <a href="#">
                              <img src={item.user_img} alt="" />
                            </a>
                          </div>
                          <div className="collection__box-user-content">
                            <h5>
                              <Link href={'/collection'}>
                                <a>{item.user_name}</a>
                              </Link>
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }

          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturedCollection;