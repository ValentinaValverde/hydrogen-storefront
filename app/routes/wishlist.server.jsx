import {Seo} from '@shopify/hydrogen';
// import {PageHeader, Section, CartDetails, WishlistPage} from '../components';
import {Layout} from '../components/Layout';

export default function Wishlist() {
  return (
    <Layout>
      <Seo type="page" data={{title: 'Cart'}} />
      {/* <Section className="max-w-7xl mx-auto"> */}
      {/* <WishlistPage layout="page" /> */}
      {/* </Section> */}
    </Layout>
  );
}
