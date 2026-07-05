import AccommodationDetail from '../../components/AccommodationDetail';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function AccommodationPage({ params }: PageProps) {
  const { id } = await params;
  const accommodationId = Number(id);

  return <AccommodationDetail accommodationId={accommodationId} />;
}
