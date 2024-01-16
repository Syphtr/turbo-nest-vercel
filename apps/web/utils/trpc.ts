import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import { AppRouter } from "../../server/src/trpc/trpc.router";

export const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      // eslint-disable-next-line turbo/no-undeclared-env-vars
      url: "http://localhost:4000/trpc", // you should update this to use env variables
    }),
  ],
});
