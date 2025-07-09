import Link from "next/link";

export default function About() {
   return (
      <div className="font-sans bg-gray-100 text-gray-800">
         {/* Hero Section */}
         <section className="flex flex-col items-ceter justify-center text-center py-16 px-8 bg-gray-100">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
               About SleepTracker
            </h1>
            <p className="text-lg md:text-xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
               Your ultimate companion for traching sleep and improving your
               health
            </p>
         </section>

         {/* Mission Section */}
         <section className="py-16 placeholder-cyan-800 bg-white">
            <h2 className="text-3xl font-bold text-center mb-8">Our Mission</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-center">
               At SleepTracker, we are dedicated to helping you achieve better
               sleep and overall well-being. Our mission is to provide you with
               the tools and insights you need to understand your sleep
               patterns, improve your health, and enhance your quality of life.
            </p>
         </section>

         {/* Features Section */}
         <section className="py-16 px-8 bg-gray-100">
            <h2 className="text-3xl font-bold text-center mb-8">
               Why Choose SleepTracker?
            </h2>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
               <div className="bg-white p-6 rounded-md shadow">
                  <h3 className="text-xl font-bold mb-2">
                     Personalized Insights
                  </h3>
                  <p className="text-gray-600">
                     Receive tailored recommandations to enhance your sleep
                     quality.
                  </p>
               </div>

               <div className="bg-white p-6 rounded-md shadow">
                  <h3 className="text-xl font-bold mb-2">
                     User-Friendly Design
                  </h3>
                  <p className="text-gray-gray-600">
                     Enjoy a sleek and intuitive interface that makes tracking
                     your sleep effortless.
                  </p>
               </div>

               <div className="bg-white p-6 rounded-md shadow">
                  <h3 className="text-xl font-bold mb-2">
                     Comprehensive Tracking
                  </h3>
                  <p className="text-gray-gray-600">
                     Monitor your sleep patterns and identify areas for
                     improvement.
                  </p>
               </div>
            </div>
         </section>

         {/* Story Section */}
         <section className="py-16 px-8 bg-white">
            <h2 className="text-3xl font-bold text-center mb-8">Our Story</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-center">
               SleepTracker was founded by a team of sleep enthusiasts who
               recognized the importance of quality sleep in our fast-paced
               lives. We set out to create a platform that not only tracks your
               sleep but also empowers you with the knowledge and tools to make
               meaningful changes for better health and well-being.
            </p>
         </section>

         {/* Call to Action Section */}
         <section className="py-16 px-8 bg-gray-100 text-center">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
               Join SleepTracker today and take the first step towards better
               sleep and a healthier life.
            </h2>
            <p className="text-lg mb-6 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
               Sign up now and start your journey to improved sleep and
               well-being!
            </p>
            <Link
               href="/sign-up"
               className="inline-block bg-white text-purple-600 hover:text-purple-700 px-6 py-3 rounded-md font-medium shadow-md transition"
            >
               Get Started
            </Link>
         </section>
      </div>
   );
}
