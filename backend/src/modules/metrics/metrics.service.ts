import { Injectable, OnModuleInit } from '@nestjs/common';
import * as client from 'prom-client';

@Injectable()
export class MetricsService implements OnModuleInit {
  private registry: client.Registry;
  private httpRequestCounter: client.Counter<string>;
  private httpRequestDuration: client.Histogram<string>;

  onModuleInit() {
    this.registry = new client.Registry();

    // Add default metrics
    client.collectDefaultMetrics({
      register: this.registry,
      prefix: 'nestjs_',
    });

    // Custom metrics
    this.httpRequestCounter = new client.Counter({
      name: 'nestjs_http_requests_total',
      help: 'Total number of HTTP requests',
      labelNames: ['method', 'path', 'status'],
      registers: [this.registry],
    });

    this.httpRequestDuration = new client.Histogram({
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

  incrementRequestCounter(method: string, path: string, status: string) {
    this.httpRequestCounter.inc({ method, path, status });
  }

  observeRequestDuration(
    method: string,
    path: string,
    status: string,
    duration: number,
  ) {
    this.httpRequestDuration.observe({ method, path, status }, duration);
  }
}
