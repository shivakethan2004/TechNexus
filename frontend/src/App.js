import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { 
  Code2, 
  Smartphone, 
  Globe, 
  Headphones, 
  TrendingUp, 
  Shield, 
  Zap, 
  MessageCircle,
  Clock,
  CheckCircle,
  Users,
  Sparkles,
  ChefHat,
  Heart,
  Building2,
  Store,
  Lightbulb,
  GraduationCap,
  ArrowRight,
  Mail,
  Phone,
  Linkedin,
  Twitter,
  Menu,
  X
} from "lucide-react";
import BookNowForm from "./components/BookNowForm";
import ScheduleCallForm from "./components/ScheduleCallForm";
import WhatsAppButton from "./components/WhatsAppButton";
import LiveChatWidget from "./components/LiveChatWidget";
import "./App.css";

const Home = () => {
  const [showBookForm, setShowBookForm] = useState(false);
  const [showCallForm, setShowCallForm] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const services = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "App Development",
      description: "Android, iOS, and React Native apps built with precision and performance in mind.",
      tech: "React Native • Flutter • Swift • Kotlin"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Development",
      description: "Company websites, landing pages, and dashboards that convert visitors into customers.",
      tech: "React • Next.js • Node.js • MongoDB"
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "Digital Assistance",
      description: "Virtual CTO, WhatsApp support, and automation tasks to streamline your operations.",
      tech: "Automation • Support • Strategy"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Marketing Services",
      description: "Paid ads, branding, and social media setup to grow your digital presence.",
      tech: "SEO • Social Media • PPC Ads"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Consultation",
      description: "Product strategy and tech guidance to help you make informed decisions.",
      tech: "Strategy • Planning • Tech Stack"
    }
  ];

  const benefits = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Full Tech Team",
      description: "Access to developers, designers, and assistants at a fraction of the cost."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Fast Delivery",
      description: "Rapid development cycles without compromising on quality."
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Transparent Communication",
      description: "Regular updates and clear communication throughout the project."
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Custom Solutions",
      description: "Tailored tech solutions designed specifically for your business needs."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Flexible Pricing",
      description: "Multiple pricing models: one-time, subscription, equity, or revenue-share."
    },
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Modern Tech Stack",
      description: "Latest technologies and best practices for future-proof solutions."
    }
  ];

  const industries = [
    { icon: <ChefHat className="w-12 h-12" />, name: "Cloud Kitchens" },
    { icon: <Heart className="w-12 h-12" />, name: "Health & Wellness" },
    { icon: <Building2 className="w-12 h-12" />, name: "Real Estate" },
    { icon: <Store className="w-12 h-12" />, name: "Local Shops" },
    { icon: <Lightbulb className="w-12 h-12" />, name: "New Startups" },
    { icon: <GraduationCap className="w-12 h-12" />, name: "Educational Institutes" }
  ];

  const portfolio = [
    {
      name: "FoodieDash",
      description: "Cloud Kitchen Ordering App with real-time order tracking and payment integration.",
      tech: "React Native • Node.js • MongoDB • Stripe",
      image: "https://images.unsplash.com/photo-1714507087318-6f6a7acb80f5?crop=entropy&cs=srgb&fm=jpg&q=85&w=800"
    },
    {
      name: "CareLink",
      description: "Clinic Appointment Website with patient management and automated reminders.",
      tech: "React • FastAPI • PostgreSQL",
      image: "https://images.unsplash.com/photo-1672343246306-cb1467a33140?crop=entropy&cs=srgb&fm=jpg&q=85&w=800"
    },
    {
      name: "EstateFlow",
      description: "Real Estate Lead Management Dashboard with CRM and analytics.",
      tech: "Next.js • Express • MySQL • Chart.js",
      image: "https://images.unsplash.com/photo-1714507087318-6f6a7acb80f5?crop=entropy&cs=srgb&fm=jpg&q=85&w=800"
    },
    {
      name: "LocalBoost",
      description: "Small Business Digital Marketing Setup with social media automation.",
      tech: "WordPress • Google Ads • Meta Ads",
      image: "https://images.unsplash.com/photo-1672343246306-cb1467a33140?crop=entropy&cs=srgb&fm=jpg&q=85&w=800"
    }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 border-b border-[#D3D3D3]/50"
        data-testid="main-navigation"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
          <motion.div 
            className="text-2xl font-bold text-[#363636] tracking-tight"
            whileHover={{ scale: 1.05 }}
            data-testid="brand-logo"
          >
            TechNexus India
          </motion.div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('services')} className="text-[#5E5E5E] hover:text-[#363636] transition-colors" data-testid="nav-services">Services</button>
            <button onClick={() => scrollToSection('portfolio')} className="text-[#5E5E5E] hover:text-[#363636] transition-colors" data-testid="nav-portfolio">Portfolio</button>
            <button onClick={() => scrollToSection('industries')} className="text-[#5E5E5E] hover:text-[#363636] transition-colors" data-testid="nav-industries">Industries</button>
            <button onClick={() => scrollToSection('contact')} className="text-[#5E5E5E] hover:text-[#363636] transition-colors" data-testid="nav-contact">Contact</button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowBookForm(true)}
              className="bg-[#363636] text-white px-6 py-2 rounded-full font-medium transition-all hover:bg-[#5E5E5E]"
              data-testid="nav-book-project-btn"
            >
              Book a Project
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#363636]"
            data-testid="mobile-menu-toggle"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-t border-[#D3D3D3] px-6 py-4 space-y-4"
            data-testid="mobile-menu"
          >
            <button onClick={() => scrollToSection('services')} className="block w-full text-left text-[#5E5E5E] hover:text-[#363636]">Services</button>
            <button onClick={() => scrollToSection('portfolio')} className="block w-full text-left text-[#5E5E5E] hover:text-[#363636]">Portfolio</button>
            <button onClick={() => scrollToSection('industries')} className="block w-full text-left text-[#5E5E5E] hover:text-[#363636]">Industries</button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-[#5E5E5E] hover:text-[#363636]">Contact</button>
            <button
              onClick={() => { setShowBookForm(true); setMobileMenuOpen(false); }}
              className="block w-full bg-[#363636] text-white px-6 py-2 rounded-full font-medium"
              data-testid="mobile-book-project-btn"
            >
              Book a Project
            </button>
          </motion.div>
        )}
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden noise-texture pt-20" data-testid="hero-section">
        <div className="absolute inset-0 bg-gradient-to-b from-[#F5F5F5] to-white"></div>
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-32 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold tracking-tighter text-[#363636] leading-none mb-6"
              data-testid="hero-main-heading"
            >
              AFFORDABLE<br />TECH POWER
            </motion.h1>
            <p className="text-lg md:text-xl text-[#5E5E5E] leading-relaxed mb-8" data-testid="hero-subheading">
              We build apps, websites, and digital solutions for small Indian businesses. Get a full tech team at the least possible price.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowBookForm(true)}
                className="bg-[#363636] text-white px-8 py-4 rounded-full font-medium transition-all hover:bg-[#5E5E5E] flex items-center justify-center gap-2"
                data-testid="hero-book-project-btn"
              >
                Book a Project <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowCallForm(true)}
                className="border-2 border-[#363636] text-[#363636] px-8 py-4 rounded-full font-medium transition-all hover:bg-[#363636] hover:text-white flex items-center justify-center gap-2"
                data-testid="hero-schedule-call-btn"
              >
                <Clock className="w-5 h-5" /> Schedule a Call
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1632862851787-d31685eee5c9?crop=entropy&cs=srgb&fm=jpg&q=85&w=800" 
              alt="Tech Team" 
              className="rounded-xl shadow-2xl"
              data-testid="hero-image"
            />
            <div className="absolute -bottom-6 -left-6 bg-white border-2 border-[#363636] p-6 rounded-xl shadow-lg">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-8 h-8 text-[#363636]" />
                <div>
                  <p className="font-bold text-[#363636]">500+</p>
                  <p className="text-sm text-[#5E5E5E]">Projects Delivered</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-32 bg-white" data-testid="services-section">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#363636] mb-4" data-testid="services-heading">OUR SERVICES</h2>
            <p className="text-base md:text-lg text-[#5E5E5E] max-w-2xl mx-auto">Comprehensive tech solutions tailored for your business growth</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white border border-[#D3D3D3] p-8 rounded-xl hover:border-[#363636] transition-all group"
                data-testid={`service-card-${index}`}
              >
                <div className="text-[#363636] mb-4 group-hover:scale-110 transition-transform">{service.icon}</div>
                <h3 className="text-2xl font-semibold text-[#363636] mb-3">{service.title}</h3>
                <p className="text-[#5E5E5E] mb-4 leading-relaxed">{service.description}</p>
                <p className="text-sm text-[#878787] font-medium">{service.tech}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 md:py-32 bg-[#F5F5F5]" data-testid="why-choose-us-section">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#363636] mb-4" data-testid="why-choose-heading">WHY CHOOSE US</h2>
            <p className="text-base md:text-lg text-[#5E5E5E] max-w-2xl mx-auto">The benefits of partnering with TechNexus India</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-4"
                data-testid={`benefit-card-${index}`}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-[#363636] text-white rounded-full flex items-center justify-center">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#363636] mb-2">{benefit.title}</h3>
                  <p className="text-[#5E5E5E] leading-relaxed">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-20 md:py-32 bg-white" data-testid="industries-section">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#363636] mb-4" data-testid="industries-heading">INDUSTRIES WE SERVE</h2>
            <p className="text-base md:text-lg text-[#5E5E5E] max-w-2xl mx-auto">Supporting diverse sectors across India</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center text-center group"
                data-testid={`industry-card-${index}`}
              >
                <div className="w-20 h-20 bg-[#F5F5F5] border border-[#D3D3D3] rounded-full flex items-center justify-center text-[#363636] mb-3 group-hover:bg-[#363636] group-hover:text-white transition-all">
                  {industry.icon}
                </div>
                <p className="text-sm font-medium text-[#5E5E5E] group-hover:text-[#363636] transition-colors">{industry.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 md:py-32 bg-[#F5F5F5]" data-testid="portfolio-section">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#363636] mb-4" data-testid="portfolio-heading">PAST WORK</h2>
            <p className="text-base md:text-lg text-[#5E5E5E] max-w-2xl mx-auto">Sample projects showcasing our capabilities</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {portfolio.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-xl overflow-hidden border border-[#D3D3D3] hover:border-[#363636] transition-all group"
                data-testid={`portfolio-card-${index}`}
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-[#363636] mb-3">{project.name}</h3>
                  <p className="text-[#5E5E5E] mb-4 leading-relaxed">{project.description}</p>
                  <p className="text-sm text-[#878787] font-medium">{project.tech}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-[#363636] text-white" data-testid="cta-section">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">LET'S BUILD<br />SOMETHING GREAT</h2>
            <p className="text-lg md:text-xl text-[#D3D3D3] mb-8 max-w-2xl mx-auto">
              Ready to transform your business with technology? Get in touch today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowBookForm(true)}
                className="bg-white text-[#363636] px-8 py-4 rounded-full font-medium transition-all hover:bg-[#D3D3D3]"
                data-testid="cta-book-now-btn"
              >
                Book Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowCallForm(true)}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-medium transition-all hover:bg-white hover:text-[#363636]"
                data-testid="cta-schedule-call-btn"
              >
                Schedule a Call
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-white border-t border-[#D3D3D3] py-12" data-testid="footer">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-[#363636] mb-4">TechNexus India</h3>
              <p className="text-[#5E5E5E]">Affordable tech solutions for Indian businesses.</p>
            </div>
            <div>
              <h4 className="font-semibold text-[#363636] mb-4">Contact</h4>
              <div className="space-y-2 text-[#5E5E5E]">
                <p className="flex items-center gap-2"><Mail className="w-4 h-4" /> contact@technexusindia.com</p>
                <p className="flex items-center gap-2"><Phone className="w-4 h-4" /> +91 98765 43210</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-[#363636] mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-[#F5F5F5] rounded-full flex items-center justify-center text-[#363636] hover:bg-[#363636] hover:text-white transition-all">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-[#F5F5F5] rounded-full flex items-center justify-center text-[#363636] hover:bg-[#363636] hover:text-white transition-all">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-[#D3D3D3] pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#5E5E5E]">
            <p>&copy; 2025 TechNexus India. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[#363636] transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-[#363636] transition-colors">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Modals */}
      {showBookForm && <BookNowForm onClose={() => setShowBookForm(false)} />}
      {showCallForm && <ScheduleCallForm onClose={() => setShowCallForm(false)} />}
      
      {/* Fixed Components */}
      <WhatsAppButton />
      <LiveChatWidget />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;