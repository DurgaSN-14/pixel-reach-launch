import { motion } from "framer-motion";

const brands = [
  "TechCorp",
  "InnovateCo",
  "GrowthLabs",
  "StartupX",
  "ScaleFast",
  "DigitalEdge",
];

const TrustedBy = () => {
  return (
    <section className="py-16 border-y border-border bg-secondary/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <span className="text-sm text-muted-foreground uppercase tracking-wider">
            Trusted by industry leaders
          </span>
        </motion.div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {brands.map((brand, index) => (
            <motion.div
              key={brand}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-2xl font-bold text-muted-foreground/50 hover:text-primary transition-colors duration-300"
            >
              {brand}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;