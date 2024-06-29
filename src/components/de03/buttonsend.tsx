import { Button } from '@/components/ui/button';
import { useFormStatus } from 'react-dom';
import { Loader2 } from 'lucide-react';
export default function ButtonSend({ NICK }: { NICK: string }) {
  const { pending } = useFormStatus();
  return (
    <div className='mb-2'>
      {!pending ? (
        <Button className=' bg-blue-500 hover:bg-blue-400  rounded-lg w-full'>
          ส่งเมลแจ้งเตือนน้อง : {NICK}
        </Button>
      ) : (
        <Button disabled className='w-full'>
          <div>
            <Loader2 className=' animate-spin' />
          </div>
        </Button>
      )}
    </div>
  );
}
