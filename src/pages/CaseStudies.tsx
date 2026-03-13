import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTA from "@/components/sections/CTA";
import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const caseStudies = [
  {
    title: "E-Commerce Revenue Boost",
    client: "Kanchipuram Silks Online",
    industry: "E-Commerce",
    results: [
      { metric: "Revenue Increase", value: "+340%" },
      { metric: "ROAS", value: "8.5x" },
      { metric: "Conversion Rate", value: "+125%" },
    ],
    description: "Transformed an underperforming e-commerce store into a revenue-generating machine through strategic paid advertising and conversion optimization.",
  },
  {
    title: "SaaS Lead Generation",
    client: "Nellai Tech Solutions",
    industry: "Technology",
    results: [
      { metric: "Qualified Leads", value: "+280%" },
      { metric: "Cost per Lead", value: "-45%" },
      { metric: "Demo Bookings", value: "+190%" },
    ],
    description: "Developed a comprehensive inbound marketing strategy that dramatically increased qualified leads while reducing acquisition costs.",
  },
  {
    title: "Local Business Dominance",
    client: "Kaveri Dental Care",
    industry: "Healthcare",
    results: [
      { metric: "Local Traffic", value: "+420%" },
      { metric: "New Patients", value: "+165%" },
      { metric: "Google Rankings", value: "#1" },
    ],
    description: "Established local market dominance through targeted SEO and Google Business optimization for a multi-location dental practice.",
  },
  {
    title: "Brand Awareness Campaign",
    client: "Thanjai Organic Farm",
    industry: "Consumer Goods",
    results: [
      { metric: "Brand Awareness", value: "+200%" },
      { metric: "Social Following", value: "+500%" },
      { metric: "Engagement Rate", value: "8.2%" },
    ],
    description: "Built a passionate community around a sustainable lifestyle brand through strategic content marketing and influencer partnerships.",
  },
  {
    title: "B2B Lead Pipeline",
    client: "Kongu Engineering Works",
    industry: "Manufacturing",
    results: [
      { metric: "Pipeline Value", value: "+₹20Cr" },
      { metric: "Lead Quality Score", value: "+85%" },
      { metric: "Sales Cycle", value: "-30%" },
    ],
    description: "Created a robust B2B lead generation system using LinkedIn advertising and content marketing for a manufacturing company.",
  },
  {
    title: "Startup Launch Success",
    client: "Chettinad FinServ",
    industry: "Financial Services",
    results: [
      { metric: "App Downloads", value: "50K+" },
      { metric: "User Acquisition Cost", value: "$2.50" },
      { metric: "Month 1 Revenue", value: "$180K" },
    ],
    description: "Executed a successful product launch campaign that exceeded all targets for a new fintech mobile application.",
  },
];

const CaseStudies = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-30" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto text-center"
            >
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">
                Case Studies
              </span>
              <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-6">
                Real Results for <span className="gradient-text">Real Clients</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore how we've helped businesses across industries achieve remarkable growth through strategic digital marketing.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-24 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={study.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary">
                      {study.industry}
                    </span>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2">{study.title}</h3>
                  <p className="text-sm text-muted-foreground mb-6">{study.client}</p>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {study.results.map((result) => (
                      <div key={result.metric} className="text-center">
                        <div className="text-lg font-bold gradient-text">{result.value}</div>
                        <div className="text-xs text-muted-foreground">{result.metric}</div>
                      </div>
                    ))}
                  </div>
                  
                  <p className="text-sm text-muted-foreground">{study.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Results Summary */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Our <span className="gradient-text">Impact</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The numbers speak for themselves. Here's what we've achieved for our clients.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "₹50Cr+", label: "Revenue Generated" },
                { value: "500+", label: "Projects Completed" },
                { value: "340%", label: "Avg. Traffic Increase" },
                { value: "8.5x", label: "Avg. ROAS" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-6 rounded-2xl glass border border-border"
                >
                  <TrendingUp className="w-8 h-8 text-primary mx-auto mb-4" />
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
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

export default CaseStudies;