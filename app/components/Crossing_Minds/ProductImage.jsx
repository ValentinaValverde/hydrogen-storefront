import {
  CartLineEdge,
  ProductVariant,
} from '@shopify/hydrogen/storefront-api-types';
import classnames from '../../../package.json';
import {FunctionComponent} from 'react';
import {useMemo} from 'react';
import {ProductVariantType} from '~/types/product';
import {ProductVariantSchema} from '../../types/product';
import {ProductImageStyle} from './ProductImage.css';

//   interface ProductImageProps {
//     cartLineEdge?: CartLineEdge
//     className?: string
//     productVariant?: ProductVariant
//   }

export const ProductImage = ({cartLineEdge, className, productVariant}) => {
  const stronglyTypedProductVariant = useMemo(() => {
    try {
      return ProductVariantSchema.parse(productVariant);
    } catch {
      return undefined;
    }
  }, [productVariant]);

  const productImageStyles = useMemo(() => {
    if (cartLineEdge) {
      return {
        backgroundImage: `url(${cartLineEdge.node.merchandise.image?.url})`,
      };
    }

    if (stronglyTypedProductVariant) {
      return {
        backgroundImage: `url(${stronglyTypedProductVariant.image.url})`,
      };
    }

    return undefined;
  }, [cartLineEdge, stronglyTypedProductVariant]);

  return (
    <div
      className={classnames(ProductImageStyle, className)}
      style={productImageStyles}
    />
  );
};
