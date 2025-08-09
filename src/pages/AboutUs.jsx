import React from "react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-base-200 via-base-100 to-base-200">
      {/* Hero Section */}
      <div className="max-w-4xl text-center mx-auto -mt-18 pt-28">
            <h1 className="text-6xl font-bold mb-6 text-primary">
              About Wholoset
            </h1>
            <p className="text-xl text-base-content/80 max-w-2xl mx-auto leading-relaxed">
              Revolutionizing B2B wholesale trade through cutting-edge
              technology, verified partnerships, and unwavering commitment to
              business success.
            </p>
          </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Mission Section */}
        <div className="card bg-base-100 shadow-2xl mb-12 hover:shadow-3xl transition-all duration-300">
          <div className="card-body p-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="badge badge-primary badge-lg">Mission</div>
              <div className="w-16 h-1 bg-gradient-to-r from-primary to-transparent"></div>
            </div>
            <h2 className="card-title text-4xl mb-6 text-primary">
              Empowering Global Commerce
            </h2>
            <p className="text-lg text-base-content/90 leading-relaxed mb-6">
              At Wholoset, we're on a mission to democratize wholesale trade by
              creating the world's most intelligent, secure, and efficient B2B
              marketplace. Our vision extends beyond simple transactions—we're
              building an ecosystem that nurtures long-term business
              relationships, accelerates growth, and creates sustainable value
              for all stakeholders in the supply chain.
            </p>
            <p className="text-lg text-base-content/90 leading-relaxed">
              Through advanced AI-powered matching algorithms,
              blockchain-secured transactions, and comprehensive business
              intelligence tools, we're not just connecting buyers and
              sellers—we're reshaping how global commerce operates in the
              digital age.
            </p>
          </div>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="card bg-gradient-to-br from-secondary/5 to-accent/5 shadow-xl">
            <div className="card-body p-10">
              <div className="badge badge-secondary mb-4">Our Story</div>
              <h2 className="card-title text-3xl mb-6">
                Born from Experience, Driven by Innovation
              </h2>
              <p className="text-base-content/90 leading-relaxed mb-4">
                Wholoset emerged from the collective frustration of our
                founders—seasoned professionals who spent decades navigating the
                complexities of traditional wholesale markets. Having witnessed
                firsthand the inefficiencies, lack of transparency, and barriers
                that hindered business growth, they envisioned a better way.
              </p>
              <p className="text-base-content/90 leading-relaxed mb-4">
                Founded in 2019, our journey began with a simple question: "What
                if we could eliminate every friction point in wholesale trade?"
                Today, after years of relentless innovation and feedback from
                thousands of businesses, Wholoset has evolved into a
                comprehensive ecosystem that serves everyone from ambitious
                startups to Fortune 500 companies.
              </p>
              <p className="text-base-content/90 leading-relaxed">
                Our platform now facilitates over $2 billion in annual trade
                volume, connecting businesses across 150+ countries and
                supporting the growth of countless enterprises worldwide.
              </p>
            </div>
          </div>

          <div className="card bg-gradient-to-br from-primary/5 to-secondary/5 shadow-xl">
            <div className="card-body p-10">
              <div className="badge badge-accent mb-4">Leadership</div>
              <h2 className="card-title text-3xl mb-6">
                Visionary Leadership Team
              </h2>
              <p className="text-base-content/90 leading-relaxed mb-4">
                Our leadership team combines over 150 years of collective
                experience in wholesale trade, technology, and business
                development. Led by industry veterans who have built and scaled
                multiple successful B2B platforms, our team brings deep domain
                expertise and a passion for solving complex business challenges.
              </p>
              <p className="text-base-content/90 leading-relaxed mb-4">
                We're backed by top-tier investors including Sequoia Capital,
                Andreessen Horowitz, and GV (Google Ventures), who share our
                vision of transforming global wholesale trade through technology
                innovation.
              </p>
              <div className="stats stats-vertical lg:stats-horizontal shadow-lg mt-6">
                <div className="stat place-items-center">
                  <div className="stat-value text-primary">150+</div>
                  <div className="stat-desc">Years Combined Experience</div>
                </div>
                <div className="stat place-items-center">
                  <div className="stat-value text-secondary">50+</div>
                  <div className="stat-desc">Team Members</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <div className="badge badge-accent badge-lg mb-4">
              What We Offer
            </div>
            <h2 className="text-4xl font-bold mb-4">
              Comprehensive B2B Solutions
            </h2>
            <p className="text-xl text-base-content/70 max-w-3xl mx-auto">
              Every feature is designed with one goal in mind: making wholesale
              trade simpler, safer, and more profitable for your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="card-body">
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-4">
                  <div className="w-8 h-8 bg-primary rounded-lg"></div>
                </div>
                <h3 className="card-title text-primary">
                  Global Product Catalog
                </h3>
                <p className="text-base-content/80">
                  Access over 10 million products from 50,000+ verified
                  suppliers across 500+ categories. Our AI-powered search and
                  recommendation engine helps you discover exactly what you
                  need, when you need it.
                </p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="card-body">
                <div className="w-16 h-16 bg-secondary/20 rounded-2xl flex items-center justify-center mb-4">
                  <div className="w-8 h-8 bg-secondary rounded-lg"></div>
                </div>
                <h3 className="card-title text-secondary">
                  Verified Supplier Network
                </h3>
                <p className="text-base-content/80">
                  Every supplier undergoes our proprietary 47-point verification
                  process, including financial health checks, quality audits,
                  and compliance verification. Trade with confidence knowing
                  your partners are pre-vetted.
                </p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="card-body">
                <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mb-4">
                  <div className="w-8 h-8 bg-accent rounded-lg"></div>
                </div>
                <h3 className="card-title text-accent">
                  Smart Procurement Tools
                </h3>
                <p className="text-base-content/80">
                  Advanced analytics, price comparison tools, bulk ordering
                  capabilities, and automated reordering based on your inventory
                  levels and sales patterns. Optimize your procurement strategy
                  with data-driven insights.
                </p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="card-body">
                <div className="w-16 h-16 bg-info/20 rounded-2xl flex items-center justify-center mb-4">
                  <div className="w-8 h-8 bg-info rounded-lg"></div>
                </div>
                <h3 className="card-title text-info">
                  Secure Payment Ecosystem
                </h3>
                <p className="text-base-content/80">
                  Multiple payment options including escrow services, trade
                  financing, and cryptocurrency payments. Our blockchain-secured
                  transaction system ensures complete transparency and fraud
                  protection.
                </p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="card-body">
                <div className="w-16 h-16 bg-success/20 rounded-2xl flex items-center justify-center mb-4">
                  <div className="w-8 h-8 bg-success rounded-lg"></div>
                </div>
                <h3 className="card-title text-success">
                  Global Logistics Network
                </h3>
                <p className="text-base-content/80">
                  Integrated shipping solutions with 200+ logistics partners
                  worldwide. Real-time tracking, customs handling, and optimized
                  routes ensure your products arrive on time and in perfect
                  condition.
                </p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="card-body">
                <div className="w-16 h-16 bg-warning/20 rounded-2xl flex items-center justify-center mb-4">
                  <div className="w-8 h-8 bg-warning rounded-lg"></div>
                </div>
                <h3 className="card-title text-warning">24/7 Expert Support</h3>
                <p className="text-base-content/80">
                  Multilingual customer success team available around the clock.
                  From onboarding assistance to dispute resolution, our experts
                  ensure your wholesale journey is smooth and successful.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="card bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 shadow-2xl mb-16">
          <div className="card-body p-12">
            <div className="text-center mb-12">
              <div className="badge badge-primary badge-lg mb-4">
                Core Values
              </div>
              <h2 className="text-4xl font-bold mb-4">
                What Drives Us Forward
              </h2>
              <p className="text-xl text-base-content/70 max-w-3xl mx-auto">
                Our values aren't just words on a wall—they guide every
                decision, shape every feature, and define every interaction.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-primary/20 rounded-full flex items-center justify-center">
                  <div className="w-10 h-10 bg-primary rounded-full"></div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-primary">
                  Trust & Transparency
                </h3>
                <p className="text-base-content/80">
                  Every transaction is transparent, every supplier is verified,
                  and every promise is kept. We build lasting relationships
                  through unwavering integrity and complete openness in all our
                  dealings.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-secondary/20 rounded-full flex items-center justify-center">
                  <div className="w-10 h-10 bg-secondary rounded-full"></div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-secondary">
                  Innovation Excellence
                </h3>
                <p className="text-base-content/80">
                  We're not just keeping up with technology—we're pioneering it.
                  From AI-driven insights to blockchain security, we constantly
                  push boundaries to deliver tomorrow's solutions today.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-accent/20 rounded-full flex items-center justify-center">
                  <div className="w-10 h-10 bg-accent rounded-full"></div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-accent">
                  Customer Obsession
                </h3>
                <p className="text-base-content/80">
                  Your success is our success. Every feature we build, every
                  service we offer, and every decision we make is filtered
                  through one question: "How does this benefit our customers?"
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-info/20 rounded-full flex items-center justify-center">
                  <div className="w-10 h-10 bg-info rounded-full"></div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-info">
                  Sustainable Growth
                </h3>
                <p className="text-base-content/80">
                  We believe in growth that benefits everyone—our customers,
                  suppliers, employees, and the communities we serve. Success
                  means creating value that lasts for generations to come.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="card bg-base-100 shadow-2xl mb-16">
          <div className="card-body p-12">
            <div className="text-center mb-12">
              <div className="badge badge-secondary badge-lg mb-4">
                Why Wholoset
              </div>
              <h2 className="text-4xl font-bold mb-4">
                The Clear Choice for Modern Businesses
              </h2>
              <p className="text-xl text-base-content/70 max-w-3xl mx-auto">
                In a world of endless options, here's why industry leaders
                choose Wholoset as their wholesale partner.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="badge badge-primary badge-lg">01</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      Unmatched Scale & Reach
                    </h3>
                    <p className="text-base-content/80">
                      Connect with suppliers from 150+ countries, access
                      products in 500+ categories, and scale your business
                      globally without traditional barriers or intermediaries.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="badge badge-secondary badge-lg">02</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      AI-Powered Intelligence
                    </h3>
                    <p className="text-base-content/80">
                      Our machine learning algorithms analyze market trends,
                      predict demand, and recommend optimal purchasing
                      strategies to maximize your profitability.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="badge badge-accent badge-lg">03</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      Enterprise-Grade Security
                    </h3>
                    <p className="text-base-content/80">
                      Bank-level encryption, blockchain transaction
                      verification, and compliance with international trade
                      regulations keep your business safe and secure.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="badge badge-info badge-lg">04</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      Seamless Integration
                    </h3>
                    <p className="text-base-content/80">
                      Connect with your existing ERP, inventory management, and
                      accounting systems through our comprehensive API suite and
                      pre-built integrations.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="badge badge-success badge-lg">05</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      Proven Track Record
                    </h3>
                    <p className="text-base-content/80">
                      With 99.9% uptime, $2B+ in processed transactions, and
                      4.8/5 customer satisfaction rating, our results speak for
                      themselves.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="badge badge-warning badge-lg">06</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      Future-Ready Platform
                    </h3>
                    <p className="text-base-content/80">
                      Built on modern cloud architecture with continuous
                      updates, ensuring your business stays ahead of industry
                      trends and technological advances.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
