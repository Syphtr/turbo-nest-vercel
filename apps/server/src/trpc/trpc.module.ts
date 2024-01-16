import { Module } from '@nestjs/common';
import { TrpcService } from './trpc.service';
import { TrpcRouter } from './trpc.router';

@Module({
  imports: [],
  controllers: [],
  providers: [TrpcRouter, TrpcService ],
})
export class TrpcModule {}
