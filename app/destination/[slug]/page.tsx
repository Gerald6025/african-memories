import DestinationDetails from '../../components/DestinationDetails';
import { apiGet, type Activity } from '../../../lib/api';
import { experienceCard, type ExperienceCardData } from '../../../lib/experiences';

export default async function DestinationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let experiences: ExperienceCardData[] = [];
  let error: string | null = null;
  try {
    const activities = await apiGet<Activity[]>('/activities');
    const now = Date.now();
    experiences = activities.map(activity => experienceCard(activity, now));
  } catch { error = 'Experiences are temporarily unavailable.'; }
  return <DestinationDetails slug={slug} experiences={experiences} error={error} />;
}