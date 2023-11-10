// GOAL(s):
// get user information
// send user info to admin on submission

import {useState} from 'react';
import {Input} from '../components/styledComponents/Input';

export default function CustomForm() {
  const [productChoice, setProductChoice] = useState('');
  const [sizeChoice, setSizeChoice] = useState('');

  const onClick = () => {
    console.log('clicked!!');
    const name_value = document.getElementById('name').value;
    const email_value = document.getElementById('email').value;
    const phoneNum_value = document.getElementById('phoneNum').value;
    console.log(name_value, email_value, phoneNum_value);
  };

  const onChange = (e) => {
    setProductChoice(e.target.value);
  };

  return (
    <>
      <fieldset className="customForm">
        <h1>Custom Form</h1>
        <h3>Contact Info</h3>
        <div className="contactCustomForm">
          <Input type="text" placeholder="Name" id="name" required />
          <Input type="email" placeholder="Email" id="email" required />
          <Input type="tel" placeholder="Phone Number" id="phoneNum" required />
        </div>
        <div className="customFormBottom">
          <h3>Product</h3>
          <div className="selections">
            <label>
              {' '}
              Please Select a Product &nbsp; &nbsp;
              <select name="product" value={productChoice} onChange={onChange}>
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
                <Input type="text" placeholder="Material Color" />
              </>
            ) : (
              <>
                <p></p>
              </>
            )}
          </div>
          {/* <small>*if applicable</small> */}

          <Input type="text" placeholder="Vinyl Color" />
          <Input type="text" placeholder="Any other information" />
          <button type="submit" onClick={onClick}>
            Submit
          </button>
        </div>
      </fieldset>
    </>
  );
}

//name
//email
//phone number
//product - drop-down menu - hoodie, crewneck, t-shirt, mug, glass can, elf
//size (if applicable)
//color - text
//vinyl color

// {productChoice == 'glassCan' ? (
//   <>
//     <option value="16">16oz</option>
//     <option value="20">20oz</option>
//   </>
// ) : (
//   <>
//     <option>none</option>
//   </>
// )}
