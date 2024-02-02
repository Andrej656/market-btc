import blogs from '../../data/blogs';
import Link from 'next/link';

import BlogSidebar from '../common/blog/blog-sidebar';
import Pagination from '../common/blog/pagination';

const BlogArea = () => {
  return (
    <>
      <section className="blog__area pt-80 pb-90 p-relative z-index-1">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8">
              <div className="blog__wrapper">
                <div className="row">
                  {blogs.slice(2, 8).map(item => (
                    <div key={item.id} className="col-xxl-6 col-xl-6 col-lg-12 col-md-6">
                      <div className="blog__grid-item mb-30">
                        <div className="blog__grid-thumb w-img">
                          <Link href={`/blog-details/${item.id}`}>
                            <a>
                              <img src={item.bg_img} alt="" />
                            </a>
                          </Link>
                        </div>
                        <div className="blog__grid-content">
                          <div className="blog__grid-tag">
                            <Link href={`/blog-details/${item.id}`}>
                              <a>{item.category}</a>
                            </Link>
                          </div>
                          <h3 className="blog__grid-title">
                            <Link href={`/blog-details/${item.id}`}>
                              <a>{item.title}</a>
                            </Link>
                          </h3>
                          <div className="blog__grid-author d-flex align-items-center">
                            <div className="blog__grid-author-thumb mr-10">
                              <a href="#">
                                <img src={item.author_img} alt="" />
                              </a>
                            </div>
                            <div className="blog__grid-author-info">
                              <h4><a href="#">{item.author_name}</a></h4>
                              <p>{item.date} • 1 min read</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

                </div>
                <div className="row">
                  <Pagination />
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogArea;