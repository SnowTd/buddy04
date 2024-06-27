'use client';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { dataWitd4less } from '@/lib/action';
import { useFormState } from 'react-dom';
import { useEffect, useState } from 'react';

interface Props {
  setState: React.Dispatch<React.SetStateAction<any>>;
}
export default function FormComponent({ setState }: Props) {
  const [loading, setLoading] = useState(true);

  const initialState = {
    message: {
      name: '',
      data: ''
    }
  };
  const [State, action] = useFormState(dataWitd4less, initialState);
  setState(State.message);
  return (
    <div>
      <form action={action}>
        <Input
          name='keyword'
          type='text'
          placeholder='รหัสนศ 4 ตัวท้ายเช่น 260-6'
          required
        />
        <div className='flex justify-center w-full mt-4'>
          <Button className=' bg-blue-500 hover:bg-blue-400  rounded-lg '>
            ค้นหาคำใบ้
          </Button>
        </div>
        {State.message.name && (
          <div>
            <p className='text-sm text-white mt-2'>
              ค้นหาจากน้อง : {State.message.name}
            </p>
          </div>
        )}
      </form>
    </div>
  );
}
