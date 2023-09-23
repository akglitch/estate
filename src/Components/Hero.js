import React from 'react';
import image from '../Images/background.jpg'


export const Hero = () => {
    return (
        <div>
<div class="container my-5">
        <div class="row">
          <div class="col-lg-4">
            <div className='backgroundpaper'>
            <img class="w-100 shadow" src={image} alt='herobg' />
            </div>
           
          </div>
          <div class="col-lg-6">
            <div class="p-5 mt-4">
                <h1 class="display-4  font-sans  logos">H1 Heading</h1>
                <p class="lead text-red-800">Crow's nest schooner ho scallywag hail-shot gabion salmagundi. Doubloon careen code of conduct lugsail hulk ye long clothes. </p>
                <a href="#y" class="btn btn-outline-dark">Read More</a>
              </div>
          </div>
      </div>
      </div>
        </div>
      
    )
}