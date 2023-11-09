import {Link} from '@remix-run/react';

export default function AsideMenu() {
  return (
    <>
      <div className="collectionsMenuList">
        <Link to={'/'} className="link">
          Home
        </Link>{' '}
        <br />
        <Link to={'/collections/all-products'} className="link">
          All Products
        </Link>{' '}
        <br />
        <Link to={'/collections/glass-cans'} className="link glassCans">
          Glass Cans
        </Link>{' '}
        <br />
        <Link to={'/collections/mug-collection'} className="link">
          Mugs
        </Link>{' '}
        <br />
        <Link to={'/collections/milk-cartons'} className="link">
          Milk Cartons
        </Link>{' '}
        <br />
        <Link to={'/collections/hoodies-crewnecks'} className="link">
          Hoodies & Crewnecks
        </Link>
        <br />
        <Link to={'/collections/tees-1'} className="link">
          Tees
        </Link>{' '}
        <br />
        <Link to={'/collections/malova-tote-bags'} className="link">
          Totes
        </Link>{' '}
        <br />
      </div>
    </>
  );
}
