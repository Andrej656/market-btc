import Link from 'next/link';

import blogs from "../../data/blogs";

const BlogArea = () => {
  return (
    <>
      <section className="blog__area pb-100">
        <div className="container">
          <div className="section__title-border mb-50">
            <div className="row">
              <div className="col-xxl-6 col-lg-6">
                <div className="section__title-wrapper-2 mr-15">
                  <h3 className="section__title-2">Blogs on NFT market</h3>
                </div>
              </div>
              <div className="col-xxl-6 col-lg-6">
                <div className="blog__more text-lg-end">
                  <Link href={'/blog'}>
                    <a className="tp-btn-border">View all Blog</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            {
              blogs.slice(0, 2).map(item => {
                const { id, bg_img, tag, title, author_img, author_name, date } = item;
                return (
                  <div key={id} className="col-xxl-6 col-lg-6">
                    <div className="blog__item mb-30">
                      <div className="blog__content-wrapper include-bg p-relative transition-3 fix"
                        style={{ background: `url(${bg_img})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}>
                        <div className="blog__content mb-20">
                          <div className="blog__tag">
                            <span><a href="#">{tag}</a></span>
                          </div>
                          <h3 className="blog__title">
                            <Link href={`/blog-details/${id}`}>
                              <a>{title}</a>
                            </Link>
                          </h3>
                          <Link href={`/blog-details/${id}`}>
                            <a className="link-btn">Read More <i className="fa-regular fa-arrow-right-long"></i></a>
                          </Link>
                        </div>
                        <div className="blog__author d-flex align-items-center">
                          <div className="blog__author-thumb mr-10">
                            <Link href={`/blog-details/${id}`}>
                              <a>
                                <img src={author_img} alt="" />
                              </a>
                            </Link>
                          </div>
                          <div className="blog__author-content">
                            <h5 className="blog__author-name">
                              <a href="#">{author_name}</a>
                            </h5>
                            <span>{date}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }

          </div>
        </div>
      </section>
    </>
  );
};

export default BlogArea;