import "./Navbar.css";

function Navbar() {
  return (
    <div className="Navbar">
      <header>
        <nav>
          <a href="/">FinishLine</a>
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
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
