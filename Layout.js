import { Outlet,Link } from "react-router-dom";
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../../node_modules/bootstrap/dist/js//bootstrap.js'
import './Layout.css'

const Layout=()=>{
    return(
        <>
        <nav class="navbar navbar-expand-lg bg-body-tertiary sticky-top">
  <div class="container-fluid">
    <a class="navbar-brand navhead" href="#">Task</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item me-3">
          <Link to="/Home" className="navli">Home</Link>
        </li>
        <li class="nav- me-3">
          <Link to="/Cong" className="navli">Congrats</Link>
        </li>
        <li class="nav-item me-3"> 
          <Link to="/Super" className="navli">SuperLeague</Link>
        </li>
        <li class="nav-item me-3">
            <Link to="/Notification" className="navli">Notification</Link>
        </li>
        <li class="nav-item me-3">
            <Link to="/Social" className="navli">SocialButton</Link>
        </li>
        <li class="nav-item me-3">
            <Link to="/Login" className="navli">Login</Link>
        </li>
        <li class="nav-item me-3">
            <Link to="/Technology" className="navli">Technology</Link>
        </li>
        <li class="nav-item me-3">
            <Link to="/Count" className="navli">Counter</Link>
        </li>
        <li class="nav-item me-3">
            <Link to="/Fruit" className="navli">Fruits</Link>
        </li>
        <li class="nav-item me-3">
            <Link to="/Rating" className="navli">Rating</Link>
        </li>
        <li class="nav-item me-3">
            <Link to="/DateNew" className="navli">Date</Link>
        </li>
        <li class="nav-item me-3">
            <Link to="/Json1" className="navli">Json</Link>
        </li>
        <li class="nav-item me-3">
            <Link to="/Csv" className="navli">Csv Downloader</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
        <Outlet/>
        </>
    );
}
export default Layout;