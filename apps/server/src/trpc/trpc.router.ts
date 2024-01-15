import { INestApplication, Injectable } from '@nestjs/common';
import { z } from 'zod';
import { TrpcService } from './trpc.service';

import * as trpcExpress from '@trpc/server/adapters/express';

import { createContext } from './trpc.service';

@Injectable()
export class TrpcRouter {
  constructor(private readonly trpc: TrpcService) {}

  appRouter = this.trpc.router({
    hello: this.trpc.procedure
      .input(
        z.object({
          name: z.string().optional(),
        }),
      )
      .query(({ input }) => {
        const { name } = input;
        return {
          greeting: `Goodbye ${name ? name : `Bilbo`}`,
        };
      }),
  });

  async applyMiddleware(app: INestApplication) {
    app.use(
      `/trpc`,
      trpcExpress.createExpressMiddleware({
        // this is bad. Please revisit and resolve
        router: this.appRouter as any,
        createContext,
      }),
    );
  }
}

export type AppRouter = TrpcRouter[`appRouter`];
