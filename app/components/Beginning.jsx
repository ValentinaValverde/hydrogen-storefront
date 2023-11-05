import {Link} from '@remix-run/react';

export default function Beginning() {
  return (
    <>
      <div className="malovaContainer">
        <div className="malovaContainerBackground"></div>

        <div className="malovaSubContainer">
          <h1>
            Malova <br></br> Designs
          </h1>
          <p>
            <i>mental health matters</i>
          </p>
          <Link to={'collections/all-products'}>
            <button>shop all</button>
          </Link>
        </div>
      </div>
    </>
  );
}
