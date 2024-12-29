'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { supabase } from '@/lib/supabase/client';
import type { Business } from '@/lib/types/database.types';
import { Loader2 } from 'lucide-react';

export default function BusinessDashboardPage() {
  const [businesses, setBusinesses] = useState<Business[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function loadBusinesses() {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        
        if (!user) {
          router.push('/auth');
          return;
        }

        const { data, error } = await supabase
          .from('businesses')
          .select('*')
          .eq('owner_id', user.id);

        if (error) throw error;
        setBusinesses(data || []);
      } catch (error) {
        console.error('Error loading businesses:', error);
      } finally {
        setLoading(false);
      }
    }

    loadBusinesses();
  }, [router]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">Business Dashboard</h1>
      
      {businesses.length === 0 ? (
        <Card>
          <CardContent className="py-8 text-center">
            <p className="text-muted-foreground">
              You haven&apos;t registered any businesses yet.
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-6">
          {businesses.map((business) => (
            <Card key={business.id}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold">{business.name}</h2>
                  <span className="capitalize px-3 py-1 rounded-full text-sm bg-muted">
                    {business.status}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <dl className="grid gap-2 text-sm">
                  <div>
                    <dt className="font-medium">Category</dt>
                    <dd className="text-muted-foreground capitalize">
                      {business.category}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-medium">Address</dt>
                    <dd className="text-muted-foreground">
                      {business.address}, {business.city}, {business.state} {business.zip}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-medium">Contact</dt>
                    <dd className="text-muted-foreground">
                      {business.phone} • {business.email}
                    </dd>
                  </div>
                </dl>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}