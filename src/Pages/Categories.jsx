import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Navbar, Container, Button } from 'react-bootstrap'



function Categories() {
  const navigate =useNavigate()

  const handlePainting=()=>{
    navigate('/paintings')
  }
  const handleMicroArt=()=>{
    navigate('/microart')
  }
  const handleBottleArt=()=>{
    navigate('/bottleart')
  }
  const handleHampers=()=>{
    navigate('/hampers')
  }
  return (
   <>
    <Navbar expand="lg" style={{ background: 'black' }}>
        <Container>
          <Navbar.Brand >
            <Link to={'/'} style={{ textDecoration: 'none' }} >   <h1 style={{ fontSize: '30px' }} className='fw-bolder text-light'><i style={{ height: '20px' }} class="fa-solid fa-paintbrush"></i>ART!N</h1> </Link> </Navbar.Brand>

         
         
         
        </Container>
      </Navbar>
   <div className='row '  style={{marginTop:'60px' ,marginLeft:'200px' ,marginRight:'20px'}}>
   <div  className="col-6 "  ><button onClick={handlePainting} className='btn btn-dark w-50' style={{height:'200px'}} >Painting </button></div>

    <div  className="col-6 "  > <button onClick={handleMicroArt} className='btn btn-dark w-50' style={{height:'200px'}} >Micro Art </button></div>
    <div  className="col-6 "   ><button onClick={handleBottleArt} className='btn btn-dark w-50 mt-5' style={{height:'200px'}} >Bottle Art</button></div>
    <div  className="col-6 "   > <button onClick={handleHampers} className='btn btn-dark w-50 mt-5' style={{height:'200px'}} >Hampers </button></div>
    
   </div>
   <div   style={{marginTop:'60px' ,marginLeft:'544px' ,marginRight:'20px'}}>
<Link to={"/allcategories"}>
        <div   > <button className='btn btn-dark' style={{width:"300px", height:'200px'}} >All Categories </button></div>
    
</Link>    
   </div>
   
   </>
  )
}

export default Categories