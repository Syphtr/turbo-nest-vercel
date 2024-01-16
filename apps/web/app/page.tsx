import { trpc } from "../utils/trpc";

export default async function Page() {
  const { greeting } = await trpc.hello.query({ name: "Daniel" });

  return (
    <main>
      <h1>Client</h1>
      <h1>{greeting}</h1>
    </main>
  );
}
