import Link from 'next/link';

import { collectionData } from '../../data/user-collections';

const CreatorListArea = () => {
   return (
      <>
         <section className="creator__list collection__counter pt-120 pb-120">
            <div className="container">
               <div className="row">
                  {collectionData.map((item, index) => (
                     <div key={index} className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6">
                        <div className="collection__list d-flex align-items-center mb-20 transition-3">
                           <div className="collection__list-thumb collection__list-rank mr-20">
                              <Link href={'/profile'}>
                                 <a>
                                    <img src={item.img} alt="" />
                                 </a>
                              </Link>
                           </div>
                           <div className="collection__list-content">
                              <h3 className="collection__list-title">
                                 <Link href={'/profile'}>
                                    <a>{item.title}</a>
                                 </Link>
                              </h3>
                              <div className="collection__list-revenue d-flex align-items-center">
                                 <div className="collection__list-revenue-icon mr-5">
                                    <span>
                                       <i className="fa-brands fa-ethereum"></i>
                                    </span>
                                 </div>
                                 <div className="collection__list-revenue-text">
                                    <p><span>{item.eth}</span> ETH</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  ))}

                  <div className="col-xxl-12">
                     <div className="nft__more text-center mt-20">
                        <Link href={'/shop'}>
                           <a className="tp-load-more"><i className="fa-light fa-arrow-rotate-right"></i>View all Creators</a>
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default CreatorListArea;