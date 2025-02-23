import React from "react";
import image from "../../assets/Profile.png";


function About() {
  return (
    <div className="pt-20 bg-gray-100 min-h-screen">
      {/* About Me Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">
            About Me
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Profile Image */}
            <div className="w-full md:w-1/3">
              <img
                src={image}
                alt="Saksham Rimal"
                className="rounded-lg shadow-lg"
              />
            </div>

            {/* About Text */}
            <div className="w-full md:w-2/3">
              <p className="text-gray-600 text-lg mb-4">
                Hi, I'm <span className="font-semibold text-blue-500">Saksham Rimal</span>, a passionate Software Engineer with a love for building scalable and efficient solutions. I specialize in web development, mobile development, and cloud technologies.
              </p>
              <p className="text-gray-600 text-lg mb-4">
                With over 5 years of experience in the tech industry, I've worked on a variety of projects, from small startups to large enterprises. My goal is to create software that not only meets user needs but also delivers a seamless and enjoyable experience.
              </p>
              <p className="text-gray-600 text-lg mb-4">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying a good cup of coffee.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            My Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Skill Card 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Web Development</h3>
              <p className="text-gray-600">
                Proficient in building responsive and user-friendly websites using React, Tailwind CSS, and Node.js.
              </p>
            </div>

            {/* Skill Card 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Mobile Development</h3>
              <p className="text-gray-600">
                Experienced in creating cross-platform mobile apps with React Native for seamless user experiences.
              </p>
            </div>

            {/* Skill Card 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Cloud & DevOps</h3>
              <p className="text-gray-600">
                Skilled in deploying and managing applications on cloud platforms like AWS and implementing CI/CD pipelines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            My Experience
          </h2>
          <div className="space-y-8">
            {/* Experience 1 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Software Engineer at Tech Corp</h3>
              <p className="text-gray-600 text-sm mb-2">Jan 2020 - Present</p>
              <p className="text-gray-600">
                Developed and maintained web applications using React and Node.js, ensuring high performance and scalability.
              </p>
            </div>

            {/* Experience 2 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Frontend Developer at Innovate Solutions</h3>
              <p className="text-gray-600 text-sm mb-2">Jun 2018 - Dec 2019</p>
              <p className="text-gray-600">
                Designed and implemented user interfaces for various clients, focusing on usability and accessibility.
              </p>
            </div>

            {/* Experience 3 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Intern at Code Masters</h3>
              <p className="text-gray-600 text-sm mb-2">Jan 2018 - May 2018</p>
              <p className="text-gray-600">
                Assisted in the development of mobile applications using React Native and contributed to backend APIs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;