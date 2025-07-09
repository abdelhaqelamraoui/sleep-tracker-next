"use client";
export default function Contact() {
   const handleFormSubmit = (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData.entries());
      const mailtoLink = `mailto:support@sleeptracker.com?subject=Message from ${data.name}&body=${data.message}%0A%0AEmail: ${data.email}`;
      window.location.href = mailtoLink;
   };
   return (
      <div className="font-sans bg-gray-100 test-gray-800">
         {/* Hero Section */}
         <section className="flex flex-col items-center justify-center text-center py-16 px-8 bg-gray-100">
            <h1 className="text-4xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent font-bold mb-4 md:text-5xl">
               Contact SleepTracker
            </h1>
            <p className="text-lg md:text-xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
               Have questions or need help? Get in touch with us!
            </p>
         </section>

         {/* Contact Form Section */}
         <section className="py-16 px-8 bg-white">
            <h2 className="text-3xl font-bold text-center mb-8">
               Get in Touch with Us
            </h2>
            <form
               className="max-w-3xl space-y-6 mx-auto"
               onSubmit={handleFormSubmit}
            >
               <div>
                  <label
                     htmlFor="name"
                     className="block text-sm font-medium text-gray-700"
                  >
                     Name
                  </label>
                  <input
                     type="text"
                     id="name"
                     name="name"
                     placeholder="Your Name"
                     className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
                  />
               </div>

               <div>
                  <label
                     htmlFor="email"
                     className="block text-sm font-medium text-gray-700"
                  >
                     Email
                  </label>
                  <input
                     type="email"
                     id="email"
                     name="email"
                     placeholder="my-email@example.com"
                     className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
                  />
               </div>

               <div>
                  <label
                     htmlFor="email"
                     className="block text-sm font-medium text-gray-700"
                  >
                     Message
                  </label>
                  <textarea
                     id="message"
                     name="message"
                     rows={4}
                     className="mt-1 block w-full px-4 py-2 border vorder-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
                     placeholder="Your message here..."
                  ></textarea>
               </div>

               <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:from-purple-600 hover:via-pink-600 hover:to-red-600 text-white px-4 py-2 rounded-md font-medium shadow-md cursor-pointer"
               >
                  Send Message
               </button>
            </form>
         </section>

         {/* Contact Information Section */}
         <section className="py-16 px-8 bg-gray-100">
            <h2 className="text-3xl font-bold text-center mb-8">
               Contact Information
            </h2>

            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
               <div>
                  <h3 className="text-xl font-bold mb-2">Email</h3>
                  <p className="text-gray-600">support@sleeptracker.com</p>
               </div>
               <div>
                  <h3 className="text-xl font-bold mb-2">Phone</h3>
                  <p className="text-gray-600">+1 (123) 456-7890</p>
               </div>
               <div>
                  <h3 className="text-xl font-bold mb-2">Address</h3>
                  <p className="text-gray-600">
                     123 SleepTracker St, Dream City, USA
                  </p>
               </div>
            </div>
         </section>
      </div>
   );
}
