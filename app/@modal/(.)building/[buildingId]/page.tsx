import Modal from '@/components/modal';
import { getBuildingById } from '@/db/queries';
import { notFound } from 'next/navigation';

export default async function BuildingPage({
  params,
}: {
  params: { buildingId: string };
}) {
  const existingBuilding = await getBuildingById(parseInt(params.buildingId));
  console.log(existingBuilding)
  if (!existingBuilding) return notFound();
  return <Modal>{existingBuilding.id} but this is in a modal!!!!</Modal>;
}
