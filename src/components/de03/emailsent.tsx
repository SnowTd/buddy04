'use client';
import { Button } from '../ui/button';
import { sendMail } from '@/lib/action';
import ButtonSend from './buttonsend';
export default function EmailSent({ MAIL, NICK }: { MAIL: any; NICK: any }) {
  return (
    <div className='mt-4'>
      <form action={sendMail}>
        <input type='hidden' name='email' defaultValue={MAIL} />
        <ButtonSend NICK={NICK} />
      </form>
    </div>
  );
}
