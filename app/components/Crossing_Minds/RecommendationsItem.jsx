import {useRecordItemInteractions} from '@crossingminds/beam-react';
import {useFetcher, useMatches} from '@remix-run/react';
import {useMemo} from 'react';

import {BEAM_REACT_OPTIONS} from '~/beam/config';
import {sessionId} from '../../utils/sessionId.client';
import {
  SHOPIFY_ENTITY_TYPES,
  getIdFromShopifyEntityId,
} from '../../utils/shopify';

import {AddToCartButton} from './AddToCartButton';
import {ProductImage} from './ProductImage';
// import {
//   recommendationsItemAddToCartButtonStyles,
//   recommendationsItemImageStyle,
//   recommendationsItemTitleStyle,
// } from './RecommendationsItem.css';

// interface RecommendationsItemProps {
//   productVariant: ProductVariant;
// }

export const RecommendationsItem = ({productVariant}) => {
  // const [root] = useMatches();
  // const selectedLocale = root?.data?.selectedLocale;
  // const fetcher = useFetcher();
  // const lines = [{merchandiseId: productVariant.id, quantity: 1}];

  // const {recordAddItemToCartInteraction, recordItemClickInteraction} =
  //   useRecordItemInteractions({
  //     ...BEAM_REACT_OPTIONS,
  //     // sessionId,
  //   });

  // const productVariantId = useMemo(
  //   () =>
  //     getIdFromShopifyEntityId(
  //       SHOPIFY_ENTITY_TYPES.PRODUCT_VARIANT,
  //       productVariant.id,
  //     ),
  //   [productVariant],
  // );

  return (
    <>
      {/* <a
        href={`/products/${productVariant.handle}?variant=${productVariantId}`}
        onClick={() =>
          productVariantId && recordItemClickInteraction(productVariantId)
        }
      ></a> */}
      <a href={`/products/${productVariant.handle}`}>
        {/* <ProductImage
          // className={recommendationsItemImageStyle}
          productVariant={productVariant.images.nodes[0]}
    /> */}
        <p
        // className={recommendationsItemTitleStyle}
        >
          {productVariant.title}
        </p>
      </a>

      {/* <fetcher.Form
        action="/cart"
        method="post"
        onSubmit={() =>
          productVariantId && recordAddItemToCartInteraction(productVariantId)
        }
      >
        <input type="hidden" name="cartAction" value={'ADD_TO_CART'} />
        <input
          type="hidden"
          name="countryCode"
          value={selectedLocale?.country ?? 'US'}
        />
        <input type="hidden" name="lines" value={JSON.stringify(lines)} />

        <AddToCartButton
          className={recommendationsItemAddToCartButtonStyles}
          productVariantShopifyId={productVariant.id}
        />
      </fetcher.Form> */}
    </>
  );
};
