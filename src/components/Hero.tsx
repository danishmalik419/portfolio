import { Button } from '@/components/ui/button';
import { ArrowDown, Download, MapPin } from 'lucide-react';

export const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadResume = async () => {
    try {
      // Fetch the image
      const imageUrl = '/lovable-uploads/3818e745-c456-4096-b348-224b0630d4cd.png';
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      
      // Create image element
      const img = new Image();
      img.onload = () => {
        // Create canvas
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        
        // Set canvas size (A4 aspect ratio)
        const maxWidth = 595; // A4 width in points
        const maxHeight = 842; // A4 height in points
        
        // Calculate scaling to fit image in A4
        const scale = Math.min(maxWidth / img.width, maxHeight / img.height);
        canvas.width = img.width * scale;
        canvas.height = img.height * scale;
        
        // Fill white background
        if (ctx) {
          ctx.fillStyle = 'white';
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          
          // Draw image on canvas
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
          
          // Convert canvas to image data
          const imgData = canvas.toDataURL('image/jpeg', 0.95);
          
          // Create simple PDF structure
          const pdfData = createSimplePDF(imgData, canvas.width, canvas.height);
          
          // Create blob and download
          const pdfBlob = new Blob([pdfData], { type: 'application/pdf' });
          const link = document.createElement('a');
          link.href = URL.createObjectURL(pdfBlob);
          link.download = 'Mohd_Danish_Resume.pdf';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          URL.revokeObjectURL(link.href);
        }
      };
      
      img.src = URL.createObjectURL(blob);
    } catch (error) {
      console.error('Error downloading resume:', error);
      // Fallback: direct image download
      const link = document.createElement('a');
      link.href = '/lovable-uploads/3818e745-c456-4096-b348-224b0630d4cd.png';
      link.download = 'Mohd_Danish_Resume.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  // Simple PDF creation function
  const createSimplePDF = (imageData: string, width: number, height: number) => {
    const pdfContent = `%PDF-1.4
1 0 obj
<<
/Type /Catalog
/Pages 2 0 R
>>
endobj

2 0 obj
<<
/Type /Pages
/Kids [3 0 R]
/Count 1
>>
endobj

3 0 obj
<<
/Type /Page
/Parent 2 0 R
/MediaBox [0 0 ${width} ${height}]
/Contents 4 0 R
/Resources <<
/XObject <<
/Im1 5 0 R
>>
>>
>>
endobj

4 0 obj
<<
/Length 44
>>
stream
q
${width} 0 0 ${height} 0 0 cm
/Im1 Do
Q
endstream
endobj

5 0 obj
<<
/Type /XObject
/Subtype /Image
/Width ${Math.floor(width)}
/Height ${Math.floor(height)}
/ColorSpace /DeviceRGB
/BitsPerComponent 8
/Filter /DCTDecode
/Length ${imageData.length}
>>
stream
${imageData.split(',')[1]}
endstream
endobj

xref
0 6
0000000000 65535 f 
0000000010 00000 n 
0000000079 00000 n 
0000000136 00000 n 
0000000301 00000 n 
0000000395 00000 n 
trailer
<<
/Size 6
/Root 1 0 R
>>
startxref
${600 + imageData.length}
%%EOF`;
    
    return pdfContent;
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-purple-900/10 to-transparent"></div>
      <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,rgba(59,130,246,0.1)_360deg)]"></div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400/30 rounded-full animate-ping"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-400/40 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-cyan-400/20 rounded-full animate-bounce"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 animate-fade-in">
            {/* Location badge */}
            <div className="inline-flex items-center px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-full text-slate-300 text-sm font-medium mb-8 backdrop-blur-sm">
              <MapPin className="h-4 w-4 mr-2 text-blue-400" />
              Based in India • Open to Remote Work
            </div>

            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
              <span className="block text-slate-200 mb-2">Hi, I'm</span>
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                Mohd Danish
              </span>
            </h1>
            
            <h2 className="text-3xl md:text-4xl text-slate-300 mb-6 font-light">
              <span className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
                Full-Stack Developer
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-4xl mx-auto leading-relaxed">
              Passionate about creating exceptional digital experiences with modern technologies.
              Specializing in <span className="text-blue-400 font-semibold">React</span>, <span className="text-green-400 font-semibold">Node.js</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-10 py-4 text-lg font-semibold shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-slate-600 text-slate-300 hover:bg-slate-800/80 hover:border-blue-500/50 px-10 py-4 text-lg font-semibold backdrop-blur-sm transition-all duration-300"
              onClick={downloadResume}
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </div>

          {/* Enhanced tech stack */}
          <div className="space-y-4">
            <p className="text-slate-400 text-lg font-medium mb-6">Technologies I work with</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              {[
                { name: 'React', color: 'from-blue-400 to-cyan-400' },
                { name: 'Node.js', color: 'from-green-400 to-emerald-400' },
                { name: 'TypeScript', color: 'from-blue-400 to-blue-600' },
                { name: 'MongoDB', color: 'from-green-500 to-green-600' },
                { name: 'Express.js', color: 'from-gray-400 to-gray-600' }
              ].map((tech, index) => (
                <span 
                  key={tech.name}
                  className={`bg-gradient-to-r ${tech.color} bg-clip-text text-transparent bg-slate-800/50 border border-slate-700/50 px-4 py-2 rounded-full font-medium backdrop-blur-sm hover:border-slate-600/70 transition-all duration-300 cursor-default`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-slate-400 hover:text-blue-400 transition-colors animate-bounce duration-1000"
        aria-label="Scroll to about section"
      >
        <ArrowDown className="h-8 w-8" />
      </button>
    </section>
  );
};
