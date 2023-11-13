/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
import * as StorefrontAPI from '@shopify/hydrogen/storefront-api-types';

export type VariantProductsQueryVariables = StorefrontAPI.Exact<{
  ids: Array<StorefrontAPI.Scalars['ID']> | StorefrontAPI.Scalars['ID'];
}>;

export type VariantProductsQuery = {
  nodes: Array<
    StorefrontAPI.Maybe<
      Pick<StorefrontAPI.ProductVariant, 'id' | 'title'> & {
        image?: StorefrontAPI.Maybe<
          Pick<StorefrontAPI.Image, 'height' | 'url' | 'width'>
        >;
        price: Pick<StorefrontAPI.MoneyV2, 'amount'>;
        product: Pick<
          StorefrontAPI.Product,
          'id' | 'descriptionHtml' | 'handle' | 'title'
        >;
      }
    >
  >;
};

interface GeneratedQueryTypes {
  '#graphql\nquery variantProducts($ids: [ID!]!) {\n  nodes(ids: $ids) {\n    ... on ProductVariant {\n      id\n      image {\n        height\n        url\n        width\n      }\n      price {\n        amount\n      }\n      product {\n        id\n        descriptionHtml\n        handle\n        title\n      }\n      title\n    }\n  }\n}\n': {
    return: VariantProductsQuery;
    variables: VariantProductsQueryVariables;
  };
}

interface GeneratedMutationTypes {}

declare module '@shopify/hydrogen' {
  interface StorefrontQueries extends GeneratedQueryTypes {}
  interface StorefrontMutations extends GeneratedMutationTypes {}
}
