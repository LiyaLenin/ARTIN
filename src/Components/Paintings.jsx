import React, { useState } from 'react'
import { Card, Button, Modal, Row, Col } from 'react-bootstrap'
import Header from './Header'
import { Link } from 'react-router-dom'
import Footer from './Footer'


function Paintings() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (


    <>
      <Header insideDashboard />
      




      <div className=" d-flex justify-content-between mt-5 ms-5" >
      <Card style={{ width: '18rem' }}>
            <Link to={'/paintings'}>
              <Card.Img onClick={handleShow} variant="top" src="https://i.pinimg.com/564x/a8/78/65/a878658a51870621969582c24d1394a0.jpg" />

            </Link>       <h4 className='text-center mt-2' style={{ marginTop: '', color: 'black' }}>Paintings</h4>
            <div>
                <Link to={'/wishlist'}>
                  <Button className='btn btn-light fs-5 me-5'><i class="fa-solid fa-heart text-danger"></i></Button>

                </Link><Link to={'/cart'} >
                  <Button className='btn btn-light fs-5 ms-5'><i class="fa-solid fa-cart-shopping text-success"></i></Button>

                </Link>            </div>
          </Card> 

      </div>
      <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title >PRODUCT NAME </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row >
            <Col md={4}>
              <img className='img-fluid' style={{ height: '300px',width:"200px" }} src="https://i.pinimg.com/564x/f4/6b/92/f46b924c93829734af158a2328d3568b.jpg" alt="" />
              <div style={{marginLeft:"0px"}} class="d-flex  justify-content-center text-info mt-3">
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
          </div>
            </Col>
            <Col md={8}>
              <p>Product Details: <span className='fw-bolder' style={{ textAlign: 'justify' }}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, quam! Nobis, odio autem ullam veritatis, ea asperiores id aliquam quod sequi minima adipisci unde ipsam omnis, eius voluptatum repellendus! Exercitationem? </span></p>
              <p>Price: <span className='fw-bolder text-danger'>10</span></p>
            
            </Col>
           
          </Row>
         
        
        </Modal.Body>
        
      </Modal>

      <Footer />
    </>
  )
}

export default Paintings