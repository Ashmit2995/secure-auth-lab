import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Lock, Shield, Database, Key, Fingerprint, Server, CheckCircle, Zap, Globe } from "lucide-react"
import Link from "next/link"

function GlowingLock() {
  return (
    <div className="relative w-64 h-64 md:w-80 md:h-80">
      {/* Outer glow rings */}
      <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl animate-pulse" />
      <div className="absolute inset-4 rounded-full bg-accent/30 blur-2xl animate-pulse delay-75" />
      <div className="absolute inset-8 rounded-full bg-primary/40 blur-xl animate-pulse delay-150" />
      
      {/* Center lock icon */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          <div className="absolute -inset-4 rounded-full bg-primary/50 blur-md" />
          <div className="relative p-6 rounded-full bg-card border border-primary/50 shadow-2xl shadow-primary/30">
            <Lock className="w-16 h-16 md:w-24 md:h-24 text-primary" strokeWidth={1.5} />
          </div>
        </div>
      </div>
      
      {/* Orbiting elements */}
      <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s' }}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-3 h-3 rounded-full bg-primary shadow-lg shadow-primary/50" />
        </div>
      </div>
      <div className="absolute inset-0 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
          <div className="w-2 h-2 rounded-full bg-accent shadow-lg shadow-accent/50" />
        </div>
      </div>
      <div className="absolute inset-0 animate-spin" style={{ animationDuration: '25s' }}>
        <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2">
          <div className="w-2 h-2 rounded-full bg-primary/80 shadow-lg shadow-primary/30" />
        </div>
      </div>
    </div>
  )
}

function GridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, oklch(0.65 0.2 230 / 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, oklch(0.65 0.2 230 / 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />
      
      {/* Gradient overlays */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
    </div>
  )
}

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="p-1.5 rounded-md bg-primary/20 border border-primary/30">
            <Shield className="w-5 h-5 text-primary" />
          </div>
          <span className="font-semibold text-foreground">SecureAuth</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Features
          </Link>
          <Link href="#security" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Security
          </Link>
          <Link href="#docs" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Documentation
          </Link>
        </nav>
        
        <div className="flex items-center gap-3">
        <Link href="/login">
  <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
    Login
  </Button>
</Link>

<Link href="/register">
  <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
    Get Started
  </Button>
</Link>
        </div>
      </div>
    </header>
  )
}

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16">
      <GridBackground />
      
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs text-primary font-medium">Enterprise-Grade Security</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 text-balance">
              Secure Authentication{" "}
              <span className="text-primary">System</span>
            </h1>
            
            <p className="text-lg text-muted-foreground mb-4 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Built with industry-leading security standards. Featuring{" "}
              <span className="text-accent font-medium">Argon2</span> password hashing,{" "}
              <span className="text-accent font-medium">JWT</span> token authentication, and a robust{" "}
              <span className="text-accent font-medium">PostgreSQL</span> backend.
            </p>
            
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              Protect your users with cryptographic best practices and modern authentication flows designed for scale.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/login">
  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 shadow-lg shadow-primary/25">
    <Key className="w-4 h-4" />
    Login
  </Button>
</Link>

<Link href="/register">
  <Button size="lg" variant="outline" className="border-border hover:bg-secondary gap-2">
    <Fingerprint className="w-4 h-4" />
    Register
  </Button>
</Link>
            </div>
            
            <div className="flex items-center gap-6 mt-8 justify-center lg:justify-start text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>SOC 2 Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>GDPR Ready</span>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <GlowingLock />
          </div>
        </div>
      </div>
    </section>
  )
}

const features = [
  {
    icon: Lock,
    title: "Argon2 Hashing",
    description: "Winner of the Password Hashing Competition. Memory-hard algorithm resistant to GPU and ASIC attacks."
  },
  {
    icon: Key,
    title: "JWT Authentication",
    description: "Stateless token-based authentication with secure signing and automatic refresh token rotation."
  },
  {
    icon: Database,
    title: "PostgreSQL Backend",
    description: "Enterprise-grade relational database with ACID compliance and advanced security features."
  },
  {
    icon: Shield,
    title: "CSRF Protection",
    description: "Built-in cross-site request forgery protection with secure token validation on every request."
  },
  {
    icon: Zap,
    title: "Rate Limiting",
    description: "Intelligent rate limiting to prevent brute-force attacks and protect against DDoS attempts."
  },
  {
    icon: Globe,
    title: "HTTPS Everywhere",
    description: "Enforced TLS encryption for all communications with HSTS headers and certificate pinning."
  }
]

function FeaturesSection() {
  return (
    <section id="features" className="relative py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Security Features
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Every component is built with security as the foundation, not an afterthought.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-card/50 border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 group"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

const techStack = [
  { icon: Server, label: "Node.js Runtime" },
  { icon: Database, label: "PostgreSQL" },
  { icon: Shield, label: "Argon2id" },
  { icon: Key, label: "JWT RS256" }
]

function TechStackSection() {
  return (
    <section className="relative py-24">
      <GridBackground />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Built on Modern Infrastructure
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A carefully selected stack designed for security, performance, and developer experience.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {techStack.map((tech, index) => (
            <div 
              key={index}
              className="flex items-center gap-3 px-6 py-3 rounded-lg bg-card border border-border/50 hover:border-primary/30 transition-colors"
            >
              <tech.icon className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-foreground">{tech.label}</span>
            </div>
          ))}
        </div>
        
        <div className="mt-16 max-w-3xl mx-auto">
          <Card className="bg-card/50 border-border/50 overflow-hidden">
            <CardContent className="p-0">
              <div className="flex items-center gap-2 px-4 py-2 border-b border-border/50 bg-secondary/30">
                <div className="w-3 h-3 rounded-full bg-destructive/50" />
                <div className="w-3 h-3 rounded-full bg-chart-4/50" />
                <div className="w-3 h-3 rounded-full bg-primary/50" />
                <span className="ml-2 text-xs text-muted-foreground font-mono">auth.config.ts</span>
              </div>
              <pre className="p-4 text-sm font-mono overflow-x-auto">
                <code className="text-muted-foreground">
                  <span className="text-accent">{"const"}</span>{" config = {\n"}
                  {"  "}hash: <span className="text-primary">{'"argon2id"'}</span>,\n
                  {"  "}memory: <span className="text-chart-4">65536</span>,\n
                  {"  "}iterations: <span className="text-chart-4">3</span>,\n
                  {"  "}parallelism: <span className="text-chart-4">4</span>,\n
                  {"  "}jwt: {"{\n"}
                  {"    "}algorithm: <span className="text-primary">{'"RS256"'}</span>,\n
                  {"    "}expiresIn: <span className="text-primary">{'"15m"'}</span>\n
                  {"  }"},\n
                  {"}"};
                </code>
              </pre>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}


function Footer() {
  return (
    <footer className="border-t border-border/50 py-12 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-md bg-primary/20 border border-primary/30">
              <Shield className="w-4 h-4 text-primary" />
            </div>
            <span className="font-semibold text-foreground">SecureAuth</span>
          </div>
          
          <p className="text-sm text-muted-foreground">
            Built with security-first principles. Open source and audited.
          </p>
          
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-foreground transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Terms</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Security</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default function SecureAuthLandingPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <TechStackSection />
      
      <Footer />
    </main>
  )
}
