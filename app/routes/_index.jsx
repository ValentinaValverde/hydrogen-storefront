import {defer} from '@shopify/remix-oxygen';
import {useLoaderData} from '@remix-run/react';
import FeaturedCollection from '~/components/FeaturedCollection';
import RecommendedProducts from '~/components/RecommendedProducts';
import OurMessage from '~/components/OurMessage';
import AboutUs from '~/components/AboutUs';
import Beginning from '~/components/Beginning';
// import Collections from './collections._handle.jsx';

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

  return defer({featuredCollection, recommendedProducts});
}

export default function Homepage() {
  /** @type {LoaderReturnData} */
  const {recommendedProducts} = useLoaderData();

  return (
    <div className="home">
      <Beginning />
      <OurMessage />
      <AboutUs />
      <RecommendedProducts products={recommendedProducts} />
      {/* <Collections /> */}
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

/** @typedef {import('@shopify/remix-oxygen').LoaderArgs} LoaderArgs */
/** @template T @typedef {import('@remix-run/react').V2_MetaFunction<T>} V2_MetaFunction */
/** @typedef {import('storefrontapi.generated').FeaturedCollectionFragment} FeaturedCollectionFragment */
/** @typedef {import('storefrontapi.generated').RecommendedProductsQuery} RecommendedProductsQuery */
/** @typedef {import('@shopify/remix-oxygen').SerializeFrom<typeof loader>} LoaderReturnData */
