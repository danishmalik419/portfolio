
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900/80 border-t border-slate-700/50 py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <div className="mb-8">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                Mohd Danish
              </h3>
              <p className="text-slate-400 max-w-md mx-auto">
                Full-Stack Developer passionate about creating amazing digital experiences
              </p>
            </div>

            <div className="flex justify-center space-x-6 mb-8">
              <a 
                href="https://github.com/mohddanish" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-400 transition-colors duration-300"
              >
                <Github className="h-6 w-6" />
              </a>
              <a 
                href="https://linkedin.com/in/mohddanish" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-400 transition-colors duration-300"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="mailto:mohddanish@example.com"
                className="text-slate-400 hover:text-blue-400 transition-colors duration-300"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>

            <div className="border-t border-slate-700/50 pt-8">
              <p className="text-slate-500 flex items-center justify-center">
                Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> by Mohd Danish • {currentYear}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
