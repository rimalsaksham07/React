import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="pt-20 bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Hi, I'm <span className="text-blue-500">Saksham Rimal</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            A passionate Software Engineer who loves building scalable and efficient solutions.
          </p>
          <Link
            to="/about"
            className="inline-block bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-300"
          >
            Learn More About Me
          </Link>
        </div>
      </section>

      {/* Skills/Projects Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            What I Do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Skill/Project Card 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Web Development</h3>
              <p className="text-gray-600">
                Building responsive and user-friendly websites using modern technologies like React, Tailwind CSS, and Node.js.
              </p>
            </div>

            {/* Skill/Project Card 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Mobile Development</h3>
              <p className="text-gray-600">
                Creating cross-platform mobile apps with React Native for seamless user experiences.
              </p>
            </div>

            {/* Skill/Project Card 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Cloud & DevOps</h3>
              <p className="text-gray-600">
                Deploying and managing applications on cloud platforms like AWS and implementing CI/CD pipelines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-blue-500 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Whether it's a website, app, or cloud solution, I'm here to help you bring your ideas to life.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-blue-500 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;