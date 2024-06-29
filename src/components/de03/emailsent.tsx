'use client';
import { Button } from '../ui/button';
import { toast } from 'sonner';
import { sendMail } from '@/lib/action';
import ButtonSend from './buttonsend';
import { useFormState } from 'react-dom';
export default function EmailSent({ MAIL, NICK }: { MAIL: any; NICK: any }) {
  const initialState = {
    message: ''
  };
  const [state, action] = useFormState(sendMail, initialState);
  const handleToast = () => toast('ส่งเมลแจ้งเตือนสําเร็จ');
  if (state.message == 'success') {
    handleToast();
  }
  console.log(state.message);
  return (
    <div className='mt-4'>
      <form action={action}>
        <input type='hidden' name='email' defaultValue={MAIL} />
        <ButtonSend NICK={NICK} />
      </form>
    </div>
  );
}
