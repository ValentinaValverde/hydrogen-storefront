/**
 * A side bar component with Overlay that works without JavaScript.
 * @example
 * ```jsx
 * <Aside id="search-aside" heading="SEARCH">
 *  <input type="search" />
 *  ...
 * </Aside>
 * ```
 * @param {{
 *   children?: React.ReactNode;
 *   heading: React.ReactNode;
 *   id?: string;
 * }}
 */

export function Aside({children, heading, id = 'aside'}) {
  // window.body.addEventListener('click');
  // console.log('mouseddown');

  return (
    <div aria-modal className="overlay" id={id} role="dialog">
      <aside>
        <header>
          <h3 className="asideHeading">{heading}</h3>
          <CloseAside />
        </header>
        <main>{children}</main>
      </aside>
    </div>
  );
}

function CloseAside() {
  return (
    <a className="close" href="#">
      x
    </a>
  );
}
