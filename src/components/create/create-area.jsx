import Link from 'next/link';

const CreateArea = () => {
  return (
    <>
      <section className="create__area pt-180 pb-90 p-relative z-index-2">
        <div className="container">
          <div className="row justify-content-center">
            <CreateItem title={'Sell One Time'} image={'assets/img/create/create-1.png'} />
            <CreateItem title={'Sell Multiple Time'} image={'assets/img/create/create-2.png'} />
          </div>
        </div>
      </section>
    </>
  );
};

export default CreateArea;

const CreateItem = ({title,image}) => {
  return (
    <div className="col-xxl-4 col-xl-4 col-lg-5 col-md-6">
    <div className="create__item mb-30">
      <div className="create__item-inner text-center">
        <div className="create__content">
          <h4 className="create__title">
            <Link href={'/create-multiple'}>
              <a>{title}</a>
            </Link>
          </h4>
          <p>Your collectible want to be one of a kind</p>
        </div>

        <div className="create__thumb m-img">
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  </div>
  )
}