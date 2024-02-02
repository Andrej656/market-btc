import Link from 'next/link';

const BlogSidebar = () => {
  return (
    <>
      <div className="sidebar__wrapper">
        <div className="sidebar__widget mb-25">
          <h3 className="sidebar__widget-title">Recent Post</h3>
          <div className="sidebar__widget-content">
            <div className="sidebar__search">
              <form action="#">
                <div className="sidebar__search-input-2">
                  <input type="text" placeholder="Search" />
                  <button type="submit"><i className="far fa-search"></i></button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="sidebar__widget mb-25">
          <h3 className="sidebar__widget-title">Category</h3>
          <div className="sidebar__widget-content">
            <ul>
              <li>
                <Link href={'/blog'}>
                  <a>Arts <span className="category-number">(6)</span></a>
                </Link>
              </li>
              <li>
                <Link href={'/blog'}>
                  <a>Domains  <span className="category-number">(2)</span></a>
                </Link>
              </li>
              <li>
                <Link href={'/blog'}>
                  <a>Technology <span className="category-number">(14)</span></a>
                </Link>
              </li>
              <li>
                <Link href={'/blog'}>
                  <a>Sports <span className="category-number">(8)</span></a>
                </Link>
              </li>
              <li>
                <Link href={'/blog'}>
                  <a>Photography <span className="category-number">(7)</span></a>
                </Link>
              </li>
              <li>
                <Link href={'/blog'}>
                  <a>Bitakon <span className="category-number">(12)</span></a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="sidebar__widget mb-25">
          <h3 className="sidebar__widget-title">Recent Post</h3>
          <div className="sidebar__widget-content">
            <div className="sidebar__post">
              <Rc_Post img={'1'} title="The Benefits of Hiring a Cleaning" date="March 8, 2022" />
              <Rc_Post img={'2'} title="Guest Blog: YACHT Songs to the metaverse." date="March 9, 2022" />
              <Rc_Post img={'3'} title="Serwah Attafuah on being punk in the." date="March 10, 2022" />
            </div>
          </div>
        </div>
        <div className="sidebar__widget mb-25">
          <h3 className="sidebar__widget-title">Tags</h3>
          <div className="sidebar__widget-content">
            <div className="tagcloud">
              <a href="#">NFT</a>
              <a href="#">Art</a>
              <a href="#">Creative</a>
              <a href="#">Software</a>
              <a href="#">Crypto</a>
              <a href="#">Agency</a>
              <a href="#">Marketplace</a>
              <a href="#">Bitakon</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogSidebar;

const Rc_Post = ({ img, title, date }) => {
  return (
    <div className="rc__post d-flex align-items-center">
      <div className="rc__post-thumb mr-20">
        <Link href={'/blog-details'}>
          <a>
            <img src={`/assets/img/blog/sidebar/blog-sm-${img}.jpg`} alt="" />
          </a>
        </Link>
      </div>
      <div className="rc__post-content">
        <h3 className="rc__post-title">
          <Link href={'/blog-details'}>
            <a>{title}</a>
          </Link>
        </h3>
        <div className="rc__meta">
          <span><i className="fa-light fa-clock"></i>{date}</span>
        </div>
      </div>
    </div>
  )
}