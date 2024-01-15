import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
// import { AppRouter } from "@server/trpc/trpc.router";
import { AppRouter } from "../../server/src/trpc/trpc.router";

export const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      // eslint-disable-next-line turbo/no-undeclared-env-vars
      url: `${process.env.NEXT_PUBLIC_NESTJS_SERVER}/trpc`, // you should update this to use env variables
    }),
  ],
});
