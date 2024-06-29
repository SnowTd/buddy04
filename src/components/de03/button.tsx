import { Button } from '@/components/ui/button';
import { useFormStatus } from 'react-dom';
import { Loader2 } from 'lucide-react';
export default function ButtonEdit() {
  const { pending } = useFormStatus();
  return (
    <div className=''>
      {!pending ? (
        <Button className=' bg-blue-500 hover:bg-blue-400  rounded-lg '>
          โหลดข้อมูล
        </Button>
      ) : (
        <Button disabled>
          <div>
            <Loader2 className=' animate-spin' />
          </div>
        </Button>
      )}
    </div>
  );
}
