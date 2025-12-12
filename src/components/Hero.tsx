import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle, ChevronDown, Play } from "lucide-react";

const typingTexts = [
  "Agentes Telefónicos IA",
  "Reservas Automáticas 24/7",
  "Voz Natural Humana",
  "Seguimiento por WhatsApp",
  "Cero Llamadas Perdidas",
];

export const Hero = () => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = typingTexts[currentIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < fullText.length) {
        setCurrentText(fullText.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (!isDeleting && charIndex === fullText.length) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && charIndex > 0) {
        setCurrentText(fullText.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setCurrentIndex((currentIndex + 1) % typingTexts.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, currentIndex]);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full filter blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full filter blur-3xl animate-pulse-slow"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.05%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-8"
        >
          <span className="text-accent text-sm font-medium">🇵🇪 Primera Agencia de Agentes IA Telefónicos en Perú</span>
        </motion.div>

        {/* Main Title */}
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="block text-foreground"
          >
            Tus Llamadas
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="block text-gradient glow-text"
          >
            en Piloto Automático
          </motion.span>
        </h1>

        {/* Subtitle with Typing Effect */}
        <div className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 h-10">
          <span>{currentText}</span>
          <span className="inline-block w-0.5 h-8 bg-accent ml-1 animate-pulse"></span>
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12"
        >
          Creamos <span className="text-accent font-semibold">agentes telefónicos con inteligencia artificial</span> que 
          reservan citas, responden consultas y dan seguimiento por WhatsApp. 
          <span className="text-accent font-semibold"> Hablan como humanos, trabajan 24/7.</span>
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 max-w-4xl mx-auto"
        >
          <div className="neu-card p-6 rounded-xl">
            <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">99%</div>
            <div className="text-sm text-muted-foreground">Tasa de Comprensión</div>
          </div>
          <div className="neu-card p-6 rounded-xl">
            <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Disponibilidad</div>
          </div>
          <div className="neu-card p-6 rounded-xl">
            <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">3seg</div>
            <div className="text-sm text-muted-foreground">Tiempo Respuesta</div>
          </div>
          <div className="neu-card p-6 rounded-xl">
            <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">+500</div>
            <div className="text-sm text-muted-foreground">Reservas/mes</div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <a
            href="#contacto"
            className="group relative neu-button px-8 py-4 rounded-full font-semibold text-lg text-primary-foreground overflow-hidden flex items-center space-x-2"
          >
            <Phone className="w-5 h-5" />
            <span className="relative z-10">Probar Demo Gratis</span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent-light to-accent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </a>
          <a
            href="#demo"
            className="group glass px-8 py-4 rounded-full font-semibold text-lg border border-accent/30 hover:border-accent/60 transition-all flex items-center space-x-2"
          >
            <Play className="w-5 h-5 text-accent" />
            <span className="text-muted-foreground group-hover:text-accent transition-colors">Ver Demo en Vivo</span>
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="flex justify-center animate-bounce"
        >
          <a href="#nosotros" className="block">
            <div className="w-6 h-10 border-2 border-accent/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse"></div>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
