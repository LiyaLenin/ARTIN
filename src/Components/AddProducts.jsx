import React from 'react'
import { Link } from 'react-router-dom'

function AddProducts() {
    return (
        <div id=''>
              <Link to={'/admin'} >
                    <button style={{marginLeft:'675px'}}  className='btn btn-light text-danger '>back home!</button>
    
</Link>
            <div className= 'card  p-3 d-flex justify-content-center align-items-center'>
                <h1 className='text-center'>TO ADD PRODUCT</h1>
                <div className="w-50  rounded d-flex justify-content-center align-items-center text-danger  p-2">
                    <form >
                        <div className='mt-2'>
                        <label className='me-5 ' htmlFor="productPrice">Product Image:</label>
                            
                            <label className='text-center'>

                                <input style={{ display: 'none' }} type="file" />
                                <img className=' ms-5' width={'200px'} height={'200px'} src="https://media.istockphoto.com/id/1248723171/vector/camera-photo-upload-icon-on-isolated-white-background-eps-10-vector.jpg?s=170667a&w=0&k=20&c=pZLuIpooFddmg5MShQ7aujwjhad-QZm6DSRv_3qCmWc=" alt="" />
                            </label>
                        </div>
                        <div className="d-flex justify-content-between mt-2 ">
                            <label htmlFor="productName">Product Name:</label>
                            <input className='ms-5'
                                type="text"
                                id="productName"
                                required
                            />
                        </div>
                        <div className="d-flex justify-content-between mt-5" >
                            <label htmlFor="productPrice">Product Price:</label>
                            <input className='ms-5'
                                type="number"
                                id="productPrice"
                                required
                            />
                        </div>
                        <div className="d-flex justify-content-between mt-5">
                            <label htmlFor="productDescription">Product Description:</label>
                            <textarea className='ms-5'
                                id="productDescription"

                                required
                            />
                        </div>
                        <div className="d-flex justify-content-between mt-5 ">
                            <label htmlFor="productName">Product Category:</label>
                            <input className='ms-5'
                                type="text"
                                id="productName"
                                required
                            />
                        </div>
                             
<Link to={'/adminproduct'}>
                            <button className='text-center mt-5' style={{ marginLeft: "150px" }} type="submit">Add Product</button>
    
</Link>                    </form>

                </div>
                <div className="d-flex justify-content-between">

                    <div className="rounded d-flex justify-content-between align-items-center text-danger mb-3 p-2">

                        <div className="d-flex icons align-items-center">


                        </div>
                    </div>
                </div>
                {/* <div className="mt-4">
                    <h1 className='text-center'>TO DELETE PRODUCT</h1>
                    <div className="border rounded d-flex justify-content-between align-items-center text-danger mb-3 p-2">
                        <h5>PRODUCT NAME</h5>
                        <div className="d-flex icons align-items-center">


                            <button className='btn'><i className="fa-solid fa-trash fa-2x"></i></button>
                        </div>
                    </div>



                </div> */}
            </div>
          
        </div>
    )
}

export default AddProducts