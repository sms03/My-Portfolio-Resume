import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { CheckCircle2, User } from 'lucide-react';

export const About = () => {
  const { ref: sectionRef, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false
  });

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="animated-bg animated-circle circle-4"></div>
      <div ref={sectionRef} className="section-container relative z-10">
        <h2 className={`section-title ${inView ? 'animate-fadeIn' : 'opacity-0'}`}>About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left side - Image and info box */}
          <div className={`relative ${inView ? 'animate-slideInLeft' : 'opacity-0'}`}>
            <div className="relative">
              <div className="w-full h-80 bg-gradient-to-br from-portfolio-pastel-pink to-portfolio-pastel-purple rounded-lg overflow-hidden relative">
                <div className="absolute inset-2 bg-white/90 backdrop-blur-sm rounded-lg overflow-hidden flex items-center justify-center">
                  <div className="text-center p-8">
                    <User size={48} className="mx-auto mb-4 text-portfolio-pastel-pink" />
                    <h3 className="text-xl font-semibold mb-2">Professional Summary</h3>
                    <p className="text-gray-700 mb-6 text-base sm:text-sm md:text-base lg:text-lg leading-relaxed">
                    Design meets code — expert in 3D, motion graphics, and AI development with strong prompt engineering skills.
                    </p>
                    <div className="flex justify-center space-x-4">
                      <a 
                        href="https://github.com/sms03" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-portfolio-pastel-blue/20 hover:bg-portfolio-pastel-blue/40 transition-colors"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                        </svg>
                      </a>
                      <a 
                        href="https://behance.net/SMSXART" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-portfolio-pastel-pink/20 hover:bg-portfolio-pastel-pink/40 transition-colors"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M7.803 5.296c.356 0 .672.053.959.15.287.098.53.242.729.437.202.195.353.439.452.738.1.3.15.644.15 1.033 0 .437-.11.803-.33 1.097-.218.294-.54.537-.962.722.578.17 1.02.47 1.319.908.3.437.45.966.45 1.586 0 .5-.096.932-.285 1.29-.188.359-.44.652-.751.874-.31.223-.666.386-1.066.488-.348.09-.728.15-1.126.15H3V5.295h4.803zm-.351 3.716c.369 0 .673-.092.917-.285.242-.19.364-.472.364-.853 0-.216-.04-.394-.119-.54-.08-.146-.187-.264-.326-.351a1.297 1.297 0 0 0-.474-.187 2.684 2.684 0 0 0-.57-.057H4.962v2.273h2.49zm.15 3.95c.2 0 .39-.02.562-.06.174-.04.328-.11.464-.209a.986.986 0 0 0 .326-.374c.08-.159.12-.353.12-.59 0-.474-.144-.816-.435-1.025-.29-.209-.694-.314-1.217-.314h-2.46v2.572h2.64zm9.547-3.121c.785 0 1.43.15 1.936.452.505.3.908.7 1.217 1.204.308.5.523 1.072.645 1.716.08.416.117.836.11 1.271h-6.157c.034.633.21 1.118.526 1.454.316.335.77.504 1.356.504.375 0 .7-.085.973-.255.274-.17.466-.371.578-.603h2.581c-.138.452-.373.874-.707 1.264-.334.39-.743.71-1.226.956-.483.247-1.007.433-1.57.56a7.343 7.343 0 0 1-1.682.187c-.775 0-1.47-.123-2.088-.374a4.447 4.447 0 0 1-1.569-1.064 4.578 4.578 0 0 1-.975-1.647c-.227-.642-.341-1.344-.341-2.109 0-.742.12-1.435.356-2.067.237-.632.578-1.179 1.02-1.64a4.607 4.607 0 0 1 1.608-1.077c.627-.255 1.328-.385 2.101-.385zm.039 1.862c-.518 0-.952.144-1.297.428-.346.285-.563.722-.652 1.312h3.659c-.058-.6-.257-1.035-.594-1.32-.337-.284-.74-.42-1.217-.42zm-2.695-4.773v1.594h4.158V7.03h-4.158z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-portfolio-pastel-cream rounded-full opacity-60"></div>
              <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-portfolio-pastel-blue rounded-full opacity-60"></div>
            </div>
          </div>
          {/* Right side - Text content */}
          <div className="flex flex-col">
            <div className={`mb-6 ${inView ? 'animate-fadeIn animate-delay-200' : 'opacity-0'}`}>
              <h3 className="subtitle">Who Am I?</h3>
              <p className="text-content mb-4 text-base md:text-base lg:text-lg leading-relaxed">
                Creative and technically skilled 3D CGI and VFX Artist, Motion Designer, and AI Developer with expertise in prompt engineering. BCA graduate with a strong foundation in computer applications, blending artistic vision with advanced technology to deliver high-impact visuals, animations, and AI-driven solutions.
              </p>
              <p className="text-content mb-4 text-base md:text-base lg:text-lg leading-relaxed">
                With experience working with international clients and brands, I blend technical skills with creative vision to deliver exceptional results across various digital platforms.
              </p>
            </div>
            <div className={`mb-6 ${inView ? 'animate-fadeIn animate-delay-300' : 'opacity-0'}`}>
              <h3 className="subtitle">My Approach</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle2 size={20} className="text-portfolio-pastel-pink mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Blending artistic vision with technical precision for unique outcomes</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 size={20} className="text-portfolio-pastel-pink mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Utilizing advanced 3D modeling techniques for innovative designs</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 size={20} className="text-portfolio-pastel-pink mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Incorporating AI and programming skills into creative workflows</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 size={20} className="text-portfolio-pastel-pink mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Continuous learning and adapting to new techniques and technologies</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
