/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { createProxyMiddleware } from 'http-proxy-middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);

  // In development, proxy requests to Next.js dev server
  if (process.env.NODE_ENV !== 'production') {
    app.use(
      createProxyMiddleware({
        target: 'http://localhost:3001',
        changeOrigin: true,
        pathFilter: (path) => !path.startsWith('/api'),
      })
    );
  }

  const port = process.env.PORT || 3000;
  await app.listen(port);
  Logger.log(`🚀 Application is running on: http://localhost:${port}`);
}

bootstrap();
