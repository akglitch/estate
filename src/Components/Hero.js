import React from 'react';
import image from '../Images/img7.jpg'


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
          <div class="col-lg-8">
            <div class="p-5 mt-4">
                <h1 class="display-4  font-sans  ">About Us:</h1>
                <h3>Your Trusted Real Estate Partner</h3>
                <p class="lead text-red-800">At Akproperties, we are passionate about helping you achieve your real estate goals. With a team of dedicated professionals, we offer a range of services tailored to meet your unique needs. </p>
                <a href="#y" class="btn btn-outline-dark">Read More</a>
              </div>
          </div>
      </div>
      </div>
        </div>
      
    )
}