export default function AboutUs() {
  return (
    <>
      <div className="aboutUsContainer">
        <div className="container">
          <span className="tag-wrap">
            <img src="./CreatorImage.JPG" alt="creatorImage" />
          </span>
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
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
              minima ullam fugiat rem doloremque, vel modi quibusdam expedita
              distinctio ducimus? Ipsa necessitatibus excepturi sapiente
              corrupti culpa autem! Vero, autem voluptatibus. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Laboriosam totam doloremque
              aperiam. Iste quod magni at placeat. Assumenda, error maiores
              sapiente amet quis inventore, veritatis sint labore quibusdam
              voluptatem consequuntur.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
