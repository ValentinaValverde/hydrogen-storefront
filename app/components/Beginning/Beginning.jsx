import {Link} from '@remix-run/react';
import {YellowButton} from '../styledComponents/Button';

export default function Beginning() {
  return (
    <>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap');
      </style>
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
              <YellowButton>shop all</YellowButton>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
