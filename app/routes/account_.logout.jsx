import {json, redirect} from '@shopify/remix-oxygen';
// import {deleteSwymLocalStorage} from '../favorites_src/components/account/AccountLoginForm.client';

/**
 * @type {V2_MetaFunction}
 */
export const meta = () => {
  return [{title: 'Logout'}];
};

export async function loader() {
  return redirect('/account/login');
  // deleteSwymLocalStorage();
}

/**
 * @param {ActionArgs}
 */
export async function action({request, context}) {
  // HERE maybe?
  debugger;
  const {session, cart} = context;
  console.log({session});
  session.unset('customerAccessToken');
  cart.setCartId('null');

  if (request.method !== 'POST') {
    return json({error: 'Method not allowed'}, {status: 405});
  }

  return redirect('/', {
    headers: {
      'Set-Cookie': await session.commit(),
      'Set-Cookie': 'cart=null',
    },
  });
}

export default function Logout() {
  return null;
}

/** @typedef {import('@shopify/remix-oxygen').ActionArgs} ActionArgs */
/** @template T @typedef {import('@remix-run/react').V2_MetaFunction<T>} V2_MetaFunction */
/** @typedef {import('@shopify/remix-oxygen').SerializeFrom<typeof loader>} LoaderReturnData */
/** @typedef {import('@shopify/remix-oxygen').SerializeFrom<typeof action>} ActionReturnData */
