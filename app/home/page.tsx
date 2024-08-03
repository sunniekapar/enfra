import Map from './components/map';
import BuildingForm from './components/building-form';

export default function HomePage() {
  return (
    <div className="grid grid-cols-12 min-h-dvh p-2 gap-2 max-h-dvh overflow-hidden">
      <div className="col-span-3 bg-white rounded-lg">
        <BuildingForm />
      </div>
      <div className="col-span-9 bg-green-50 rounded-lg relative">
        <Map />
      </div>
    </div>
  );
}
