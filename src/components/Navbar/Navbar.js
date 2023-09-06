import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm bg-light Regular shadow px-5 fixed-top">
    <div className="container-fluid">
      <a className="navbar-brand my-name" href="#Home">Shefaa Dali</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse bg-white-50" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
          <li className="nav-item fs-5">
            <a className="nav-link main-text-color link" aria-current="page" href="#Home">Home</a>
          </li>
          <li className="nav-item fs-5">
            <a className="nav-link main-text-color link" href="#About">About</a>
          </li>
          <li className="nav-item fs-5">
            <a className="nav-link main-text-color  link" href="#Projects">Projects</a>
          </li>
          <li className="nav-item fs-5">
            <a className="nav-link  main-text-color link" href="#Contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav> 
  )
}

export default Navbar