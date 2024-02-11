import React from 'react'
import { Button, Card } from 'react-bootstrap'
import Header from './Header'


function BottleArt() {
  return (
    <div>
      <Header insideDashboard />
      <div className=" d-flex justify-content-between" >

        <div className="me-5 ms-5 mt-5" >

          <Card style={{ width: '18rem', height: "100%" }} >
            <Card.Img style={{ height: '455px' }} variant="top" src="https://i.pinimg.com/474x/8a/18/af/8a18afd51066c07e3e5325d63a8dd264.jpg" />
            <Card.Body>
              <Card.Title className='text-center'>Bottle Art</Card.Title>


              <div>
                <Link to={'/wishlist'}>
                  <Button className='btn btn-light fs-5 me-5'><i class="fa-solid fa-heart text-danger"></i></Button>

                </Link><Link to={'/cart'} >
                  <Button className='btn btn-light fs-5 ms-5'><i class="fa-solid fa-cart-shopping text-success"></i></Button>

                </Link>            </div>              </Card.Body>

          </Card>


        </div>


      </div>
    </div>
  )
}

export default BottleArt