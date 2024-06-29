import Link from 'next/link';
import { Button } from '@/components/ui/button';
export default function Email() {
  return (
    <div className='p-4 border rounded-lg shadow bg-gray-800 border-gray-700'>
      <div className='p-6 text-center bg-gray-900 border-b border-gray-700 rounded-lg'>
        <p className='text-white'>เชื่อมสัมพันธ์สายรหัสพี่น้องDE</p>
      </div>
      <div className='p-4 shadow-2xl bg-lime-300  mt-4 w-64 h-auto rounded'>
        <p className=''>
          &quot; ตรวจพบคำใบ้ใหม่น้องอย่าลืมเข้าไปเช็คน้าา &quot;
        </p>
      </div>
      <div className='flex justify-center mt-4'>
        <Link
          href='https://buddy04.vercel.app/'
          className='py-2 px-4 text-white bg-green-700 rounded'
        >
          ตรวจสอบ
        </Link>
      </div>
    </div>
  );
}
