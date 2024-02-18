import React from 'react'
import { Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Header from '../Components/Header';
import Footer from '../Components/Footer';


function Cart() {
   

    return (
   <>
   <Header/>
            <div className='container mt-5'>
              
                    <div className="row mt-5">
                        <div className="col-lg-8">
                            <h3 className='mt-5'>Cart Details</h3>
                            <table className='table shadow mt-3'>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Product</th>
                                        <th>Image</th>
                                        <th>Quantity</th>

                                        <th>PRICE</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                   
                                        <tr >
                                            <th>1</th>
                                            <th>product title</th>
                                            <th><img style={{ height: '100px', width: '100px' }}  src="https://i.pinimg.com/564x/1c/ab/a7/1caba73dbcd796574858773db197dd0f.jpg" alt="" /></th>
                                            <th>3</th>

                                            <th>$ 10</th>
                                            <th><button  className='btn'><i className='fa-solid fa-trash text-danger'></i></button></th>
                                        </tr>
                                    
                                </tbody>
                            </table>
                            <div className='float-end'>
                                {/* <Button  >Empty Cart</Button>{' '} */}
                                <Link to={'/categories'}><Button   variant="danger">Shop more</Button>{' '}</Link>
                            </div>
                        </div>
                        <div className="col-lg-4 mt-5">
                            <div className='d-flex flex-column border rounded p-4'>
                                <h5>PRICE DETAILS</h5>
                                <h3>Total PRICE: <span className='fw-bolder'></span></h3>
                                <hr />
                                <div className='d-grid'>
                                    <button  className='btn btn-dark'>PLACE ORDER</button>
                                </div>
                            </div>
                        </div>
                    </div> 
                
            </div>
<div> 
                {/* <Link className='ms-5  text-center' to={'/'} >For more enquires<i  class="fa-solid fa-arrow-right me-1"></i></Link> */}
                <h4 className='text-center mb-4 mt-5'>FOR MORE ENQUIRES</h4>
<Link to={'/chatbox'} >
                    <button style={{marginLeft:'675px'}}  className='btn btn-light text-danger '>CHATBOT !</button>
    
</Link>

    
</div>
<Footer />
   </>
    )
}

export default Cart