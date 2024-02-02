import Link from 'next/link';

const RelatedArticle = ({ item }) => {
  return (
    <>
      <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6">
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
                <a>{item.tag}</a>
              </Link>
            </div>
            <h3 className="blog__grid-title">
              <Link href={`/blog-details/${item.id}`}>
                <a>{item.title.slice(0, 40)}...</a>
              </Link>
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default RelatedArticle;