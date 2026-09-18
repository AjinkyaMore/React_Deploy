import {Link, NavLink} from "react-router-dom";

function Header() {

  return (
    <>
<nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark" style={{backgroundColor:"#cefbfa"}}>
  <div className="container-fluid">
    {/* <a className="navbar-brand" href="#">React Notes</a> */}
    <Link className="navbar-brand" to={""}>React App</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
          <Link className="nav-link" aria-current="page" to={""} >Home</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact</a>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="videos">Videos</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="btn btn-outline-info" to="aiassistant">ASK AI</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>  
    </>
  )
}
 
export default Header;

