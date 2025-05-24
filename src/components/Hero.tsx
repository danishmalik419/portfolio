
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

export const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 bg-clip-text text-transparent">
                Mohd Danish
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-slate-300 mb-6 font-light">
              Full-Stack Developer
            </h2>
            <p className="text-lg md:text-xl text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
              Passionate about creating exceptional digital experiences with modern technologies.
              Specializing in React, Node.js, and mobile development.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 text-lg"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-3 text-lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-400">
            <span className="bg-slate-800/50 px-3 py-1 rounded-full">React</span>
            <span className="bg-slate-800/50 px-3 py-1 rounded-full">Node.js</span>
            <span className="bg-slate-800/50 px-3 py-1 rounded-full">TypeScript</span>
            <span className="bg-slate-800/50 px-3 py-1 rounded-full">React Native</span>
            <span className="bg-slate-800/50 px-3 py-1 rounded-full">MongoDB</span>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-slate-400 hover:text-blue-400 transition-colors animate-bounce"
      >
        <ArrowDown className="h-6 w-6" />
      </button>
    </section>
  );
};
