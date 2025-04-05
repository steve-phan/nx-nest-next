/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { createProxyMiddleware } from 'http-proxy-middleware';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const isDev = process.env.NODE_ENV !== 'production';

  if (isDev) {
    // Enable CORS for development
    app.enableCors({
      origin: true,
      credentials: true,
    });

    // Proxy requests to Next.js dev server
    app.use(
      createProxyMiddleware({
        target: 'http://localhost:3001',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': '/api', // Preserve API routes
        },
      })
    );
  }

  const port = process.env.PORT || 3000;
  await app.listen(port);
  console.log(`Application is running on: http://localhost:${port}`);
}

bootstrap();
