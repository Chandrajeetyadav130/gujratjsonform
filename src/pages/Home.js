import { Link ,Outlet} from "react-router-dom"
const Home=()=>{
    return(
        <>
        <h1>Home</h1>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <Link class="nav-link" href="#">Home <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/Signup">Signup</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/Login">Login</Link>
      </li>
      
    </ul>
  </div>
<Outlet/>

</nav>
        </>
    )
}
export default Home