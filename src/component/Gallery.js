import { gallery } from "./Data";




function Gallery() {
  return(
    <div>
     
        <div className="">
            <div className=" col-md g-0">
                <div className="row g-0">
                {gallery.map((item) => {
                    return (
                      <div key={item.mid} className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                      <div class="hovereffect">

                      <img  src={item.img} height="250" alt="gallery" loading="lazy"/>
                    
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
           
        </div>
    </div>
    )
     
}

export default Gallery;


