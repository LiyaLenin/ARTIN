import React from 'react'
import { Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Header from '../Components/Header';


function Cart() {
   

    return (
   <>
   <Header/>
            <div className='container mt-5'>
              
                    <div className="row mt-5">
                        <div className="col-lg-8">
                            <h3 className='mt-5'>Cart Summery</h3>
                            <table className='table shadow mt-3'>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Product</th>
                                        <th>Image</th>
                                        <th>Quantity</th>
                                        <th>Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                   
                                        <tr >
                                            <th>1</th>
                                            <th>product title</th>
                                            <th><img style={{ height: '100px', width: '100px' }} src="https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvcGR2YW5nb2doLXNlbGYtcG9ydHJhaXQtbTAxLWpvYjY2MV8yLWwxMDBvNmVmLmpwZw.jpg" alt="" /></th>
                                           
                                            <th>$ 10</th>
                                            <th><button  className='btn'><i className='fa-solid fa-trash text-danger'></i></button></th>
                                        </tr>
                                    
                                </tbody>
                            </table>
                            <div className='float-end'>
                                <Button  variant="outline-danger">Empty Cart</Button>{' '}
                                <Link to={'/categories'}><Button   variant="outline-warning">Shop more</Button>{' '}</Link>
                            </div>
                        </div>
                        <div className="col-lg-4 mt-5">
                            <div className='d-flex flex-column border rounded p-4'>
                                <h5>Total Product: <span className='fw-bolder'></span></h5>
                                <h3>Total Amount: <span className='fw-bolder'></span></h3>
                                <hr />
                                <div className='d-grid'>
                                    <button  className='btn btn-success'>CHECKOUT</button>
                                </div>
                            </div>
                        </div>
                    </div> 
                
            </div>
   </>
    )
}

export default Cart