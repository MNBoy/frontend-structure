import { AuthForm } from '@/components/pages/Auth';

export default function LoginPage() {
  return (
    <div className='w-full flex justify-center items-center flex-col'>
      <h1 className='text-2xl font-bold'>Your Details</h1>
      <p className='mb-8 text-secondary/60'>Please provide your credentials</p>
      <AuthForm type='login' />
    </div>
  );
}
