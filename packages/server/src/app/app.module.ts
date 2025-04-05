import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

import { AppController } from './app.controller';
import { AppService } from './app.service';

const isDev = process.env.NODE_ENV !== 'production';

@Module({
  imports: [
    ...(isDev
      ? []
      : [
          ServeStaticModule.forRoot({
            rootPath: join(
              __dirname,
              '..',
              '..',
              '..',
              'packages',
              'client',
              'out'
            ),
            exclude: ['/api*'],
          }),
        ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
