import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTA from "@/components/sections/CTA";
import { motion } from "framer-motion";
import { Search, Share2, Target, FileText, Zap, BarChart3, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Dominate search rankings with our comprehensive SEO strategies.",
    features: [
      "Technical SEO Audits",
      "Keyword Research & Strategy",
      "On-Page Optimization",
      "Link Building Campaigns",
      "Local SEO",
      "SEO Analytics & Reporting",
    ],
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description: "Build engaged communities across all major platforms.",
    features: [
      "Social Strategy Development",
      "Content Creation & Curation",
      "Community Management",
      "Influencer Partnerships",
      "Social Listening",
      "Performance Analytics",
    ],
  },
  {
    icon: Target,
    title: "Paid Advertising",
    description: "Maximize ROI with precision-targeted PPC campaigns.",
    features: [
      "Google Ads Management",
      "Facebook & Instagram Ads",
      "LinkedIn Advertising",
      "Retargeting Campaigns",
      "A/B Testing & Optimization",
      "Conversion Tracking",
    ],
  },
  {
    icon: FileText,
    title: "Content Marketing",
    description: "Compelling content that converts your audience.",
    features: [
      "Content Strategy",
      "Blog Writing & Management",
      "Video Production",
      "Infographic Design",
      "Email Newsletters",
      "Content Distribution",
    ],
  },
  {
    icon: Zap,
    title: "Website Optimization",
    description: "Lightning-fast, conversion-optimized websites.",
    features: [
      "Page Speed Optimization",
      "UX/UI Improvements",
      "Conversion Rate Optimization",
      "Landing Page Design",
      "A/B Testing",
      "Mobile Optimization",
    ],
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Clear insights for smarter business decisions.",
    features: [
      "Custom Dashboard Setup",
      "KPI Tracking",
      "Monthly Performance Reports",
      "Competitor Analysis",
      "ROI Measurement",
      "Strategic Recommendations",
    ],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-30" />
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto text-center"
            >
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">
                Our Services
              </span>
              <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-6">
                Digital Marketing <span className="gradient-text">Solutions</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive digital marketing services designed to drive measurable growth for your business.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="space-y-24">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mb-6">
                      <service.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                      {service.title}
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8">
                      {service.description}
                    </p>
                    <Button variant="neon" size="lg" asChild>
                      <Link to="/contact">Get Started</Link>
                    </Button>
                  </div>
                  
                  <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    {service.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border"
                      >
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
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

export default Services;