import { getBuildingById } from '@/db/queries';
import { notFound } from 'next/navigation';

export default async function BuildingPage({
  params,
}: {
  params: { buildingId: string };
}) {
  const existingsBuilding = await getBuildingById(parseInt(params.buildingId));
  if (!existingsBuilding) return notFound();
  return <>{existingsBuilding.id}</>;
}
