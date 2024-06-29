import { Button } from '@/components/ui/button';
import { useFormStatus } from 'react-dom';
import { Loader2 } from 'lucide-react';
export default function ButtonSu() {
  const { pending } = useFormStatus();
  return (
    <div>
      {!pending ? (
        <Button className=' bg-blue-500 hover:bg-blue-400  rounded-lg '>
          ค้นหาคำใบ้
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
