import React from 'react'
import Header from '../Components/Header'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'






function AllCategories() {
  return (
    <>
      <Header insideDashboard />
      <div className='d-flex justify-content-between mt-5'>
        <div className="me-5 ms-5" >
          <Card style={{ width: '18rem' }} >
            <Card.Img variant="top" src="https://i.pinimg.com/564x/f4/6b/92/f46b924c93829734af158a2328d3568b.jpg" />
            <Card.Body>
              <Card.Title className='text-center'>Paintings</Card.Title>


              <div>
                <Link to={'/wishlist'}>
                  <Button className='btn btn-light fs-5 me-5'><i class="fa-solid fa-heart text-danger"></i></Button>

                </Link><Link to={'/cart'} >
                  <Button className='btn btn-light fs-5 ms-5'><i class="fa-solid fa-cart-shopping text-success"></i></Button>

                </Link>            </div>
            </Card.Body>

          </Card>

        </div>
        <div className="me-5 " >
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
        <div className="me-5 " >

          <Card style={{ width: '18rem', height: "100%" }} >
            <Card.Img style={{ height: '455px' }} variant="top" src="https://i.pinimg.com/474x/8a/18/af/8a18afd51066c07e3e5325d63a8dd264.jpg" />
            <Card.Body>
              <Card.Title className='text-center'>Bottle Art</Card.Title>


              <div>
                <Link to={'/wishlist'}>
                  <Button className='btn btn-light fs-5 me-5'><i class="fa-solid fa-heart text-danger"></i></Button>

                </Link><Link to={'/cart'} >
                  <Button className='btn btn-light fs-5 ms-5'><i class="fa-solid fa-cart-shopping text-success"></i></Button>

                </Link>            </div>               </Card.Body>

          </Card>


        </div>
        <div className="me-5 " >
          <Card style={{ width: '18rem', height: "100%" }} >
            <Card.Img style={{ height: '460px' }} className='img-fluid' variant="top" src="https://i.pinimg.com/564x/3e/b2/53/3eb253e09230d88222214fd62461085f.jpg" />
            <Card.Body>
              <Card.Title className='text-center'>Micro Art</Card.Title>


              <div>
                <Link to={'/wishlist'}>
                  <Button className='btn btn-light fs-5 me-5'><i class="fa-solid fa-heart text-danger"></i></Button>

                </Link><Link to={'/cart'} >
                  <Button className='btn btn-light fs-5 ms-5'><i class="fa-solid fa-cart-shopping text-success"></i></Button>

                </Link>            </div>
            </Card.Body>

          </Card>


        </div>
      </div>

















































      {/* <div className='d-flex  justify-content-between'>
      <div><BottleArt/></div>
      <div>
      <Paintings/>
     </div>
     <div><MicroArt/></div>
     <div><Hampers/></div>
    </div> */}
    </>
  )
}

export default AllCategories