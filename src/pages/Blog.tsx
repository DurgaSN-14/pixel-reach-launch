import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    title: "10 SEO Trends That Will Dominate 2025",
    excerpt: "Stay ahead of the curve with these emerging SEO strategies that will shape search engine optimization in the coming year.",
    category: "SEO",
    date: "Jan 15, 2025",
    readTime: "8 min read",
    featured: true,
  },
  {
    title: "The Complete Guide to Social Media Advertising",
    excerpt: "Learn how to create high-converting social media ad campaigns that drive real results for your business.",
    category: "Social Media",
    date: "Jan 10, 2025",
    readTime: "12 min read",
    featured: true,
  },
  {
    title: "How to Measure Marketing ROI Effectively",
    excerpt: "Discover the metrics and tools you need to accurately track and report on your marketing investments.",
    category: "Analytics",
    date: "Jan 5, 2025",
    readTime: "6 min read",
    featured: false,
  },
  {
    title: "Content Marketing Strategies for B2B Companies",
    excerpt: "Effective content marketing approaches specifically designed for B2B lead generation and thought leadership.",
    category: "Content",
    date: "Dec 28, 2024",
    readTime: "10 min read",
    featured: false,
  },
  {
    title: "Google Ads vs. Facebook Ads: Which is Right for You?",
    excerpt: "A comprehensive comparison to help you decide where to invest your advertising budget for maximum impact.",
    category: "Paid Ads",
    date: "Dec 20, 2024",
    readTime: "7 min read",
    featured: false,
  },
  {
    title: "Website Speed Optimization: A Step-by-Step Guide",
    excerpt: "Technical tips and best practices to improve your website's loading speed and user experience.",
    category: "Technical",
    date: "Dec 15, 2024",
    readTime: "9 min read",
    featured: false,
  },
];

const categories = ["All", "SEO", "Social Media", "Analytics", "Content", "Paid Ads", "Technical"];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-30" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto text-center"
            >
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">
                Our Blog
              </span>
              <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-6">
                Insights & <span className="gradient-text">Resources</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Expert tips, industry insights, and actionable strategies to help you master digital marketing.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-4 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    category === "All"
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">Featured Articles</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {blogPosts
                .filter((post) => post.featured)
                .map((post, index) => (
                  <motion.article
                    key={post.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
                  >
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary">
                      {post.category}
                    </span>
                    <h3 className="text-2xl font-bold mt-4 mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mb-6">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </span>
                      </div>
                      <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                  </motion.article>
                ))}
            </div>
          </div>
        </section>

        {/* All Posts */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">All Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <motion.article
                  key={post.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
                >
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary">
                    {post.category}
                  </span>
                  <h3 className="text-lg font-semibold mt-4 mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                </motion.article>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Load More Articles
              </Button>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-24 bg-secondary">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Subscribe to Our <span className="gradient-text">Newsletter</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Get the latest marketing insights delivered straight to your inbox. No spam, just value.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-input border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                />
                <Button variant="glow" size="lg">
                  Subscribe
                </Button>
              </form>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;