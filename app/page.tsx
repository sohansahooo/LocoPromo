import { Button } from '@/components/ui/button';
import { Search, MapPin, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Discover & Support Local Businesses
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Find the best local shops, restaurants, and services in your area. Get exclusive deals and stay connected with your community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2">
              <Search className="w-4 h-4" />
              Explore Businesses
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <MapPin className="w-4 h-4" />
              View Nearby
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose LocoPromo?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card">
              <MapPin className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Local Discovery</h3>
              <p className="text-muted-foreground">
                Find hidden gems and popular spots in your neighborhood
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card">
              <TrendingUp className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Exclusive Deals</h3>
              <p className="text-muted-foreground">
                Access special promotions and discounts from local businesses
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card">
              <Search className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Easy Search</h3>
              <p className="text-muted-foreground">
                Find exactly what you're looking for with powerful search filters
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Grow Your Business?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of local businesses already using LocoPromo to reach new customers and grow their presence.
          </p>
          <Link href="/business/register">
            <Button size="lg" variant="secondary">
              List Your Business
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}