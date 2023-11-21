import DisplayFavs from "./components/displayFavs";
export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24 text-white">
      <DisplayFavs />
    </main>
  );
}
