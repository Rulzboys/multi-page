import { Target, Eye, Heart, Award, Users, TrendingUp } from 'lucide-react';
import { Card } from '@/components/ui/card';

const About = () => {
  const values = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Komitmen',
      description: 'Dedikasi penuh untuk kesuksesan setiap klien kami'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Fokus',
      description: 'Hasil yang terukur dan sesuai dengan tujuan bisnis'
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: 'Inovasi',
      description: 'Selalu menggunakan teknologi dan metode terkini'
    }
  ];

  const stats = [
    { number: '1000+', label: 'Klien Puas' },
    { number: '500+', label: 'Proyek Selesai' },
    { number: '5+', label: 'Tahun Pengalaman' },
    { number: '98%', label: 'Tingkat Kepuasan' }
  ];

  const team = [
    {
      name: 'Andi Wijaya',
      role: 'CEO & Founder',
      avatar: 'AW'
    },
    {
      name: 'Rina Susanti',
      role: 'Head of Design',
      avatar: 'RS'
    },
    {
      name: 'Dimas Pratama',
      role: 'Lead Developer',
      avatar: 'DP'
    },
    {
      name: 'Maya Kartika',
      role: 'Marketing Manager',
      avatar: 'MK'
    }
  ];

  return (
    <div className="pt-8">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-muted/20 to-background">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto animate-fade-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Tentang <span className="gradient-text">JelajahHalaman</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Kami adalah tim profesional yang berdedikasi untuk membantu bisnis 
              berkembang di era digital dengan solusi web inovatif dan berkualitas tinggi.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-4xl font-bold gradient-text mb-2">{stat.number}</h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="p-8 glass border-primary/10 animate-fade-in">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 text-primary-foreground">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Misi Kami</h2>
              <p className="text-muted-foreground">
                Memberikan solusi digital terbaik yang membantu bisnis bertumbuh dan 
                berkembang di era modern. Kami berkomitmen untuk menghadirkan teknologi 
                yang mudah diakses, efisien, dan berdampak positif bagi setiap klien kami.
              </p>
            </Card>

            <Card className="p-8 glass border-primary/10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 text-primary-foreground">
                <Award className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Visi Kami</h2>
              <p className="text-muted-foreground">
                Menjadi partner teknologi terpercaya untuk bisnis di Indonesia dan Asia Tenggara, 
                dengan menghadirkan inovasi yang mengubah cara bisnis beroperasi dan berinteraksi 
                dengan pelanggan mereka di dunia digital.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nilai-Nilai <span className="gradient-text">Kami</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Prinsip yang kami pegang dalam setiap proyek
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="p-6 text-center hover:shadow-xl transition-all hover:-translate-y-2 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-4 text-primary">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Tim <span className="gradient-text">Kami</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Profesional berpengalaman yang siap membantu kesuksesan Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <Card 
                key={index} 
                className="p-6 text-center hover:shadow-xl transition-all animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4 text-primary-foreground text-2xl font-bold">
                  {member.avatar}
                </div>
                <h3 className="font-semibold text-lg">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;