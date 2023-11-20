
import React from 'react';
import image from '../Images/jpeg-optimizer_gallery2.webp';
import imag from '../Images/gallery6.jpg';
import png1 from '../Images/real-estate.png';
import png2 from '../Images/skyscaper.png';
import png3 from '../Images/business-and-finance.png'; 


function Herotwo() {
    return ( 
        <div>
          <div className=' container mt-5 mb-5'>
          <h1 className="display-6  font-sans8 mt-  text-center h2conclusion">Feel the power of luxury</h1>
          <hr></hr>
          </div>
         
<div className="container my-5">
        <div className="row">

        <div className="col-lg-6">
            <div className="p-5 mt-4">
                <h3 className="display-4  font-sans ">Search for Your Dream Home</h3>
                <p className="lead ">Start your search for your dream home by browsing through our extensive listings. With a wide range of properties to choose from, you're sure to find the one that suits your needs. </p>
                <a href="#y" className="btn btn-outline-dark">Read More</a>
              </div>
          </div>
          <div className="col-lg-6">
            <div className='row' >
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-4 " >
            <img className="w-100 shadow" src={image} alt='herobg' />

            </div>
           
            
            <div className="col-6 col-sm-12 col-md-12 col-lg-6 ">
            <img className="w-100 mt-3 shadow" src={image} alt='herobg' />
            </div>

            <div className="col-6 col-sm-12 col-md-6 col-lg-6" >
            <img className="w-100 mt-3 shadow" src={imag} alt='herobg' />
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-4 " >
            <img className="w-100 mt-3 shadow" src={image} alt='herobg' />
          </div>
            </div>
           
          </div>
         
      </div>
      </div>




      <div className="box">
    <div className="container">
    <h1 className='text-center font-sans'>Comprehensive Real Estate Services</h1>
    <p className='text-center'>At Akproperties, we offer a wide range of services to meet all your real estate needs.</p>
     	<div className="row">
			 
			   
				
				 
				
				 <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
               
					<div className="box-part">
                        
          <img className='pngicons text-center' src={png1} alt="pngicon"/>
                        
						<div className="title">
							<h4 className='text-left'>Buying a Home</h4>
						</div>
                        
						<div className="text">
							<span>We'll help you find the perfect home, negotiate the best deal, and guide you through the entire buying process.</span>
						</div>
                        
						<a href="#h">Learn More</a>
                        
					 </div>
				</div>	 


        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
               
					<div className="box-part ">
					    
          <img className='pngicons text-center' src={png2} alt="pngicon"/>
                    
						<div className="title">
							<h4>Selling a Home</h4>
						</div>
                        
						<div className="text">
							<span>Our expert marketing strategies will ensure your property gets maximum exposure and the best possible sale price.</span>
						</div>
                        
						<a href="#h">Learn More</a>
                        
					 </div>
				</div>	 

        

        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
               
					<div className="box-part ">
					    
          <img className='pngicons text-center' src={png3} alt="pngicon"/>
                    
						<div className="title">
							<h4>Property Management</h4>
						</div>
                        
						<div className="text">
							<span>Let us handle the day-to-day responsibilities of property management, so you can enjoy passive income.</span>
						</div>
                        
						<a href="#h">Learn More</a>
                        
					 </div>
				</div>	 
				
				
      
     


		
			
    </div>
</div>
</div>
        </div>
     );
}

export default Herotwo;