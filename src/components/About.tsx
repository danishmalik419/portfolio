import { Code, Database, Users, Settings } from 'lucide-react';

export const About = () => {
  const skills = [
    {
      category: 'Frontend',
      icon: <Code className="h-6 w-6" />,
      technologies: ['React', 'TypeScript', 'JavaScript', 'HTML5/CSS3', 'Tailwind CSS', 'Material-UI', 'Next.js']
    },
    {
      category: 'Backend',
      icon: <Database className="h-6 w-6" />,
      technologies: ['Node.js', 'Express.js', 'MongoDB', 'PostgreSQL']
    },
    {
      category: 'Development',
      icon: <Settings className="h-6 w-6" />,
      technologies: ['Full-Stack Development', 'Web Applications', 'API Development']
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-800/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
              I'm a passionate Full-Stack Developer with expertise in modern web technologies. 
              I love creating efficient, scalable solutions and have experience working with cross-functional 
              teams to deliver high-quality applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <div key={index} className="bg-slate-900/50 p-6 rounded-xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 group">
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-lg text-white group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-200 ml-3">{skill.category}</h3>
                </div>
                <div className="space-y-2">
                  {skill.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="inline-block bg-slate-800 text-slate-300 text-sm px-3 py-1 rounded-full mr-2 mb-2 hover:bg-blue-900 transition-colors duration-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-700/50">
                <h3 className="text-3xl font-bold text-blue-400 mb-2">3+</h3>
                <p className="text-slate-300">Years Experience</p>
              </div>
              <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-700/50">
                <h3 className="text-3xl font-bold text-purple-400 mb-2">10+</h3>
                <p className="text-slate-300">Projects Completed</p>
              </div>
              <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-700/50">
                <h3 className="text-3xl font-bold text-green-400 mb-2">100%</h3>
                <p className="text-slate-300">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
