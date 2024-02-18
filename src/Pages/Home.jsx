import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

import Form from 'react-bootstrap/Form';

function Home() {
  return (
    <>
      <Header />
      <div style={{ width: '100%', height: "100vh", }} className='rounded '>
        <div style={{ height: '100%' }} className="">
          <div id='homelanding' style={{ height: '100%' }} className="row d-flex justify-content-center  align-items-center">


          <Form.Label htmlFor="inputPassword5"></Form.Label>
      <Form.Control style={{color:'#42393b' }} className='text-center w-50 rounded-4'
        type="text"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
        placeholder='Art is making something out of nothing and selling it.'
      />
      <Form.Text id="passwordHelpBlock" muted>
        
      </Form.Text>

            <div className='d-flex justify-content-center' style={{ marginTop: '560px' }}>
              <Link to={'./login'} className='btn    ' style={{backgroundColor:'#42393b', color:'pink' }} >EXPLORE NOW <i class="fa-solid fa-arrow-right ms-2"></i></Link>

            </div>

          </div>

        </div>
      </div>

      {/*all projects*/}
      <div className='projects mt-5'>
        <h1  className='text-center mb-5' style={{color:'#42393b' }}>COLLECTIONS</h1>
        {/* <marquee behavior="" direction=""> */}
          <div className=" d-flex justify-content-between" >
            <div id='imgHome' className=" me-5 ms-5" >
              <Card  style={{ width: '18rem'  }} >
                <Card.Img style={{ height: '455px' }}  variant="top" src="https://i.pinimg.com/564x/f2/64/e9/f264e9e65bc4d81883d3275ce4a5e43c.jpg" />
                <Card.Body>
                  <Card.Title style={{color:'#42393b' }} className='text-center'>Paintings</Card.Title>

                  {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>

              </Card>

            </div>
           
            <div id='imgHome' className="me-5 " >
              <Card style={{ width: '18rem', height: "100%" }} >
                <Card.Img style={{ height: '100%' }} className='img-fluid' variant="top" src="https://i.pinimg.com/564x/11/56/36/115636209dd516e6d3eb09a57e2eaac7.jpg" />
                <Card.Body>
                  <Card.Title style={{color:'#42393b' }} className='text-center'>Micro Art</Card.Title>

                  {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>

              </Card>


            </div>
            <div id='imgHome' className="me-5 " >
              <Card style={{ width: '18rem', height: "100%" }} >
                <Card.Img style={{ height: '100%' }} className='img-fluid' variant="top" src="https://i.pinimg.com/564x/43/59/23/435923ed8a42c7b3aba0c6811d4ccbd7.jpg" />
                <Card.Body>
                  <Card.Title style={{color:'#42393b' }} className='text-center'>Hampers</Card.Title>

                  {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>

              </Card>

            </div>
            <div id='imgHome' className="me-5 " >

<Card style={{ width: '18rem', height: "100%" }} >
  <Card.Img style={{ height: '455px' }} variant="top" src="https://i.pinimg.com/564x/d9/06/26/d9062662ea1c26d82248bf0bb749f84a.jpg" />
  <Card.Body>
    <Card.Title style={{color:'#42393b' }} className='text-center'>Bottle Art</Card.Title>

    {/* <Button variant="primary">Go somewhere</Button> */}
  </Card.Body>

</Card>


</div>
          </div>
        {/* </marquee> */}
        <div className="text-center">
          <Link to={'/categories'}>
            <button style={{color:'#42393b',fontSize:'20px', fontFamily:'' }} className='btn btn-link mt-3'>View more Collections</button>

          </Link>
        </div>
      </div>


      <Footer />
    </>
  )
}

export default Home



















