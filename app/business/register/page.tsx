import { BusinessForm } from '@/components/business/business-form';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

export default function BusinessRegisterPage() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center p-4">
      <Card className="w-full max-w-3xl">
        <CardHeader>
          <h1 className="text-3xl font-bold">Register Your Business</h1>
          <p className="text-muted-foreground">
            Create your business profile and start reaching more customers
          </p>
        </CardHeader>
        <CardContent>
          <BusinessForm />
        </CardContent>
      </Card>
    </div>
  );
}