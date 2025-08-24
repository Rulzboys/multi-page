import { useState } from "react";
import { Mail, Phone, MapPin, Send, Clock, MessageSquare } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Buat pesan WhatsApp
    const whatsappMessage =
      `*Pesan Baru dari Website*\n\n` +
      `*Nama:* ${formData.name}\n` +
      `*Email:* ${formData.email}\n` +
      `*Telepon:* ${formData.phone || "Tidak disertakan"}\n` +
      `*Subject:* ${formData.subject}\n\n` +
      `*Pesan:*\n${formData.message}`;

    // Encode pesan untuk URL
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // Nomor WhatsApp (hapus karakter non-digit dan tambah country code)
    const whatsappNumber = "6285714291570";

    // Buat URL WhatsApp
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Buka WhatsApp di tab baru
    window.open(whatsappUrl, "_blank");

    toast({
      title: "Pesan Terkirim!",
      description:
        "Terima kasih telah menghubungi kami. Tim kami akan segera merespons.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      content: "moohzhal@gmail.com",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Telepon",
      content: "+62 857 1429 1570",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Alamat",
      content: "Jl. Sudirman No. 123",
      subContent: "Jakarta Selatan, 12190",
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Jam Kerja",
      content: "Senin - Jumat: 09:00 - 18:00",
      subContent: "Sabtu: 09:00 - 14:00",
    },
  ];

  return (
    <div className="pt-8">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-muted/20 to-background">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto animate-fade-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Hubungi <span className="gradient-text">Kami</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Ada pertanyaan atau ingin memulai proyek? Tim kami siap membantu
              Anda mewujudkan visi digital bisnis Anda.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="p-8 animate-fade-in">
                <div className="flex items-center gap-2 mb-6">
                  <MessageSquare className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-bold">Kirim Pesan</h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nama Lengkap *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Nomor Telepon</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+62 812 3456 7890"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Konsultasi Website"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Pesan *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Ceritakan kebutuhan Anda..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all"
                  >
                    <Send className="mr-2 w-4 h-4" />
                    Kirim Pesan
                  </Button>
                </form>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg transition-all animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-primary flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{info.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {info.content}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {info.subContent}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pertanyaan <span className="gradient-text">Umum</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Temukan jawaban untuk pertanyaan yang sering diajukan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="p-6">
              <h3 className="font-semibold mb-2">
                Berapa lama proses pembuatan website?
              </h3>
              <p className="text-muted-foreground">
                Waktu pengerjaan bervariasi tergantung kompleksitas proyek,
                umumnya 2-8 minggu untuk website standar.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold mb-2">
                Apakah ada garansi setelah website selesai?
              </h3>
              <p className="text-muted-foreground">
                Ya, kami memberikan garansi 30 hari untuk bug fixing dan minor
                adjustment setelah website launch.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold mb-2">
                Bisakah request custom feature?
              </h3>
              <p className="text-muted-foreground">
                Tentu saja! Kami siap mengembangkan fitur custom sesuai
                kebutuhan bisnis Anda.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold mb-2">
                Apakah harga sudah termasuk hosting?
              </h3>
              <p className="text-muted-foreground">
                Paket kami sudah termasuk hosting untuk tahun pertama.
                Perpanjangan dapat diatur sesuai kebutuhan.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
