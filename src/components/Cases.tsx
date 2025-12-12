import { motion } from "framer-motion";
import { TrendingUp, Clock, Users, Star } from "lucide-react";

const cases = [
  {
    industry: "Clínica Dental",
    title: "Dr. Sonrisa Perfecta - San Isidro",
    description: "Automatización completa de citas y recordatorios para clínica dental con 3 sedes.",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80",
    stats: [
      { label: "Llamadas/día", value: "150+", icon: Clock },
      { label: "Tasa reserva", value: "78%", icon: TrendingUp },
      { label: "Satisfacción", value: "4.9★", icon: Star },
    ],
    tags: ["Salud", "Citas", "WhatsApp"],
  },
  {
    industry: "Restaurante",
    title: "La Casa del Sabor - San Miguel",
    description: "Sistema de reservas telefónicas y confirmación automática para restaurante premium.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    stats: [
      { label: "Reservas/mes", value: "800+", icon: Users },
      { label: "No-shows", value: "-65%", icon: TrendingUp },
      { label: "Satisfacción", value: "4.8★", icon: Star },
    ],
    tags: ["Gastronomía", "Reservas", "SMS"],
  },
  {
    industry: "Gimnasio",
    title: "FitZone Premium - Magdalena",
    description: "Agendamiento de clases, recordatorios y seguimiento de membresías automatizado.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
    stats: [
      { label: "Miembros activos", value: "2,500+", icon: Users },
      { label: "Retención", value: "+40%", icon: TrendingUp },
      { label: "Satisfacción", value: "4.7★", icon: Star },
    ],
    tags: ["Fitness", "Clases", "CRM"],
  },
];

export const Cases = () => {
  return (
    <section id="casos" className="py-24 bg-dark-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">Casos de</span>
            <br />
            <span className="text-gradient">Éxito</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Empresas que ya transformaron su atención telefónica con nuestros agentes IA
          </p>
        </div>

        {/* Cases Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((caseItem, index) => (
            <motion.div
              key={caseItem.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group neu-card rounded-xl overflow-hidden hover:scale-[1.02] transition-all"
            >
              {/* Image */}
              <div className="h-48 relative overflow-hidden">
                <img
                  src={caseItem.image}
                  alt={caseItem.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-accent/90 text-primary-foreground rounded-full text-xs font-semibold">
                    {caseItem.industry}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{caseItem.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{caseItem.description}</p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {caseItem.stats.map((stat) => (
                    <div key={stat.label} className="text-center p-2 bg-dark-200/50 rounded-lg">
                      <div className="text-lg font-bold text-gradient">{stat.value}</div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {caseItem.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 bg-dark-200 text-muted-foreground rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="glass-dark p-8 rounded-2xl border border-accent/20 text-center">
            <div className="text-4xl mb-4">💬</div>
            <p className="text-xl text-foreground/90 italic mb-6">
              "Desde que implementamos el agente telefónico de Los Autómatas, nuestras reservas 
              aumentaron un 45% y ya no perdemos llamadas fuera de horario. Es como tener una 
              recepcionista que nunca descansa."
            </p>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-accent to-secondary rounded-full flex items-center justify-center text-foreground font-bold">
                MC
              </div>
              <div className="text-left">
                <p className="font-semibold text-foreground">María Castillo</p>
                <p className="text-sm text-muted-foreground">Gerente, Clínica Dr. Sonrisa Perfecta</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
