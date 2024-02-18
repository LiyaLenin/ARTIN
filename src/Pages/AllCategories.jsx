import React from 'react'
import Header from '../Components/Header'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer'






function AllCategories() {
  return (
    <>
      <Header insideDashboard />
      <div className='row ' style={{ marginTop: '60px', marginLeft: '200px', marginRight: '20px' }}>
        <div className='col-6'>
          <Card style={{ width: '18rem' }}>
            <Link to={'/microart'}>
              <Card.Img variant="top" src="https://i.pinimg.com/564x/1c/ab/a7/1caba73dbcd796574858773db197dd0f.jpg" />

            </Link>     <h4 className='text-center mt-2' style={{ marginTop: '', color: 'black' }}>microart</h4>
            <div>
                <Link to={'/wishlist'}>
                  <Button className='btn btn-light fs-5 me-5'><i class="fa-solid fa-heart text-danger"></i></Button>

                </Link><Link to={'/cart'} >
                  <Button className='btn btn-light fs-5 ms-5'><i class="fa-solid fa-cart-shopping text-success"></i></Button>

                </Link>            </div>
          </Card>
        </div>
        <div className='col-6'>
          <Card style={{ width: '18rem' }}>
            <Link to={'/bottleart'}>
              <Card.Img variant="top" src="https://i.pinimg.com/564x/d3/04/29/d3042909c2a38b582246c27f969785c4.jpg" />

            </Link>       <h4 className='text-center mt-2' style={{ marginTop: '', color: 'black' }}>Bottle art</h4>
            <div>
                <Link to={'/wishlist'}>
                  <Button className='btn btn-light fs-5 me-5'><i class="fa-solid fa-heart text-danger"></i></Button>

                </Link><Link to={'/cart'} >
                  <Button className='btn btn-light fs-5 ms-5'><i class="fa-solid fa-cart-shopping text-success"></i></Button>

                </Link>            </div>
          </Card>
        </div>
        <div className='col-6 mt-5'>
          <Card style={{ width: '18rem' }}>
            <Link to={'/paintings'}>
              <Card.Img variant="top" src="https://i.pinimg.com/564x/a8/78/65/a878658a51870621969582c24d1394a0.jpg" />

            </Link>       <h4 className='text-center mt-2' style={{ marginTop: '', color: 'black' }}>Paintings</h4>
            <div>
                <Link to={'/wishlist'}>
                  <Button className='btn btn-light fs-5 me-5'><i class="fa-solid fa-heart text-danger"></i></Button>

                </Link><Link to={'/cart'} >
                  <Button className='btn btn-light fs-5 ms-5'><i class="fa-solid fa-cart-shopping text-success"></i></Button>

                </Link>            </div>
          </Card>
        </div>
        <div className='col-6 mt-5'>
          <Card style={{ width: '18rem' }}>
            <Link to={'/hampers'}>
              <Card.Img variant="top" src="https://i.pinimg.com/564x/0e/97/24/0e9724b36b3e1929b979aaa758684bc8.jpg" />

            </Link>     <h4 className='text-center mt-2 ' style={{ marginTop: 'px', color: 'black' }}>Hampers</h4>
            <div>
                <Link to={'/wishlist'}>
                  <Button className='btn btn-light fs-5 me-5'><i class="fa-solid fa-heart text-danger"></i></Button>

                </Link><Link to={'/cart'} >
                  <Button className='btn btn-light fs-5 ms-5'><i class="fa-solid fa-cart-shopping text-success"></i></Button>

                </Link>            </div>
          </Card>
        </div>
      </div>




      <Footer />














































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