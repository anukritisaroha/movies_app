import {Link} from "react-router-dom";//here we will write link so that on nav bar when we move to any component so go to that comp nd url also change on browser

let nav=()=>{
    return(
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <Link class="navbar-brand" href="#">MoviesRentals</Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" href="#">Home</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" href="#">Customers</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" href="#">Rentals</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}
export default nav; 