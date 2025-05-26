
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Github, Linkedin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email',
      content: 'danissh419@gmail.com',
      link: 'mailto:danissh419@gmail.com'
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Location',
      content: 'India',
      link: null
    },
    {
      icon: <Github className="h-6 w-6" />,
      title: 'GitHub',
      content: 'github.com/danishmalik419',
      link: 'https://github.com/danishmalik419'
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      title: 'LinkedIn',
      content: 'linkedin.com/in/mohd-danish-b233ba277',
      link: 'https://www.linkedin.com/in/mohd-danish-b233ba277/'
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              I'm always interested in new opportunities and exciting projects. Let's connect!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-bold text-slate-200 mb-8">Let's talk about your project</h3>
              <p className="text-slate-300 mb-8 leading-relaxed">
                Whether you have a project in mind, need a consultation, or just want to say hello, 
                I'd love to hear from you. Feel free to reach out through any of the channels below.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center group">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-lg text-white group-hover:scale-110 transition-transform duration-300">
                      {info.icon}
                    </div>
                    <div className="ml-4">
                      <h4 className="text-slate-200 font-medium">{info.title}</h4>
                      {info.link ? (
                        <a 
                          href={info.link} 
                          className="text-slate-400 hover:text-blue-400 transition-colors duration-300"
                          target={info.title === 'Email' ? '_self' : '_blank'}
                          rel={info.title === 'Email' ? '' : 'noopener noreferrer'}
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-slate-400">{info.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-slate-900/50 border border-slate-700/50 rounded-xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="bg-slate-800/50 border-slate-600 text-slate-200 focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="bg-slate-800/50 border-slate-600 text-slate-200 focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="bg-slate-800/50 border-slate-600 text-slate-200 focus:border-blue-500 min-h-[120px]"
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
