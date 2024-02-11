import React from 'react'
import { Button, Card } from 'react-bootstrap'
import Header from './Header'


function Hampers() {
  return (
    <div>
      <Header insideDashboard />


      <div className=" d-flex justify-content-between" >

        <div className="me-5 ms-5 mt-5" >
          <Card style={{ width: '18rem', height: "100%" }} >
            <Card.Img style={{ height: '100%' }} className='img-fluid' variant="top" src="https://i.pinimg.com/564x/3d/7f/52/3d7f52b150c9d19a1204be9d6d341a56.jpg" />
            <Card.Body>
              <Card.Title className='text-center'>Hampers</Card.Title>

              <div>
                <Link to={'/wishlist'}>
                  <Button className='btn btn-light fs-5 me-5'><i class="fa-solid fa-heart text-danger"></i></Button>

                </Link><Link to={'/cart'} >
                  <Button className='btn btn-light fs-5 ms-5'><i class="fa-solid fa-cart-shopping text-success"></i></Button>

                </Link>            </div>
            </Card.Body>

          </Card>

        </div>
      </div></div>
  )
}

export default Hampers