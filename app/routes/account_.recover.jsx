import {json, redirect} from '@shopify/remix-oxygen';
import {Form, Link, useActionData} from '@remix-run/react';

/**
 * @param {LoaderArgs}
 */
export async function loader({context}) {
  const customerAccessToken = await context.session.get('customerAccessToken');
  if (customerAccessToken) {
    return redirect('/account');
  }

  return json({});
}

/**
 * @param {ActionArgs}
 */
export async function action({request, context}) {
  const {storefront} = context;
  const form = await request.formData();
  const email = form.has('email') ? String(form.get('email')) : null;

  if (request.method !== 'POST') {
    return json({error: 'Method not allowed'}, {status: 405});
  }

  try {
    if (!email) {
      throw new Error('Please provide an email.');
    }
    await storefront.mutate(CUSTOMER_RECOVER_MUTATION, {
      variables: {email},
    });

    return json({resetRequested: true});
  } catch (error) {
    const resetRequested = false;
    if (error instanceof Error) {
      return json({error: error.message, resetRequested}, {status: 400});
    }
    return json({error, resetRequested}, {status: 400});
  }
}

export default function Recover() {
  /** @type {ActionReturnData} */
  const action = useActionData();

  return (
    <div>
      <div className="account-recover">
        {action?.resetRequested ? (
          <>
            <h1>Request Sent.</h1>
            <p>
              If that email address is in our system, you will receive an email
              with instructions about how to reset your password in a few
              minutes.
            </p>
            <br />
            <Link to="/account/login">Return to Login</Link>
          </>
        ) : (
          <>
            <h1 className="forgotPasswordTitle">Forgot Password.</h1>
            <p>
              Enter the email address associated with your account to receive a
              link to reset your password.
            </p>
            <br />
            <Form method="POST">
              <div className="forgotPasswordForm">
                <fieldset className="sign-in-fieldset">
                  <label htmlFor="email">Email</label>
                  <input
                    aria-label="Email address"
                    autoComplete="email"
                    autoFocus
                    id="email"
                    name="email"
                    placeholder="Email address"
                    required
                    type="email"
                  />
                  {action?.error ? (
                    <p>
                      <mark>
                        <small>{action.error}</small>
                      </mark>
                    </p>
                  ) : (
                    <br />
                  )}
                  <button type="submit" className="request-link-button">
                    Request Reset Link
                  </button>
                </fieldset>
              </div>
            </Form>
            <div>
              <br />
              <p>
                <Link to="/account/login" className="sign-in-link">
                  Login →
                </Link>
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

// NOTE: https://shopify.dev/docs/api/storefront/latest/mutations/customerrecover
const CUSTOMER_RECOVER_MUTATION = `#graphql
  mutation customerRecover(
    $email: String!,
    $country: CountryCode,
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    customerRecover(email: $email) {
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`;

/**
 * @typedef {{
 *   error?: string;
 *   resetRequested?: boolean;
 * }} ActionResponse
 */

/** @typedef {import('@shopify/remix-oxygen').LoaderArgs} LoaderArgs */
/** @typedef {import('@shopify/remix-oxygen').ActionArgs} ActionArgs */
/** @typedef {import('@shopify/remix-oxygen').SerializeFrom<typeof loader>} LoaderReturnData */
/** @typedef {import('@shopify/remix-oxygen').SerializeFrom<typeof action>} ActionReturnData */
