import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Navbar, Container, Button, Card } from 'react-bootstrap'
import Footer from '../Components/Footer'


function Categories() {

  return (
    <div id='categorybg' >
      <Navbar expand="lg" style={{ background: 'pink' }}>
        <Container>
          <Navbar.Brand >
            <Link to={'/'} style={{ textDecoration: 'none' }} >   <h1 style={{ fontSize: '30px', color: '#42393b' }} className='fw-bolder '><i style={{ height: '20px' }} class="fa-solid fa-paintbrush"></i>ART!N</h1> </Link> </Navbar.Brand>




        </Container>
      </Navbar>
      <div className='row ' style={{ marginTop: '60px', marginLeft: '200px', marginRight: '20px' }}>
        <div className='col-6'>
          <Card style={{ width: '18rem' }}>
            <Link to={'/microart'}>
              <Card.Img variant="top" src="https://i.pinimg.com/564x/1c/ab/a7/1caba73dbcd796574858773db197dd0f.jpg" />

            </Link>     <h4 className='text-center' style={{ marginTop: '-34px', color: 'black' }}>microart</h4>
          </Card>
        </div>
        <div className='col-6'>
          <Card style={{ width: '18rem' }}>
            <Link to={'/bottleart'}>
              <Card.Img variant="top" src="https://i.pinimg.com/564x/d3/04/29/d3042909c2a38b582246c27f969785c4.jpg" />

            </Link>       <h4 className='text-center' style={{ marginTop: '-33px', color: 'black' }}>Bottle art</h4>
          </Card>
        </div>
        <div className='col-6 mt-5'>
          <Card style={{ width: '18rem' }}>
            <Link to={'/paintings'}>
              <Card.Img variant="top" src="https://i.pinimg.com/564x/a8/78/65/a878658a51870621969582c24d1394a0.jpg" />

            </Link>       <h4 className='text-center' style={{ marginTop: '-34px', color: 'black' }}>Paintings</h4>
          </Card>
        </div>
        <div className='col-6 mt-5'>
          <Card style={{ width: '18rem' }}>
            <Link to={'/hampers'}>
              <Card.Img variant="top" src="https://i.pinimg.com/564x/0e/97/24/0e9724b36b3e1929b979aaa758684bc8.jpg" />

            </Link>     <h4 className='text-center ' style={{ marginTop: '-33px', color: 'black' }}>Hampers</h4>
          </Card>
        </div>
        <Link to={'/allcategories'}><h6 className=' mt-4' style={{ marginLeft: '350px', fontFamily: '"EB Garamond", serif', color: '#42393b' }}>Click to See All Categories</h6></Link>
      </div>
      <Footer />

    </div>
  )
}

export default Categories