function Navbar() {
  const navs = [
    {
      id: "1",
      nav: "Home",
    },
    {
      id: "2",
      nav: "About",
    },
    {
      id: "3",
      nav: "Contact",
    },
  ];

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark ">
        <div className="container">
          <a className="navbar-brand text-light" href="#">
            Emre SEFEROĞLU
          </a>
          <button
            className="navbar-toggler text-bg-secondary"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              {navs.map(({ nav, id }) => (
                <li key={id} className="nav-item">
                  <a className="nav-link text-light" href="#">
                    {nav}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
