import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTA from "@/components/sections/CTA";
import { motion } from "framer-motion";
import { Target, Eye, Heart, Users, Award, TrendingUp } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description: "Every strategy is designed with measurable outcomes in mind.",
  },
  {
    icon: Heart,
    title: "Client-Focused",
    description: "Your success is our success. We're partners in your growth journey.",
  },
  {
    icon: Eye,
    title: "Transparent",
    description: "Clear communication and honest reporting, always.",
  },
  {
    icon: TrendingUp,
    title: "Innovative",
    description: "Staying ahead of trends to give you a competitive edge.",
  },
];

const stats = [
  { value: "15+", label: "Years of Experience" },
  { value: "500+", label: "Successful Projects" },
  { value: "50+", label: "Team Members" },
  { value: "25+", label: "Industry Awards" },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-30" />
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto text-center"
            >
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">
                About Us
              </span>
              <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-6">
                We're <span className="gradient-text">Pixel Reach</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A team of passionate digital marketers, data analysts, and creative minds dedicated to helping businesses thrive in the digital landscape.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-24 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Our <span className="gradient-text">Story</span>
                </h2>
                <p className="text-muted-foreground mb-4">
                  Founded in 2010, Pixel Reach started with a simple mission: to help businesses navigate the complex world of digital marketing with data-driven strategies that actually work.
                </p>
                <p className="text-muted-foreground mb-4">
                  Over the years, we've grown from a small team of three to a full-service digital agency with over 50 experts across SEO, paid media, content, social, and analytics.
                </p>
                <p className="text-muted-foreground">
                  Today, we've helped over 500 businesses—from startups to Fortune 500 companies—achieve remarkable growth through strategic, creative, and performance-focused digital marketing.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-6"
              >
                {stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className="p-6 rounded-2xl glass border border-border text-center"
                  >
                    <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">
                Our Values
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
                What <span className="gradient-text">Drives Us</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-6"
                >
                  <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-24 bg-secondary">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">
                Our Team
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
                Meet the <span className="gradient-text">Experts</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our diverse team brings together expertise from various digital disciplines to deliver comprehensive marketing solutions.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { name: "Alex Thompson", role: "CEO & Founder" },
                { name: "Maria Garcia", role: "Head of Strategy" },
                { name: "James Wilson", role: "Creative Director" },
                { name: "Sarah Chen", role: "Head of Analytics" },
              ].map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-32 h-32 rounded-full gradient-primary mx-auto mb-6 flex items-center justify-center">
                    <Users className="w-16 h-16 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-muted-foreground">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default About;