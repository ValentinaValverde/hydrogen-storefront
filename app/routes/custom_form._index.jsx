// GOAL(s):
// get user information
// send user info to admin on submission

import {useState} from 'react';
import {Input} from '../components/styledComponents/Input';

export default function CustomForm() {
  const [productChoice, setProductChoice] = useState('');
  const [sizeChoice, setSizeChoice] = useState('');

  const onChange = (e) => {
    setProductChoice(e.target.value);
  };

  return (
    <>
      <div className="custom-form-container">
        <fieldset className="customForm">
          {/* used this: */}
          {/* https://web3forms.com/#start */}
          <form action="https://api.web3forms.com/submit" method="POST">
            <h1>Custom Form</h1>
            <h3>Contact Info</h3>
            <input
              type="hidden"
              name="access_key"
              value="66d7fffa-86bb-4037-bdcf-9d74d375b4c2"
            />
            <div className="contactCustomForm">
              <input
                type="text"
                placeholder="Name"
                id="name"
                name="name"
                required
              />
              <input
                type="email"
                placeholder="Email"
                id="email"
                name="email"
                required
              />
              <input
                type="tel"
                placeholder="Phone Number"
                id="phoneNum"
                name="phone number"
                required
              />
            </div>
            <div className="customFormBottom">
              <h3>Product</h3>
              <div className="selections">
                <label>
                  {' '}
                  Please Select a Product &nbsp; &nbsp;
                  <select
                    name="product"
                    value={productChoice}
                    onChange={onChange}
                  >
                    <option value="hoodie">Hoodie</option>
                    <option value="crewneck">Crewneck</option>
                    <option value="tee">Tee</option>
                    <option value="mug">Mug</option>
                    <option value="glassCan">Glass Can</option>
                    {/* <option value="keychain">Keychain</option> */}
                    {/* <option value="elf">Elf</option> */}
                  </select>
                </label>

                <br />
                <label>
                  Please Select a Size &nbsp; &nbsp;
                  <select
                    id="apparelSize"
                    name="size"
                    value={sizeChoice}
                    onChange={(e) => setSizeChoice(e.target.value)}
                  >
                    {productChoice == 'hoodie' ||
                    productChoice == 'crewneck' ||
                    productChoice == 'tee' ? (
                      <>
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                        <option value="XL">XL</option>
                        <option value="2XL">2XL</option>
                        <option value="3XL">3XL</option>
                      </>
                    ) : (
                      <>
                        <option value="none">N/A</option>
                        <option value="16">16oz</option>
                        <option value="20">20oz</option>
                      </>
                    )}
                  </select>
                </label>
              </div>

              <div>
                {productChoice == 'hoodie' ||
                productChoice == 'crewneck' ||
                productChoice == 'tee' ? (
                  <>
                    <Input
                      type="text"
                      placeholder="Material Color"
                      name="material color"
                    />
                  </>
                ) : (
                  <>
                    <p></p>
                  </>
                )}
              </div>
              <Input type="text" placeholder="Vinyl Color" name="vinyl color" />
              <textarea
                type="text"
                placeholder="Any other information"
                name="other info"
              />
              <br />
              <button type="submit">Submit</button>
            </div>
          </form>
        </fieldset>
      </div>
    </>
  );
}
