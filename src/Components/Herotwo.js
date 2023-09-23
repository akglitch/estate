
import React from 'react';
import image from '../Images/jpeg-optimizer_gallery2.webp';
import imag from '../Images/gallery6.jpg'

function Herotwo() {
    return ( 
        <div>
          <div className=' container mt-5 mb-5'>
          <h1 class="display-4  font-sans8 mt-  text-center logos">Feel the power of luxury</h1>
          <hr></hr>
          </div>
         
<div class="container my-5">
        <div class="row">

        <div class="col-lg-6">
            <div class="p-5 mt-4">
                <h1 class="display-4  font-sans hover:font-serif logos">H1 Heading</h1>
                <p class="lead text-red-800">Crow's nest schooner ho scallywag hail-shot gabion salmagundi. Doubloon careen code of conduct lugsail hulk ye long clothes. </p>
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
     	<div class="row">
			 
			    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
               
					<div class="box-part text-center">
                        
                        <i class="fa fa-instagram fa-3x" aria-hidden="true"></i>
                        
						<div class="title">
							<h4>Instagram</h4>
						</div>
                        
						<div class="text">
							<span>Lorem ipsum dolor sit amet, id quo eruditi eloquentiam. Assum decore te sed. Elitr scripta ocurreret qui ad.</span>
						</div>
                        
						<a href="#g">Learn More</a>
                        
					 </div>
				</div>	 
				
				 <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
               
					<div class="box-part text-center">
					    
					    <i class="fa fa-twitter fa-3x" aria-hidden="true"></i>
                    
						<div class="title">
							<h4>Twitter</h4>
						</div>
                        
						<div class="text">
							<span>Lorem ipsum dolor sit amet, id quo eruditi eloquentiam. Assum decore te sed. Elitr scripta ocurreret qui ad.</span>
						</div>
                        
						<a href="#h">Learn More</a>
                        
					 </div>
				</div>	 
				
				 <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
               
					<div class="box-part text-center">
                        
                        <i class="fa fa-facebook fa-3x" aria-hidden="true"></i>
                        
						<div class="title">
							<h4>Facebook</h4>
						</div>
                        
						<div class="text">
							<span>Lorem ipsum dolor sit amet, id quo eruditi eloquentiam. Assum decore te sed. Elitr scripta ocurreret qui ad.</span>
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