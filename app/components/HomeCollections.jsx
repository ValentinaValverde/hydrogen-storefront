import {Link, Await} from '@remix-run/react';
import {Suspense} from 'react';
import {Image} from '@shopify/hydrogen';

export default function HomeCollections({collections}) {
  return (
    <>
      <h1 className="collectionsTitle">Collections</h1>

      <Suspense fallback={<div>Loading...</div>}>
        <Await resolve={collections}>
          {({collections}) => {
            console.log('COLLECTIONS YO', collections);

            return (
              <>
                <div className="collectionsContainer">
                  {collections.nodes.map((something) => {
                    return (
                      <>
                        <div className="collectionCard">
                          <Image
                            data={collections.images}
                            aspectRatio="1/1"
                            key={something.id}
                          />
                          <p key={something.id}>{something.title}</p>
                        </div>
                      </>
                    );
                  })}
                </div>
              </>
            );
          }}
        </Await>
      </Suspense>
    </>
  );
}
