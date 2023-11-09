import {Link} from '@remix-run/react';
import {Button} from '../styledComponents/Button';

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
            <Button>shop all</Button>
          </Link>
        </div>
      </div>
    </>
  );
}
