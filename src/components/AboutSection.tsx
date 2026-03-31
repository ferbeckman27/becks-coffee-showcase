import { motion } from "framer-motion";
import coffeeAmbiance from "@/assets/coffee-ambiance.jpg";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 md:py-32">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={coffeeAmbiance}
              alt="Ambiente aconchegante da cafeteria Beck's"
              className="w-full aspect-[4/5] object-cover rounded-sm"
              loading="lazy"
              width={1024}
              height={768}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-accent text-sm tracking-[0.3em] uppercase font-medium mb-4">
              Nossa História
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Mais que café,<br />
              <span className="italic text-accent">uma experiência</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                A Beck's nasceu do desejo de criar um espaço onde o café fosse mais do que uma bebida — fosse um ritual. Selecionamos os melhores grãos de pequenos produtores brasileiros e os torramos artesanalmente.
              </p>
              <p>
                Nosso espaço foi pensado para acolher: tijolos aparentes, luz quente e o aroma inconfundível de café fresco. Seja para trabalhar, encontrar amigos ou simplesmente pausar, a Beck's é o seu lugar.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-border">
              {[
                { number: "2019", label: "Fundação" },
                { number: "15+", label: "Blends" },
                { number: "100%", label: "Arábica" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-2xl md:text-3xl font-bold text-foreground">{stat.number}</p>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
