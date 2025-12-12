import { Bot, Phone, Mail, MapPin, Instagram, Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative py-20 bg-gradient-to-t from-dark-100 to-background border-t border-dark-300 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)",
            backgroundSize: "20px 20px",
          }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* About */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-accent to-secondary rounded-xl flex items-center justify-center shadow-lg">
                <Bot className="w-6 h-6 text-background" />
              </div>
              <div>
                <p className="font-display font-bold text-xl text-foreground">Los Autómatas</p>
                <p className="text-xs text-muted-foreground">Agentes IA Telefónicos</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Primera agencia peruana especializada en crear agentes telefónicos con inteligencia 
              artificial. Automatizamos tus llamadas, reservas y seguimiento por WhatsApp.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/automatas.pe/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-dark-200 rounded-lg flex items-center justify-center hover:bg-accent/20 transition-colors"
              >
                <Instagram className="w-5 h-5 text-muted-foreground hover:text-accent transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a href="#nosotros" className="text-muted-foreground hover:text-accent transition-colors">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-muted-foreground hover:text-accent transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#casos" className="text-muted-foreground hover:text-accent transition-colors">
                  Casos de Éxito
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-muted-foreground hover:text-accent transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-6">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-accent" />
                <span className="text-muted-foreground">+51 991 623 582</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-accent" />
                <span className="text-muted-foreground">hola@losautomatas.pe</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-accent" />
                <span className="text-muted-foreground">Lima, Perú 🇵🇪</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-dark-300 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground flex items-center">
              © 2026 Los Autómatas. Hecho con{" "}
              <Heart className="w-4 h-4 text-red-500 mx-1" /> en Perú
            </p>
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-accent transition-colors">
                Privacidad
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                Términos
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
