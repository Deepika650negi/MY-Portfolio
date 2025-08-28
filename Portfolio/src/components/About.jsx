import React, { useEffect, useRef, useState } from 'react';
import { GraduationCap, Code, Heart } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {

      const currentSection = sectionRef.current;
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              About Me
            </h2>
            <div className="w-24 h-1 bg-blue-900 mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}>
              <div className="bg-gradient-to-br from-blue-900 to-blue-700 rounded-2xl p-8 text-white shadow-2xl">
                <div className="w-32 h-32 bg-white/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Code size={48} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-center mb-4">Frontend Developer</h3>
                <p className="text-center text-blue-100">
                  Crafting digital experiences with passion and precision
                </p>
              </div>
            </div>

            <div className={`transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}>
              <div className="space-y-6">
                <p className="text-gray-700 text-lg leading-relaxed">
                  Hello! I'm Deepika Negi, a passionate Frontend Developer with a Bachelor's degree in 
                  Computer Applications (BCA). I love creating beautiful, functional, and user-friendly 
                  web applications that make a difference.
                </p>
                
                <p className="text-gray-700 text-lg leading-relaxed">
                  My journey in web development started during my BCA studies, where I discovered my 
                  passion for turning creative ideas into interactive digital experiences. I specialize 
                  in modern web technologies and always strive to write clean, maintainable code.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 pt-6">
                  <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-md">
                    <GraduationCap className="text-blue-900" size={24} />
                    <div>
                      <h4 className="font-semibold text-gray-900">Education</h4>
                      <p className="text-sm text-gray-600">BCA Graduate</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-md">
                    <Heart className="text-blue-900" size={24} />
                    <div>
                      <h4 className="font-semibold text-gray-900">Passion</h4>
                      <p className="text-sm text-gray-600">Web Development</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;