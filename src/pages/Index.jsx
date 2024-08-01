import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle, Zap, Shield, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";

const Index = () => {
  const [email, setEmail] = useState('');

  const features = [
    { icon: <Zap className="h-6 w-6 text-blue-500" />, title: 'Lightning Fast', description: 'Our platform is optimized for speed and efficiency.' },
    { icon: <Shield className="h-6 w-6 text-green-500" />, title: 'Secure', description: 'Your data is protected with enterprise-grade security.' },
    { icon: <CheckCircle className="h-6 w-6 text-purple-500" />, title: 'Easy to Use', description: 'Intuitive interface designed for all skill levels.' },
  ];

  const pricingPlans = [
    { name: 'Basic', price: '$9', features: ['5 Projects', '10GB Storage', 'Basic Support'] },
    { name: 'Pro', price: '$29', features: ['Unlimited Projects', '100GB Storage', 'Priority Support', 'Advanced Analytics'] },
    { name: 'Enterprise', price: 'Custom', features: ['Custom Solutions', 'Dedicated Account Manager', '24/7 Premium Support', 'On-premise Option'] },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navbar />
      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <h1 className="text-5xl font-bold mb-6">Revolutionize Your Workflow</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">Streamline your business processes with our cutting-edge SaaS platform. Boost productivity and drive growth.</p>
        <div className="flex justify-center space-x-4">
          <Input 
            type="email" 
            placeholder="Enter your email" 
            className="w-64"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button className="bg-yellow-400 hover:bg-yellow-500 text-black">Get Started</Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Simple, Transparent Pricing</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className="border rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <p className="text-4xl font-bold mb-6">{plan.price}<span className="text-sm font-normal">/month</span></p>
                <ul className="mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="mb-2">{feature}</li>
                  ))}
                </ul>
                <Button variant={index === 1 ? "default" : "outline"}>Choose Plan</Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8">Join thousands of satisfied customers and take your productivity to the next level.</p>
          <Button variant="secondary" size="lg">
            Get Started Now <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
