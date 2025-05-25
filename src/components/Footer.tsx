
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-t from-slate-900 to-slate-900/90 border-t border-slate-700/50 py-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <div className="mb-12">
              <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
                Mohd Danish
              </h3>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                Full-Stack Developer passionate about creating amazing digital experiences 
                and building the future of web technology.
              </p>
            </div>

            <div className="mb-12">
              <p className="text-slate-400 mb-6 text-lg">Let's connect and build something amazing together</p>
              <div className="flex justify-center space-x-6">
                <a 
                  href="https://github.com/danishmalik419" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group bg-slate-800/50 border border-slate-700/50 p-4 rounded-xl text-slate-400 hover:text-white hover:border-blue-500/50 hover:bg-slate-800/80 transition-all duration-300 backdrop-blur-sm"
                >
                  <Github className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/mohd-danish-b233ba277/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group bg-slate-800/50 border border-slate-700/50 p-4 rounded-xl text-slate-400 hover:text-white hover:border-blue-500/50 hover:bg-slate-800/80 transition-all duration-300 backdrop-blur-sm"
                >
                  <Linkedin className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                </a>
                <a 
                  href="mailto:danissh419@gmail.com"
                  className="group bg-slate-800/50 border border-slate-700/50 p-4 rounded-xl text-slate-400 hover:text-white hover:border-blue-500/50 hover:bg-slate-800/80 transition-all duration-300 backdrop-blur-sm"
                >
                  <Mail className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                </a>
              </div>
            </div>

            <div className="border-t border-slate-700/50 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-slate-500 flex items-center justify-center mb-4 md:mb-0">
                Made with <Heart className="h-4 w-4 mx-2 text-red-500 animate-pulse" /> by Mohd Danish • {currentYear}
              </p>
              
              <Button
                variant="outline"
                size="sm"
                onClick={scrollToTop}
                className="border-slate-600 text-slate-400 hover:text-white hover:border-blue-500/50 hover:bg-slate-800/80"
              >
                <ArrowUp className="h-4 w-4 mr-2" />
                Back to Top
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
