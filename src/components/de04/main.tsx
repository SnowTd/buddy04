'use client';
import Form from './form';
import { useState } from 'react';

interface DataType {
  data: string;
}
export default function Main() {
  const [State, setState] = useState<DataType>({ data: '' });

  return (
    <div>
      <div className='p-4 border rounded-lg shadow bg-gray-800 border-gray-700'>
        <div className='p-6 text-center bg-gray-900 border-b border-gray-700 rounded-lg'>
          <p className='text-white'>Who is my พี่รหัส!?</p>
        </div>
        <div className='flex justify-center'>
          <p className='text-white mt-4 mb-4'>กรอกรหัส</p>
        </div>
        <div className='w-full'>
          <Form setState={setState} />
        </div>
      </div>
      {State.data && (
        <div className='p-4 shadow-2xl bg-lime-300  mt-4 w-64 h-auto'>
          <p className=' text-center'>📌คำใบ้📌</p>
          <div className='p-4'>
            <p className='text-2xl'>&quot; {State.data} &quot;</p>
          </div>
        </div>
      )}
    </div>
  );
}
