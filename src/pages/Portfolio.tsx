import { useState } from 'react';
import { ExternalLink, Code2, Palette, ShoppingBag, Briefcase } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'TechStart Indonesia',
      category: 'corporate',
      image: '/api/placeholder/600/400',
      description: 'Website corporate untuk startup teknologi dengan fitur blog dan portal investor.',
      tags: ['React', 'Node.js', 'MongoDB'],
      link: '#'
    },
    {
      id: 2,
      title: 'FashionHub Store',
      category: 'ecommerce',
      image: '/api/placeholder/600/400',
      description: 'Platform e-commerce fashion dengan sistem pembayaran terintegrasi dan inventory management.',
      tags: ['Next.js', 'Stripe', 'PostgreSQL'],
      link: '#'
    },
    {
      id: 3,
      title: 'Creative Agency',
      category: 'portfolio',
      image: '/api/placeholder/600/400',
      description: 'Portfolio website untuk agensi kreatif dengan animasi interaktif dan showcase projects.',
      tags: ['Vue.js', 'GSAP', 'Tailwind'],
      link: '#'
    },
    {
      id: 4,
      title: 'HealthCare Plus',
      category: 'webapp',
      image: '/api/placeholder/600/400',
      description: 'Aplikasi web untuk klinik dengan sistem appointment dan medical records.',
      tags: ['React', 'Express', 'MySQL'],
      link: '#'
    },
    {
      id: 5,
      title: 'EduLearn Platform',
      category: 'webapp',
      image: '/api/placeholder/600/400',
      description: 'Platform pembelajaran online dengan video streaming dan quiz system.',
      tags: ['Angular', 'Firebase', 'WebRTC'],
      link: '#'
    },
    {
      id: 6,
      title: 'GreenMart',
      category: 'ecommerce',
      image: '/api/placeholder/600/400',
      description: 'Marketplace untuk produk organik dengan fitur subscription dan loyalty program.',
      tags: ['React', 'Redux', 'Stripe'],
      link: '#'
    }
  ];

  const filters = [
    { value: 'all', label: 'Semua', icon: null },
    { value: 'corporate', label: 'Corporate', icon: <Briefcase className="w-4 h-4" /> },
    { value: 'ecommerce', label: 'E-Commerce', icon: <ShoppingBag className="w-4 h-4" /> },
    { value: 'portfolio', label: 'Portfolio', icon: <Palette className="w-4 h-4" /> },
    { value: 'webapp', label: 'Web App', icon: <Code2 className="w-4 h-4" /> }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="pt-8">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-muted/20 to-background">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto animate-fade-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Portfolio <span className="gradient-text">Kami</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Lihat berbagai proyek yang telah kami kerjakan untuk klien dari berbagai industri. 
              Setiap proyek adalah bukti komitmen kami terhadap kualitas.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <Button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                variant={activeFilter === filter.value ? 'default' : 'outline'}
                className={`${
                  activeFilter === filter.value 
                    ? 'bg-gradient-to-r from-primary to-accent hover:opacity-90' 
                    : ''
                } transition-all`}
              >
                {filter.icon}
                {filter.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <Card 
                key={project.id} 
                className="overflow-hidden group hover:shadow-xl transition-all animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-48 bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/50 to-accent/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <ExternalLink className="w-8 h-8 text-white" />
                  </div>
                  <div className="h-full w-full flex items-center justify-center text-6xl font-bold text-primary/20">
                    {project.title.charAt(0)}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  >
                    Lihat Detail
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pencapaian <span className="gradient-text">Kami</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="text-4xl font-bold gradient-text mb-2">500+</h3>
              <p className="text-muted-foreground">Proyek Selesai</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold gradient-text mb-2">98%</h3>
              <p className="text-muted-foreground">Klien Puas</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold gradient-text mb-2">50+</h3>
              <p className="text-muted-foreground">Awards</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold gradient-text mb-2">24/7</h3>
              <p className="text-muted-foreground">Support</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;