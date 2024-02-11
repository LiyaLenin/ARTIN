import React from 'react'
import { Navbar, Container, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header({ insideDashboard }) {
  return (
    <>
      <Navbar expand="lg" style={{ background: 'black' }}>
        <Container>
          <Navbar.Brand >
            <Link to={'/'} style={{ textDecoration: 'none' }} >   <h1 style={{ fontSize: '30px' }} className='fw-bolder text-light'><i style={{ height: '20px' }} class="fa-solid fa-paintbrush"></i>ART!N</h1> </Link> </Navbar.Brand>

          {
            insideDashboard &&
            <div style={{marginLeft:'800px'}} className=' d-flex justify-content-between align-items-center ' >
               <Button className=' '><i class="fa-solid fa-heart text-danger"></i></Button>
              <Button className='ms-5'><i class="fa-solid fa-cart-shopping text-success"></i></Button>
            </div>
            

          }
         
         <div >
<Link to={'/profile'}>
              <button className='btn text-light  fw-bolder'> <i style={{ height: '20px' ,width:'60px'}} class="fa-solid fa-user-pen"></i></button>
  
</Link>          </div>
        </Container>
      </Navbar>

    </>
  )
}

export default Header