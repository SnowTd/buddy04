import { Button } from '@/components/ui/button';
import { useFormStatus } from 'react-dom';
import { Loader2 } from 'lucide-react';
export default function ButtonEditB() {
  const { pending } = useFormStatus();
  return (
    <div>
      {!pending ? (
        <Button className=' bg-blue-500 hover:bg-blue-400  rounded-lg w-full'>
          EDIT
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
