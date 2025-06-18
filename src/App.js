// React + Tailwind CSS Personal Portfolio with Icons & Images

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FaProjectDiagram, FaBlog, FaTools, FaEnvelope } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between shadow-md">
      <h1 className="text-xl font-bold">Kartik's Profile</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:text-gray-300">Home</Link>
        <Link to="/techstack" className="hover:text-gray-300">Skills</Link>
        <Link to="/projects" className="hover:text-gray-300">Projects</Link>
        <Link to="/blogs" className="hover:text-gray-300">Blogs</Link>
      </div>
    </nav>
  );
}

function Home() {
  return (
    <div className="relative min-h-screen">
      <img
        src="https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=1200"
        alt="workspace"
        className="absolute inset-0 w-full h-full object-cover opacity-30 z-0"
      />
      <div className="relative z-10 p-6 bg-gray-800 bg-opacity-80 text-white min-h-screen">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div>
            <h2 className="text-3xl font-semibold">👋 Hello, I'm Kartik</h2>
            <p className="mt-2">Performance Engineer transitioning to QA/SDET. Passionate about scalable testing, automation, and clean code.</p>
            <p className="mt-2">Career Goal: Build robust automation frameworks and performance testing systems.</p>
          </div>
        </div>

       <div className="mt-10">
  <h3 className="text-2xl font-bold mb-2">About Me</h3>
  <p>I’m Kartik, a performance engineer transitioning into the world of SDET. I completed my <strong>B.Tech in Computer Engineering</strong> from <strong>Birla Insitute of Technology, Mesra</strong> in the year 2023, where I built a strong foundation in systems, algorithms, databases and hands-on project development.</p>
  <p className="mt-2">Professionally, I focus on building scalable automation frameworks and ensuring product reliability through performance and functional testing. I enjoy working at the intersection of performance engineering, manual testing and automation systems — crafting robust test strategies for both APIs and UI workflows.</p>
  <p className="mt-2">Beyond work, I’m a curious traveller who loves <strong>reading</strong>, <strong>gaming</strong>, and <strong>exploring new places</strong>. I’m also an <strong>animal lover</strong> and have volunteered for <strong>animal rescue and awareness causes</strong> — something that keeps me grounded and connected to the community. 🐾</p>
  <p className="mt-2">I’m driven by the belief that great products come from well-tested code, clear collaboration, and continuous learning.</p>
</div>


        <div className="mt-10">
          <h3 className="text-2xl font-bold mb-2">Skills & Tech Stack</h3>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Languages:</strong> Java, Python, Groovy</li>
            <li><strong>Automation:</strong> Selenium, TestNG, Cucumber, RestAssured</li>
            <li><strong>Performance Testing:</strong> JMeter, Gatling</li>
            <li><strong>Monitoring & CI/CD:</strong> Grafana, Jenkins, Docker</li>
            <li><strong>Tools I Use:</strong> GitHub, Postman, ChatGPT</li>
          </ul>
        </div>

        <div className="mt-10">
          <h3 className="text-2xl font-bold mb-2">Connect with Me <FaEnvelope className="inline ml-2" /></h3>
          <ul className="space-y-1">
            <li>Email: kartiksharmajaipur00@gmail.com</li>
            <li>LinkedIn: <a className="text-blue-400 underline" href="https://linkedin.com/in/kartik-sharma-b40761" target="_blank" rel="noopener noreferrer">linkedin.com/in/kartiksharma</a></li>
            <li>GitHub: <a className="text-blue-400 underline" href="https://github.com/Kartik393" target="_blank" rel="noopener noreferrer">github.com/kartiksharma</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function Skills() {
  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen">
      <h2 className="text-2xl font-semibold flex items-center gap-2"><FaTools /> Technical Skills</h2>

      <div className="mt-6 space-y-6">
        <div>
          <h3 className="text-xl font-bold">💻 Languages</h3>
          <p className="mt-1">Java, Groovy, Python — used for writing test scripts, backend validations, and simulations.</p>
        </div>

        <div>
          <h3 className="text-xl font-bold">🧪 Automation Frameworks</h3>
          <p className="mt-1">Selenium, TestNG, JUnit, Cucumber, and RestAssured for end-to-end and API testing with assertions, reports, and BDD syntax.</p>
        </div>

        <div>
          <h3 className="text-xl font-bold">⚡ Performance Testing</h3>
          <p className="mt-1">Load and stress testing using JMeter and Gatling; familiar with thread groups, assertions, and scripting custom test plans.</p>
        </div>

        <div>
          <h3 className="text-xl font-bold">🔧 CI/CD & Monitoring</h3>
          <p className="mt-1">Hands-on with Jenkins pipelines, Docker containerization, and Grafana dashboards for monitoring real-time metrics.</p>
        </div>

        <div>
          <h3 className="text-xl font-bold">📚 Tools & Utilities</h3>
          <p className="mt-1">GitHub, Postman, Jira, MobaXterm, Azure — used across development, collaboration, and debugging phases.</p>
        </div>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div className="p-6 bg-gray-800 text-white min-h-screen">
      <h2 className="text-2xl font-semibold flex items-center gap-2"><FaProjectDiagram /> Projects</h2>
      <div className="grid md:grid-cols-2 gap-4 mt-4">
        <div className="bg-gray-700 rounded-lg p-4">
          <img src="https://opencv.org/wp-content/uploads/2022/05/logo.png" alt="project" className="rounded mb-2 w-[200px] h-auto mx-auto" />
          <h3 className="text-lg font-bold">Sign Language Recognition System</h3>
          <p className="text-sm">Built using ML and OpenCV to translate sign gestures into text.</p>
        </div>
        <div className="bg-gray-700 rounded-lg p-4">
          <img src="https://cucumber.io/img/logo.svg?auto=compress&cs=tinysrgb&w=400" alt="project" className="rounded mb-2 w-[200px] h-auto mx-auto" />
          <h3 className="text-lg font-bold">API Automation Framework</h3>
          <p className="text-sm">Java + RestAssured + Cucumber for BDD-based API validation.</p>
        </div>
        <div className="bg-gray-700 rounded-lg p-4">
          <img src="https://jmeter.apache.org/images/logo.svg" alt="project" className="rounded mb-2 w-[650px] mx-auto" />
          <h3 className="text-lg font-bold">Performance Testing Suite</h3>
          <p className="text-sm">Load testing with JMeter and Gatling, integrated with Grafana.</p>
        </div>
        <div className="bg-gray-700 rounded-lg p-4">
          <img src="https://www.selenium.dev/images/logos/webdriver.svg" alt="project" className="rounded mb-2 w-[200px] h-auto mx-auto" />
          <h3 className="text-lg font-bold">Selenium Automation</h3>
          <p className="text-sm">E2E testing framework using Selenium and TestNG.</p>
        </div>
      </div>
    </div>
  );
}

function Blogs() {
  return (
    <div className="relative min-h-screen">
      <img
        src="https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825_1280.jpg?auto=compress&cs=tinysrgb&w=1200"
        alt="workspace"
        className="absolute inset-0 w-full h-full object-cover opacity-30 z-0"
      />
      <div className="relative z-10 p-6 bg-gray-900 bg-opacity-80 text-white min-h-screen">
        <h2 className="text-2xl font-semibold flex items-center gap-2"><FaBlog /> Blogs</h2>
        <p className="mt-2">Coming soon! Planning blog posts on tech, games, movies or other interesting topic which you will enjoy.</p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/techstack" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
    </Router>
  );
}
