import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';




function Profile() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };


    return (

        <>

            <div className='d-flex justify-content-center align-items-center w-100 mt-2  '  style={{height:'845px'}} >

                <div>
                    <img style={{height:'845px'}} className='img-fluid' src="https://i.pinimg.com/564x/16/b5/9b/16b59b3295aeed38005bde34a756ce52.jpg" alt=""  rounded />
                </div>

                <div style={{
                    backgroundImage: 'url("https://i.pinimg.com/' +
                        '/564x/16/b5/9b/16b59b3295aeed38005bde34a756ce52.jpg")', height:'845px'
                }}   id="example-collapse-text">


                    <div style={{width:"500px",height:"500px"}} className='text-center ' >
                        <h2 className='text-dark mt-5 '  >PERSONAL INFORMATION</h2>
                        <label className='text-center'>
    
                            <input style={{ display: 'none' }} type="file" />
                            <img className='rounded-circle ' width={'200px'} height={'200px'} src="https://i.pinimg.com/564x/d6/b0/e9/d6b0e94cf891b2448d0ef8bc103c4311.jpg" alt="" />
                        </label>
                        
                        <div className='mt-3'>
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3" >
        <Form.Group  className='ms-3' as={Col} md="4" controlId="validationCustom01">
          <Form.Label  className='text-dark'>First name</Form.Label>
          <Form.Control
            required
            type="text"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group style={{marginLeft:'130px'}} as={Col} md="4" controlId="validationCustom02">
          <Form.Label className='text-dark'
          >Last name</Form.Label>
          <Form.Control
            required
            type="text"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        
      </Row>
      <Row className="mb-3">
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label className='text-dark'>Address</Form.Label>
        <Form.Control  as="textarea" rows={3} />
      </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label className='text-light'>City</Form.Label>
          <Form.Control type="text"  required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label className='text-light'>State</Form.Label>
          <Form.Control type="text"  required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label className='text-light'>Zip</Form.Label>
          <Form.Control type="text"  required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid zip.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      {/* <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        /> */}
              <Button  style={{backgroundColor:'#42393b', color:'pink' }} type="submit">Submit form</Button>
{/* 
      </Form.Group> */}
    </Form> 
    
                        </div>
                       
                     
                    </div>

                </div>
                <div>
                <img style={{height:'845px'}} className='img-fluid' src='https://i.pinimg.com/564x/16/b5/9b/16b59b3295aeed38005bde34a756ce52.jpg' alt="" />
                </div>

            </div>
            <Link className='ms-5' to={'/'} ><i  class="fa-solid fa-arrow-left me-1"></i>Back to Home</Link>
            <Footer />

        </>
    )
}

export default Profile