import { motion } from "framer-motion";
import heroImage from "@/assets/hero-coffee.jpg";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Barista preparando café especial na Beck's"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-foreground/60" />
      </div>

      <div className="relative z-10 container text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-primary-foreground/80 font-body text-sm md:text-base tracking-[0.3em] uppercase mb-4"
        >
          Café Especial & Experiência
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display text-6xl md:text-8xl lg:text-9xl font-bold text-primary-foreground tracking-tight mb-6"
        >
          beck's
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-primary-foreground/70 font-body text-lg md:text-xl max-w-md mx-auto mb-10"
        >
          Cada xícara conta uma história. Grãos selecionados, torrados com paixão.
        </motion.p>

        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          href="#cardapio"
          className="inline-block bg-accent text-accent-foreground px-8 py-3 text-sm font-medium tracking-widest uppercase hover:bg-accent/90 transition-colors rounded-sm"
        >
          Ver Cardápio
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;
