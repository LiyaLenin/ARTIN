import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Header from '../Components/Header';



function Home() {
  return (
    <>
    <Header />
      <div style={{ width: '100%', height: "100vh", }} className='rounded '>
        <div style={{ height: '100%' }} className='container'>
          <div id='homelanding' style={{ height: '100%' }} className="row d-flex justify-content-center  align-items-center">


            <div style={{ backgroundColor: 'white', width: '600px' }} className="col-6 ">


            </div>

            <div className='d-flex justify-content-center' style={{ marginTop: '560px' }}>
              <Link to={'./login'} className='btn btn-dark   ' >EXPLORE NOW <i class="fa-solid fa-arrow-right ms-2"></i></Link>

            </div>

          </div>

        </div>
      </div>

      {/*all projects*/}
      <div className='projects mt-5'>
        <h1 className='text-center mb-5'>COLLECTIONS</h1>
        <marquee behavior="" direction="">
          <div className=" d-flex justify-content-between" >
            <div className="me-5 ms-5" >
              <Card  style={{ width: '18rem' }} >
                <Card.Img variant="top" src="https://i.pinimg.com/564x/f4/6b/92/f46b924c93829734af158a2328d3568b.jpg" />
                <Card.Body>
                  <Card.Title className='text-center'>Paintings</Card.Title>
                  
                  {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
                
              </Card>

            </div>
            <div className="me-5 " >
              
            <Card  style={{ width: '18rem', height:"100%"  }} >
                <Card.Img  style={{height:'455px'}} variant="top" src="https://i.pinimg.com/474x/8a/18/af/8a18afd51066c07e3e5325d63a8dd264.jpg" />
                <Card.Body>
                  <Card.Title className='text-center'>Bottle Art</Card.Title>
                  
                  {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
                
              </Card>


            </div>
            <div className="me-5 " >
            <Card  style={{ width: '18rem', height:"100%"  }} >
                <Card.Img style={{height:'100%'}}className='img-fluid' variant="top" src="https://i.pinimg.com/564x/3e/b2/53/3eb253e09230d88222214fd62461085f.jpg" />
                <Card.Body>
                  <Card.Title className='text-center'>Micro Art</Card.Title>
                  
                  {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
                
              </Card>


            </div>
            <div className="me-5 " >
              <Card  style={{ width: '18rem', height:"100%"  }} >
                <Card.Img style={{height:'100%'}}className='img-fluid' variant="top" src="https://i.pinimg.com/564x/3d/7f/52/3d7f52b150c9d19a1204be9d6d341a56.jpg" />
                <Card.Body>
                  <Card.Title className='text-center'>Hampers</Card.Title>
                  
                  {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
                
              </Card>

            </div>
          </div>
        </marquee>
        <div className="text-center">
<Link to={'/login'}>
            <button  className='btn btn-link'>View more Collections</button>
  
</Link>        </div>
      </div>



    </>
  )
}

export default Home



















