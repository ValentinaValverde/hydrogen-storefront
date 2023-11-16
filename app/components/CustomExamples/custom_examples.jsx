import {useState} from 'react';

export default function CustomExamples() {
  const Carousel = ({images}) => {};

  return (
    <>
      <h1 className="ex-title">
        <i>Some Custom Orders:</i>
      </h1>
      <div className="exmaple-container">
        <div>
          <img src="ex_one.jpg" />
          <p>
            <i>Easley Gymnastics</i>
          </p>
        </div>
        <div>
          <img src="ex_two.JPEG" />
          <p>
            <i>NAMI (National Alliance on Mental Illness)</i>
          </p>
        </div>
        <div>
          <img src="ex_three.jpg" />
          <p>
            <i>Alpha Spray Foam</i>
          </p>
        </div>
        <div>
          <img src="ex_four.jpg" />
          <p>
            <i>Teachers Gift</i>
          </p>
        </div>
      </div>
    </>
  );
}
