'use client'; // Error components must be Client Components

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { AlertTriangle, RefreshCw } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service in a real application
    console.error("Unhandled error:", error.message, "Digest:", error.digest);
  }, [error]);

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-15rem)] p-4">
      <Card className="w-full max-w-lg shadow-lg">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <AlertTriangle className="h-12 w-12 text-destructive" />
          </div>
          <CardTitle className="text-2xl text-destructive">Oops! Something Went Wrong</CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <p className="text-muted-foreground">
            We've encountered an unexpected issue. Please try refreshing the page, or contact support if the problem continues.
          </p>
          {process.env.NODE_ENV === 'development' && error?.message && (
            <div className="text-left bg-muted p-3 rounded-md text-xs">
              <p className="font-semibold">Error Details (Development Mode):</p>
              <p className="break-words">{error.message}</p>
              {error.digest && <p className="mt-1">Digest: {error.digest}</p>}
            </div>
          )}
          <Button
            onClick={() => reset()}
            variant="default"
            size="lg"
            className="mt-4"
          >
            <RefreshCw className="mr-2 h-4 w-4" />
            Try Again
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
