import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowRight,
  BarChart3,
  Building2,
  CheckCircle2,
  Globe2,
  LayoutDashboard,
  LineChart,
  Lock,
  Network,
  ShieldCheck,
  Smartphone,
  Stethoscope,
  Users,
  Zap
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans selection:bg-primary/10 selection:text-primary">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">

            <img src="/images/logo.jpg" alt="Medivanta Logo" className="h-8 w-auto" />
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#solutions" className="hover:text-primary transition-colors">Solutions</a>
            <a href="#features" className="hover:text-primary transition-colors">Features</a>
            <a href="#tech" className="hover:text-primary transition-colors">Technology</a>
            <a href="#process" className="hover:text-primary transition-colors">Process</a>
            <a href="#about" className="hover:text-primary transition-colors">About Us</a>
          </nav>
          <Button size="sm" className="font-medium">Book a Demo</Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section - Asymmetric Layout */}
        <section className="relative overflow-hidden pt-16 pb-24 lg:pt-32 lg:pb-40">
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
          <div className="absolute left-0 top-0 -z-10 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[100px]"></div>
          
          <div className="container grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium text-primary bg-primary/5">
                <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
                Digital Empowerment Platform for Consumer Healthcare
              </div>
              <h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl text-foreground leading-[1.1]">
                Reshaping the <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Digital Future</span> of Healthcare
              </h1>
              <p className="text-xl text-muted-foreground max-w-[600px] leading-relaxed">
                Medivanta leverages big data and AI to connect medical institutions, doctors, and consumers. We provide a one-stop intelligent solution integrating SaaS, Supply Chain, and Financial Services to help institutions reduce costs and increase efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="h-12 px-8 text-base shadow-lg shadow-primary/20">
                  Explore Solutions <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="h-12 px-8 text-base">
                  Learn More
                </Button>
              </div>
              
              <div className="pt-8 border-t flex items-center gap-8 text-muted-foreground">
                <div>
                  <p className="text-2xl font-bold text-foreground">3,600+</p>
                  <p className="text-sm">Institutions Served</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">190+</p>
                  <p className="text-sm">Cities Covered</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">No.1</p>
                  <p className="text-sm">Aesthetic SaaS Market Share</p>
                </div>
              </div>
            </div>
            
            <div className="relative lg:h-[600px] w-full hidden lg:block">
              {/* Abstract UI Composition */}
              <div className="absolute top-10 right-10 w-4/5 h-4/5 bg-gradient-to-br from-blue-50 to-slate-50 rounded-3xl border shadow-2xl overflow-hidden transform rotate-[-2deg] hover:rotate-0 transition-all duration-500">
                 <img 
                  src="/images/saas-dashboard.jpg" 
                  alt="SaaS Dashboard" 
                  className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              {/* Floating Cards */}
              <div className="absolute bottom-20 left-0 bg-background/90 backdrop-blur border p-4 rounded-xl shadow-xl animate-bounce-slow">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <LineChart className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Efficiency Growth</p>
                    <p className="text-xs text-green-600 font-bold">+40% YoY</p>
                  </div>
                </div>
              </div>

              <div className="absolute top-20 right-0 bg-background/90 backdrop-blur border p-4 rounded-xl shadow-xl animate-bounce-slow delay-700">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Enterprise Security</p>
                    <p className="text-xs text-muted-foreground">Real-time Encryption</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Pain Points - Dark Section */}
        <section className="py-24 bg-slate-950 text-slate-50">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Addressing Core Industry Challenges</h2>
              <p className="text-slate-400 text-lg">
                Traditional consumer healthcare institutions face multiple challenges such as high acquisition costs, low management efficiency, and opaque supply chains. Medivanta solves these one by one through digitalization.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Building2 className="h-8 w-8 text-red-400" />,
                  title: "Inventory Turnover Issues",
                  desc: "Traditional procurement models lead to serious inventory backlogs, high capital occupancy, large expiration losses, and a lack of intelligent warning mechanisms."
                },
                {
                  icon: <Network className="h-8 w-8 text-red-400" />,
                  title: "Data Silo Effect",
                  desc: "Departmental systems are not interconnected. Customer data, financial data, and operational data are fragmented, failing to form effective data assets to support decision-making."
                },
                {
                  icon: <Users className="h-8 w-8 text-red-400" />,
                  title: "High Acquisition Costs",
                  desc: "Over-reliance on traditional advertising, lack of private domain traffic operation tools, low customer retention rates, and insufficient repurchase mining."
                }
              ].map((item, i) => (
                <div key={i} className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl hover:bg-slate-800 transition-colors">
                  <div className="mb-6">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions - Bento Grid Layout */}
        <section id="solutions" className="py-24 bg-slate-50">
          <div className="container">
            <div className="mb-16">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Comprehensive Digital Solutions</h2>
              <p className="text-muted-foreground text-lg max-w-2xl">
                Medivanta has built a triangular ecosystem of "SaaS + Supply Chain + Finance" to provide all-around empowerment for medical institutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
              {/* Large Card - SaaS */}
              <div className="md:col-span-2 row-span-2 relative group overflow-hidden rounded-3xl border bg-background shadow-sm hover:shadow-md transition-all">
                <div className="absolute inset-0 z-0">
                   <img 
                    src="/images/saas-dashboard.jpg" 
                    alt="Intelligent SaaS" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 p-8 z-10 text-white">
                  <div className="h-12 w-12 rounded-xl bg-blue-600 flex items-center justify-center mb-4">
                    <LayoutDashboard className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Intelligent SaaS Management System</h3>
                  <p className="text-slate-200 max-w-md">
                    Integrating CRM, EMR, intelligent marketing, and business analysis. Optimizing diagnosis and treatment processes through AI algorithms to enhance customer experience and institutional efficiency.
                  </p>
                </div>
              </div>

              {/* Tall Card - Supply Chain */}
              <div className="md:col-span-1 row-span-2 relative group overflow-hidden rounded-3xl border bg-background shadow-sm hover:shadow-md transition-all">
                <div className="absolute inset-0 z-0">
                   <img 
                    src="/images/supply-chain-logistics.jpg" 
                    alt="Supply Chain" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 p-8 z-10 text-white">
                  <div className="h-12 w-12 rounded-xl bg-green-600 flex items-center justify-center mb-4">
                    <Building2 className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Smart Supply Chain Platform</h3>
                  <p className="text-slate-200">
                    Connecting global premium manufacturers to provide one-stop procurement services. Authentic authorization, intelligent replenishment, reducing procurement costs.
                  </p>
                </div>
              </div>

              {/* Small Card - Fintech */}
              <div className="md:col-span-1 relative group overflow-hidden rounded-3xl border bg-background shadow-sm hover:shadow-md transition-all">
                 <div className="absolute inset-0 z-0">
                   <img 
                    src="/images/fintech-growth.jpg" 
                    alt="Fintech" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 p-6 z-10 text-white">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-8 w-8 rounded-lg bg-yellow-500 flex items-center justify-center">
                      <LineChart className="h-4 w-4 text-white" />
                    </div>
                    <h3 className="text-lg font-bold">Supply Chain Finance</h3>
                  </div>
                  <p className="text-sm text-slate-200">Credit services based on transaction data to solve capital turnover problems.</p>
                </div>
              </div>

              {/* Small Card - Tech */}
              <div className="md:col-span-2 relative group overflow-hidden rounded-3xl border bg-background shadow-sm hover:shadow-md transition-all">
                 <div className="absolute inset-0 z-0">
                   <img 
                    src="/images/tech-architecture-cloud.jpg" 
                    alt="Tech Architecture" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 p-6 z-10 text-white">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-8 w-8 rounded-lg bg-purple-600 flex items-center justify-center">
                      <Network className="h-4 w-4 text-white" />
                    </div>
                    <h3 className="text-lg font-bold">Cloud-Native Architecture</h3>
                  </div>
                  <p className="text-sm text-slate-200">Microservices architecture and AI intelligent engines ensure high system availability and data security.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid - Clean & Detailed */}
        <section id="features" className="py-24">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tight mb-4">7 Core Functional Modules</h2>
              <p className="text-muted-foreground text-lg">
                Covering every aspect of medical institution operations, from front desk reception to backend management, from marketing acquisition to financial settlement.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Smart Clinic System", desc: "Full-process digital management to improve consultation efficiency." },
                { title: "Marketing Mall", desc: "Private domain traffic operation to increase customer repurchase rates." },
                { title: "Enterprise WeChat CRM", desc: "Seamless connection to social ecosystems for refined customer management." },
                { title: "Smart Posters", desc: "AI automatically generates marketing materials to reduce design costs." },
                { title: "Security Audit Center", desc: "Comprehensive data encryption and operation tracking." },
                { title: "Business Intelligence", desc: "Multi-dimensional data reports to assist management decision-making." },
                { title: "Inventory Management", desc: "Intelligent warning and expiration management to reduce losses." },
                { title: "Mobile App", desc: "Mobile office anytime, anywhere, keeping track of business dynamics." }
              ].map((feature, i) => (
                <Card key={i} className="border-none shadow-sm bg-slate-50 hover:bg-white hover:shadow-md transition-all duration-300">
                  <CardHeader>
                    <div className="h-2 w-12 bg-primary rounded-full mb-4"></div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{feature.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Architecture - Visual & Professional */}
        <section id="tech" className="py-24 bg-slate-950 text-slate-50 overflow-hidden">
          <div className="container relative">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-6">Enterprise-Grade Architecture</h2>
                <p className="text-slate-400 text-lg mb-8">
                  Medivanta adopts industry-leading cloud-native microservices architecture to ensure high concurrency processing capabilities and bank-level data security.
                </p>
                
                <div className="space-y-6">
                  {[
                    { title: "Cloud-Native Microservices", desc: "Elastic scaling, supporting tens of millions of concurrent visits, ensuring business continuity." },
                    { title: "AI Intelligent Engine", desc: "Built-in machine learning algorithms for intelligent triage, precision marketing, and risk control." },
                    { title: "Bank-Level Security", desc: "Full-link data transmission encryption, multi-location disaster recovery backup, ISO27001 certified." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="mt-1 h-6 w-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                        <CheckCircle2 className="h-4 w-4" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                        <p className="text-slate-400 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl rounded-full"></div>
                <div className="relative bg-slate-900 border border-slate-800 rounded-2xl p-2 shadow-2xl">
                   <img 
                    src="/images/tech-architecture-cloud.jpg" 
                    alt="Tech Architecture Diagram" 
                    className="w-full rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Process - Timeline */}
        <section id="process" className="py-24 bg-slate-50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Full Lifecycle Service Process</h2>
              <p className="text-muted-foreground text-lg">
                From demand research to continuous operation and maintenance, we provide end-to-end professional service support.
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 hidden md:block"></div>
              
              {[
                { step: "01", title: "Research & Analysis", desc: "Deeply understand institutional business pain points and customize digital transformation solutions." },
                { step: "02", title: "Deployment & Config", desc: "Professional team on-site implementation, completing basic data initialization and system configuration." },
                { step: "03", title: "Training & Assessment", desc: "Role-based system operation training to ensure all staff are proficient." },
                { step: "04", title: "Maintenance & Iteration", desc: "7x24 hour technical support, regular system upgrades, and functional iterations." }
              ].map((item, i) => (
                <div key={i} className={`flex flex-col md:flex-row items-center gap-8 mb-12 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="flex-1 text-center md:text-left">
                    <div className={`bg-white p-6 rounded-2xl shadow-sm border ${i % 2 === 0 ? 'md:text-right' : ''}`}>
                      <span className="text-4xl font-bold text-slate-100 mb-2 block">{item.step}</span>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </div>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold z-10 shrink-0 border-4 border-white shadow-sm">
                    {i + 1}
                  </div>
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vision - Inspiring End */}
        <section className="py-24 relative overflow-hidden">
           <div className="absolute inset-0 z-0">
             <img 
              src="/images/vision-future-health.jpg" 
              alt="Vision Background" 
              className="w-full h-full object-cover opacity-10"
            />
             <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background"></div>
          </div>
          
          <div className="container relative z-10 text-center">
            <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium bg-slate-100 mb-8">
              <Globe2 className="mr-2 h-4 w-4" />
              Our Vision
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 max-w-4xl mx-auto leading-tight">
              Connect · Empower · Innovate <br />
              <span className="text-primary">Building a Borderless Healthcare Ecosystem</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
              Medivanta is committed to breaking the time and space limits of medical services through technology, making high-quality medical resources accessible, and safeguarding the health of consumers worldwide.
            </p>
            <Button size="lg" className="h-14 px-10 text-lg rounded-full shadow-xl shadow-primary/20">
              Join Our Ecosystem
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
        <div className="container grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4 text-slate-50">

              <img src="/images/logo.jpg" alt="Medivanta Logo" className="h-8 w-auto brightness-0 invert" />
            </div>
            <p className="text-sm max-w-xs">
              Digital Empowerment Platform for Consumer Healthcare, committed to promoting the digital transformation of the medical industry through SaaS, Supply Chain, and Fintech.
            </p>
          </div>
          <div>
            <h4 className="text-slate-50 font-bold mb-4">Solutions</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Intelligent SaaS</a></li>
              <li><a href="#" className="hover:text-white">Supply Chain Platform</a></li>
              <li><a href="#" className="hover:text-white">Supply Chain Finance</a></li>
              <li><a href="#" className="hover:text-white">Private Domain Marketing</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-slate-50 font-bold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm">
              <li>support@medivanta.ca</li>

            </ul>
          </div>
        </div>
        <div className="container pt-8 border-t border-slate-800 text-center text-xs">
          <p>&copy; 2025 Medivanta Technology Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
