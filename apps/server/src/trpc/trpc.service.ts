import { Injectable } from '@nestjs/common';
import { initTRPC } from '@trpc/server';

import * as trpcExpress from '@trpc/server/adapters/express';

export const createContext =
  ({}: trpcExpress.CreateExpressContextOptions) => ({});
type Context = Awaited<ReturnType<typeof createContext>>;

@Injectable()
export class TrpcService {
  trpc = initTRPC.context<Context>().create();
  procedure = this.trpc.procedure;
  router = this.trpc.router;
  mergeRouters = this.trpc.mergeRouters;
}
