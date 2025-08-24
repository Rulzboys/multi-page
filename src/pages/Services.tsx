import { Code, Palette, TrendingUp, Search, ShoppingCart, HeadphonesIcon, CheckCircle } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Web Development',
      description: 'Pembuatan website modern dengan teknologi terkini, responsive, dan optimized untuk semua perangkat.',
      features: ['React/Next.js', 'API Integration', 'Database Design', 'Performance Optimization']
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'UI/UX Design',
      description: 'Desain antarmuka yang menarik dan user-friendly untuk meningkatkan pengalaman pengguna.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design System']
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Digital Marketing',
      description: 'Strategi pemasaran digital yang efektif untuk meningkatkan visibility dan konversi.',
      features: ['Social Media Marketing', 'Content Strategy', 'Email Marketing', 'Analytics']
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: 'SEO Optimization',
      description: 'Optimasi website untuk meningkatkan ranking di mesin pencari dan traffic organik.',
      features: ['Keyword Research', 'On-Page SEO', 'Technical SEO', 'Link Building']
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: 'E-Commerce Solutions',
      description: 'Platform toko online lengkap dengan sistem pembayaran dan manajemen inventory.',
      features: ['Shopping Cart', 'Payment Gateway', 'Inventory Management', 'Order Tracking']
    },
    {
      icon: <HeadphonesIcon className="w-8 h-8" />,
      title: 'Maintenance & Support',
      description: 'Layanan maintenance dan support 24/7 untuk memastikan website selalu optimal.',
      features: ['Bug Fixing', 'Updates', 'Backup', '24/7 Support']
    }
  ];

  const packages = [
    {
      name: 'Starter',
      price: 'Rp 5 Juta',
      description: 'Cocok untuk bisnis kecil atau personal',
      features: [
        '5 Halaman Website',
        'Responsive Design',
        'Basic SEO',
        '1 Bulan Support',
        'Hosting 1 Tahun'
      ]
    },
    {
      name: 'Professional',
      price: 'Rp 15 Juta',
      description: 'Ideal untuk bisnis menengah',
      features: [
        '15 Halaman Website',
        'Custom Design',
        'Advanced SEO',
        '3 Bulan Support',
        'Hosting 1 Tahun',
        'CMS Integration',
        'Analytics Setup'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'Solusi lengkap untuk perusahaan besar',
      features: [
        'Unlimited Pages',
        'Custom Features',
        'Full SEO Package',
        '1 Tahun Support',
        'Dedicated Hosting',
        'API Development',
        'Priority Support'
      ]
    }
  ];

  return (
    <div className="pt-8">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-muted/20 to-background">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto animate-fade-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Layanan <span className="gradient-text">Kami</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Solusi lengkap untuk kebutuhan digital bisnis Anda. 
              Dari konsep hingga implementasi, kami siap membantu.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="p-6 hover:shadow-xl transition-all hover:-translate-y-2 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 text-primary-foreground">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Paket <span className="gradient-text">Harga</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Pilih paket yang sesuai dengan kebutuhan dan budget Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg, index) => (
              <Card 
                key={index} 
                className={`p-8 relative ${pkg.popular ? 'border-primary shadow-xl scale-105' : ''} animate-fade-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-primary to-accent rounded-full text-primary-foreground text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <p className="text-3xl font-bold gradient-text mb-2">{pkg.price}</p>
                  <p className="text-sm text-muted-foreground">{pkg.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact">
                  <Button 
                    className={`w-full ${pkg.popular ? 'bg-gradient-to-r from-primary to-accent hover:opacity-90' : ''}`}
                    variant={pkg.popular ? 'default' : 'outline'}
                  >
                    Pilih Paket
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <Card className="p-12 text-center glass border-primary/10">
            <h2 className="text-3xl font-bold mb-4">
              Butuh Solusi <span className="gradient-text">Custom</span>?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Kami siap membantu membuat solusi khusus sesuai dengan kebutuhan bisnis Anda. 
              Konsultasi gratis dengan tim expert kami.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all hover:scale-105">
                Konsultasi Gratis
              </Button>
            </Link>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Services;