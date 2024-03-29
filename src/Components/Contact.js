import React from 'react';

const Contact = () => {
  return (
    <section className=" py-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-gray-600">
              Whether you're buying, selling, or just have a question, our team is here to assist you.
              Reach out to us through any of the following means:
            </p>
            <div className="mt-6">
              <div className="flex items-center mb-2">
              <i className="fa fa-phone-square mr-3" aria-hidden="true"></i>
                <span>Phone: +233 209742331</span>
              </div>
              <div className="flex items-center mb-2">
              <i className="fa fa-envelope mr-3" aria-hidden="true"></i>
                <span>Email: ntirianinakwa@gmail.com</span>
              </div>
              <div className="flex items-center">
              <i className="fa fa-location-arrow mr-3" aria-hidden="true"></i>
                <span>amoah street kumasi, ahodwo</span>
              </div>
            </div>
          </div>
          <div className="p-4">
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-600">Your Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border rounded-md"
                  placeholder="John Doe"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-600">Your Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border rounded-md"
                  placeholder="johndoe@example.com"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-600">Your Message</label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-2 border rounded-md"
                  placeholder="Type your message here..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
