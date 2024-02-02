import Link from 'next/link';

const teamMemberData = [
  {
    id: 1,
    img: 'assets/img/team/team-1.jpg',
    name: 'Bessie Cooper',
    title: 'Co-founder'
  },
  {
    id: 2,
    img: 'assets/img/team/team-2.jpg',
    name: 'Wade Warren',
    title: 'Finance'
  },
  {
    id: 3,
    img: 'assets/img/team/team-3.jpg',
    name: 'Esther Howard',
    title: 'UI Designer'
  },
  {
    id: 4,
    img: 'assets/img/team/team-4.jpg',
    name: 'Guy Hawkins',
    title: 'Manager'
  },
  {
    id: 5,
    img: 'assets/img/team/team-5.jpg',
    name: 'Mark Cuban',
    title: 'Co-founder'
  }
]

const TeamArea = () => {
  return (
    <>
      <section className="team__area">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="section__title-wrapper text-center mb-35">
                <span className="section__title-pre-4">Team Member</span>
                <h3 className="section__title-4">Meet our team member</h3>
              </div>
            </div>
          </div>
          <div className="row row-cols-xxl-5 row-cols-xl-5 row-cols-lg-4 row-cols-md-2">
            {teamMemberData.map(item => (
              <div key={item.id} className="col">
                <div className="team__item text-center mb-30 transition-3">
                  <div className="team__thumb">
                    <a href="#">
                      <img src={item.img} alt="" />
                    </a>
                  </div>
                  <div className="team__content">
                    <h3 className="team__title">
                      <Link href="/profile">
                        <a>{item.name}</a>
                      </Link>
                    </h3>
                    <p className="team__position">{item.title}</p>

                    <div className="team__social">
                      <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                      <a href="#"><i className="fa-brands fa-twitter"></i></a>
                      <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="team__line mt-55 mb-90"></div>
        </div>
      </section>
    </>
  );
};

export default TeamArea;