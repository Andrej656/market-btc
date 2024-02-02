import { useState } from "react";
import { motion } from 'framer-motion';
import Link from 'next/link';

import { collectionData } from "../../data/user-collections";
import NiceSelect from "../ui/NiceSelect";

const CollectionArea = () => {
  const [collectionItems, setCollectionItems] = useState(collectionData);
  const [active, setActive] = useState('all');

  const handleCollection = category => {
    setActive(category)
    if (category === 'all') {
      setCollectionItems(collectionData)
    }
    else {
      setCollectionItems(collectionData.filter(item => item.category === category))
    }
  }
  // select Handler
  const selectHandler = e => {
    if (e.value === 'Day 1') {
      setCollectionItems(collectionData)
    }
    if (e.value === 'Day 2') {
      setCollectionItems(collectionData.filter(item => item.day_2))
    }
    if (e.value === 'Day 3') {
      setCollectionItems(collectionData.filter(item => item.day_3))
    }
    if (e.value === 'Day 4') {
      setCollectionItems(collectionData.filter(item => item.day_4))
    }
  }
  return (
    <>
      <section className="collection__area collection__counter include-bg pt-25 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-xxl-6 col-lg-6">
              <div className="collection__select d-sm-flex align-items-center mb-30">
                <div className="section__title-wrapper-2 mr-15">
                  <h3 className="section__title-2">Top collections in</h3>
                </div>
                <div className="collection__select-item">
                  <NiceSelect
                    options={[
                      { value: "Day 1", text: "Day 1" },
                      { value: "Day 2", text: "Day 2" },
                      { value: "Day 3", text: "Day 3" },
                      { value: "Day 4", text: "Day 4" },
                    ]}
                    defaultCurrent={0}
                    onChange={selectHandler}
                    name="Day 1"
                  />
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-lg-6">
              <div className="collection__right d-sm-flex align-items-center justify-content-lg-end">
                <div className="collection__nav">
                  <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                      <button onClick={() => handleCollection('all')}
                        className={`nav-link ${active === 'all' ? 'active' : ''}`} type="button">All</button>
                      <button onClick={() => handleCollection('ethereum')}
                        className={`nav-link ${active === 'ethereum' ? 'active' : ''}`}
                        type="button">Ethereum</button>
                      <button onClick={() => handleCollection('flow')}
                        className={`nav-link ${active === 'flow' ? 'active' : ''}`}
                        type="button">Flow</button>
                    </div>
                  </nav>
                </div>
                <div className="collection__more ml-10">
                  <Link href={'/shop'}>
                    <a className="tp-btn-border">view all</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-12">
              <div className="collection__tab">

                <div className="row">
                  {
                    collectionItems.map(item => (
                      <div key={item.id} className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6">
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
                    ))
                  }

                </div>

              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default CollectionArea;