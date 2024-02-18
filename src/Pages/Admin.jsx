import React from 'react'
import { Link } from 'react-router-dom';
import { Container, Form, Navbar } from 'react-bootstrap';

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Admin() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <Navbar expand="lg" style={{ background: '#7a5858' }}>
                <Container>
                    <Navbar.Brand >
                        <Link to={'/'} style={{ textDecoration: 'none', color: '#42393b' }} >   <h1 style={{ fontSize: '30px', color: '#42393b' }} className='fw-bolder text-light '><i style={{ height: '20px', color: '#42393b' }} class="fa-solid fa-paintbrush text-light"></i>ART!N</h1> </Link> </Navbar.Brand>


                        <Link to={'/'}>
             <i class="fa-solid fa-gear">logout</i>
  
</Link> 

                </Container>
            </Navbar>




            <div>

                <div>
                    <div style={{ width: '100%', height: '600px', marginBottom: '0px' }} className='rounded '>
                        <div style={{ height: '100%' }} className="">
                            <div id='adminlanding' style={{ height: '100%' }} className="row d-flex justify-content-center  align-items-center">


                                {/* <Form.Label htmlFor="inputPassword5"></Form.Label>
                                <Form.Control style={{ color: '#42393b' }} className='text-center w-50 rounded-4'
                                    type="text"
                                    id="inputPassword5"
                                    aria-describedby="passwordHelpBlock"
                                    placeholder='Even if being an assistant is your passion, sometimes a little motivation is needed to keep you going..'
                                />
                                <Form.Text id="passwordHelpBlock" muted>

                                </Form.Text> */}
                                <h3 id='textadmin'>Welcome to ART!N </h3>
                                <label className='text-center'>
    
                            <input style={{ display: 'none' }} type="file" />
                            <img className='rounded-circle ' width={'200px'} height={'200px'} src="https://cdn2.f-cdn.com/contestentries/1440473/30778261/5bdd02db9ff4c_thumb900.jpg" alt="" />
                        </label>

                                <div className='d-flex justify-content-center' style={{ marginTop: '30px' }}>
                                    <Link onClick={handleShow} className='btn    ' style={{ backgroundColor: '#42393b', color: 'pink' }} >MANAGE YOUR ACCOUNT<i class="fa-solid fa-arrow-right ms-2"></i></Link>

                                </div>
                                <div >


                                    <Offcanvas style={{ height: '300px', marginTop: '300px', width: '250px' }} className='rounded-4' show={show} onHide={handleClose}  >
                                        <Offcanvas.Header closeButton>
                                            <Offcanvas.Title>MANAGE</Offcanvas.Title>
                                        </Offcanvas.Header>
                                        <Offcanvas.Body>
                                            <Link to={'/profile'}>
                                                <button className='btn text-light  ms-5 fw-bolder'> <i style={{ height: '60px', width: '80px', color: '#42393b', fontSize: '50px' }} class="fa-solid fa-user-pen"></i></button>

                                            </Link>
                                            <div>
                                                <div className='projects mt-5'>

                                                    <div className="text-center">

                                                        <Link to={'/addproduct'}>
                                                            <Button variant="outline-dark">MANAGE PRODUCTS</Button>


                                                        </Link>

                                                    </div>
                                                </div>
                                            </div>

                                        </Offcanvas.Body>
                                    </Offcanvas>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
                <div>
                    {/* <div className='projects mt-5'>

                        <div className="text-center">

                            <Link to={'/addproduct'}>
                                <button className='btn btn'></button>


                            </Link>

                        </div>
                    </div> */}
                </div>
            </div>
            <div style={{ height: '300px', background: '#7a5858' }} className=' w-100  '>
                <div className="footer-content d-flex justify-content-between container " >
                    <div className="title w-25 mt-5  text-light">
                        <h3 style={{ color: 'white', textDecoration: 'none' }}> <i class="fa-solid fa-paintbrush"></i>
                            ART!N</h3>
                        <span style={{ color: '', textDecoration: 'none' }}>
                            Designed and build with all the love in the world by the Bootstrap team with the help of our contributors

                        </span><br />
                        <span style={{ color: '', textDecoration: 'none' }}>Code licensed MIT, docs CC BY 3.0</span><br />
                        <span style={{ color: '', textDecoration: 'none' }}>Currently v5.3.2</span>
                    </div>
                    <div className="links d-flex flex-column mt-5">
                        <h3 style={{ color: 'white', textDecoration: 'none' }}>Links</h3>
                        <Link to={'/'} style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
                        <Link to={'/login'} style={{ color: 'white', textDecoration: 'none' }}>Login</Link>
                        <Link to={'/register'} style={{ color: 'white', textDecoration: 'none' }}>Register</Link>

                    </div>

                    <div className="guides d-flex flex-column mt-5">
                        <h3 style={{ color: 'white', textDecoration: 'none' }}>Guides</h3>
                        <a style={{ color: 'white' }} className='text-decoration-none' href="">Exibitions</a>
                        <a style={{ color: 'white' }} className='text-decoration-none' href="">Artist</a>
                        <a style={{ color: 'white' }} className='text-decoration-none' href="">Locations</a>
                    </div>
                    <div className="contact d-flex flex-column mt-5">
                        <h3 style={{ color: 'white', textDecoration: 'none' }}>Contact Us</h3>
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
                <p className='text-center mt4 text-light' style={{ color: '#42393b', textDecoration: 'none' }}>Copyright &copy;2024art!n . Build with React.</p>
            </div>


        </div>


    )
}

export default Admin