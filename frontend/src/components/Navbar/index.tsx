import { ReactComponent as GithubIcon } from "assets/img/Github.svg";

import './style.css';

function Navbar() {
  return (
    <header>
      <nav className="container">
        <div className="dsmovie-nav-content">
          <a href="/"><h1>DsMovie</h1></a>
          <a href="https://github.com/suhellynaraujo">
            <div className="dsmovie-contact-container">
              <GithubIcon />
              <p className="dsmovie-contact-link">/suhellynaraujo</p>
            </div>
          </a>
        </div>
      </nav>
    </header>
  );
}
export default Navbar;
