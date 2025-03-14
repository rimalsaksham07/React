import React from "react";

function Projects() {
  return (
    <div className="pt-20 bg-gray-100 min-h-screen">
      {/* Projects Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
            My Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="https://via.placeholder.com/400x200"
                alt="Project 1"
                className="rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-gray-800 mb-2">E-Commerce Website</h3>
              <p className="text-gray-600 mb-4">
                A fully functional e-commerce website built with React, Node.js, and MongoDB.
              </p>
              <a
                href="#"
                className="text-blue-500 hover:text-blue-600 transition-colors duration-300"
              >
                View Project →
              </a>
            </div>

            {/* Project 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="https://via.placeholder.com/400x200"
                alt="Project 2"
                className="rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Mobile Task Manager</h3>
              <p className="text-gray-600 mb-4">
                A cross-platform task management app built with React Native and Firebase.
              </p>
              <a
                href="#"
                className="text-blue-500 hover:text-blue-600 transition-colors duration-300"
              >
                View Project →
              </a>
            </div>

            {/* Project 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="https://via.placeholder.com/400x200"
                alt="Project 3"
                className="rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Cloud-Based Blog Platform</h3>
              <p className="text-gray-600 mb-4">
                A blog platform deployed on AWS with a CI/CD pipeline for automated deployments.
              </p>
              <a
                href="#"
                className="text-blue-500 hover:text-blue-600 transition-colors duration-300"
              >
                View Project →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;