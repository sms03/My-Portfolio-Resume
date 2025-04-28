import { useEffect } from 'react';
import { useInView } from '../hooks/react-intersection-observer';
import { Code, ArrowRight, Calendar, Briefcase, ExternalLink, Github } from 'lucide-react';

console.log('Projects component file loaded');

const workExperience = [
  {
    company: 'AlphaAltair Creative Agency NGEN Luxuaries',
    location: 'INDIA',
    period: 'AUGUST 2024 - NOVEMBER 2024',
    role: '3D Motion Graphics Designer',
    current: false,
  },
  {
    company: 'Future House Music',
    location: 'ROTTERDAM',
    period: 'JUNE 2020 - MARCH 2024',
    role: '3D Motion Graphics Designer',
    current: false,
  },
  {
    company: 'GoZone Skimboards',
    location: 'POLAND',
    period: 'MAY 2021 - FEBRUARY 2022',
    role: '3D Motion Graphics Designer',
    current: false,
  },
  {
    company: 'Rareaattic',
    location: 'INDIA',
    period: 'JUNE 2021 - JULY 2022',
    role: '3D Motion Graphics Designer',
    current: false,
  }
];

const artistWork = [
  {
    client: 'ALAN WALKER',
    period: 'DECEMBER 2020 - AUGUST 2021',
    role: '3D Cover Designer'
  },
  {
    client: 'MORGAN J',
    period: 'AUGUST 2021 - SEPTEMBER 2021',
    role: '3D Cover Designer'
  },
  {
    client: 'BCMP',
    period: 'JANUARY 2021 - FEBRUARY 2021',
    role: '3D Cover Designer'
  }
];

const projects = [
  {
    id: 1,
    title: 'Ren3Der',
    description: '3D Quotation Calculator',
    technologies: ['React', 'Typescript'],
    inProgress: true,
    color: 'from-portfolio-pastel-blue to-portfolio-pastel-purple',
    icon: <Code size={20} />,
    link: 'https://ren3der.vercel.app'
  },
  {
    id: 2,
    title: 'SharkSenz',
    description: 'Wanna learn and build an effective startup? Try SharkSenz to learn more.',
    technologies: ['React', 'Typescript', 'Three.js', 'JavaScript', 'WebGL'],
    inProgress: true,
    color: 'from-portfolio-pastel-pink to-portfolio-pastel-red',
    icon: <Briefcase size={20} />,
    link: 'https://github.com/sms03/SharkSenz'
  }
];

export const Projects = () => {
  console.log('Projects component function executed');
  try {
    const { ref: sectionRef, inView } = useInView({
      threshold: 0.05,
      triggerOnce: true,
      rootMargin: '100px 0px'
    });

    useEffect(() => {
      console.log('Projects component mounted');
      return () => console.log('Projects component unmounted');
    }, []);

    useEffect(() => {
      console.log('Projects inView state:', inView);
    }, [inView]);

    return (
      <>
        <div className="w-full h-8 flex items-center justify-center">
          <div className="w-1/2 h-0.5 bg-gradient-to-r from-portfolio-pastel-pink via-portfolio-pastel-purple to-portfolio-pastel-green opacity-60 rounded-full"></div>
        </div>
        <section id="projects" className="py-16 min-h-screen relative overflow-hidden bg-gradient-to-b from-white via-portfolio-pastel-cream to-white">
          {/* Background elements */}
          <div className="animated-bg animated-circle circle-1"></div>
          
          <div ref={sectionRef} className="section-container relative z-10">
            <h2 className="section-title">
              Work Experience & Projects
            </h2>
            
            {/* Brand Work Experience section */}
            <div className="mb-16">
              <div className="flex items-center mb-8">
                <div className="w-10 h-10 rounded-full bg-portfolio-pastel-pink flex items-center justify-center mr-3">
                  <Briefcase size={20} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold">Brand Work, as 3D Motion Graphics Designer</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {workExperience.map((job, index) => (
                  <div 
                    key={index} 
                    className={`card p-5 group hover:bg-portfolio-pastel-blue/5 transition-colors slide-in-up`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="font-semibold group-hover:text-portfolio-pastel-blue transition-colors">
                        {job.company}
                      </h4>
                      <span className="text-xs bg-portfolio-pastel-blue/10 text-portfolio-pastel-blue px-2 py-0.5 rounded-full font-medium">
                        {job.location}
                      </span>
                    </div>
                    
                    <p className="text-sm text-gray-600 mb-2">{job.role}</p>
                    
                    <div className="flex items-center text-xs text-gray-500 mt-auto">
                      <Calendar size={14} className="mr-1" />
                      {job.period}
                    </div>
                    
                    {job.current && (
                      <div className="absolute top-3 right-3 w-2 h-2 bg-green-500 rounded-full"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Artist's Work section */}
            <div className="mb-16">
              <div className="flex items-center mb-8">
                <div className="w-10 h-10 rounded-full bg-portfolio-pastel-purple flex items-center justify-center mr-3">
                  <Code size={20} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold">Artist's Work, as 3D Cover Designer</h3>
              </div>
              
              <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-portfolio-pastel-purple/30 ml-3 hidden md:block"></div>
                
                <div className="space-y-8">
                  {artistWork.map((work, index) => (
                    <div 
                      key={index} 
                      className="md:pl-14 relative slide-in-right"
                      style={{ animationDelay: `${index * 150 + 300}ms` }}
                    >
                      <div className="absolute left-0 top-0 w-7 h-7 rounded-full bg-portfolio-pastel-purple flex items-center justify-center text-white z-10 hidden md:flex">
                        {index + 1}
                      </div>
                      
                      <div className="card p-5 md:p-6 hover:border-portfolio-pastel-purple transition-colors flex flex-col md:flex-row gap-4 items-start md:items-center">
                        <div className="w-7 h-7 rounded-full bg-portfolio-pastel-purple flex items-center justify-center text-white z-10 md:hidden">
                          {index + 1}
                        </div>
                        
                        <div className="flex-grow">
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <h4 className="font-semibold text-lg text-portfolio-pastel-purple">
                              {work.client}
                            </h4>
                            <span className="text-xs bg-portfolio-pastel-purple/10 text-portfolio-pastel-purple px-2 py-1 rounded-full">
                              {work.role}
                            </span>
                          </div>
                          
                          <div className="flex items-center text-xs text-gray-500 mt-2">
                            <Calendar size={14} className="mr-1" />
                            {work.period}
                          </div>
                        </div>
                        
                        <a href="#" className="text-portfolio-pastel-purple hover:underline text-sm font-medium flex items-center whitespace-nowrap">
                          View Work <ArrowRight size={14} className="ml-1" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Projects section */}
            <div>
              <div className="flex items-center mb-8">
                <div className="w-10 h-10 rounded-full bg-portfolio-pastel-green flex items-center justify-center mr-3">
                  <Code size={20} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold">Recent Projects</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                  <div 
                    key={project.id} 
                    className={`card p-6 group relative overflow-hidden border-t-4 border-portfolio-pastel-blue scale-in`}
                    style={{ animationDelay: `${index * 200 + 600}ms` }}
                  >
                    {project.inProgress && (
                      <div className="absolute top-3 right-3 flex items-center">
                        <span className="px-2 py-0.5 text-xs font-medium bg-portfolio-pastel-green/20 text-portfolio-pastel-green rounded-full">
                          Completed
                        </span>
                      </div>
                    )}
                    
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${project.color} flex items-center justify-center text-white mb-4`}>
                      {project.icon}
                    </div>
                    
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-portfolio-pastel-blue transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-sm text-gray-600 mb-4">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.technologies.map((tech, i) => (
                        <span 
                          key={i} 
                          className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex space-x-3 mt-auto">
                      <a href={project.link} className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                        <Github size={16} />
                      </a>
                      <a href={project.link} className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-10 text-center">
                <a href="#contact" className="btn-outline inline-flex items-center">
                  Work With Me <ArrowRight size={18} className="ml-2" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  } catch (err) {
    console.error('Projects component runtime error:', err);
    return <div style={{color: 'red', padding: 20}}>Projects section failed to load. Check the console for details.</div>;
  }
};
