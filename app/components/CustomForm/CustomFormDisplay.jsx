import {Link} from '@remix-run/react';

export default function WantCustom() {
  return (
    <>
      <Link to="/custom_form" className="customFormLink">
        <p>want a custom product?</p>
      </Link>
    </>
  );
}
