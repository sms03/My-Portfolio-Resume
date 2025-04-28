import React from 'react';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Calendar, Award, BookOpen, Code } from 'lucide-react';

export const Education = () => {
  const { ref: sectionRef, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false
  });

  const educationData = [
    {
      degree: "Bachelor's in Computer Application",
      institution: "Pratibha College of Commerce and Computer Studies",
      period: "July 2022 - June 2025",
      gpa: "Avg. SGPA - 9.045",
      icon: <GraduationCap size={24} />,
      color: "bg-portfolio-pastel-pink",
      delay: 200
    },
    {
      degree: "Diploma/Degree in BSc. Interior Designing",
      institution: "INIFD, Deccan",
      period: "July 2018 - June 2021",
      icon: <BookOpen size={24} />,
      color: "bg-portfolio-pastel-purple",
      delay: 400
    }
  ];

  const certifications = [
    {
      title: "Prompt Engineering & Gen AI",
      icon: <Award size={20} />,
      color: "bg-portfolio-pastel-blue/20"
    },
    {
      title: "Google Certified Digital Marketing Expert (DME)",
      icon: <Award size={20} />,
      color: "bg-portfolio-pastel-pink/20"
    },
    {
      title: "Radio Jockey (RJ)",
      icon: <Award size={20} />,
      color: "bg-portfolio-pastel-purple/20"
    },
    {
      title: "Script Writing Course",
      icon: <Award size={20} />,
      color: "bg-portfolio-pastel-green/20"
    },
    {
      title: "Photography and Videography Certification",
      icon: <Award size={20} />,
      color: "bg-portfolio-pastel-blue/20"
    }
  ];

  return (
    <section id="education" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="animated-bg animated-circle circle-3"></div>
      
      <div ref={sectionRef} className="section-container relative z-10">
        <h2 className={`section-title ${inView ? 'animate-fadeIn' : 'opacity-0'}`}>
          Educational Background
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left side - Education Timeline */}
          <div className="md:col-span-2">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-8 bottom-0 w-0.5 bg-gradient-to-b from-portfolio-pastel-pink via-portfolio-pastel-purple to-portfolio-pastel-blue"></div>
              
              {/* Education items */}
              <div className="space-y-12">
                {educationData.map((item, index) => (
                  <div 
                    key={index} 
                    className={`relative pl-14 ${inView ? 'animate-fadeInUp' : 'opacity-0'}`} 
                    style={{ animationDelay: `${item.delay}ms` }}
                  >
                    {/* Timeline dot */}
                    <div className={`absolute left-0 top-0 w-12 h-12 rounded-full ${item.color} flex items-center justify-center text-white z-10`}>
                      {item.icon}
                    </div>
                    
                    {/* Content card */}
                    <div className="card p-6 group hover:border-portfolio-pastel-purple">
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-portfolio-pastel-pink transition-colors">
                        {item.degree}
                      </h3>
                      <div className="flex items-center text-sm text-gray-600 mb-4">
                        <Calendar size={16} className="mr-2" />
                        <span>{item.period}</span>
                      </div>
                      <h4 className="font-medium mb-2">
                        {item.institution}
                      </h4>
                      {item.gpa && (
                        <div className="mt-2 inline-block bg-portfolio-pastel-purple/10 px-3 py-1 rounded-full text-sm font-medium text-portfolio-pastel-purple">
                          {item.gpa}
                        </div>
                      )}
                      
                      {/* Decorative elements */}
                      <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-gradient-to-r from-portfolio-pastel-pink to-portfolio-pastel-purple opacity-20 group-hover:w-8 group-hover:h-8 transition-all"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right side - Certifications */}
          <div className={`${inView ? 'animate-fadeIn animate-delay-500' : 'opacity-0'}`}>
            <div className="sticky top-24">
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-xl font-semibold mb-6 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-portfolio-pastel-blue/20 flex items-center justify-center mr-2">
                    <Award size={18} className="text-portfolio-pastel-blue" />
                  </span>
                  Certifications
                </h3>
                
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <div 
                      key={index} 
                      className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className={`w-10 h-10 rounded-full ${cert.color} flex items-center justify-center mr-3`}>
                        {cert.icon}
                      </div>
                      <span className="text-sm font-medium">{cert.title}</span>
                    </div>
                  ))}
                </div>
                
                {/*<div className="mt-8 pt-6 border-t border-dashed border-gray-200">
                  <h3 className="text-lg font-medium mb-3">Projects</h3>
                  <div className="bg-portfolio-pastel-cream/30 p-4 rounded-lg">
                    <div className="flex items-start">
                      <Code size={18} className="text-portfolio-pastel-red-dark mr-3 mt-1" />
                      <div>
                        <h4 className="font-medium">AI Agents with Google's A2A</h4>
                        <p className="text-sm text-gray-600 mt-1">
                          Currently building AI Agents with Google's A2A with ADK and MCP servers
                        </p>
                        <div className="mt-2">
                          <a href="https://github.com/sms03/StarsSense" className="text-xs text-portfolio-pastel-blue hover:underline">https://github.com/sms03/StarsSense</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>*/}

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
