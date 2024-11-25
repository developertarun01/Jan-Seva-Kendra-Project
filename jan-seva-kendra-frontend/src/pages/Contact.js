import React from "react";

function Contact() {
  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <div className="bg-white shadow-md rounded-lg p-8">
          <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">
            Contact Us
          </h1>
          <p className="text-lg text-gray-700 mb-8 text-center">
            Have questions or need assistance? Reach out to us, and we’ll be happy to help!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-blue-600">
                Contact Information
              </h2>
              <p>
                <strong>Shop Name:</strong> Dezire Online Works
              </p>
              <p>
                <strong>Owner Name:</strong> Tarun Kumar
              </p>
              <p>
                <strong>Address:</strong> Opp. ESI Hospital, New Sharda Nagar, Saharanpur, Uttar Pradesh, India 247001
              </p>
              <p>
                <strong>Mobile No:</strong> <a href="tel:+918218171118" className="text-blue-600 hover:underline">+91 8218171118</a>
              </p>
              <p>
                <strong>Email:</strong> <a href="mailto:dezireonlineworks@gmail.com" className="text-blue-600 hover:underline">dezireonlineworks@gmail.com</a>
              </p>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-semibold text-blue-600 mb-4">
                Send Us a Message
              </h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
                    Your Name:
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-600 outline-none"
                    placeholder="Enter your Full Name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                    Your Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-600 outline-none"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2" htmlFor="message">
                    Your Message:
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-600 outline-none"
                    placeholder="Write your message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-blue-600 text-white font-medium px-6 py-2 rounded-lg hover:bg-blue-700 transition-all"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
