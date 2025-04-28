import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Code, Layers, Brush, Box, Settings } from 'lucide-react';

export const Skills = () => {
  const { ref: sectionRef, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false
  });

  // Technical skills data
  const technicalSkills = [
    { name: 'Coding in Python', level: 85, icon: <Code size={18} />, color: 'from-portfolio-pastel-blue to-portfolio-pastel-purple' },
    { name: 'AI app development', level: 75, icon: <Settings size={18} />, color: 'from-portfolio-pastel-pink to-portfolio-pastel-red' },
    { name: '3D based on Math and Coding', level: 90, icon: <Box size={18} />, color: 'from-portfolio-pastel-green to-portfolio-pastel-blue' },
  ];

  // Software skills data
  const softwareSkills = [
    { name: '3D Software', icon: <Box size={24} />, color: 'bg-portfolio-pastel-blue/20', textColor: 'text-portfolio-pastel-blue' },
    { name: 'Simulation Software', icon: <Layers size={24} />, color: 'bg-portfolio-pastel-pink/20', textColor: 'text-portfolio-pastel-pink' },
    { name: 'Editing and Grading Software', icon: <Brush size={24} />, color: 'bg-portfolio-pastel-purple/20', textColor: 'text-portfolio-pastel-purple' },
    { name: 'Programming tools', icon: <Code size={24} />, color: 'bg-portfolio-pastel-green/20', textColor: 'text-portfolio-pastel-green' },
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="animated-bg animated-circle circle-2"></div>
      
      <div ref={sectionRef} className="section-container relative z-10">
        <h2 className={`section-title ${inView ? 'animate-fadeIn' : 'opacity-0'}`}>
          Skills & Expertise
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Technical Skills */}
          <div className={`${inView ? 'animate-fadeInUp' : 'opacity-0'}`}>
            <h3 className="subtitle mb-6">Technical Skills</h3>
            
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="card p-6 group relative overflow-hidden" style={{animationDelay: `${index * 100}ms`}}>
                  {/* Skill header */}
                  <div className="flex items-center mb-3">
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${skill.color} flex items-center justify-center text-white mr-3`}>
                      {skill.icon}
                    </div>
                    <h4 className="font-medium">{skill.name}</h4>
                  </div>
                  
                  {/* Progress bar */}
                  <div className="h-3 bg-gray-100 rounded-full overflow-hidden relative">
                    <div 
                      className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                      style={{ 
                        width: inView ? `${skill.level}%` : '0%',
                        transition: 'width 1s ease-in-out',
                        transitionDelay: `${index * 200}ms`
                      }}
                    ></div>
                  </div>
                  
                  {/* Skill level */}
                  <div className="flex justify-between mt-2 text-sm text-gray-500">
                    <span>Beginner</span>
                    <span className="font-medium">{skill.level}%</span>
                    <span>Expert</span>
                  </div>
                  
                  {/* Background decoration */}
                  <div 
                    className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full opacity-10 bg-gradient-to-br group-hover:scale-150 transition-transform duration-700"
                    style={{backgroundImage: `linear-gradient(to bottom right, var(--${skill.color.split('-')[1]}), var(--${skill.color.split('-')[3]}))`}}
                  ></div>
                </div>
              ))}
            </div>
            
            {/* Animated decorative code block */}
            <div className={`mt-8 bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm shadow-lg transform ${inView ? 'animate-fadeIn animate-delay-500' : 'opacity-0'}`}>
              <div className="flex items-center mb-2 text-gray-400">
                <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                <span className="ml-2">python-skills.py</span>
              </div>
              <div>
                <span className="text-purple-400">def</span> <span className="text-blue-400">create_portfolio</span><span className="text-yellow-400">(</span><span className="text-orange-400">skills</span><span className="text-yellow-400">):</span>
              </div>
              <div className="pl-4">
                <span className="text-purple-400">return</span> <span className="text-green-400">"Amazing Work"</span> <span className="text-purple-400">if</span> <span className="text-orange-400">skills</span> <span className="text-yellow-400"></span> <span className="text-blue-400">100</span> <span className="text-purple-400">else</span> <span className="text-green-400">"Keep Learning"</span>
              </div>
            </div>
          </div>
          
          {/* Software & Tools */}
          <div className={`${inView ? 'animate-fadeInUp animate-delay-200' : 'opacity-0'}`}>
            <h3 className="subtitle mb-6">Software & Tools</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {softwareSkills.map((skill, index) => (
                <div 
                  key={index}
                  className="card p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  style={{animationDelay: `${index * 100 + 300}ms`}}
                >
                  <div className={`w-16 h-16 rounded-full ${skill.color} flex items-center justify-center mx-auto mb-4`}>
                    <span className={skill.textColor}>{skill.icon}</span>
                  </div>
                  <h4 className="font-medium">{skill.name}</h4>
                </div>
              ))}
            </div>
            
            {/* Skill cloud */}
            <div className={`mt-8 bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md border border-gray-100 ${inView ? 'animate-fadeIn animate-delay-500' : 'opacity-0'}`}>
              <h3 className="text-lg font-medium mb-4">Experience Level</h3>
              
              <div className="flex flex-wrap gap-2">
                {[
                  { name: 'Python', level: 'Expert', color: 'bg-portfolio-pastel-blue/20 text-portfolio-pastel-blue' },
                  { name: 'AI Development', level: 'Advanced', color: 'bg-portfolio-pastel-pink/20 text-portfolio-pastel-pink' },
                  { name: '3D Modeling', level: 'Expert', color: 'bg-portfolio-pastel-purple/20 text-portfolio-pastel-purple' },
                  { name: 'UI Development', level: 'Intermediate', color: 'bg-portfolio-pastel-green/20 text-portfolio-pastel-green' },
                  { name: 'VFX', level: 'Expert', color: 'bg-portfolio-pastel-red/20 text-portfolio-pastel-red' },
                  { name: 'Creative Design', level: 'Advanced', color: 'bg-portfolio-pastel-cream/20 text-gray-700' },
                ].map((item, index) => (
                  <div 
                    key={index} 
                    className={`px-3 py-1.5 rounded-full ${item.color} text-sm font-medium flex items-center`}
                    style={{
                      animationDelay: `${index * 100 + 600}ms`,
                      transform: inView ? 'scale(1)' : 'scale(0)'
                    }}
                  >
                    {item.name}
                    <span className="ml-1.5 px-1.5 py-0.5 bg-white/50 rounded-full text-xs">
                      {item.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Languages */}
            <div className={`mt-8 bg-gradient-to-r from-portfolio-pastel-blue/20 to-portfolio-pastel-purple/20 p-6 rounded-lg ${inView ? 'animate-fadeIn animate-delay-700' : 'opacity-0'}`}>
              <h3 className="text-lg font-medium mb-4">Languages I Speak</h3>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span>English</span>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map(i => (
                      <div 
                        key={i} 
                        className={`w-5 h-5 rounded-full ml-1 ${i <= 5 ? 'bg-portfolio-pastel-blue' : 'bg-gray-200'}`}
                      ></div>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span>Hindi</span>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map(i => (
                      <div 
                        key={i} 
                        className={`w-5 h-5 rounded-full ml-1 ${i <= 5 ? 'bg-portfolio-pastel-pink' : 'bg-gray-200'}`}
                      ></div>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span>Japanese</span>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map(i => (
                      <div 
                        key={i} 
                        className={`w-5 h-5 rounded-full ml-1 ${i <= 3 ? 'bg-portfolio-pastel-purple' : 'bg-gray-200'}`}
                      ></div>
                    ))}
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
