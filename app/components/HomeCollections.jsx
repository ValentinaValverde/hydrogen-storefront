import {Link, Await} from '@remix-run/react';
import {Suspense} from 'react';

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
                          <Link
                            key={something.id}
                            to={`collections/${something.handle}`}
                          >
                            <img src={something.image.url} />
                            <p>{something.title}</p>
                          </Link>
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
