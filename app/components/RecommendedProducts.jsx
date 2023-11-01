import {Link, Await} from '@remix-run/react';
import {Image, Money} from '@shopify/hydrogen';
import {Suspense} from 'react';

export default function RecommendedProducts({products}) {
  return (
    <div className="recommended-products">
      <h2>Malova's Pick</h2>

      <Suspense fallback={<div>Loading...</div>}>
        <Await resolve={products}>
          {({products}) => {
            console.log('products.nodes', products.nodes);

            return (
              <div className="recommended-products-grid">
                {products.nodes.map((product) => (
                  <Link
                    key={product.id}
                    className="recommended-product"
                    to={`/products/${product.handle}`}
                  >
                    <Image
                      data={product.images.nodes[0]}
                      aspectRatio="1/1"
                      sizes="(min-width: 45em) 20vw, 50vw"
                    />
                    <h4>{product.title}</h4>
                    Collections:
                    {product.collections.edges.map((collection) => {
                      return (
                        <li key={collection.node.id}>
                          {collection.node.title}
                        </li>
                      );
                    })}
                    <small>
                      <Money data={product.priceRange.minVariantPrice} />
                    </small>
                  </Link>
                ))}
              </div>
            );
          }}
        </Await>
      </Suspense>
      <br />
    </div>
  );
}

// NOTE: got rid of this part:
// /**
//  * @param {{
// *   products: Promise<RecommendedProductsQuery>;
// * }}
// */
