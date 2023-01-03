import { Container } from "@nextui-org/react";
import { gallery } from "./Data";


function Gallery() {
  return(
    
    <Container>


            <div className=" col-md g-1">
                <div className="row gap g-1 ">
                <div className="storyHead">
    <h1>gallery</h1>
  </div>
                {
                  gallery&&
                gallery.map((item) => {
                    return (   
                      <div key={item.id} className="col-lg-3 col-md-4 col-sm-6 col-xs-12" >
                      <div  class="hovereffect">

                      <img loading="lazy" src={item.img} height="300" width="300" alt="gallery" />
                    
                    
                </div>
                         
                  </div>
                
                    )})
                }
                
               
                 </div>
            </div>

            </Container>
           
    )
     
}

export default Gallery;


