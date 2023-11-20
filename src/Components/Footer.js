import React from 'react';







function Footer() {
  return (
<div className=" d-flex flex-column h-50">


<footer className="w-100 py-4 flex-shrink-0">
    <div className="container py-4">
        <div className="row gy-4 gx-5">
        <section className="mb-1 text-center">
            <h3 className='logos  text-white'>AKproperties</h3>
      
        <a
           className="btn  m-1"
           href="#!"
           role="button"
           ><i className="fa fa-twitter-square text-white">twitter</i
          ></a>

       

       
        <a
           className="btn  m-1"
           href="#!"
           role="button"
           ><i className="fa fa-instagram text-white" >instagram</i></a>

      
        <a
           className="btn  m-1"
           href="#!"
           role="button"
           ><i className="fa fa-linkedin-square text-white" >linkedin</i></a>

     
        <a
           className="btn  m-1"
           href="#!"
           role="button"
           ><i className="fa fa-github text-white" >github</i></a>
           <h2 className=' text-sm text-white'>kay@AKproperties.netlify.app|0209742331</h2>
      </section>

      
            </div>
    </div>
</footer>
</div>
              
    


  );
}

export default Footer;
