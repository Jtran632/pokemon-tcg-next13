import DisplaySets from "../components/displaySets";
//no-store because force-dynamic is bugged on set page not getting latest sets
async function getSets() {
  const a = fetch("https://api.pokemontcg.io/v2/sets", { cache: "no-store" });
  return (await a).json();
}

export default async function Home() {
  let a = await getSets();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-10 pb-20 pt-10 bg-white">
      <DisplaySets tcgSets={a} />
    </main>
  );
}
