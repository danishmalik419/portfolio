
import { Button } from '@/components/ui/button';
import { Github, Star } from 'lucide-react';

export const Projects = () => {
  const projects = [
    {
      title: 'Pet Blog Shop App',
      description: 'A full-stack blog application built with MERN stack featuring user authentication, admin panel, and responsive design.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'JWT'],
      image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=500&h=300&fit=crop',
      github: '#',
      demo: '#',
      featured: true
    },
    {
      title: 'Helping Hands Community Platform',
      description: 'Mobile and web application for community engagement with role-based permissions and cross-platform compatibility.',
      technologies: ['React Native', 'Expo', 'React', 'Redux', 'Firebase'],
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=500&h=300&fit=crop',
      github: '#',
      demo: '#',
      featured: true
    },
    {
      title: 'Event Management Portal',
      description: 'Social application for event management with multiple user roles and real-time features.',
      technologies: ['React Native', 'Redux', 'REST API', 'Socket.io'],
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=500&h=300&fit=crop',
      github: '#',
      demo: '#',
      featured: false
    },
    {
      title: 'E-commerce Web App',
      description: 'Modern e-commerce platform with shopping cart, payment integration, and admin dashboard.',
      technologies: ['React', 'TypeScript', 'Stripe', 'Node.js', 'PostgreSQL'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
      github: '#',
      demo: '#',
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-800/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              A showcase of my recent work and personal projects demonstrating my skills in full-stack development
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className={`bg-slate-900/50 border border-slate-700/50 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 group ${project.featured ? 'md:col-span-2 lg:col-span-1' : ''}`}>
                {project.featured && (
                  <div className="absolute top-4 left-4 z-10">
                    <div className="flex items-center bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-medium">
                      <Star className="h-3 w-3 mr-1" />
                      Featured
                    </div>
                  </div>
                )}
                
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-200 mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-slate-800 text-slate-300 text-xs px-2 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <Button variant="outline" size="sm" className="border-slate-600 text-slate-300 hover:bg-slate-800">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                    <Button size="sm" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                      View Demo
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="border-slate-600 text-slate-300 hover:bg-slate-800">
              View All Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
