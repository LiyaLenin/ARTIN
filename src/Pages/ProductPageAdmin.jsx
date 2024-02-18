import React from 'react'
import Header from '../Components/Header'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer'






function ProductPageAdmin() {
  return (
    <>
    
    <div style={{marginLeft:'300px'}} className='container mt-5 '>
              
              <div className="row mt-5">
                  <div className="col-lg-8">
                      <h3  className='mt-5 text-center'>Product Details</h3>
                      <table className='table shadow mt-3'>
                          <thead>
                              <tr>
                                  <th>#</th>
                                  <th>Product</th>
                                  <th>Image</th>
                                  <th>Category</th>

                                  <th>PRICE</th>
                                  <th></th>
                              </tr>
                          </thead>
                          <tbody>
                             
                                  <tr >
                                      <th>1</th>
                                      <th>product title</th>
                                      <th><img style={{ height: '100px', width: '100px' }} src="https://i.pinimg.com/564x/f4/6b/92/f46b924c93829734af158a2328d3568b.jpg" alt="" /></th>
                                      <th>Painting</th>

                                      <th>$ 10</th>
                                      <th><button  className='btn'><i className='fa-solid fa-trash text-danger'></i></button></th>
                                  </tr>
                              
                          </tbody>
                      </table>
                      <div className='text-center'>
                          {/* <Button  >Empty Cart</Button>{' '} */}
                          <Link  to={'/addproduct'}><Button  variant="danger">Add more</Button>{' '}</Link>
                      </div>
                  </div>
                 
              </div> 
          
      </div>
     




     











     
  </>
  )
}

export default ProductPageAdmin