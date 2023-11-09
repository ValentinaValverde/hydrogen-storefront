import {defer} from '@shopify/remix-oxygen';
import {useLoaderData} from '@remix-run/react';
import OurMessage from '../components/OurMessage/OurMessage';
import AboutUs from '~/components/AboutUs';
import Beginning from '~/components/Beginning';
import HomeCollections from '~/components/HomeCollections';
import Connect from '~/components/Connect';
import WantCustom from '../components/CustomFormDisplay';
import '../fonts/ClassicalDiary-Regular.ttf';

// /**
//  * @type {V2_MetaFunction}
//  */

export const meta = () => {
  return [{title: 'Hydrogen | Home'}];
};

// /**
//  * @param {LoaderArgs}
//  */

export async function loader({context}) {
  const {storefront} = context;
  const mainCollections = storefront.query(COLLECTIONS_QUERY); //reference to graphql

  return defer({mainCollections});
}

export default function Homepage() {
  /** @type {LoaderReturnData} */
  const {mainCollections} = useLoaderData();
  // console.log(mainCollections);
  return (
    <div className="home">
      <Beginning />
      <OurMessage />
      <AboutUs />
      <HomeCollections collections={mainCollections} />
      <WantCustom />
      <Connect />
    </div>
  );
}

//graphql things from here on out:
const COLLECTIONS_QUERY = `#graphql
fragment Collection on Collection {
  id
  title
  handle
  image {
    id
    url
    altText
    width
    height
  }
}
query StoreCollections(
  $country: CountryCode
  $endCursor: String
  $language: LanguageCode
  $startCursor: String
) @inContext(country: $country, language: $language) {
  collections(
    first: 10,
    before: $startCursor,
    after: $endCursor
  ) {
    nodes {
      ...Collection
    }
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
  }
}

`;

/** @typedef {import('@shopify/remix-oxygen').LoaderArgs} LoaderArgs */
/** @template T @typedef {import('@remix-run/react').V2_MetaFunction<T>} V2_MetaFunction */
/** @typedef {import('storefrontapi.generated').FeaturedCollectionFragment} FeaturedCollectionFragment */
/** @typedef {import('storefrontapi.generated').RecommendedProductsQuery} RecommendedProductsQuery */
/** @typedef {import('@shopify/remix-oxygen').SerializeFrom<typeof loader>} LoaderReturnData */
