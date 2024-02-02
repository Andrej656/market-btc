import Breadcrumb from '../common/breadcrumb/breadcrumb';
import FooterTwo from '../common/footer/footer-2';
import Header from '../common/headers/header';
import TextSlider from '../common/text-slider';
import WalletArea from './wallet-area';

const index = () => {
  return (
    <>
      <Header header_transparent={'header__transparent'} />
      <Breadcrumb title={'Connect Wallets'} subtitle="Connect Wallets" b_border={'breadcrumb__border'} />
      <WalletArea/>
      <TextSlider/>
      <FooterTwo tp_container={false} widget_url="/wallet" />
    </>
  );
};

export default index;