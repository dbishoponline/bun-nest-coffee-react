import { useAppSelector, useAppDispatch } from './hooks/redux';
import { fetchApiInfo, selectApiInfo, selectApiStatus, selectApiError } from './features/api/apiSlice';
import { Button } from './components/ui/Button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './components/ui/Card';
import { ThemeToggle } from './components/ThemeToggle';
import { useEffect } from 'react';

function App() {
  const dispatch = useAppDispatch();
  const apiInfo = useAppSelector(selectApiInfo);
  const status = useAppSelector(selectApiStatus);
  const error = useAppSelector(selectApiError);

  useEffect(() => {
    dispatch(fetchApiInfo());
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-base-200 to-base-300" data-theme="light">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-4xl font-bold text-primary">
              🚀 Bun + NestJS + React
            </h1>
            <p className="text-muted-foreground mt-2">
              Modern Full-Stack Boilerplate
            </p>
          </div>
          <ThemeToggle />
        </header>

        {/* Main Content */}
        <main className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* API Status Card */}
          <Card className="col-span-full md:col-span-1">
            <CardHeader>
              <CardTitle>API Status</CardTitle>
              <CardDescription>Backend connection status</CardDescription>
            </CardHeader>
            <CardContent>
              {status === 'loading' && (
                <div className="flex items-center gap-2">
                  <span className="loading loading-spinner loading-sm"></span>
                  <span>Connecting...</span>
                </div>
              )}
              {status === 'succeeded' && apiInfo && (
                <div className="space-y-2">
                  <div className="badge badge-success gap-2">
                    <span className="w-2 h-2 bg-success-content rounded-full animate-pulse"></span>
                    Connected
                  </div>
                  <p className="text-sm"><strong>Name:</strong> {apiInfo.name}</p>
                  <p className="text-sm"><strong>Version:</strong> {apiInfo.version}</p>
                </div>
              )}
              {status === 'failed' && (
                <div className="alert alert-error">
                  <span>Error: {error}</span>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Tech Stack Card */}
          <Card>
            <CardHeader>
              <CardTitle>Tech Stack</CardTitle>
              <CardDescription>Technologies used</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <span className="badge badge-primary">Bun</span>
                <span className="badge badge-secondary">NestJS</span>
                <span className="badge badge-accent">React</span>
                <span className="badge badge-info">Redux Toolkit</span>
                <span className="badge badge-success">Redux Saga</span>
                <span className="badge badge-warning">TypeScript</span>
                <span className="badge badge-error">TailwindCSS</span>
                <span className="badge badge-ghost">DaisyUI</span>
              </div>
            </CardContent>
          </Card>

          {/* Infrastructure Card */}
          <Card>
            <CardHeader>
              <CardTitle>Infrastructure</CardTitle>
              <CardDescription>Backend services</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                  PostgreSQL Database
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                  Redis Cache
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
                  Prometheus Metrics
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                  Grafana Dashboards
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Actions Card */}
          <Card className="col-span-full">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Common development tasks</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4">
                <Button onClick={() => dispatch(fetchApiInfo())}>
                  Refresh API Status
                </Button>
                <Button variant="secondary" asChild>
                  <a href="http://localhost:9090" target="_blank" rel="noopener noreferrer">
                    Open Prometheus
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="http://localhost:3001" target="_blank" rel="noopener noreferrer">
                    Open Grafana
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </main>

        {/* Footer */}
        <footer className="mt-12 text-center text-muted-foreground">
          <p>Built with ❤️ using Bun, NestJS, React, and Docker</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
