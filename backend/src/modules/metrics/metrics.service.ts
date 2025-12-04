import { Injectable, OnModuleInit } from '@nestjs/common';
import * as client from 'prom-client';

@Injectable()
export class MetricsService implements OnModuleInit {
  private registry: client.Registry;

  onModuleInit() {
    this.registry = new client.Registry();
    
    // Add default metrics
    client.collectDefaultMetrics({
      register: this.registry,
      prefix: 'nestjs_',
    });

    // Custom metrics can be added here
    const httpRequestCounter = new client.Counter({
      name: 'nestjs_http_requests_total',
      help: 'Total number of HTTP requests',
      labelNames: ['method', 'path', 'status'],
      registers: [this.registry],
    });

    const httpRequestDuration = new client.Histogram({
      name: 'nestjs_http_request_duration_seconds',
      help: 'Duration of HTTP requests in seconds',
      labelNames: ['method', 'path', 'status'],
      buckets: [0.1, 0.3, 0.5, 0.7, 1, 3, 5, 7, 10],
      registers: [this.registry],
    });
  }

  async getMetrics(): Promise<string> {
    return this.registry.metrics();
  }

  getRegistry(): client.Registry {
    return this.registry;
  }
}
