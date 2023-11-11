import {Link} from '@remix-run/react';
import {YellowButton} from '../styledComponents/Button';

export default function WantCustom() {
  return (
    <>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Agbalumo&display=swap');
      </style>
      <Link to="/custom_form" className="Link">
        <div className="custom-form-display">
          <h1>
            Want a <i>custom</i> product?
          </h1>
          <p>we got you covered!</p>
          <YellowButton>customize now!</YellowButton>
        </div>
      </Link>
    </>
  );
}
