import {Link} from '@remix-run/react';

export default function Beginning() {
  return (
    <>
      <div className="splash-page">
        <div>
          <div className="header">
            <h1>malova</h1>
            <h1>designs</h1>
          </div>
          <div className="splash-image">
            <img src="splash_image.png" alt="splash-image" />
          </div>
          <div className="top-layer">
            <p>
              <i>mental health matters</i>
            </p>
            <Link to={'collections/all-products'}>
              <button className="button">shop all</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
