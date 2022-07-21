function Navbar() {
  return (
    <div className="Navbar">
      <nav>
        <div>
          <a href="/">LogIt</a>
          <button
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navmenu"
          >
            {/* <span className="navbar-toggler-icon"></span> */}
          </button>
          <div id="navmenu">
            <ul>
              <li>
                <a href="/materials">Materials</a>
              </li>
              <li>
                <a href="#">Account</a>
              </li>
              <li>
                <a href="#">Search</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
