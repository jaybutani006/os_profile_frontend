import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Header = ({avtar}) => {
    const navigate = useNavigate();
  return (
    <nav style={{zIndex: 100}} class="navbar navbar-expand-lg navbar-light bg-light">
  <Link class="navbar-brand" to="/">CredibleCode</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <Link class="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
      </li>
      {/* <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li> */}
      {/* <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li> */}
    </ul>
    <form class="form-inline my-2 my-lg-0">
      {/* <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" /> */}
                  <button onClick={() => { navigate('/login') }} class="btn btn-outline-success my-2 my-sm-0">Logout</button>
                  {avtar
                      && < img src={avtar} alt="" height="50px" width="50px" style={{ borderRadius: "50%", marginLeft: "15PX" }}/>}
    </form>
  </div>
</nav>
  )
}

export default Header
