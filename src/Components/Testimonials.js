import React from "react";

function Testimonials() {
  return (
    <div className="min-w-screen min-h-screen bg-gray-50 flex items-center justify-center py-5">
      <div className="w-full bg-white border-t border-b border-gray-200 px-5 py-16 md:py-24 text-gray-800">
        <div className="w-full max-w-6xl mx-auto">
          <div className="text-center max-w-xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold mb-5 text-primary">
              What Our Clients Say
            </h1>
            <h3 className="text-xl mb-5 font-light">
              Hear what our satisfied clients have to say about their
              experience with AK Properties.
            </h3>
            <div className="text-center mb-10">
              <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
              <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
              <span className="inline-block w-40 h-1 rounded-full bg-indigo-500"></span>
              <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
              <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
            </div>
          </div>
          <div className="-mx-3 md:flex items-start">
            <div className="px-3 md:w-1/3">
              <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                <div className="w-full flex mb-4 items-center">
                  <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                    <img
                      src="https://i.pravatar.cc/100?img=1"
                      alt="Client 1"
                    />
                  </div>
                  <div className="flex-grow pl-3">
                    <h6 className="font-bold text-sm uppercase text-gray-600">
                      John Smith
                    </h6>
                  </div>
                </div>
                <div className="w-full">
                  <p className="text-sm leading-tight">
                    <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                      &ldquo;
                    </span>
                    AK Properties made my home buying experience smooth and
                    stress-free. They truly understand the market and provided
                    expert guidance throughout the process.
                    <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                      &rdquo;
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="px-3 md:w-1/3">
              <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                <div className="w-full flex mb-4 items-center">
                  <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                    <img
                      src="https://i.pravatar.cc/100?img=2"
                      alt="Client 2"
                    />
                  </div>
                  <div className="flex-grow pl-3">
                    <h6 className="font-bold text-sm uppercase text-gray-600">
                      Sarah Johnson
                    </h6>
                  </div>
                </div>
                <div className="w-full">
                  <p className="text-sm leading-tight">
                    <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                      &ldquo;
                    </span>
                    AK Properties helped me find the perfect investment
                    property. Their attention to detail and commitment to
                    customer satisfaction are unmatched.
                    <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                      &rdquo;
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="px-3 md:w-1/3">
              <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                <div className="w-full flex mb-4 items-center">
                  <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                    <img
                      src="https://i.pravatar.cc/100?img=3"
                      alt="Client 3"
                    />
                  </div>
                  <div className="flex-grow pl-3">
                    <h6 className="font-bold text-sm uppercase text-gray-600">
                      Emily Davis
                    </h6>
                  </div>
                </div>
                <div className="w-full">
                  <p className="text-sm leading-tight">
                    <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                      &ldquo;
                    </span>
                    I couldn't be happier with my new home from AK Properties.
                    They listened to my needs and found the perfect property for
                    my family.
                    <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                      &rdquo;
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
