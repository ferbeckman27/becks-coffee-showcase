import { motion } from "framer-motion";
import coffeeDrinks from "@/assets/coffee-drinks.jpg";

const menuItems = [
  { category: "Espressos", items: [
    { name: "Espresso Tradicional", price: "R$ 8", desc: "Intenso e encorpado" },
    { name: "Espresso Duplo", price: "R$ 12", desc: "Para os apaixonados" },
    { name: "Macchiato", price: "R$ 10", desc: "Espresso com toque de leite" },
  ]},
  { category: "Especialidades", items: [
    { name: "Cappuccino Beck's", price: "R$ 16", desc: "Nossa receita exclusiva" },
    { name: "Latte Caramelo", price: "R$ 18", desc: "Com calda artesanal" },
    { name: "Cold Brew", price: "R$ 15", desc: "Extraído a frio por 24h" },
  ]},
  { category: "Acompanhamentos", items: [
    { name: "Croissant Artesanal", price: "R$ 14", desc: "Massa folhada na manteiga" },
    { name: "Bolo de Cenoura", price: "R$ 12", desc: "Com cobertura de chocolate" },
    { name: "Cookie Duplo Chocolate", price: "R$ 10", desc: "Crocante por fora, macio por dentro" },
  ]},
];

const MenuSection = () => {
  return (
    <section id="cardapio" className="py-24 md:py-32 bg-primary text-primary-foreground">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-accent text-sm tracking-[0.3em] uppercase font-medium mb-4">
            Nosso Cardápio
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
            Feito com <span className="italic">carinho</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-12">
            {menuItems.map((category, catIdx) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: catIdx * 0.15 }}
              >
                <h3 className="font-display text-xl font-semibold mb-6 text-accent">
                  {category.category}
                </h3>
                <div className="space-y-5">
                  {category.items.map((item) => (
                    <div key={item.name} className="flex justify-between items-start gap-4">
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-primary-foreground/60 mt-0.5">{item.desc}</p>
                      </div>
                      <span className="font-display text-lg font-semibold whitespace-nowrap">{item.price}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="hidden lg:block sticky top-28"
          >
            <img
              src={coffeeDrinks}
              alt="Bebidas especiais da Beck's"
              className="w-full aspect-square object-cover rounded-sm"
              loading="lazy"
              width={1024}
              height={1024}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
