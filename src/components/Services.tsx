import { motion } from "framer-motion";
import { Phone, MessageCircle, Calendar, BarChart, Headphones, Settings, Check } from "lucide-react";

const services = [
  {
    icon: Phone,
    title: "Agentes Telefónicos IA",
    description: "Recepcionistas virtuales que contestan llamadas, entienden contexto y resuelven consultas con voz natural indistinguible de un humano.",
    features: ["Voz natural con IA", "Comprensión contextual", "Múltiples idiomas", "Escalable infinitamente"],
    color: "accent",
  },
  {
    icon: Calendar,
    title: "Reservas Automatizadas",
    description: "Sistema completo de agendamiento que verifica disponibilidad, confirma citas y envía recordatorios automáticos.",
    features: ["Sincronización calendario", "Confirmaciones automáticas", "Recordatorios SMS/WhatsApp", "Gestión de cancelaciones"],
    color: "secondary",
  },
  {
    icon: MessageCircle,
    title: "Seguimiento WhatsApp",
    description: "Continuidad de la conversación telefónica por WhatsApp. Envío de confirmaciones, información adicional y seguimiento.",
    features: ["Mensajes personalizados", "Envío de documentos", "Respuestas automáticas", "Integración con CRM"],
    color: "accent",
  },
  {
    icon: BarChart,
    title: "Analytics en Tiempo Real",
    description: "Dashboard completo con métricas de llamadas, conversiones, satisfacción y tendencias de consultas.",
    features: ["Reportes automáticos", "KPIs personalizados", "Grabaciones de llamadas", "Insights con IA"],
    color: "secondary",
  },
];

export const Services = () => {
  return (
    <section id="servicios" className="py-24 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-40 right-20 w-64 h-64 bg-secondary rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">Nuestros</span>
            <br />
            <span className="text-gradient">Servicios</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Soluciones integrales de automatización telefónica con IA para transformar 
            la comunicación de tu negocio
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="neu-card p-8 rounded-2xl h-full transition-all duration-300 group-hover:scale-[1.02]">
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color === 'accent' ? 'from-accent/10' : 'from-secondary/10'} to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl`}></div>
                <div className="relative z-10">
                  <div className={`w-16 h-16 ${service.color === 'accent' ? 'bg-accent/20 group-hover:bg-accent/30' : 'bg-secondary/20 group-hover:bg-secondary/30'} rounded-xl flex items-center justify-center mb-6 transition-colors`}>
                    <service.icon className={`w-8 h-8 ${service.color === 'accent' ? 'text-accent' : 'text-secondary'}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-muted-foreground">
                        <Check className={`w-4 h-4 mr-2 ${service.color === 'accent' ? 'text-accent' : 'text-secondary'}`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-accent/10 to-secondary/10 border border-accent/20 rounded-full mb-6">
            <span className="text-accent text-sm font-medium mr-2">💡</span>
            <span className="text-foreground text-sm">¿Listo para automatizar tu atención telefónica?</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Transformemos tus llamadas en{" "}
            <span className="text-gradient">conversiones automáticas</span>
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Cada negocio es único. Conversemos sobre cómo nuestros agentes IA pueden 
            mejorar tu atención al cliente y multiplicar tus reservas.
          </p>
          <a
            href="#contacto"
            className="group relative neu-button px-8 py-4 rounded-full font-semibold text-lg text-primary-foreground overflow-hidden inline-flex items-center"
          >
            <span className="relative z-10 mr-2">Solicitar Demo Gratis</span>
            <Phone className="w-5 h-5 relative z-10 group-hover:animate-bounce" />
            <div className="absolute inset-0 bg-gradient-to-r from-accent-light to-accent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
