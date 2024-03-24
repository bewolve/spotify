import { Hero } from "@/components/Hero";
import { PopularSongs } from "@/components/PopularSongs";

export default async function Home() {
  return (
    <section className="overflow-auto">
      <Hero />
      <div className="container mt-6 space-y-4 overflow-x-scroll scrollbar-hide">
        <h1 className="text-2xl text-secondary">Popular Songs You May Like</h1>
        <PopularSongs />
      </div>
    </section>
  );
}
