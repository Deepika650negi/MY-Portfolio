import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Eye } from 'lucide-react';
import "./Projects.css";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);

  const [selectedProject, setSelectedProject] = useState(null);

  const sectionRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: "Simon Says Game",
      description: "An interactive memory game built with vanilla JavaScript featuring colorful animations, sound effects, and increasing difficulty levels.",
      fullDescription: "A classic Simon Says game that challenges players to remember and repeat increasingly complex sequences of colors and sounds. Features smooth animations, responsive design, and progressive difficulty scaling.",
      tech: ["HTML", "CSS", "JavaScript"],
      image: "https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg",
      liveLink: "#",
      githubLink: "https://github.com/Deepika650negi/Simon-Says-Game_Project"
    },
    {
      id: 2,
      title: "Interactive Image Gallery",
      description: "A responsive image gallery with lightbox functionality, filtering options, and smooth animations created using JavaScript.",
      fullDescription: "An elegant image gallery featuring lightbox modal views, category filtering, lazy loading, and touch-friendly navigation. Built with vanilla JavaScript and optimized for all devices.",
      tech: ["HTML", "CSS", "JavaScript"],
      image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg",
      liveLink: "#",
      githubLink: "https://github.com/Deepika650negi/Interactive-image-gallery"
    },
    {
      id: 3,
      title: "Weather App",
      description: "A modern weather application built with React.js that provides real-time weather data with beautiful UI and location-based forecasts.",
      fullDescription: "A comprehensive weather application featuring current conditions, 5-day forecasts, location search, and beautiful weather animations. Integrates with OpenWeatherMap API and includes geolocation support.",
      tech: ["React.js", "API", "CSS"],
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg",
      liveLink: "#",
      githubLink: "https://github.com/Deepika650negi/Weather-App/tree/main"
    },
    {
      id: 4,
      title: "Doctor Appointment System",
      description: "A comprehensive full-stack web application for managing doctor appointments with user authentication and admin panel.",
      fullDescription: "A complete appointment management system featuring patient registration, doctor profiles, appointment scheduling, payment integration, and admin dashboard. Built with modern web technologies and secure authentication.",
      tech: ["React.js", "Node.js", "Database"],
      image: "https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg",
      liveLink: "#",
      githubLink: "https://github.com/Deepika650negi/Doctor-Appointment-Website"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              My Projects
            </h2>
            <div className="w-24 h-1 bg-blue-900 mx-auto mb-8"></div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and passion for web development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 overflow-hidden group ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-blue-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <button
                      onClick={() => setSelectedProject(project.id)}
                      className="bg-white text-blue-900 p-3 rounded-full hover:scale-110 transition-transform duration-300"
                    >
                      <Eye size={20} />
                    </button>
                    <a
                      href={project.liveLink}
                      className="bg-white text-blue-900 p-3 rounded-full hover:scale-110 transition-transform duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubLink}
                      className="bg-white text-blue-900 p-3 rounded-full hover:scale-110 transition-transform duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="bg-blue-100 text-blue-900 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Detail Model */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-slideUp">
            {projects.filter(p => p.id === selectedProject).map(project => (
              <div key={project.id}>
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover"
                  />
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 bg-white text-gray-900 w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-100"
                  >
                    ×
                  </button>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{project.title}</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">{project.fullDescription}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span key={tech} className="bg-blue-100 text-blue-900 px-3 py-1 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a
                      href={project.liveLink}
                      className="bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors flex items-center space-x-2"
                    >
                      <ExternalLink size={18} />
                      <span>Live Demo</span>
                    </a>
                    <a
                      href={project.githubLink}
                      className="border border-blue-900 text-blue-900 px-6 py-3 rounded-lg hover:bg-blue-900 hover:text-white transition-colors flex items-center space-x-2"
                    >
                      <Github size={18} />
                      <span>View Code</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}


    </section>
  )
};

export default Projects;