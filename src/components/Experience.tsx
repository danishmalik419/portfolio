import { Calendar, MapPin } from 'lucide-react';

export const Experience = () => {
  const experiences = [
    {
      title: 'EDMS - Electronic Document Management System',
      company: 'Full Stack Developer',
      location: 'Remote',
      period: '3 months',
      description: [
        'Built a comprehensive document management system with versioning and secure storage',
        'Implemented advanced search capabilities and workflow automation',
        'Developed role-based access control for enhanced security',
        'Integrated AWS S3 for efficient document storage and retrieval'
      ]
    },
    {
      title: 'E-commerce Platform - Ckart Store',
      company: 'Full Stack Developer',
      location: 'Remote',
      period: '4 months',
      description: [
        'Developed a complete e-commerce solution for chart and data visualization products',
        'Implemented secure payment processing with Stripe API integration',
        'Created user authentication and order management system',
        'Built product catalog and shopping cart functionality'
      ]
    },
    {
      title: 'Blog Application - WC Blog',
      company: 'Full Stack Developer',
      location: 'Remote',
      period: '3 months',
      description: [
        'Created a modern blogging platform with rich content management',
        'Implemented user authentication and comment system',
        'Developed admin panel for content moderation',
        'Integrated social sharing features and user management'
      ]
    },
    {
      title: 'Movies Entertainment Platform',
      company: 'Frontend Developer',
      location: 'Remote',
      period: '2 months',
      description: [
        'Built an entertainment platform for movie discovery and information',
        'Integrated TMDb API for movie data and recommendations',
        'Implemented user ratings and watchlist management',
        'Created responsive design with modern UI/UX practices'
      ]
    },
    {
      title: 'Helping Hands Community',
      company: 'Full Stack Developer',
      location: 'Remote',
      period: '4 months',
      description: [
        'Developed a community platform connecting volunteers with organizations',
        'Implemented event management and volunteer registration system',
        'Created impact tracking and community engagement tools',
        'Integrated real-time features using Socket.io'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Experience
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              My professional journey and key contributions in web and mobile development
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-600"></div>

            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-slate-900 z-10"></div>

                {/* Content card */}
                <div className={`bg-slate-900/50 border border-slate-700/50 rounded-xl p-6 ml-16 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:ml-0' : 'md:ml-auto md:mr-0'} hover:border-blue-500/50 transition-all duration-300 group`}>
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-slate-200 group-hover:text-blue-400 transition-colors duration-300">
                      {exp.title}
                    </h3>
                    <h4 className="text-lg text-blue-400 font-medium">{exp.company}</h4>
                  </div>

                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-slate-400">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {exp.period}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {exp.location}
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-slate-300 flex items-start">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
