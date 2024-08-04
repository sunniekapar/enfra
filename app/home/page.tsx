import WorldMap from "./components/world-map";
import BuildingForm from "./components/building-form";
import { getUser } from "@/lib/lucia";
import { redirect } from "next/navigation";
import BuildingProvider from "@/context/buildingContext";
import { findAllBuildings } from "./actions";

export default async function HomePage() {
  const user = await getUser();
  if (!user) return redirect("/auth");

  const allMarkers = await findAllBuildings();

  return (
    <BuildingProvider>
      <div className="grid max-h-dvh min-h-dvh grid-cols-12 gap-2 overflow-hidden p-2">
        <section className="col-span-6 p-4 pt-8 md:col-span-3">
          <BuildingForm />
        </section>
        <section className="relative col-span-6 rounded-lg md:col-span-9">
          <WorldMap markers={allMarkers} />
        </section>
      </div>
    </BuildingProvider>
  );
}
