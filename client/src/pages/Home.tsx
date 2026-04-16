import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Music, Users, Utensils, Palette, BookOpen, Zap } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

/**
 * Rio African Day - Home Page
 * 
 * Design Philosophy: Contemporary Pan-African Celebration
 * - Vibrant Pan-African colors (green, gold, red, black)
 * - Dynamic asymmetric layouts
 * - Authentic cultural elements integrated throughout
 * - Bold typography with Poppins for headlines, Inter for body
 * - Smooth animations and transitions
 */

export default function Home() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
      setFormData({ name: "", email: "", message: "" });
    } else {
      toast.error("Por favor, preencha todos os campos.");
    }
  };

  const experiences = [
    {
      icon: Music,
      title: "Música",
      description: "Ritmos autênticos e contemporâneos que celebram a herança musical africana",
    },
    {
      icon: Users,
      title: "Dança",
      description: "Dança tradicional e contemporânea que conecta corpo, espírito e comunidade",
    },
    {
      icon: Utensils,
      title: "Gastronomia",
      description: "Sabores autênticos da culinária africana e afro-brasileira",
    },
    {
      icon: Palette,
      title: "Moda & Adornos",
      description: "Designs vibrantes que celebram a estética e identidade africana",
    },
    {
      icon: BookOpen,
      title: "Artes Plásticas",
      description: "Artesanato e arte visual que preservam tradições culturais",
    },
    {
      icon: Zap,
      title: "Literatura",
      description: "Histórias e narrativas que conectam Brasil e África",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663458755239/RimBG9arjpEawghwhThTUq/logo_african_0533b88d.png"
              alt="Rio African Day Logo"
              className="h-16 w-auto"
            />
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#sobre" className="hover:text-[#FFC107] transition-colors font-medium">Sobre</a>
            <a href="#experiencias" className="hover:text-[#FFC107] transition-colors font-medium">Experiências</a>
            <a href="#programacao" className="hover:text-[#FFC107] transition-colors font-medium">Programação</a>
            <a href="#contato" className="hover:text-[#FFC107] transition-colors font-medium">Contato</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1B5E20] via-[#FFC107] to-[#D32F2F] py-20 md:py-32">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663458755239/RimBG9arjpEawghwhThTUq/hero-banner-UeqpB3SSWghZbTmxRywzgh.webp"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
            Rio African Day
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto drop-shadow-md font-medium">
            Celebrando a cultura, diversidade e ancestralidade africana no Rio de Janeiro
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="btn-secondary-african text-lg"
              onClick={() => document.getElementById("sobre")?.scrollIntoView({ behavior: "smooth" })}
            >
              Saiba Mais
            </Button>
            <Button
              className="btn-primary-african text-lg"
              onClick={() => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })}
            >
              Participar
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="section-divider py-16 md:py-24 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1B5E20]">
                Sobre o Evento
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                O Rio African Day é um festival multicultural internacional que celebra o Dia da África (25 de maio) no Rio de Janeiro. O evento conecta Brasil e África, promovendo cultura, diversidade e ancestralidade por meio da música, moda, dança, gastronomia, literatura e arte.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Mais do que um festival, é um movimento que resgata identidades, celebra heranças e constrói pontes entre povos. É um espaço onde a cultura africana é honrada, valorizada e vivenciada em toda sua riqueza e autenticidade.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663458755239/RimBG9arjpEawghwhThTUq/experience-cards-bg-Ub5fQ3gxGTLQMtkMLn3RUx.webp"
                alt="Cultura Africana"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Purpose */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-[#F5F5F5] to-white">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#1B5E20]">
            Nossa Missão, Visão e Propósito
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Missão */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-[#1B5E20] hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold mb-4 text-[#1B5E20]">Missão</h3>
              <p className="text-gray-700 leading-relaxed">
                Resgatar a identidade afro-brasileira através do intercâmbio cultural entre o Rio de Janeiro e o continente africano, ampliando vozes, memórias e conexões.
              </p>
            </div>

            {/* Visão */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-[#FFC107] hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold mb-4 text-[#FFC107]">Visão</h3>
              <p className="text-gray-700 leading-relaxed">
                Fortalecer a conexão cultural entre Brasil e África, inspirando pertencimento e valorização das identidades.
              </p>
            </div>

            {/* Propósito */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-[#D32F2F] hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold mb-4 text-[#D32F2F]">Propósito</h3>
              <p className="text-gray-700 leading-relaxed">
                Valorizar a cultura africana como elemento essencial da brasilidade, unindo tradição e contemporaneidade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experiences Section */}
      <section id="experiencias" className="section-divider py-16 md:py-24 bg-white">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#1B5E20]">
            Atrações & Experiências
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {experiences.map((exp, idx) => {
              const Icon = exp.icon;
              return (
                <div
                  key={idx}
                  className="group bg-gradient-to-br from-[#F9F9F9] to-[#F5F5F5] rounded-lg p-8 hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-[#E0E0E0]"
                >
                  <div className="mb-4 inline-block p-3 bg-[#FFC107] rounded-lg group-hover:bg-[#1B5E20] transition-colors">
                    <Icon className="w-6 h-6 text-[#1A1A1A] group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-[#1B5E20]">{exp.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{exp.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Programming Section */}
      <section id="programacao" className="py-16 md:py-24 bg-gradient-to-r from-[#1B5E20] to-[#0D3F14]">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-[#FFC107]">
            Programação
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-lg p-8 border border-[#FFC107] border-opacity-30">
              <h3 className="text-2xl font-bold mb-4 text-[#1B5E20]">25 de Maio - Dia da África</h3>
              <ul className="space-y-3 text-black font-medium">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#FFC107] rounded-full"></span>
                  10:00 - Abertura Oficial
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#FFC107] rounded-full"></span>
                  12:00 - Apresentações Musicais
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#FFC107] rounded-full"></span>
                  14:00 - Workshop de Dança
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#FFC107] rounded-full"></span>
                  16:00 - Gastronomia Africana
                </li>
              </ul>
            </div>

            <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-lg p-8 border border-[#FFC107] border-opacity-30">
              <h3 className="text-2xl font-bold mb-4 text-[#1B5E20]">Atividades Contínuas</h3>
              <ul className="space-y-3 text-black font-medium">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#FFC107] rounded-full"></span>
                  Galeria de Arte Africana
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#FFC107] rounded-full"></span>
                  Feira de Moda & Adornos
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#FFC107] rounded-full"></span>
                  Roda de Conversa - Literatura
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#FFC107] rounded-full"></span>
                  Apresentações Culturais
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="section-divider py-16 md:py-24 bg-white">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-[#1B5E20]">
            Faça Parte Dessa Conexão
          </h2>
          <p className="text-center text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
            Entre Brasil e África - Junte-se a nós para celebrar a cultura, diversidade e ancestralidade africana
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gradient-to-br from-[#F9F9F9] to-[#F5F5F5] rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-[#1B5E20]">Envie-nos uma Mensagem</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Nome</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFC107]"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFC107]"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Mensagem</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFC107] resize-none"
                    rows={4}
                    placeholder="Sua mensagem..."
                  />
                </div>
                <Button className="btn-primary-african w-full text-lg">
                  Enviar Mensagem
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[#1B5E20]">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#1B5E20] mb-1">Localização</h4>
                  <p className="text-gray-700">Rio de Janeiro, Brasil</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[#FFC107]">
                    <Mail className="h-6 w-6 text-[#1A1A1A]" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#1B5E20] mb-1">Email</h4>
                  <p className="text-gray-700">rioafricanday@gmail.com</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[#D32F2F]">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#1B5E20] mb-1">Telefone</h4>
                  <p className="text-gray-700">(21) 96742-2655</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-8 border-t border-gray-300">
                <h4 className="text-lg font-bold text-[#1B5E20] mb-4">Redes Sociais</h4>
                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    className="rounded-full hover:bg-[#1B5E20] hover:text-white transition-all"
                    onClick={() => toast.info("Instagram: @riafricanday")}
                  >
                    Instagram
                  </Button>
                  <Button
                    variant="outline"
                    className="rounded-full hover:bg-[#1B5E20] hover:text-white transition-all"
                    onClick={() => toast.info("Facebook: Rio African Day")}
                  >
                    Facebook
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1B5E20] text-white py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663458755239/RimBG9arjpEawghwhThTUq/logo_african_0533b88d.png"
                alt="Rio African Day Logo"
                className="h-24 w-auto mb-4 opacity-90"
              />
              <p className="text-sm text-gray-200">Celebrando a cultura, diversidade e ancestralidade africana no Rio de Janeiro.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Links Rápidos</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#sobre" className="hover:text-[#FFC107] transition-colors">Sobre</a></li>
                <li><a href="#experiencias" className="hover:text-[#FFC107] transition-colors">Experiências</a></li>
                <li><a href="#programacao" className="hover:text-[#FFC107] transition-colors">Programação</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contato</h4>
              <ul className="space-y-2 text-sm">
                <li>Email: rioafricanday@gmail.com</li>
                <li>Telefone: (21) 96742-2655</li>
                <li>Rio de Janeiro, Brasil</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Siga-nos</h4>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/rioafricanday" className="hover:text-[#FFC107] transition-colors">Instagram</a>
                <a href="https://www.facebook.com/rioafricanday" className="hover:text-[#FFC107] transition-colors">Facebook</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white border-opacity-20 pt-8 text-center text-sm text-gray-200">
            <p>&copy; 2026 Rio African Day. Celebrando a cultura africana. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
