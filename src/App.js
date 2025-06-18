// React + Tailwind CSS Personal Portfolio with Icons & Images

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FaProjectDiagram, FaBlog, FaTools, FaEnvelope } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between shadow-md">
      <h1 className="text-xl font-bold">Kartik's Portfolio</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:text-gray-300">Home</Link>
        <Link to="/techstack" className="hover:text-gray-300">Tech Stack</Link>
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
          <p>I’m a curious engineer who enjoys building test strategies and frameworks that scale. With a strong foundation in both backend systems and automation tools, I strive to continuously learn and evolve as an SDET.</p>
        </div>

        <div className="mt-10">
          <h3 className="text-2xl font-bold mb-2">Connect with Me <FaEnvelope className="inline ml-2" /></h3>
          <ul className="space-y-1">
            <li>Email: kartik.sharma@email.com</li>
            <li>LinkedIn: <a className="text-blue-400 underline" href="https://linkedin.com/in/kartik-sharma-b40761" target="_blank" rel="noopener noreferrer">linkedin.com/in/kartiksharma</a></li>
            <li>GitHub: <a className="text-blue-400 underline" href="https://github.com/Kartik393" target="_blank" rel="noopener noreferrer">github.com/kartiksharma</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function TechStack() {
  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen">
      <h2 className="text-2xl font-semibold flex items-center gap-2"><FaTools /> Tech Stack</h2>
      <ul className="list-disc list-inside mt-2 space-y-1">
        <li><strong>Languages:</strong> Java, Python, Scala</li>
        <li><strong>Frameworks:</strong> Selenium, TestNG, Cucumber, RestAssured, JMeter, Gatling</li>
        <li><strong>Tools:</strong> Jenkins, Docker, Grafana</li>
      </ul>
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
        src="https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=1200"
        alt="workspace"
        className="absolute inset-0 w-full h-full object-cover opacity-30 z-0"
      />
      <div className="relative z-10 p-6 bg-gray-900 bg-opacity-80 text-white min-h-screen">
        <h2 className="text-2xl font-semibold flex items-center gap-2"><FaBlog /> Blogs</h2>
        <p className="mt-2">Coming soon! Planning posts on performance testing, automation strategies, and career tips.</p>
        <img src="https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825_1280.jpg" alt="blog" className="mt-4 rounded-xl shadow" />
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
        <Route path="/techstack" element={<TechStack />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
    </Router>
  );
}
