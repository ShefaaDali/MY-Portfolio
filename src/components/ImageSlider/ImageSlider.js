import "./ImageSlider.css";

function ImageSlider({ images ,id}) {
  const rows = [];
  for (let i = 1; i < images.length; i++)
    rows.push(
      <button
      key={i}
        id={i}
        type="button"
        data-bs-target={`#ImageSlider${id}`}
        data-bs-slide-to={i}
        aria-label={`Slide ${i + 1}`}
      ></button>
    );
  return (
    <div id={`ImageSlider${id}`} className="carousel slide ImageSlider border border-4 m-2" >
      {images.length !==1 &&( <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target={`#ImageSlider${id}`}
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        {rows}
      </div>)}
     
      <div className="carousel-inner">
        {images.map((e, id) => {
          return (
            <div
              className={`carousel-item  ${id === 0 ? "active" : ""}`}
              id={id}
              key={id}
            >
              <img
                src={e.Path}
                className="d-block ProjectImage"
                alt={e.Caption}
              />
              <div className="carousel-caption d-none d-md-block">
                <p>{e.Caption}</p>
              </div>
            </div>
          );
        })}
      </div>
      {images.length!==1 && (<><button
        className="carousel-control-prev"
        type="button"
        data-bs-target={`#ImageSlider${id}`}
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button><button
        className="carousel-control-next"
        type="button"
        data-bs-target={`#ImageSlider${id}`}
        data-bs-slide="next"
      >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button></>)}
     
    </div>
  );
}

export default ImageSlider;
