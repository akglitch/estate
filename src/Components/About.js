
function About() {
    return ( 
        <div>
     
      
     <section className="bg-gray-200 py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-semibold mb-4 text-primary">
            Welcome to AK Properties
          </h1>
          <p className="text-lg text-gray-600">
            Your Trusted Partner in Real Estate
          </p>
        </div>
      </section>
             
        {/* About Us Section */}
      <section className="bg-gray-200 py-16">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:space-x-8">
            {/* Vision Column */}
            <div className="bg-white p-8 rounded-lg shadow-lg mb-8 md:mb-0">
              <img
                className="w-36 h-36 mx-auto mb-4 rounded-full"
                src="vision-image.jpg" // Replace with your vision image URL
                alt="Vision"
              />
              <h2 className="text-xl font-semibold mb-4">Our Vision</h2>
              <p className="text-gray-600">
                We aspire to transform the real estate industry by providing
                innovative solutions that simplify property transactions and
                help people find their dream homes effortlessly.
              </p>
            </div>

            {/* Approach Column */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <img
                className="w-36 h-36 mx-auto mb-4 rounded-full"
                src="approach-image.jpg" // Replace with your approach image URL
                alt="Approach"
              />
              <h2 className="text-xl font-semibold mb-4">Our Approach</h2>
              <p className="text-gray-600">
                Our approach is built on trust, integrity, and personalized
                service. We work closely with our clients to understand their
                unique needs and provide tailored solutions that make their
                real estate journey smooth and enjoyable.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container my-5">
        <div className="row">
          {/* Process Column */}
          <div className="col-lg-4 order-first md:order-last">
            <img
              className="w-100 h-auto shadow-lg"
              src="process-image.jpg" // Replace with your process image URL
              alt="Process"
            />
          </div>
          <div className="col-lg-8">
            <div className="p-5 mt-4">
              <h1 className="display-4 font-sans">Our Process</h1>
              <p className="lead">
                Our process is designed to make your real estate journey
                seamless. From property search to closing the deal, we guide
                you every step of the way, ensuring that your experience is
                stress-free and satisfying.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
     );
}

export default About;