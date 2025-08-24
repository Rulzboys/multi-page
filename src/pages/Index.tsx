import { ArrowRight, CheckCircle, Sparkles, Zap, Shield, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const Index = () => {
  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Performa Cepat',
      description: 'Website dengan loading time optimal untuk pengalaman pengguna terbaik'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Keamanan Terjamin',
      description: 'Proteksi data dan sistem keamanan berlapis untuk bisnis Anda'
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: 'Desain Modern',
      description: 'Tampilan elegan dan profesional yang menarik perhatian'
    }
  ];

  const testimonials = [
    {
      name: 'Ahmad Rizki',
      role: 'CEO TechStart',
      content: 'JelajahHalaman membantu kami meningkatkan konversi hingga 150%. Sangat merekomendasikan!',
      avatar: 'AR'
    },
    {
      name: 'Sarah Putri',
      role: 'Marketing Director',
      content: 'Desain yang luar biasa dan tim yang sangat responsif. Hasil melebihi ekspektasi kami.',
      avatar: 'SP'
    },
    {
      name: 'Budi Santoso',
      role: 'Founder StartupID',
      content: 'Platform terbaik untuk mengembangkan bisnis online. Support yang excellent!',
      avatar: 'BS'
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        {/* Background Gradient Mesh */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="absolute inset-0" style={{ background: 'var(--gradient-mesh)' }} />
        
        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 animate-scale-in">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Platform Web Modern #1 di Indonesia</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Wujudkan <span className="gradient-text">Website Impian</span> Untuk Bisnis Anda
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Tingkatkan presence online bisnis Anda dengan solusi web modern, 
              cepat, dan aman. Dipercaya oleh 1000+ perusahaan di Indonesia.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all hover:scale-105">
                  Mulai Konsultasi Gratis
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button size="lg" variant="outline" className="border-2 hover:bg-primary/5">
                  Lihat Portfolio
                </Button>
              </Link>
            </div>
            
            <div className="flex items-center justify-center gap-8 mt-12">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">14 Hari Garansi</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">1000+ Klien</span>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent opacity-20 animate-float" />
        <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-gradient-to-br from-accent to-primary opacity-20 animate-float" style={{ animationDelay: '2s' }} />
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Mengapa Memilih <span className="gradient-text">JelajahHalaman</span>?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Kami menyediakan solusi lengkap untuk kebutuhan digital bisnis Anda
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="p-6 hover:shadow-xl transition-all hover:-translate-y-2 glass border-primary/10 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 text-primary-foreground">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Apa Kata <span className="gradient-text">Klien Kami</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Kepuasan klien adalah prioritas utama kami
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="p-6 hover:shadow-xl transition-all animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic">"{testimonial.content}"</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Siap Memulai Perjalanan Digital Anda?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Konsultasi gratis dengan tim expert kami dan dapatkan solusi terbaik untuk bisnis Anda
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all hover:scale-105">
              Hubungi Kami Sekarang
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
