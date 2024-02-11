import React from 'react'
import { Link} from 'react-router-dom'
import { Form } from 'react-bootstrap'
import { Navbar, Container, Button } from 'react-bootstrap'


function Auth({ insideRegister }) {


  return (
   <div >
    <Navbar expand="lg" style={{ background: 'black' }}>
        <Container>
          <Navbar.Brand >
            <Link to={'/'} style={{ textDecoration: 'none' }} >   <h1 style={{ fontSize: '30px' }} className='fw-bolder text-light'><i style={{ height: '20px' }} class="fa-solid fa-paintbrush"></i>ART!N</h1> </Link> </Navbar.Brand>

         
         
         
        </Container>
      </Navbar>
    
      <div style={{ width: '100%', height: '100vh' }} className='d-flex justify-content-center align-items-center '>
       
        <div className="container w-75">
          <Link to={'/'} ><i class="fa-solid fa-arrow-left me-1"></i>Back to Home</Link>
          <div style={{ backgroundColor: 'black ' }} className="card shadow p-5 ">
            <div className='row align-items-center'>
              <div className="col-lg-6">
                <img className='w-75 ' style={{height:'600px'}}  src="https://i.pinimg.com/564x/f3/3c/0d/f33c0d38da4101af72e7ce611aa38b31.jpg" alt="" />
  
              </div>
              <div className="col-lg-6">
                <div className="d-flex  align-items-center flex-column">
                  <h1 className='fw-bolder text-light mt-2'><i style={{ height: '41px' }} class="fa-solid fa-paintbrush"></i>ART!N</h1>
                  <h5 className='fw-bolder mt-2 pb-3 text-light'>
                    {insideRegister ? 'Sign up to your account' : 'sign in to your account'}
                  </h5>
                  <Form className='w-100'>
                    {insideRegister && (<Form.Group className="mb-3" controlId="formBasicName">
                      <Form.Control type="text" placeholder="Enter Username"  />
                    </Form.Group>)
                    }
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
  
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Control type="password" placeholder="Password"  />
                    </Form.Group>
                    {insideRegister ?
  
                      <div >
                       <Link to={'/'}> <button className='btn btn-dark mb-2'> Register</button></Link>
                        <p className='text-light' >Already have an Account?Click here to <Link className='text-light' to={'/login'}>Login</Link></p>
                      </div>
                      :
                      <div >
                        <Link to={'/'}><button className='btn btn-dark mb-2'>Login  </button></Link>:
                        <p className='text-light'>New User? Click here to <Link className='text-light' to={'/register'}>Register</Link></p>
                      </div>}
                  </Form>
  
  
                </div>
              </div>
            </div>
          </div>
        </div>
  
      </div>
   </div>
  )
}

export default Auth