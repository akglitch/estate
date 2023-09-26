import { listing } from "./ListingData";



function Listings() {
return (
  <div className=" col-md g-1">
  <div className="row gap g-1 ">
  <div className="">
  <h1 class="display-6 text-center "> Properties</h1>
  <p className='text-center'>Explore some of our top listings, handpicked for their value, location, and potential</p>
</div>
  {
    listing&&
  listing.map((item) => {
      return (   
        <div key={item.id} className="col-lg-3 col-md-4 col-sm-6 col-xs-12" >
        <div  class="hovereffect">

        <img loading='' src={item.img} height="240" alt="gallery" />
      
        <div class="overlay">
                <h2>{item.name}</h2>
        <p>
          <a href="#hh">Link</a>
        </p>
        
            </div>
  </div>

           
    </div>
  
      )})
  }
  
 
   </div>
</div>
);
}

export default Listings;
