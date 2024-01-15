import { trpc } from "../utils/trpc";

export default async function Page() {
  const { greeting } = await trpc.hello.query({ name: `Tom` });

  return (
    <main>
      <h1>{greeting}</h1>
    </main>
  );
}
