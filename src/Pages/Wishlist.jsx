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
            <Link to={'/view/1'}><Card.Img  style={{height:"250px"}} variant="top" src= "https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvcGR2YW5nb2doLXNlbGYtcG9ydHJhaXQtbTAxLWpvYjY2MV8yLWwxMDBvNmVmLmpwZw.jpg"
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