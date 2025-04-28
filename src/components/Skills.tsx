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
    { name: 'Programming Languages', level: 85, icon: <Code size={18} />, color: 'from-portfolio-pastel-blue to-portfolio-pastel-purple' },
    { name: 'Web Development', level: 80, icon: <Settings size={18} />, color: 'from-portfolio-pastel-pink to-portfolio-pastel-red' },
    { name: '3D & Motion Graphics', level: 90, icon: <Box size={18} />, color: 'from-portfolio-pastel-green to-portfolio-pastel-blue' },
  ];

  // Software skills data
  const softwareSkills = [
    { name: '3D Software', icon: <Box size={24} />, color: 'bg-portfolio-pastel-blue/20', textColor: 'text-portfolio-pastel-blue' },
    { name: 'Prompt Engineering', icon: <Layers size={24} />, color: 'bg-portfolio-pastel-pink/20', textColor: 'text-portfolio-pastel-pink' },
    { name: 'Development Tools', icon: <Code size={24} />, color: 'bg-portfolio-pastel-purple/20', textColor: 'text-portfolio-pastel-purple' },
    { name: 'Design Software', icon: <Brush size={24} />, color: 'bg-portfolio-pastel-green/20', textColor: 'text-portfolio-pastel-green' },
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
                <span className="ml-2">portfolio.py</span>
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
            <h3 className="subtitle mb-6">Programming Languages and Frameworks</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="card p-5 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <h4 className="font-medium mb-3">Programming Languages</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-portfolio-pastel-blue/20 text-portfolio-pastel-blue rounded-full text-sm">Python</span>
                  <span className="px-3 py-1 bg-portfolio-pastel-pink/20 text-portfolio-pastel-pink rounded-full text-sm">React with TypeScript</span>
                  <span className="px-3 py-1 bg-portfolio-pastel-purple/20 text-portfolio-pastel-purple rounded-full text-sm">Tailwind CSS</span>
                  <span className="px-3 py-1 bg-portfolio-pastel-green/20 text-portfolio-pastel-green rounded-full text-sm">HTML5, CSS, JS</span>
                  <span className="px-3 py-1 bg-portfolio-pastel-blue/20 text-portfolio-pastel-blue rounded-full text-sm">Jupyter Notebook</span>
                  <span className="px-3 py-1 bg-portfolio-pastel-purple/20 text-portfolio-pastel-purple rounded-full text-sm">Git</span>
                </div>
              </div>
              
              <div className="card p-5 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <h4 className="font-medium mb-3">Tools and 3D Software</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-portfolio-pastel-blue/20 text-portfolio-pastel-blue rounded-full text-sm">Blender</span>
                  <span className="px-3 py-1 bg-portfolio-pastel-pink/20 text-portfolio-pastel-pink rounded-full text-sm">Cinema4D × Octane</span>
                  <span className="px-3 py-1 bg-portfolio-pastel-purple/20 text-portfolio-pastel-purple rounded-full text-sm">Unreal Engine</span>
                  <span className="px-3 py-1 bg-portfolio-pastel-green/20 text-portfolio-pastel-green rounded-full text-sm">Embergen</span>
                  <span className="px-3 py-1 bg-portfolio-pastel-red/20 text-portfolio-pastel-red rounded-full text-sm">Adobe Suite</span>
                </div>
              </div>
            </div>
            
            {/* Projects section */}
            {/* 
            <div className="mt-8 bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-lg font-medium mb-4">Current Projects</h3>
              
              <ul className="space-y-3">
              <li className="flex items-start">
                <span className="w-2 h-2 mt-2 rounded-full bg-portfolio-pastel-blue mr-2"></span>
                <div>
                <a href="https://ren3der.vercel.app" className="font-medium text-portfolio-pastel-pink hover:underline">Ren3Der</a>
                <p className="text-sm text-gray-600">3D Quotation Calculator</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 mt-2 rounded-full bg-portfolio-pastel-pink mr-2"></span>
                <div>
                <a href="https://github.com/sms03/SharkSenz" className="font-medium text-portfolio-pastel-blue hover:underline">StarsSenz</a>
                <p className="text-sm text-gray-600">Wanna learn and build an effective startup? Try SharkSenz to learn more.</p>
                </div>
              </li>
              </ul>
            </div>
            */}
            
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
