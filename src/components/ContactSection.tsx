import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Instagram } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contato" className="py-24 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-accent text-sm tracking-[0.3em] uppercase font-medium mb-4">
            Visite-nos
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-tight">
            Estamos esperando<br />
            <span className="italic text-accent">por você</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { icon: MapPin, title: "Endereço", info: "Rua dos Cafés, 42\nCentro, São Paulo — SP" },
            { icon: Clock, title: "Horário", info: "Seg — Sex: 7h às 20h\nSáb — Dom: 8h às 18h" },
            { icon: Phone, title: "Contato", info: "(11) 9 8765-4321\ncontato@becks.cafe" },
            { icon: Instagram, title: "Instagram", info: "@becks.cafe\nSiga para novidades" },
          ].map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 text-accent rounded-full mb-4">
                <item.icon size={20} />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground whitespace-pre-line leading-relaxed">{item.info}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
