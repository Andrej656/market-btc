import Link from 'next/link';

import ReportModal from '../common/modals/report-modal';
import ShareModal from '../common/modals/share-modal';
import NiceSelect from '../ui/NiceSelect';

const CreateSingleArea = ({ multiple }) => {

  return (
    <>
      <section className="creator__area">
        <div className="creator__banner include-bg" style={{ background: 'url(assets/img/create/create-bg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}></div>
        <div className="creator__border"></div>
        <div className="container">
          <div className="row">
            <div className="col-xxl-4 col-xl-4 col-lg-4">
              <div className="create__preview mr-70">
                <div className="nft__box theme-bg-dark mb-30 transition-3">
                  <h3 className="create__preview-title">Preview</h3>
                  <div className="nft__box-top d-flex align-items-center justify-content-between">
                    <div className="nft__box-user">
                      <ul>
                        <li>
                          <Link href={'/profile'}>
                            <a>
                              <img src="/assets/img/bid/2/bid-user-1.jpg" alt="" />
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href={'/profile'}>
                            <a>
                              <img src="/assets/img/bid/2/bid-user-2.jpg" alt="" />
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href={'/profile'}>
                            <a>
                              <img src="/assets/img/bid/2/bid-user-3.jpg" alt="" />
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="nft__box-more">
                      <button type="button" className="dropdown-toggle nft-more-btn" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="fa-regular fa-ellipsis"></i>
                      </button>
                      <div className="nft__more-content dropdown-menu dropdown-menu-end">
                        <ul>
                          <li>
                            <button type="button" data-bs-toggle="modal" data-bs-target="#sharemodal">Share</button>
                          </li>
                          <li>
                            <button type="button" data-bs-toggle="modal" data-bs-target="#reportmodal">Report</button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="nft__box-thumb w-img mb-20">
                    <Link href="/product-details">
                      <a>
                        <img src="/assets/img/bid/2/bid-img-1.jpg" alt="" />
                      </a>
                    </Link>
                    <div className="nft__box-popularity">
                      <Link href="/product-details">
                        <a><i className="fa-solid fa-heart"></i> 24</a>
                      </Link>
                    </div>
                  </div>
                  <div className="nft__box-content">
                    <div className="nft__box-content-top d-flex align-items-center justify-content-between">
                      <h3 className="nft__box-title">
                        <Link href="/product-details">
                          <a>Amazing digital art</a>
                        </Link>
                      </h3>
                      <div className="nft__box-trending-icon">
                        <span><i className="fa-brands fa-ethereum"></i></span>
                      </div>
                    </div>
                    <div className="nft__box-info d-flex align-items-center justify-content-between">
                      <div className="nft__box-price">
                        <p>3.54 ETH</p>
                      </div>
                      <div className="nft__box-stock">
                        <p>6 in stock</p>
                      </div>
                    </div>
                  </div>
                  <div className="nft__box-bottom d-flex align-items-center justify-content-between">
                    <div className="nft__box-highest">
                      <p><i className="fa-light fa-code-fork"></i> Highest bid</p>
                    </div>
                    <div className="nft__box-bid">
                      <p>0.001 ETH</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-8 col-xl-8 col-lg-8">
              <div className="create__form pt-55 pb-120">
                <form action="#">
                  <div className="row">
                    <div className="col-xxl-12">
                      <div className="create__nav mb-10">
                        <nav>
                          <div className="nav nav-tabs justify-content-sm-end" id="nav-tab-create" role="tablist">
                            <button className={`nav-link ${multiple ? '' : 'active'}`} id="nav-single-tab" data-bs-toggle="tab" data-bs-target="#nav-single" type="button" role="tab" aria-controls="nav-single" aria-selected="true">Single</button>
                            <button className={`nav-link ${multiple ? 'active' : ''}`} id="nav-multiple-tab" data-bs-toggle="tab" data-bs-target="#nav-multiple" type="button" role="tab" aria-controls="nav-multiple" aria-selected="false">Multiple</button>
                          </div>
                        </nav>
                      </div>
                    </div>
                  </div>
                  <div className="tab-content" id="nav-tabContent">
                    <div className={`tab-pane fade ${multiple ? '' : 'show active'}`} id="nav-single" role="tabpanel" aria-labelledby="nav-single-tab">
                      <CreateInfo />
                    </div>

                    <div className={`tab-pane fade ${multiple ? 'show active' : ''}`} id="nav-multiple" role="tabpanel" aria-labelledby="nav-multiple-tab">
                      <CreateInfo />
                    </div>
                  </div>

                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SHARE MODAL */}
      <ShareModal />
      {/* REPORT MODAL */}
      <ReportModal />
    </>
  );
};

export default CreateSingleArea;



const CreateInfo = () => {
  const selectHandler = e => {

  }
  return (
    <div className="row align-items-center">
      <div className="col-xxl-12">
        <div className="create__input-box">
          <h4>Upload File<span>*</span></h4>
          <p>Add your unique image / video / audio file</p>
        </div>
      </div>
      <div className="col-xxl-12">
        <div className="create__upload text-center">
          <p>JPG, PNG, GIF, WEBP, MP4 or MP3. Max 30mb.</p>
          <label htmlFor='input-file-2'>Select a file</label>
          <input id='input-file-2' type='file' />
        </div>
      </div>
      <div className="col-xxl-12">
        <div className="create__input-box">
          <h4>Name <span>*</span></h4>
          <p>Choose a unique name for your NFT</p>
          <div className="create__input">
            <input type="text" placeholder="Enter the NFT's name" />
          </div>
        </div>
      </div>
      <div className="col-xxl-12">
        <div className="create__input-box">
          <h4>Description</h4>
          <p>Describe your NFT, help other users understand {"what's"} unique about it</p>
          <div className="create__input">
            <textarea placeholder="Enter the NFT's Description"></textarea>
          </div>
        </div>
      </div>
      <div className="col-xxl-12">
        <div className="create__input-box">
          <h4>Properties <span>*</span></h4>
          <p>List attributes that represents your NFT (color, shape, mood, etc..)</p>
          <div className="row">
            <div className="col-md-6">
              <div className="create__input">
                <input type="text" placeholder="Property" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="create__input">
                <input type="text" placeholder="Value" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xxl-12">
        <div className="create__input-box">
          <h4>Collection</h4>
          <p>The collection where your NFT will appear.</p>
          <div className="create__input">
            <NiceSelect
              options={[
                { value: "Select a Collection", text: "Select a Collection" },
                { value: "Collection 1", text: "Collection 1" },
                { value: "Collection 2", text: "Collection 2" },
                { value: "Collection 3", text: "Collection 3" },
                { value: "Collection 4", text: "Collection 4" },
              ]}
              defaultCurrent={0}
              onChange={selectHandler}
              name="Select a Collection"
            />
            <button type="button" className="refresh-btn"><i className="fa-regular fa-arrows-rotate"></i></button>
          </div>
        </div>
      </div>
      <div className="col-xxl-12">
        <div className="create__input-check d-flex align-items-center mb-40">
          <InputCheck id={'m-sale-2'} title={'Put on Sale'} />
          <InputCheck id={'m-price-2'} title={'Instant sale price'} />
          <InputCheck id={'m-lock-2'} title={'Unlock one purchased'} />
        </div>
      </div>
      <div className="col-xxl-12">
        <div className="create__btn">
          <button type="submit" className="tp-btn-3">Create Item</button>
        </div>
      </div>
    </div>
  )
}

const InputCheck = ({ id }) => {
  return (
    <div className="create__input-check-item d-flex align-items-center">
      <input className="m-check-input" type="checkbox" id={id} />
      <label className="m-check-label" htmlFor={id}>Put on Sale</label>
    </div>
  )
}