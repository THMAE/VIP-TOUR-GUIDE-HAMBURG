/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { MapPin, Star, Shield, Mail, Phone, ChevronRight, Menu, X, Car, Map, Utensils, Compass, ShoppingBag, GlassWater, Ticket, Ship, Key, Clock } from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [generatedImages, setGeneratedImages] = useState<Record<string, string>>({});

  useEffect(() => {
    const saved = localStorage.getItem('vip_generated_images');
    if (saved) {
      try {
        setGeneratedImages(JSON.parse(saved));
      } catch (e) {}
    }
  }, []);

  const services = [
    {
      title: "VIP Limousinenservice",
      location: "Tanzende Türme & City",
      icon: <Car className="w-6 h-6" />,
      description: "Entspannte und stilvolle Transfers in Luxuslimousinen. Vorbei an den Tanzenden Türmen und sicher durch die pulsierende Metropole.",
      image: "https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "VIP Stadtrundfahrten",
      location: "Elbphilharmonie & Hafen",
      icon: <Map className="w-6 h-6" />,
      description: "Individuelle Touren zu architektonischen Highlights wie der Elbphilharmonie, perfekt abgestimmt auf Ihre persönlichen Interessen.",
      image: generatedImages['tour'] || "https://images.unsplash.com/photo-1582034986517-30d163aa1da9?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "VIP Gastronomie",
      location: "Speicherstadt & Sternerestaurants",
      icon: <Utensils className="w-6 h-6" />,
      description: "Exklusive Reservierungen in den besten Sternerestaurants und Zugang zu den kulinarischen Geheimtipps der Hansestadt.",
      image: generatedImages['gastro'] || "https://images.unsplash.com/photo-1414235077428-338988a928c4?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "VIP Fremdenführer",
      location: "Hamburger Michel & Altstadt",
      icon: <Compass className="w-6 h-6" />,
      description: "Tiefgründiges Insiderwissen und historische Anekdoten, vom Hamburger Michel bis zur historischen Deichstraße.",
      image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "VIP Personal Shopping",
      location: "Alsterhaus & Neuer Wall",
      icon: <ShoppingBag className="w-6 h-6" />,
      description: "Diskrete und stilsichere Shopping-Begleitung rund um das Alsterhaus, den Neuen Wall und luxuriöse Boutiquen.",
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "VIP Nightlife Access",
      location: "Reeperbahn & St. Pauli",
      icon: <GlassWater className="w-6 h-6" />,
      description: "VIP-Tische, Guestlists und diskrete Begleitung auf der Reeperbahn und in den angesagtesten Clubs der Stadt.",
      image: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "VIP Sports & Events",
      location: "St. Pauli Stadion & Arenen",
      icon: <Ticket className="w-6 h-6" />,
      description: "Premium-Tickets und exklusiver Logenzugang für unvergessliche Momente im St. Pauli Stadion oder bei internationalen Events.",
      image: generatedImages['sports'] || "https://images.unsplash.com/photo-1540039155732-6761b22cb86f?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "VIP Yacht & Barkassen",
      location: "Alster & Hamburger Hafen",
      icon: <Ship className="w-6 h-6" />,
      description: "Private Bootstouren auf der Alster oder exklusive Hafenrundfahrten mit Catering und Champagner-Empfang.",
      image: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?q=80&w=1000&auto=format&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-ink-900 text-white selection:bg-gold-500 selection:text-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-ink-900/90 backdrop-blur-lg border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="font-serif text-xl tracking-widest uppercase text-gold-500 flex items-center gap-2">
            <Star className="w-5 h-5 fill-gold-500" />
            <span>VIP Tour Guide <span className="text-white">Hamburg</span></span>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8 text-sm tracking-widest uppercase text-gray-300">
            <a href="#services" className="hover:text-gold-500 transition-colors">Services</a>
            <a href="#about" className="hover:text-gold-500 transition-colors">Über Mich</a>
            <a href="#contact" className="px-6 py-2 bg-white/5 border border-gold-500/50 text-gold-500 hover:bg-gold-500 hover:text-black transition-all rounded-sm backdrop-blur-sm">
              Anfrage
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute top-20 left-0 w-full bg-ink-800/95 backdrop-blur-xl border-b border-white/10 py-6 px-6 flex flex-col space-y-6 shadow-2xl"
          >
            <a href="#services" onClick={() => setIsMenuOpen(false)} className="text-gray-300 uppercase tracking-widest text-sm flex items-center gap-3"><Star className="w-4 h-4 text-gold-500"/> Services</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-gray-300 uppercase tracking-widest text-sm flex items-center gap-3"><Shield className="w-4 h-4 text-gold-500"/> Über Mich</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-gold-500 uppercase tracking-widest text-sm flex items-center gap-3"><Mail className="w-4 h-4"/> Anfrage</a>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1596423735880-5f2a689b903e?q=80&w=2000&auto=format&fit=crop" 
            alt="Hamburg Hafen" 
            className="w-full h-full object-cover opacity-30 scale-105 animate-[pulse_20s_ease-in-out_infinite_alternate]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-900/40 via-ink-900/60 to-ink-900"></div>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-gold-500/30 bg-gold-500/10 backdrop-blur-md mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse"></span>
            <span className="text-gold-500 uppercase tracking-[0.2em] text-xs font-medium">Premium Concierge & Guide</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-light leading-tight mb-8"
          >
            Hamburg, <br/><span className="italic text-gold-500">Modern & Exklusiv</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-300 font-light max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Von der Elbphilharmonie bis zur Reeperbahn. Erleben Sie die Hansestadt durch die Augen eines Insiders – mit Limousinenservice, VIP-Gastronomie und absoluter Diskretion.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <a href="#services" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-gold-500 text-black uppercase tracking-widest text-sm font-medium hover:bg-gold-400 transition-colors rounded-sm">
              Services entdecken
            </a>
            <a href="#contact" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-white/5 border border-white/20 text-white uppercase tracking-widest text-sm font-medium hover:bg-white/10 transition-colors rounded-sm backdrop-blur-sm">
              VIP Anfrage
            </a>
          </motion.div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section id="services" className="py-32 px-6 bg-ink-900 relative">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-96 bg-gold-500/5 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div>
              <h2 className="text-gold-500 uppercase tracking-widest text-xs mb-4 flex items-center gap-2">
                <div className="w-8 h-[1px] bg-gold-500"></div>
                Exklusive Leistungen
              </h2>
              <h3 className="text-4xl md:text-5xl font-serif">Ihre VIP Services</h3>
            </div>
            <div className="flex flex-col items-start md:items-end gap-3">
              <p className="text-gray-400 font-light max-w-md text-sm md:text-base md:text-right">
                Maßgeschneiderte Erlebnisse an den schönsten und aufregendsten Orten Hamburgs. Alles aus einer Hand, perfekt organisiert.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative h-[400px] overflow-hidden rounded-sm cursor-pointer"
              >
                {/* Background Image */}
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-ink-900/60 to-ink-900/95 transition-opacity duration-500 group-hover:opacity-90"></div>
                <div className="absolute inset-0 bg-gold-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay"></div>
                
                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <div className="text-gold-500 mb-4 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 origin-left">
                      {service.icon}
                    </div>
                    
                    <h4 className="text-xl font-serif mb-1 text-white group-hover:text-gold-400 transition-colors">
                      {service.title}
                    </h4>
                    
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-4 font-medium flex items-center gap-1.5">
                      <MapPin className="w-3 h-3" /> {service.location}
                    </p>
                    
                    <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-500 overflow-hidden">
                      <p className="text-gray-300 font-light text-sm leading-relaxed border-t border-white/10 pt-4 mt-2">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Exclusive Access & Custom Routes Section */}
      <section id="exclusive" className="py-32 px-6 bg-ink-900 border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gold-500/5 blur-[150px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-gold-500 uppercase tracking-widest text-xs mb-4 flex items-center justify-center gap-2">
              <div className="w-8 h-[1px] bg-gold-500"></div>
              Ihre Privilegien
              <div className="w-8 h-[1px] bg-gold-500"></div>
            </h2>
            <h3 className="text-4xl md:text-5xl font-serif">Maßgeschneiderte Routen & Exklusiver Zugang</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-ink-800/50 p-8 border border-white/10 rounded-sm hover:border-gold-500/30 transition-colors"
            >
              <div className="w-14 h-14 bg-gold-500/10 flex items-center justify-center rounded-full mb-6">
                <Map className="w-6 h-6 text-gold-500" />
              </div>
              <h4 className="text-2xl font-serif mb-4">100% Individualisierbar</h4>
              <p className="text-gray-400 font-light leading-relaxed">
                Keine Tour gleicht der anderen. Jede Route wird präzise auf Ihre Interessen, Ihren Zeitplan und Ihre Vorlieben abgestimmt. Ob Architektur, Geschichte, Kulinarik oder Shopping – Sie bestimmen das Programm.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-ink-800/50 p-8 border border-white/10 rounded-sm hover:border-gold-500/30 transition-colors"
            >
              <div className="w-14 h-14 bg-gold-500/10 flex items-center justify-center rounded-full mb-6">
                <Key className="w-6 h-6 text-gold-500" />
              </div>
              <h4 className="text-2xl font-serif mb-4">Hidden Champions</h4>
              <p className="text-gray-400 font-light leading-relaxed">
                Dank meines weitreichenden Netzwerks öffne ich Ihnen Türen, die anderen verschlossen bleiben. Erhalten Sie exklusiven Zugang zu privaten Sammlungen, VIP-Bereichen und den bestgehüteten Geheimnissen der Stadt.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-ink-800/50 p-8 border border-white/10 rounded-sm hover:border-gold-500/30 transition-colors"
            >
              <div className="w-14 h-14 bg-gold-500/10 flex items-center justify-center rounded-full mb-6">
                <Clock className="w-6 h-6 text-gold-500" />
              </div>
              <h4 className="text-2xl font-serif mb-4">24/7 Concierge Service</h4>
              <p className="text-gray-400 font-light leading-relaxed">
                Ihre Pläne ändern sich spontan? Kein Problem. Als Ihr persönlicher VIP Guide reagiere ich flexibel auf Ihre Wünsche und organisiere auch kurzfristig Tische, Tickets oder Transfers.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 bg-ink-800 border-y border-white/5">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="aspect-[4/5] rounded-sm overflow-hidden border border-white/10 relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=800&auto=format&fit=crop" 
                alt="VIP Tour Guide Portrait" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-32 h-32 border-t-2 border-l-2 border-gold-500/30 z-0 hidden md:block"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-2 border-r-2 border-gold-500/30 z-0 hidden md:block"></div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-gold-500 uppercase tracking-widest text-xs mb-4 flex items-center gap-2">
              <div className="w-8 h-[1px] bg-gold-500"></div>
              Ihre Persönliche Begleitung
            </h2>
            <h3 className="text-4xl md:text-5xl font-serif mb-8">Hanseatische Eleganz & Absolute Diskretion</h3>
            
            <div className="space-y-6 text-gray-300 font-light leading-relaxed mb-10 text-lg">
              <p>
                Als Einzelunternehmerin und waschechte Hamburgerin biete ich Ihnen Touren und Services, die Sie in keinem Reiseführer finden. Mein Fokus liegt auf absoluter Exklusivität, Flexibilität und der Erfüllung Ihrer individuellen Wünsche.
              </p>
              <p>
                Ob Prominenz, Geschäftsführung oder anspruchsvolle Privatpersonen – ich garantiere Ihnen ein Höchstmaß an Diskretion und ein maßgeschneidertes Erlebnis in der schönsten Stadt der Welt.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-8 p-6 bg-ink-900/50 border border-white/5 rounded-sm">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gold-500/10 rounded-sm">
                  <Shield className="text-gold-500 w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-white">Diskretion</h4>
                  <p className="text-sm text-gray-400 mt-1">100% Vertraulichkeit bei allen Touren und Transfers.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gold-500/10 rounded-sm">
                  <Star className="text-gold-500 w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-white">Premium</h4>
                  <p className="text-sm text-gray-400 mt-1">Höchster Standard in Service, Fahrzeugen und Gastronomie.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 bg-ink-900 relative overflow-hidden">
        {/* Decorative background text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-serif font-black text-white/[0.02] whitespace-nowrap pointer-events-none select-none">
          HAMBURG
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-gold-500 uppercase tracking-widest text-xs mb-4 flex items-center justify-center gap-2">
              <div className="w-8 h-[1px] bg-gold-500"></div>
              Kontakt
              <div className="w-8 h-[1px] bg-gold-500"></div>
            </h2>
            <h3 className="text-4xl md:text-5xl font-serif">Ihre Buchungsanfrage</h3>
            <p className="text-gray-400 mt-6 font-light max-w-2xl mx-auto">
              Lassen Sie uns Ihre perfekte Hamburg-Tour planen. Teilen Sie mir Ihre Wünsche mit, und ich erstelle Ihnen ein maßgeschneidertes VIP-Konzept.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-12 bg-ink-800/50 backdrop-blur-sm p-8 md:p-12 border border-white/10 rounded-sm shadow-2xl">
            <div className="md:col-span-2 space-y-10">
              <div>
                <h4 className="font-serif text-2xl mb-6 text-white">Direkter Kontakt</h4>
                <div className="space-y-6 text-gray-300 font-light">
                  <a href="tel:+4915112345678" className="flex items-center space-x-4 hover:text-gold-500 transition-colors group">
                    <div className="w-12 h-12 bg-ink-900 border border-white/10 flex items-center justify-center rounded-sm group-hover:border-gold-500/50 transition-colors">
                      <Phone className="text-gold-500 w-5 h-5" />
                    </div>
                    <span>+49 (0) 151 12345678</span>
                  </a>
                  <a href="mailto:vip@tourguide-hamburg.de" className="flex items-center space-x-4 hover:text-gold-500 transition-colors group">
                    <div className="w-12 h-12 bg-ink-900 border border-white/10 flex items-center justify-center rounded-sm group-hover:border-gold-500/50 transition-colors">
                      <Mail className="text-gold-500 w-5 h-5" />
                    </div>
                    <span>vip@tourguide-hamburg.de</span>
                  </a>
                  <div className="flex items-center space-x-4 group">
                    <div className="w-12 h-12 bg-ink-900 border border-white/10 flex items-center justify-center rounded-sm group-hover:border-gold-500/50 transition-colors">
                      <MapPin className="text-gold-500 w-5 h-5" />
                    </div>
                    <span>20457 Hamburg<br/>Deutschland</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-3">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-gray-400 font-medium">Name</label>
                    <input type="text" className="w-full bg-ink-900/80 border border-white/10 px-4 py-3.5 text-white focus:outline-none focus:border-gold-500 focus:bg-ink-900 transition-all rounded-sm" placeholder="Ihr Name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-gray-400 font-medium">Firma (Optional)</label>
                    <input type="text" className="w-full bg-ink-900/80 border border-white/10 px-4 py-3.5 text-white focus:outline-none focus:border-gold-500 focus:bg-ink-900 transition-all rounded-sm" placeholder="Ihre Firma" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-gray-400 font-medium">E-Mail</label>
                  <input type="email" className="w-full bg-ink-900/80 border border-white/10 px-4 py-3.5 text-white focus:outline-none focus:border-gold-500 focus:bg-ink-900 transition-all rounded-sm" placeholder="ihre.email@beispiel.de" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-gray-400 font-medium">Gewünschte Services</label>
                  <select className="w-full bg-ink-900/80 border border-white/10 px-4 py-3.5 text-white focus:outline-none focus:border-gold-500 focus:bg-ink-900 transition-all rounded-sm appearance-none">
                    <option value="">Bitte wählen...</option>
                    <option value="limousine">VIP Limousinenservice</option>
                    <option value="tour">VIP Stadtrundfahrten</option>
                    <option value="gastro">VIP Gastronomie</option>
                    <option value="guide">VIP Fremdenführer</option>
                    <option value="shopping">VIP Personal Shopping</option>
                    <option value="nightlife">VIP Nightlife Access</option>
                    <option value="sports">VIP Sports & Events</option>
                    <option value="yacht">VIP Yacht & Barkassen</option>
                    <option value="multiple">Mehrere / Individuelles Paket</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-gray-400 font-medium">Ihre Wünsche & Details</label>
                  <textarea rows={4} className="w-full bg-ink-900/80 border border-white/10 px-4 py-3.5 text-white focus:outline-none focus:border-gold-500 focus:bg-ink-900 transition-all rounded-sm resize-none" placeholder="Teilen Sie mir Ihre Vorstellungen, Daten und Personenzahl mit..."></textarea>
                </div>
                <button type="submit" className="w-full bg-gold-500 text-black uppercase tracking-widest text-sm font-bold py-4 hover:bg-gold-400 hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all rounded-sm mt-4">
                  Unverbindliche Anfrage Senden
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-serif text-lg tracking-widest uppercase text-gold-500 flex items-center gap-2">
            <Star className="w-4 h-4 fill-gold-500" />
            <span>VIP Tour Guide <span className="text-white">Hamburg</span></span>
          </div>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-xs uppercase tracking-widest text-gray-500">
            <a href="#" className="hover:text-gold-500 transition-colors">Impressum</a>
            <a href="#" className="hover:text-gold-500 transition-colors">Datenschutz</a>
            <a href="#" className="hover:text-gold-500 transition-colors">AGB</a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-white/5 text-center md:text-left text-xs text-gray-600 flex flex-col md:flex-row justify-between items-center gap-4">
          <span>&copy; {new Date().getFullYear()} VIP Tour Guide Hamburg. Alle Rechte vorbehalten.</span>
          <span>Designed for Excellence</span>
        </div>
      </footer>
    </div>
  );
}
