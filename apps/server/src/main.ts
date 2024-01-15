import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const port = process.env.PORT || 4000;

  const app = await NestFactory.create(AppModule);
  app.enableCors();
  // const trpc = app.get(TrpcRouter);
  // trpc.applyMiddleware(app);
  await app.listen(port, '0.0.0.0');
}
bootstrap();
