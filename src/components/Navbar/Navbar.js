
import React from 'react'
import "../Navbar/Navbar.css"

const Navbar = () => {
  return (
    <div className='mother-div'>
         <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container">
                {/* Add the site logo image here */}
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end"  id="navbarNavDropdown">
                <ul class="navbar-nav justify-content-center ">
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Trend</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Feature</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">How To Trade</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Testimonial</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">FAQ</a>
                    </li>
                 </ul>
                <div class="col-md-3 text-end">
                <button type="button" class="btn btn-signin">SIGN IN</button>
                </div>
            </div>
                </div>
        </nav>
    </div>
  )
}

export default Navbar