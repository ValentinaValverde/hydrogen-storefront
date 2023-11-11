import {Seo} from '@shopify/hydrogen';
import {PageHeader, Section, CartDetails, WishlistPage} from '~/components';
import {Layout} from '~/components/index.server';

export default function Wishlist() {
  return (
    <Layout>
      <Seo type="page" data={{title: 'Cart'}} />
      <Section className="max-w-7xl mx-auto">
        <WishlistPage layout="page" />
      </Section>
    </Layout>
  );
}

// headerMenu.items.push({
//     id: 'WishlistPlus',
//     resourceId: null,
//     tags: [],
//     title: 'Wishlist',
//     type: 'WISHLIST',
//     url: '',
//     items: [],
//     isExternal: true,
//     target: '_self',
//     to: '/swym/wishlist', // this 'swym' can be updated to any folder name for custom implementation
// })
