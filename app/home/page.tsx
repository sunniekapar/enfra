import Map from './components/map';
import BuildingForm from './components/building-form';

export default function HomePage() {
  return (
    <div className="grid grid-cols-12 min-h-dvh p-2 gap-2 max-h-dvh overflow-hidden">
      <section className="col-span-3 p-4 pt-8">
        <BuildingForm />
      </section>
      <section className="col-span-9 bg-green-50 rounded-lg relative">
        <Map />
      </section>
    </div>
  );
}
