import {getPersonalizedRecommendations} from '@crossingminds/beam-react';
import {BEAM_REACT_OPTIONS} from '../beam/config';
import {useLoaderData} from '@remix-run/react';
import Recommendations from '../components/Crossing_Minds/Recc';

export const loader = async ({context, request}) => {
  const {sessionId} = await getSessionAndSessionId(request);

  const {itemIds: variantIdsForOurFavorites} =
    await getPersonalizedRecommendations({
      ...BEAM_REACT_OPTIONS,
      sessionId,
      sessionScenario: 'some scenario id',
      maxResults: 8,
    });

  const {nodes: productVariants} = await context.storefront.query(
    PRODUCTS_BY_VARIANT_QUERY,
    {
      variables: variantIdsForOurFavorites.map(
        (variantId) => `gid://shopify/ProductVariant/${variantId}`,
      ),
    },
  );

  return json({productVariants});
};

export const shouldRevalidate = () => false;

export default function Index() {
  const {productVariants} = useLoaderData();

  return (
    <div>
      <Recommendations productVariants={productVariants} />
    </div>
  );
}

export const PRODUCTS_BY_VARIANT_QUERY = `#graphql
query variantProducts($ids: [ID!]!) {
  nodes(ids: $ids) {
    ... on ProductVariant {
      id
      image {
        height
        url
        width
      }
      price {
        amount
      }
      product {
        id
        descriptionHtml
        handle
        title
      }
      title
    }
  }
}
`;
