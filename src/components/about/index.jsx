import BreadcrumbTwo from '../common/breadcrumb/breadcrumb-2';
import FooterOne from '../common/footer/footer-1';
import Header from '../common/headers/header';
import AboutArea from './about-area';
import AboutMarque from './about-marque';
import BrandArea from './brand-area';
import JoinArea from './join-area';
import MissionArea from './mission-area';
import TeamArea from './team-area';
import VideoArea from './video-area';

const index = () => {
  return (
    <>
      <Header header_transparent="header__transparent" />
      <BreadcrumbTwo/>
      <AboutArea/>
      <AboutMarque/>
      <MissionArea/>
      <VideoArea/>
      <TeamArea/>
      <BrandArea/>
      <JoinArea/>
      <FooterOne bg_color="footer__gradient footer__overlay" />
    </>
  );
};

export default index;