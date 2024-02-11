import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div style={{ height: '300px',background:'black' }} className=' w-100 mt-5  '>
      <div className="footer-content d-flex justify-content-between container mt-4">
        <div className="title w-25 mt-5 ">
          <h3 style={{ color: 'white',  textDecoration:'none' }}> <i class="fa-solid fa-paintbrush"></i>
            ART!N</h3>
          <span style={{ color: 'white',  textDecoration:'none' }}>
            Designed and build with all the love in the world by the Bootstrap team with the help of our contributors

          </span><br />
          <span style={{ color: 'white',  textDecoration:'none' }}>Code licensed MIT, docs CC BY 3.0</span><br />
          <span style={{ color: 'white',  textDecoration:'none' }}>Currently v5.3.2</span>
        </div>
        <div className="links d-flex flex-column mt-5">
          <h3 style={{ color: 'white',  textDecoration:'none' }}>Links</h3>
          <Link to={'/'} style={{ color: 'white',  textDecoration:'none' }}>Home</Link>
          <Link to={'/login'} style={{ color: 'white', textDecoration:'none' }}>Login</Link>
          <Link to={'/register'} style={{ color: 'white', textDecoration:'none' }}>Register</Link>
          <Link to={'/categories'} style={{ color: 'white', textDecoration:'none' }}>Categories</Link>

        </div>

        <div className="guides d-flex flex-column mt-5">
          <h3 style={{ color: 'white',  textDecoration:'none' }}>Guides</h3>
          <a style={{ color: 'white' }} className='text-decoration-none' href="">Exibitions</a>
          <a style={{ color: 'white' }} className='text-decoration-none' href="">Artist</a>
          <a style={{ color: 'white' }} className='text-decoration-none' href="">Locations</a>
        </div>
        <div className="contact d-flex flex-column mt-5">
          <h3 style={{ color: 'white',  textDecoration:'none' }}>Contact Us</h3>
          <div className='d-flex'> 
          <input type="text" placeholder='Enter your mail' className='form-control' />
          <button className='btn btn-light ms-2'><i class="fa-solid fa-arrow-right"></i></button>
          </div>          
          <div style={{ color: 'white' }} className="icons mt-3 d-flex justify-content-between">
            <i style={{ height: '50px' }} class="fa-solid fa-envelope fa-2x"></i>
            <i style={{ height: '50px' }} class="fa-brands fa-twitter fa-2x"></i>
            <i style={{ height: '50px' }} class="fa-brands fa-github fa-2x"></i>
            <i style={{ height: '50px' }} class="fa-brands fa-facebook fa-2x"></i>
            <i style={{ height: '50px' }} class="fa-brands fa-instagram fa-2x"></i>
            <i style={{ height: '50px' }} class="fa-brands fa-linkedin fa-2x"></i>

          </div>


        </div>



      </div>
      <p className='text-center mt4' style={{ color: 'white',  textDecoration:'none' }}>Copyright &copy;2024art!n . Build with React.</p>
    </div>
  )
}

export default Footer