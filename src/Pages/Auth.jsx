import React from 'react'
import { Link} from 'react-router-dom'
import { Form } from 'react-bootstrap'
import { Navbar, Container, Button } from 'react-bootstrap'
import Footer from '../Components/Footer'


function Auth({ insideRegister }) {


  return (
   <div id='auth'  style={{ width: '100%', height: '100vh' }} >
    {/* <Navbar expand="lg" style={{ background: 'pink' }}>
        <Container>
          <Navbar.Brand >
            <Link to={'/'} style={{ textDecoration: 'none',color:'#42393b' }} >   <h1 style={{ fontSize: '30px'  }} className='fw-bolder text-light'><i style={{ height: '20px',color:'#42393b' }} class="fa-solid fa-paintbrush"></i>ART!N</h1> </Link> </Navbar.Brand>

         
         
         
        </Container>
      </Navbar> */}
    
       
        <div  style={{marginLeft:'700px',width:'600px'}} >
            <div className=' align-items-center'>
              
              <div className="w-75" >
                <div style={{backgroundColor:''}} className="d-flex  align-items-center flex-column" >
               
<Link to={'/'} style={{textDecoration:'none'}}>
                      <h1  className='fw-bolder text-light ' style={{marginTop:'90px',fontSize:'60px'}}><i style={{ height: '41px' }} class="fa-solid fa-paintbrush"></i>ART!N</h1>
  
</Link>                    <h5 className='fw-bolder mt-2 pb-3 text-light'>
                      {insideRegister ? 'Sign up to your account' : 'sign in to your account'}
                    </h5>
                    <Form className='w-100 text-center'>
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
                          <Link to={'/categories'}><button className='btn btn-dark mb-2'>Login  </button></Link>:
                          <p className='text-light'>New User? Click here to <Link className='text-light' to={'/register'}>Register</Link></p>
                        </div>}
                    </Form>
               
  
  
                </div>
              </div>
            
          </div>
        </div>
  
      
   </div>
  )
}

export default Auth