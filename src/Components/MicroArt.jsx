import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import Header from './Header'
import { Link } from 'react-router-dom'
import { Modal, Row, Col } from 'react-bootstrap'
import Footer from './Footer'





function MicroArt() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Header insideDashboard />

      <div className=" d-flex justify-content-between ms-5 mt-5" >

      <div className='col-6'>
          <Card style={{ width: '18rem' }}>
            <Link to={'/microart'}>
              <Card.Img onClick={handleShow} variant="top" src="https://i.pinimg.com/564x/1c/ab/a7/1caba73dbcd796574858773db197dd0f.jpg" />

            </Link>     <h4 className='text-center mt-2' style={{ marginTop: '', color: 'black' }}>microart</h4>
            <div>
                <Link to={'/wishlist'}>
                  <Button className='btn btn-light fs-5 me-5'><i class="fa-solid fa-heart text-danger"></i></Button>

                </Link><Link to={'/cart'} >
                  <Button className='btn btn-light fs-5 ms-5'><i class="fa-solid fa-cart-shopping text-success"></i></Button>

                </Link>            </div>
          </Card>
        </div>

      </div>
      <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title >PRODUCT NAME </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row >
            <Col md={4}>
              <img className='img-fluid' style={{ height: '300px',width:"200px" }} src="https://i.pinimg.com/564x/3e/b2/53/3eb253e09230d88222214fd62461085f.jpg" alt="" />
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
      </div>
  )
}

export default MicroArt