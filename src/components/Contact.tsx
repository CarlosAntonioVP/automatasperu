import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, MessageCircle, Clock, Shield, Instagram } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
export const Contact = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await fetch("https://n8n-diego-n8n.am0d7p.easypanel.host/webhook/automatas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        mode: "no-cors",
        body: JSON.stringify({
          nombre: formData.name,
          email: formData.email,
          mensaje: formData.message,
          telefono: formData.phone,
          "tipo de negocio": formData.business
        })
      });

      // Con mode: "no-cors" no podemos verificar la respuesta, pero el request se envía
      toast({
        title: "¡Mensaje enviado!",
        description: "Te contactaremos en menos de 24 horas."
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        business: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Hubo un problema al enviar el mensaje. Intenta de nuevo.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };
  return <section id="contacto" className="py-24 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-secondary rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">Hablemos de tu</span>
            <br />
            <span className="text-gradient">Próximo Agente IA</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Agenda una demo gratuita y descubre cómo nuestros agentes telefónicos 
            pueden transformar tu negocio
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.5
        }} viewport={{
          once: true
        }}>
            <div className="neu-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-foreground mb-6">Solicita tu Demo Gratis</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-muted-foreground">
                      Nombre *
                    </label>
                    <input type="text" required value={formData.name} onChange={e => setFormData({
                    ...formData,
                    name: e.target.value
                  })} className="w-full px-4 py-3 bg-dark-200/50 border border-dark-300 rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all" placeholder="Tu nombre" />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-muted-foreground">
                      Email *
                    </label>
                    <input type="email" required value={formData.email} onChange={e => setFormData({
                    ...formData,
                    email: e.target.value
                  })} className="w-full px-4 py-3 bg-dark-200/50 border border-dark-300 rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all" placeholder="tu@email.com" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-muted-foreground">
                      Teléfono
                    </label>
                    <input type="tel" value={formData.phone} onChange={e => setFormData({
                    ...formData,
                    phone: e.target.value
                  })} className="w-full px-4 py-3 bg-dark-200/50 border border-dark-300 rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all" placeholder="+51 999 999 999" />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-muted-foreground">
                      Tipo de Negocio
                    </label>
                    <input type="text" value={formData.business} onChange={e => setFormData({
                    ...formData,
                    business: e.target.value
                  })} className="w-full px-4 py-3 bg-dark-200/50 border border-dark-300 rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all" placeholder="Restaurante, Clínica, etc." />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-muted-foreground">
                    Cuéntanos sobre tu negocio
                  </label>
                  <textarea rows={4} value={formData.message} onChange={e => setFormData({
                  ...formData,
                  message: e.target.value
                })} className="w-full px-4 py-3 bg-dark-200/50 border border-dark-300 rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none" placeholder="¿Cuántas llamadas recibes al día? ¿Qué procesos te gustaría automatizar?"></textarea>
                </div>

                <button type="submit" disabled={isLoading} className="w-full group relative neu-button px-8 py-4 rounded-xl font-semibold text-lg text-primary-foreground overflow-hidden flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed">
                  <Send className={`w-5 h-5 ${isLoading ? "animate-pulse" : ""}`} />
                  <span className="relative z-10">{isLoading ? "Enviando..." : "Solicitar Demo Gratis"}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-accent-light to-accent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </button>

                <div className="flex items-center justify-center space-x-6 text-sm">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-accent" />
                    <span className="text-muted-foreground">Respuesta en 24h</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Shield className="w-4 h-4 text-green-400" />
                    <span className="text-muted-foreground">100% Gratuito</span>
                  </div>
                </div>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div initial={{
          opacity: 0,
          x: 50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.5
        }} viewport={{
          once: true
        }} className="space-y-8">
            {/* Quick Contact */}
            <div className="glass-dark p-6 rounded-xl border border-accent/20">
              <h4 className="text-lg font-semibold text-foreground mb-4">Contacto Directo</h4>
              <div className="space-y-4">
                <a href="https://wa.me/51991623582" className="flex items-center space-x-4 p-4 bg-dark-200/50 rounded-xl hover:bg-accent/10 transition-colors group">
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
                    <MessageCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">WhatsApp</p>
                    <p className="text-sm text-muted-foreground">+51 991 623 582</p>
                  </div>
                </a>
                <a href="mailto:hola@losautomatas.pe" className="flex items-center space-x-4 p-4 bg-dark-200/50 rounded-xl hover:bg-accent/10 transition-colors group">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <p className="text-sm text-muted-foreground"> hola@automatasperu.com</p>
                  </div>
                </a>
                <div className="flex items-center space-x-4 p-4 bg-dark-200/50 rounded-xl">
                  <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Ubicación</p>
                    <p className="text-sm text-muted-foreground">Lima, Perú 🇵🇪</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-dark p-6 rounded-xl border border-accent/20">
              <h4 className="text-lg font-semibold text-foreground mb-4">Síguenos</h4>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/automatas.pe/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-dark-200 rounded-lg flex items-center justify-center hover:bg-accent/20 transition-colors">
                  <Instagram className="w-5 h-5 text-muted-foreground hover:text-accent transition-colors" />
                </a>
              </div>
            </div>

            {/* FAQ Preview */}
            <div className="neu-card p-6 rounded-xl">
              <h4 className="text-lg font-semibold text-foreground mb-4">Preguntas Frecuentes</h4>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="font-medium text-foreground">¿Cuánto tiempo toma implementar?</p>
                  <p className="text-muted-foreground">El setup inicial toma entre 5-10 días hábiles.</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">¿Funciona con mi sistema actual?</p>
                  <p className="text-muted-foreground">Sí, nos integramos con la mayoría de CRMs y calendarios.</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">¿Qué pasa si el agente no entiende?</p>
                  <p className="text-muted-foreground">Se transfiere automáticamente a un operador humano.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};