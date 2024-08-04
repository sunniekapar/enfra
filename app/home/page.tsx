import WorldMap from './components/world-map';
import BuildingForm from './components/building-form';
import { getUser } from '@/lib/lucia';
import { redirect } from 'next/navigation';
import BuildingProvider from '@/context/buildingContext';

export default async function HomePage() {
  const user = await getUser();
  if (!user) return redirect('/auth');
  return (
    <BuildingProvider>
      <div className="grid grid-cols-12 min-h-dvh p-2 gap-2 max-h-dvh overflow-hidden">
        <section className="col-span-6 md:col-span-3 p-4 pt-8">
          <BuildingForm />
        </section>
        <section className="col-span-6 md:col-span-9 rounded-lg relative">
          <WorldMap />
        </section>
      </div>
    </BuildingProvider>
  );
}
