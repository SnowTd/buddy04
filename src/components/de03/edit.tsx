'use client';
import { Input } from '../ui/input';
import { editHints } from '@/lib/action';
import ButtonEditB from './buttonedit';
import { useFormState } from 'react-dom';
import { useEffect } from 'react';

interface props {
  Hints: string;
}
export default function Edit({
  defaultValue,
  ID
}: {
  defaultValue: string;
  ID: string;
}) {
  const initialState = {
    message: ''
  };
  const [state, action] = useFormState(editHints, initialState);
  return (
    <div className='mt-4 text-black'>
      <form action={action}>
        <Input type='hidden' defaultValue={ID} name='ID' />
        <Input type='text' defaultValue={defaultValue} name='Hints' />
        <div className='w-full mt-4'>
          <ButtonEditB />
        </div>
      </form>
    </div>
  );
}
