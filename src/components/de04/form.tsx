import { Input } from '@/components/ui/input';
import { dataWitd4less } from '@/lib/action';
import { useFormState } from 'react-dom';
import ButtonSu from '@/components/de04/ButtonSu';

interface Props {
  setState: React.Dispatch<React.SetStateAction<any>>;
}
export default function FormComponent({ setState }: Props) {
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
          <ButtonSu />
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
