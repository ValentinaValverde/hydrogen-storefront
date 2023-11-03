export default function AboutUs() {
  return (
    <>
      <div className="aboutUsContainer">
        <div className="container">
          <img src="./CreatorImage.JPG" alt="creatorImage" />
        </div>

        <div className="aboutUs container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-heart-fill heart"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
            />
          </svg>
          <h1 className="aboutUsTitle">We're Malova</h1>
          <div className="pTag">
            <p>
              We are a mother-daughter team running a small business to bring
              awareness to mental health issues in our community. We started in
              2020, the year of COVID, as that was the year we started to notice
              mental health issues within our family. What sets us apart from
              others is that we have a message: Mental Health Matters.{' '}
              <i>You Matter.</i> And we hope you never forget it.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
