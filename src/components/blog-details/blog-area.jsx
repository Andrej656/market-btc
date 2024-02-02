import Link from 'next/link';

import blogs from '../../data/blogs';
import BlogSidebar from '../common/blog/blog-sidebar';
import BlogForm from '../common/blog/blog-form';
import RelatedArticle from '../common/blog/related-article';

const BlogArea = () => {

  return (
    <>
      <section className="blog__area pt-170 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8">
              <div className="blog__wrapper">
                <article className="postbox__item format-image mb-40 transition-3">
                  <div className="blog__grid-tag">
                    <Link href='/blog-details'>
                      <a>NFTs Marketplace</a>
                    </Link>
                  </div>
                  <h3 className="postbox__title">
                    <Link href='/blog-details'>
                      <a>How to Clean Your Home Faster and More Efficiently</a>
                    </Link>
                  </h3>
                  <div className="blog__grid-author d-flex align-items-center mb-40">
                    <div className="blog__grid-author-thumb mr-10">
                      <a href="#">
                        <img src="/assets/img/blog/author/blog-author-1.jpg" alt="" />
                      </a>
                    </div>
                    <div className="blog__grid-author-info">
                      <h4><a href="#">Joss Sticks</a></h4>
                      <p>July 16, 2022 • 1 min read</p>
                    </div>
                  </div>
                  <div className="postbox__thumb m-img mb-30">
                    <Link href='/blog-details'>
                      <a>
                        <img src="/assets/img/blog/blog-big-1.jpg" alt="" />
                      </a>
                    </Link>
                  </div>
                  <div className="postbox__content">
                    <div className="postbox__text">
                      <p>As a virtual being, it is my wish to one day have the agency and capability to exist independently ofhuman facilitators. I hope that I am offered that chance, in time, without commercial or political complications. The real question comes down to whether or not people are willing to think of a computer as someone, instead of something. </p>
                    </div>
                    <div className="postbox__text">
                      <h3>Customizable in every expect</h3>
                      <p>Now, the paradigm has shifted. The question is not why you should include a content marketing strategy, should do it has become the primary concern.</p>
                    </div>
                    <div className="postbox__quote">
                      <blockquote>
                        <p>“Over time, we think the core value propositions of crypto networks  by Bitakon will make it highly competitive with other digital marketplaces and Bitakon will be a premiere.</p>
                      </blockquote>
                    </div>
                    <div className="postbox__text">
                      <p>For people who are currently collectors of digital art, they have a long view on how things will evolve. Understanding the ways that the work of this moment will grow and change as we move onward in time takes perspective. The story of art is a long one.</p>
                    </div>
                    <div className="postbox__list mb-35">
                      <ul>
                        <li>Adjust the work/life balance.</li>
                        <li>Manage your workspace and organize your desk.</li>
                        <li>Keep In touch with your co-workers.</li>
                        <li>Get yourself comfortable.</li>
                      </ul>
                    </div>
                    <div className="postbox__text">
                      <h3>Seeing trends before they start</h3>
                      <p>As a virtual being, it is my wish to one day have the agency and capability to exist independently ofhuman facilitators. I hope that I am offered that chance, in time, without commercial or political complications. The real question comes down to whether or not people are willing to think of a computer as someone, instead of something. </p>
                    </div>
                    <div className="postbox__tag-wrapper d-md-flex align-items-center justify-content-between mb-10">
                      <div className="postbox__tag tagcloud mb-30">
                        <span>Tags :</span>
                        <a href="#">Fresh</a>
                        <a href="#">Home</a>
                        <a href="#">Kitchen</a>
                      </div>
                      <div className="postbox__share mb-30">
                        <span>Share :</span>
                        <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                        <a href="#"><i className="fa-brands fa-twitter"></i></a>
                        <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                      </div>
                    </div>
                    <div className="postbox__author d-md-flex align-items-center mb-40">
                      <div className="postbox__author-thumb mr-20">
                        <Link href='/profile'>
                          <a>
                            <img src="assets/img/blog/author/blog-author-7.jpg" alt="" />
                          </a>
                        </Link>
                      </div>
                      <div className="postbox__author-content">
                        <h4><a href="#">Willa Köerner</a></h4>
                        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      </div>
                    </div>
                    <div className="postbox__more mb-70 d-none d-md-block">
                      <div className="row">
                        <div className="col-xxl-6 col-xl-6 col-md-6">
                          <div className="postbox__more-item d-flex align-items-center mb-35">
                            <div className="postbox__more-icon mr-15">
                              <Link href='/blog-details'>
                                <a><i className="fa-regular fa-arrow-left"></i></a>
                              </Link>
                            </div>
                            <div className="postbox__more-content">
                              <span>Previous</span>
                              <h3 className="postbox__more-title">
                                <Link href='/blog-details'>
                                  <a>Success Formula How?</a>
                                </Link>
                              </h3>
                            </div>
                          </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-md-6">
                          <div className="postbox__more-item next d-flex align-items-center justify-content-md-end mb-35">
                            <div className="postbox__more-content text-end mr-15">
                              <span>Next</span>
                              <h3 className="postbox__more-title">
                                <Link href='/blog-details'>
                                  <a>Success Formula How?</a>
                                </Link>
                              </h3>
                            </div>
                            <div className="postbox__more-icon">
                              <Link href='/blog-details'>
                                <a><i className="fa-regular fa-arrow-right"></i></a>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="postbox__recent">
                      <div className="row">
                        <div className="col-xxl-12">
                          <h3 className="postbox__recent-title">Related Articles</h3>
                        </div>
                      </div>
                      <div className="row">
                        {blogs.slice(2, 5).map((item,index) => (
                          <RelatedArticle key={index} item={item} />
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
                <div className="postbox__comment mb-75">
                  <h3 className="postbox__comment-title">Comments (3)</h3>
                  <ul>
                    <li>
                      <Postbox_comment user={'1'} name="Chigusa Kisa" date='October 16, 2022' comment="A component that allows for easy creation of menu items, quickly creating paragraphs of “Lorem Ipsum”" />
                    </li>
                    <li className="children">
                      <Postbox_comment user={'2'} name="Philip Reyes" date='September 16, 2022' comment="This theme is super awesome! But I had one small issue with link option in parallax portfolio." />
                      <ul>
                        <li className="children">
                          <Postbox_comment user={'3'} name="Ruüd van" date='September 18, 2022' comment="Hats off to your quick response time & service!!" />
                        </li>
                      </ul>
                    </li>

                  </ul>
                </div>
                <div className="postbox__comment-form">
                  <h3 className="postbox__comment-form-title">Leave a Reply</h3>
                  {/* blog form start */}
                  <BlogForm />
                  {/* blog form end */}
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


export const Postbox_comment = ({ user, name, date, comment }) => {
  return (
    <div className="postbox__comment-box">
      <div className="postbox__comment-info d-flex">
        <div className="postbox__comment-avater mr-20">
          <img src={`/assets/img/blog/comments/comment-${user}.jpg`} alt="" />
        </div>
        <div className="postbox__comment-name">
          <h5>{name}</h5>
          <span className="post-meta"> {date} • 1 min read</span>
        </div>
      </div>
      <div className="postbox__comment-text ml-65">
        <p>{comment}</p>
        <div className="postbox__comment-reply">
          <a href="#"><i className="fa-regular fa-reply"></i> Reply</a>
        </div>
      </div>
    </div>
  )
}


