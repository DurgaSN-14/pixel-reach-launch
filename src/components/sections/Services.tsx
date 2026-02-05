import { motion } from "framer-motion";
import { Search, Share2, Target, FileText, Zap, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Dominate search rankings with data-driven SEO strategies that drive organic traffic and conversions.",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description: "Build engaged communities and amplify your brand voice across all major social platforms.",
  },
  {
    icon: Target,
    title: "Paid Advertising",
    description: "Maximize ROI with precision-targeted PPC campaigns on Google, Facebook, and beyond.",
  },
  {
    icon: FileText,
    title: "Content Marketing",
    description: "Compelling content that educates, entertains, and converts your audience into loyal customers.",
  },
  {
    icon: Zap,
    title: "Website Optimization",
    description: "Lightning-fast, conversion-optimized websites that turn visitors into customers.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Clear, actionable insights that help you understand your performance and make smarter decisions.",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-24 bg-secondary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-dots opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            What We Do
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
            Services That <span className="gradient-text">Drive Results</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We offer a full suite of digital marketing services designed to help your business thrive in the digital landscape.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="neon" size="lg" asChild>
            <Link to="/services">View All Services</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;