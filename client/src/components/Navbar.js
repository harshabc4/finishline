function Navbar() {
  return (
    <div className="Navbar">
      <nav>
        <div>
          <a href="/">FinishLine</a>

          <div id="navmenu">
            <ul>
              <li>
                <a href="/materials">Projects</a>
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
