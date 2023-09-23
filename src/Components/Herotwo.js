
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
          <h1 class="display-6  font-sans8 mt-  text-center h2conclusion">Feel the power of luxury</h1>
          <hr></hr>
          </div>
         
<div class="container my-5">
        <div class="row">

        <div class="col-lg-6">
            <div class="p-5 mt-4">
                <h3 class="display-4  font-sans ">Search for Your Dream Home</h3>
                <p class="lead ">Start your search for your dream home by browsing through our extensive listings. With a wide range of properties to choose from, you're sure to find the one that suits your needs. </p>
                <a href="#y" class="btn btn-outline-dark">Read More</a>
              </div>
          </div>
          <div class="col-lg-6">
            <div className='row' >
            <div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-4 " >
            <img class="w-100 shadow" src={image} alt='herobg' />

            </div>
           
            
            <div class="col-6 col-sm-12 col-md-12 col-lg-6 ">
            <img class="w-100 mt-3 shadow" src={image} alt='herobg' />
            </div>

            <div class="col-6 col-sm-12 col-md-6 col-lg-6" >
            <img class="w-100 mt-3 shadow" src={imag} alt='herobg' />
            </div>
            <div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-4 " >
            <img class="w-100 mt-3 shadow" src={image} alt='herobg' />
          </div>
            </div>
           
          </div>
         
      </div>
      </div>




      <div class="box">
    <div class="container">
    <h1 className='text-center font-sans'>Comprehensive Real Estate Services</h1>
    <p className='text-center'>At Akproperties, we offer a wide range of services to meet all your real estate needs.</p>
     	<div class="row">
			 
			   
				
				 
				
				 <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
               
					<div class="box-part text-center">
                        
          <img className='pngicons' src={png1} alt="pngicon"/>
                        
						<div class="title">
							<h4>Buying a Home</h4>
						</div>
                        
						<div class="text">
							<span>We'll help you find the perfect home, negotiate the best deal, and guide you through the entire buying process.</span>
						</div>
                        
						<a href="#h">Learn More</a>
                        
					 </div>
				</div>	 


        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
               
					<div class="box-part text-center">
					    
          <img className='pngicons' src={png2} alt="pngicon"/>
                    
						<div class="title">
							<h4>Selling a Home</h4>
						</div>
                        
						<div class="text">
							<span>Our expert marketing strategies will ensure your property gets maximum exposure and the best possible sale price.</span>
						</div>
                        
						<a href="#h">Learn More</a>
                        
					 </div>
				</div>	 

        

        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
               
					<div class="box-part text-center">
					    
          <img className='pngicons' src={png3} alt="pngicon"/>
                    
						<div class="title">
							<h4>Property Management</h4>
						</div>
                        
						<div class="text">
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