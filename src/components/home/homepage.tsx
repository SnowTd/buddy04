import { Button } from '../ui/button';
import Link from 'next/link';
export default function Homepage() {
  return (
    <div className='p-4 border rounded-lg shadow bg-gray-800 border-gray-700'>
      <div className='p-6 text-center bg-gray-900 border-b border-gray-700 rounded-lg'>
        <p className='text-xl font-bold text-white'>PROGRAM BUDDY</p>
      </div>
      <div className='mt-4'>
        <div className='flex justify-center mt-4 '>
          <Link href={'/for04'} className='w-full'>
            <Button className='h-12 bg-blue-500 hover:bg-blue-400  rounded-lg w-full'>
              <p>สำหรับน้อง DE04</p>
            </Button>
          </Link>
        </div>
        <div className='flex justify-center mt-4 mb-4 w-f'>
          <Link href={'/for03'} className='w-full'>
            <Button className='h-12 bg-green-500 hover:bg-green-400 rounded-lg w-full'>
              <p>สำหรับพี่ DE03</p>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
