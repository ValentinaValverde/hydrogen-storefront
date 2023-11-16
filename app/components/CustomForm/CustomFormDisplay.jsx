import {Link} from '@remix-run/react';
import {YellowButton} from '../styledComponents/Button';

export default function WantCustom() {
  return (
    <>
      <Link to="/custom_form" className="Link">
        <div className="custom-form-display">
          <h1>
            Want a <i>custom</i> product?
          </h1>
          <p>we got you covered!</p>
          <YellowButton className="yellow-button">customize now!</YellowButton>
        </div>
      </Link>
    </>
  );
}
