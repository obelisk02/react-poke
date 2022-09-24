import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({brand}) => {
    return(
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">{brand}</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link to="/" className="nav-link active">Home </Link>
              </li>
              <li class="nav-item">
              <Link to="/about" className="nav-link "> About </Link>
              </li>
              <li class="nav-item">
              <Link to="/404" className="nav-link "> Router </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    )
}


export default Navbar