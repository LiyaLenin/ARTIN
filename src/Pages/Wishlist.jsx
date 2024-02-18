import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Header from '../Components/Header'


function Wishlist() {
    return (
        <div>
                <Header insideDashboard/>

 <div style={{ marginTop: '60px' }}>
      <Row style={{marginLeft:'30px'}} className='mt-5 container-fluid '>
        <Col className='mb-5' sm={12} md={6} lg={4} xl={3}>
          <Card className='shadow rounded bg-dark' style={{ width: '18rem' }}>
            <Link to={'/view/1'}><Card.Img  style={{height:"250px"}} variant="top"  src="https://i.pinimg.com/564x/1c/ab/a7/1caba73dbcd796574858773db197dd0f.jpg"
            /></Link>
            <Card.Body>
              <Card.Title className='text-light text-center'>Product Title</Card.Title>
  
              <div className='d-flex justify-content-between'>
                <Button  className=''><i className="fa-solid fa-heart-circle-xmark "></i></Button>
<Link to={'/cart'}>
                    <Button   className=''><i className="fa-solid fa-cart-shopping  "></i></Button>
    
</Link>  
              </div>     
               </Card.Body>
          </Card>
        </Col >
        
      </Row>
    </div>
        </div>
    )
}

export default Wishlist