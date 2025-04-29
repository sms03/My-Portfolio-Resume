import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, Send, MapPin, CheckCircle2, AlertTriangle } from 'lucide-react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  
  const { ref: sectionRef, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('loading');
    
    // Simulate form submission
    setTimeout(() => {
      // For demonstration purposes, we'll show success
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset form status after 5 seconds
      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="animated-bg animated-circle circle-4"></div>
      
      <div ref={sectionRef} className="section-container relative z-10">
        <h2 className={`section-title ${inView ? 'animate-fadeIn' : 'opacity-0'}`}>
          Get In Touch
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left Side - Contact Information */}
          <div className={`${inView ? 'animate-fadeInUp' : 'opacity-0'}`}>
            <div className="prose mb-8">
              <h3 className="subtitle">Let's Connect!</h3>
              <p className="text-gray-700 mb-6">
                Have a project in mind or want to collaborate? I'd love to hear from you! Fill out the form or contact me directly using the information below.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="card p-6 flex items-start">
                <div className="w-12 h-12 rounded-full bg-portfolio-pastel-pink/20 flex items-center justify-center mr-4 flex-shrink-0">
                  <Mail size={20} className="text-portfolio-pastel-pink" />
                </div>
                <div>
                <div className="break-all">
                  <h4 className="font-medium mb-1">Email</h4>
                  <a href="mailto:shivamsal2000@gmail.com" className="text-portfolio-pastel-blue hover:underline brake-all">
                    shivamsal2000@gmail.com
                  </a>
                  </div>
                </div>
              </div>
              
              <div className="card p-6 flex items-start">
                <div className="w-12 h-12 rounded-full bg-portfolio-pastel-purple/20 flex items-center justify-center mr-4 flex-shrink-0">
                  <MapPin size={20} className="text-portfolio-pastel-purple" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Location</h4>
                  <p className="text-gray-700">Pune, India</p>
                </div>
              </div>
              
              <div className="card p-6 flex items-start">
                <div className="w-12 h-12 rounded-full bg-portfolio-pastel-blue/20 flex items-center justify-center mr-4 flex-shrink-0">
                  <Phone size={20} className="text-portfolio-pastel-blue" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Social Profiles</h4>
                  <div className="flex space-x-3 mt-2">
                    <a 
                      href="https://github.com/sms03" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                      </svg>
                    </a>
                    <a 
                      href="https://behance.net/SMSXART" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M7.803 5.296c.356 0 .672.053.959.15.287.098.53.242.729.437.202.195.353.439.452.738.1.3.15.644.15 1.033 0 .437-.11.803-.33 1.097-.218.294-.54.537-.962.722.578.17 1.02.47 1.319.908.3.437.45.966.45 1.586 0 .5-.096.932-.285 1.29-.188.359-.44.652-.751.874-.31.223-.666.386-1.066.488-.348.09-.728.15-1.126.15H3V5.295h4.803zm-.351 3.716c.369 0 .673-.092.917-.285.242-.19.364-.472.364-.853 0-.216-.04-.394-.119-.54-.08-.146-.187-.264-.326-.351a1.297 1.297 0 0 0-.474-.187 2.684 2.684 0 0 0-.57-.057H4.962v2.273h2.49zm.15 3.95c.2 0 .39-.02.562-.06.174-.04.328-.11.464-.209a.986.986 0 0 0 .326-.374c.08-.159.12-.353.12-.59 0-.474-.144-.816-.435-1.025-.29-.209-.694-.314-1.217-.314h-2.46v2.572h2.64zm9.547-3.121c.785 0 1.43.15 1.936.452.505.3.908.7 1.217 1.204.308.5.523 1.072.645 1.716.08.416.117.836.11 1.271h-6.157c.034.633.21 1.118.526 1.454.316.335.77.504 1.356.504.375 0 .7-.085.973-.255.274-.17.466-.371.578-.603h2.581c-.138.452-.373.874-.707 1.264-.334.39-.743.71-1.226.956-.483.247-1.007.433-1.57.56a7.343 7.343 0 0 1-1.682.187c-.775 0-1.47-.123-2.088-.374a4.447 4.447 0 0 1-1.569-1.064 4.578 4.578 0 0 1-.975-1.647c-.227-.642-.341-1.344-.341-2.109 0-.742.12-1.435.356-2.067.237-.632.578-1.179 1.02-1.64a4.607 4.607 0 0 1 1.608-1.077c.627-.255 1.328-.385 2.101-.385zm.039 1.862c-.518 0-.952.144-1.297.428-.346.285-.563.722-.652 1.312h3.659c-.058-.6-.257-1.035-.594-1.32-.337-.284-.74-.42-1.217-.42zm-2.695-4.773v1.594h4.158V7.03h-4.158z" />
                      </svg>
                    </a>
                    <a 
                      href="https://linkedin.com/in/sms03" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                    <a 
                      href="https://instagram.com/smsxart" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Side - Contact Form */}
          <div className={`${inView ? 'animate-fadeInUp animate-delay-200' : 'opacity-0'}`}>
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-portfolio-pastel-blue/10 rounded-full -mr-20 -mt-20"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-portfolio-pastel-pink/10 rounded-full -ml-16 -mb-16"></div>
              
              {formStatus === 'success' && (
                <div className="absolute inset-0 bg-white z-10 flex flex-col items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4 animate-bounce">
                    <CheckCircle2 size={32} className="text-green-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
                  <p className="text-gray-600 text-center">Your message has been sent successfully.<br />I'll get back to you soon.</p>
                </div>
              )}
              
              {formStatus === 'error' && (
                <div className="absolute inset-0 bg-white z-10 flex flex-col items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mb-4 animate-bounce">
                    <AlertTriangle size={32} className="text-red-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Oops!</h3>
                  <p className="text-gray-600 text-center">Something went wrong while sending your message.<br />Please try again later.</p>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="relative z-0">
                <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium text-gray-700 mb-1 block">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-portfolio-pastel-blue/30 focus:border-portfolio-pastel-blue transition-shadow"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="text-sm font-medium text-gray-700 mb-1 block">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-portfolio-pastel-blue/30 focus:border-portfolio-pastel-blue transition-shadow"
                      placeholder="Your email"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="text-sm font-medium text-gray-700 mb-1 block">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-portfolio-pastel-blue/30 focus:border-portfolio-pastel-blue transition-shadow"
                    placeholder="How can I help you?"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700 mb-1 block">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-portfolio-pastel-blue/30 focus:border-portfolio-pastel-blue transition-shadow"
                    placeholder="Your message here..."
                    rows={5}
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className={`btn-primary w-full flex items-center justify-center ${formStatus === 'loading' ? 'opacity-70 cursor-not-allowed' : ''}`}
                  disabled={formStatus === 'loading'}
                >
                  {formStatus === 'loading' ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message <Send size={18} className="ml-2" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
