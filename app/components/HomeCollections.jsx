import {Link, Await} from '@remix-run/react';
import {Suspense} from 'react';

export default function HomeCollections({collections}) {
  return (
    <>
      <h1 className="collectionsTitle">Collections</h1>

      <Suspense fallback={<div>Loading...</div>}>
        <Await resolve={collections}>
          {({collections}) => {
            return (
              <>
                <div className="collectionsContainer">
                  {collections.nodes.map((something) => {
                    console.log('SOMETHING: ', something);
                    return (
                      <>
                        <div key={something.id} className="collectionCard">
                          <Link to={`collections/${something.handle}`}>
                            <img src={something.image?.url} />
                            <div className="cardTitleContainer">
                              <div className="collectionCardTitle">
                                <p>{something.title}</p>
                              </div>
                            </div>
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
