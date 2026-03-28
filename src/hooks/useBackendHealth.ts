import { useState, useEffect, useCallback } from 'react';
import { BACKEND_URL } from '@/lib/api';

export interface HealthCheck {
  status: 'success' | 'error';
  message: string;
  timestamp?: string;
  database?: string;
  error?: string;
}

export function useBackendHealth() {
  const [health, setHealth] = useState<HealthCheck | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const checkHealth = useCallback(async () => {
    setLoading(true);
    setError(null);
    
    try {
      // Construct the health check URL from the backend URL
      const healthUrl = `${BACKEND_URL.replace('/auth', '/api')}/health.php`;
      
      const response = await fetch(healthUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      
      const data = await response.json();
      setHealth(data);
      
      if (data.status === 'error') {
        setError(data.message);
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error';
      setError(errorMessage);
      setHealth({
        status: 'error',
        message: `Cannot reach backend: ${errorMessage}`,
      });
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    checkHealth();
  }, [checkHealth]);

  return { health, loading, error, checkHealth };
}