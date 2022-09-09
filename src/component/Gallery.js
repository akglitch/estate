import { gallery } from "./Data";
import { LazyLoadImage } from "react-lazy-load-image-component";





function Gallery() {
  return(
  
            <div className=" col-md g-0">
                <div className="row g-0">
                {
                  gallery&&
                gallery.map((item) => {
                    return (   
                      <div key={item.id} className="col-lg-4 col-md-4 col-sm-6 col-xs-12" >
                      <div  class="hovereffect">
                      <LazyLoadImage src={item.img}
        width={600} height={300}
        alt="Image Alt"
      />
                    
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
           
    )
     
}

export default Gallery;


