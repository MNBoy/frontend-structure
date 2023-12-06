import { Template } from '@/components/template';

export const UserSkeleton = () => {
  return (
    <div className='max-w-[150px] w-full flex items-center gap-3'>
      <div>
        <Template.Skeleton className='flex rounded-full w-12 h-12' />
      </div>
      <div className='w-full flex flex-col gap-2'>
        <Template.Skeleton className='h-3 w-3/5 rounded-lg' />
        <Template.Skeleton className='h-3 w-4/5 rounded-lg' />
      </div>
    </div>
  );
};
