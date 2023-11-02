import {Link} from '@remix-run/react';
import {Image} from '@shopify/hydrogen';

export default function FeaturedCollection({collection}) {
  if (!collection) return null;
  const image = collection?.image;
  return (
    <Link
      className="featured-collection"
      to={'/collections/'} //took out ${collection.handle} after the slash
    >
      {/* {image && (   -seems unecessary  */}
      <div className="featured-collection-image">
        <Image data={image} sizes="100vw" />
      </div>
      {/* )}  -seems unecessary */}
      <h1>collections</h1>
    </Link>
  );
}

// NOTE: got rid of this part:
// /**
//  * @param {{
// *   collection: FeaturedCollectionFragment;
// * }}
// */
