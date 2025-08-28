import React, { useEffect, useRef, useState } from 'react';
import { Code, Palette, Globe, Zap } from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValues, setAnimatedValues] = useState([0, 0, 0, 0]);
 
  const sectionRef = useRef(null);

  const skills = [
    { name: 'HTML', percentage: 90, icon: Globe },
    { name: 'CSS', percentage: 85, icon: Palette },
    { name: 'JavaScript', percentage: 80, icon: Code },
    { name: 'React.js', percentage: 75, icon: Zap }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          
          // Animate progress bars
          const timers = skills.map((skill, index) => {
            let current = 0;
            const increment = skill.percentage / 60; // 60 frames for smooth animation
            
            const timer = setInterval(() => {
              current += increment;
              if (current >= skill.percentage) {
                current = skill.percentage;
                clearInterval(timer);
              }
              
              setAnimatedValues(prev => {
                const newValues = [...prev];
                newValues[index] = Math.round(current);
                return newValues;
              });
            }, 16); // ~60fps
            return timer;
          });

          
          return () => {
            timers.forEach(timer => clearInterval(timer));
          };
        }
      },
      { threshold: 0.3 }
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
    <section id="skills" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              My Skills
            </h2>
            <div className="w-24 h-1 bg-blue-900 mx-auto mb-8"></div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={skill.name}
                    className={`bg-white p-8 rounded-2xl shadow-lg transition-all duration-700 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    <div className="flex items-center mb-6">
                      <div className="bg-blue-100 p-3 rounded-lg mr-4">
                        <Icon className="text-blue-900" size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900">{skill.name}</h3>
                        <span className="text-2xl font-bold text-blue-900">
                          {animatedValues[index]}%
                        </span>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <div className="bg-gray-200 rounded-full h-3 overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-blue-900 to-blue-600 h-full rounded-full transition-all duration-1000 ease-out relative"
                          style={{ 
                            width: `${animatedValues[index]}%`,
                            transitionDelay: `${index * 150}ms`
                          }}
                        >
                          <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Additional Skills */}
            <div className={`bg-white p-8 rounded-2xl shadow-lg transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`} style={{ transitionDelay: '600ms' }}>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Additional Skills & Tools
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  'Git & GitHub',
                  'Vite',
                  'BootStrap',
                  'Tailwind CSS',
                  'Responsive Design',
                  'UI/UX Design',
                  'Problem Solving',
                  'Team Collaboration',
                ].map((skill, index) => (
                  <div
                    key={skill}
                    className={`text-center p-4 bg-gray-50 rounded-lg hover:bg-blue-50 hover:text-blue-900 transition-all duration-300 transform hover:scale-105 ${
                      isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                    }`}
                    style={{ transitionDelay: `${800 + index * 100}ms` }}
                  >
                    <span className="text-sm font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;