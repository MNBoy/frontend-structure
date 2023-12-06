import { ProfileHeader } from '@/components/pages/Profile';
import { ProfileInfo } from '@/components/pages/Profile/ProfileInfo';

export default function ProfilePage() {
  return (
    <div className='w-full flex flex-col'>
      <ProfileHeader />
      <ProfileInfo />
    </div>
  );
}
