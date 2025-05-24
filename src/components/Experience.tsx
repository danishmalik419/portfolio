
import { Calendar, MapPin } from 'lucide-react';

export const Experience = () => {
  const experiences = [
    {
      title: 'Full Stack Developer Intern',
      company: 'Helping Hands Community (Platforms)',
      location: 'Remote',
      period: '04/2024 - 10/2024',
      description: [
        'Built mobile apps for iOS and Android using React Native and expo ecosystem',
        'Developed a responsive web app for easy browsing and navigation',
        'Used state management in React Native for better state management',
        'Implemented a role permission system for admin and user access control'
      ]
    },
    {
      title: 'React Native Developer Intern',
      company: 'Eventing Portal - Chief Guest',
      location: 'Remote',
      period: '05/2024 - 06/2024',
      description: [
        'Contributed to a consumer social application offering 3 different',
        'Used skills of state management (Redux), state management library and API integration',
        'Implemented UI/UX principles in mobile app development with React Native',
        'Worked with cross-functional teams to deliver features on time'
      ]
    },
    {
      title: 'Full Stack Developer Intern',
      company: 'Arshiasat Solutions - Ahmedabad',
      location: 'Ahmedabad',
      period: '03/2024 - 04/2024',
      description: [
        'Implemented MERN stack for end-to-end web development',
        'Designed and developed user interfaces using ReactJS and JavaScript',
        'Created responsive web applications with modern UI/UX practices',
        'Collaborated with the team to implement RESTful APIs and database integration'
      ]
    },
    {
      title: 'Blog Application - Pet Blog Shop App',
      company: 'Personal Project',
      location: 'Remote',
      period: '04/2024 - 05/2024',
      description: [
        'Built a full-stack blog application using MERN stack',
        'Implemented user authentication and authorization',
        'Created admin panel for content management',
        'Deployed the application with responsive design'
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
