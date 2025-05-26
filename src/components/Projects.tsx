import { Button } from '@/components/ui/button';
import { Github, ExternalLink, Star, Calendar, Users } from 'lucide-react';

export const Projects = () => {
  const projects = [
    {
      title: 'EDMS - Electronic Document Management System',
      description: 'A comprehensive document management system designed for efficient handling of electronic documents. Features include document versioning, secure storage, advanced search capabilities, workflow automation, and role-based access control. Built with modern technologies to ensure scalability and security.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'AWS S3', 'JWT'],
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
      demo: 'https://edms.avtechfin.co.in/',
      featured: true,
      duration: '3 months',
      team: 'Solo Project'
    },
    {
      title: 'E-commerce Platform - Ckart Store',
      description: 'Comprehensive e-commerce solution specializing in chart and data visualization products. Features include product catalog, shopping cart, secure payment processing, user authentication, and order management system.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Stripe API', 'JWT'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      demo: 'https://ckart.store/',
      featured: true,
      duration: '4 months',
      team: 'Solo Project'
    },
    {
      title: 'Blog Application - WC Blog',
      description: 'Modern blogging platform with rich content management system, user authentication, comment system, and social sharing features. Includes admin panel for content moderation and user management.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Rich Text Editor', 'Material-UI'],
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop',
      demo: 'https://wcblog.in/',
      featured: false,
      duration: '3 months',
      team: 'Solo Project'
    },
    {
      title: 'Movies Entertainment',
      description: 'Entertainment platform for movie discovery and information. Features include movie search, detailed information display, user ratings, watchlist management, and recommendation system based on user preferences.',
      technologies: ['React', 'JavaScript', 'TMDb API', 'CSS3', 'Local Storage'],
      image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=600&h=400&fit=crop',
      demo: 'https://entertainment-app-flame.vercel.app/',
      featured: false,
      duration: '2 months',
      team: 'Solo Project'
    },
    {
      title: 'Helping Hands Community',
      description: 'Community platform designed to connect volunteers with local organizations and charitable causes. Features include event management, volunteer registration, impact tracking, and community engagement tools.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Express.js', 'Bootstrap', 'Socket.io'],
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop',
      demo: 'https://hhc4u.org/',
      featured: false,
      duration: '4 months',
      team: 'Team Project'
    }
  ];

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-slate-900/50 to-slate-800/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-6">
              <Star className="h-4 w-4 mr-2" />
              Portfolio Showcase
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              A collection of full-stack applications demonstrating expertise in modern web technologies, 
              AI integration, and comprehensive software engineering practices.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {projects.filter(project => project.featured).map((project, index) => (
              <div key={index} className="group relative bg-gradient-to-br from-slate-900/80 to-slate-800/60 border border-slate-700/50 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10">
                <div className="absolute top-6 left-6 z-20">
                  <div className="flex items-center bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    <Star className="h-4 w-4 mr-2" />
                    Featured
                  </div>
                </div>
                
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
                </div>

                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4 text-sm text-slate-400">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      {project.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2" />
                      {project.team}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-200 mb-4 group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 mb-6 leading-relaxed text-lg">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-slate-800/80 border border-slate-600/50 text-slate-300 text-sm px-3 py-2 rounded-lg hover:bg-slate-700/80 transition-colors duration-200">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <Button 
                      size="lg" 
                      className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 flex-1"
                      onClick={() => window.open(project.demo, '_blank')}
                    >
                      <ExternalLink className="h-5 w-5 mr-2" />
                      Live Demo
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {projects.filter(project => !project.featured).map((project, index) => (
              <div key={index} className="group bg-slate-900/60 border border-slate-700/50 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent"></div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3 text-xs text-slate-400">
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {project.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-3 w-3 mr-1" />
                      {project.team}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-200 mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 mb-4 leading-relaxed text-sm">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <span key={techIndex} className="bg-slate-800 text-slate-300 text-xs px-2 py-1 rounded-md">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="text-slate-400 text-xs px-2 py-1">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                  <div className="flex gap-3">
                    <Button 
                      size="sm" 
                      className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 flex-1"
                      onClick={() => window.open(project.demo, '_blank')}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="inline-flex flex-col items-center">
              <p className="text-slate-400 mb-6 text-lg">Want to see more of my work?</p>
              <Button variant="outline" size="lg" className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:border-blue-500/50 px-8 py-3" onClick={() => window.open('https://github.com/danishmalik419?tab=repositories', '_blank')}>
                <Github className="h-5 w-5 mr-2" />
                View All Projects on GitHub
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
