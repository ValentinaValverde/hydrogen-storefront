import {defer} from '@shopify/remix-oxygen';
import {useLoaderData} from '@remix-run/react';
import OurMessage from '~/components/OurMessage';
import AboutUs from '~/components/AboutUs';
import Beginning from '~/components/Beginning';
import HomeCollections from '~/components/HomeCollections';
import Connect from '~/components/Connect';
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
  const {collections} = await storefront.query(FEATURED_COLLECTION_QUERY); //reference to graphql
  const featuredCollection = collections;
  const recommendedProducts = storefront.query(RECOMMENDED_PRODUCTS_QUERY); //reference to graphql

  const mainCollections = storefront.query(COLLECTIONS_QUERY); //reference to graphql

  return defer({featuredCollection, recommendedProducts, mainCollections});
}

export default function Homepage() {
  /** @type {LoaderReturnData} */
  const {recommendedProducts, mainCollections} = useLoaderData();
  // console.log(mainCollections);
  return (
    <div className="home">
      <Beginning />
      <OurMessage />
      <AboutUs />
      <HomeCollections collections={mainCollections} />
      <Connect />
    </div>
  );
}

//graphql things from here on out:
const FEATURED_COLLECTION_QUERY = `#graphql
  fragment FeaturedCollection on Collection {
    id
    title
    image {
      id
      url
      altText
      width
      height
    }
    handle
  }
  query FeaturedCollection($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    collections(first: 1, sortKey: UPDATED_AT, reverse: true) {
      nodes {
        ...FeaturedCollection
      }
    }
  }
`;

const RECOMMENDED_PRODUCTS_QUERY = `#graphql
  fragment RecommendedProduct on Product {
    id
    title
    handle
    collections(first: 5){
      edges{
        node{
          id
          title
          handle
          image {
            id
          }
        }
      }
    }
    
    priceRange {
      minVariantPrice {
        amount
        currencyCode
      }
    }
    images(first: 1) {
      nodes {
        id
        url
        altText
        width
        height
      }
    }
  }
  query RecommendedProducts ($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    products(first: 4, sortKey: UPDATED_AT, reverse: true) {
      nodes {
        ...RecommendedProduct
      }
    }
  }
`;

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
