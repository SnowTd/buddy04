'use client';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useFormState } from 'react-dom';
import { operaEdit } from '@/lib/action';
import { useEffect } from 'react';
import ButtonEdit from './button';

export default function FormComponent({ setState }: { setState: any }) {
  const initialState = {
    message: {
      name: '',
      data: {
        SID: '',
        NAME: '',
        NICK: '',
        CONTACT: '',
        MAIL: '',
        COLLAB: []
      }
    }
  };
  const [state, action] = useFormState(operaEdit, initialState);
  useEffect(() => {
    setState(state.message);
  }, [state.message]);
  return (
    <div>
      <form action={action}>
        <Input
          name='keyword'
          type='text'
          placeholder='รหัสนศ 4 ตัวท้ายเช่น 260-6'
          required
        />
        <Input
          name='confirm'
          type='password'
          placeholder='รหัส'
          required
          className='mt-4'
        />
        <div className='flex justify-center w-full mt-4'>
          <ButtonEdit />
        </div>
      </form>
    </div>
  );
}
