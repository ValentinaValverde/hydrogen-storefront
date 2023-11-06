export default function AsideMenu() {
  //   const {storefront} = context;
  //   const menuCollectionList = storefront.query(COLLECTIONS_LIST_QUERY); //reference to graphql
  console.log('MENU COLLECTION LIST: ', menuCollectionList);
  console.log('I AM HERE!!');

  return (
    <>
      <p>something!</p>

      {/* <div>
          {collections.nodes.map((something) => {
            console.log('SOMETHING: ', something);
            return (
              <>
                <div>
                  <Link
                    key={something.id}
                    to={`collections/${something.handle}`}
                  >
                    <p>{something.title}</p>
                  </Link>
                </div>
              </>
            );
          })}
        </div> */}
    </>
  );
}

const COLLECTIONS_LIST_QUERY = `#graphql
fragment Collection on Collection {
  id
  title
  handle
  image {
    id
    url
    altText
    width
    height
  }
}
query StoreCollections(
  $country: CountryCode
  $endCursor: String
  $language: LanguageCode
  $startCursor: String
) @inContext(country: $country, language: $language) {
  collections(
    first: 10,
    before: $startCursor,
    after: $endCursor
  ) {
    nodes {
      ...Collection
    }
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
  }
}
`;
