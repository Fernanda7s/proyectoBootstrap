import './Header.css'

function Header() {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container-fluid">
        <a className="navbar-brand custom-brand ms-3 ms-md-4" href="#">
          BOOTSTRAP
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menuNav"
          aria-controls="menuNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="menuNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link custom-link" href="#imagenes">Imágenes</a>
            </li>
            <li className="nav-item">
              <a className="nav-link custom-link" href="#barra">Barra</a>
            </li>
            <li className="nav-item">
              <a className="nav-link custom-link" href="#tarjeta">Tarjeta</a>
            </li>
            <li className="nav-item">
              <a className="nav-link custom-link" href="#iconos">Iconos</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
