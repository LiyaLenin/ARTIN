import React from 'react'
import { Link } from 'react-router-dom'



function Profile() {


    return (

        <>

            <div className='container-fluid d-flex justify-content-center align-items-center w-100 mt-5  '  >

                <div>
                    <img style={{height:'845px'}} className='img-fluid' src="https://i.pinimg.com/564x/ce/d6/2d/ced62d531204aa0ee7348db0511e9e09.jpg" alt="" />
                </div>

                <div style={{
                    backgroundImage: 'url("https://i.pinimg.com/' +
                        '564x/ce/d6/2d/ced62d531204aa0ee7348db0511e9e09.jpg")', height:'845px'
                }}  className='  shadow p-5 ' id="example-collapse-text">


                    <div style={{width:"500px",height:"500px"}} className='text-center ' >
                        <h2 className='text-light mt-5 '>PROFILE</h2>
                        <label className='text-center'>
    
                            <input style={{ display: 'none' }} type="file" />
                            <img className='rounded-circle ' width={'200px'} height={'200px'} src="https://i.pinimg.com/564x/4e/01/e6/4e01e68431665bf7956c4beeec6c8538.jpg" alt="" />
                        </label>
                        
                        <div className='mt-3'>
                            <input className='form-control' type="text" placeholder='Enter your Github Url' />
    
                        </div>
                        <div className='mt-3'>
                            <input className='form-control mt-3' type="text" placeholder='Enter your LinkedIn Url' />
                        </div>
                        <button className='btn btn-warning mt-3'>UPDATE</button>
                    </div>

                </div>
                <div>
                <img style={{height:'845px'}} className='img-fluid' src="https://i.pinimg.com/564x/ce/d6/2d/ced62d531204aa0ee7348db0511e9e09.jpg" alt="" />
                </div>

            </div>
            <Link className='ms-5' to={'/'} ><i  class="fa-solid fa-arrow-left me-1"></i>Back to Home</Link>

        </>
    )
}

export default Profile