import React from 'react'
import { Card ,Button} from 'react-bootstrap'
import Header from './Header'
import { Link } from 'react-router-dom'


function Paintings() {
  return (
    

    <>
        <Header insideDashboard/>

    
    
    
    
    <div className=" d-flex justify-content-between" >
    <div className="me-5 ms-5 mt-5" >
      <Card  style={{ width: '18rem' }} >
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
  
  </div></>
  )
}

export default Paintings