'use server';
import connectdb from './db';
import { buddyFind } from './schema/buddyFind';
export async function dataWitd4less(prevState: any, formData: FormData) {
  await connectdb();
  const keyword = formData.get('keyword');
  const USID = `673210${keyword}`;
  const res = await buddyFind.findOne({ SID: USID });
  if (!res) {
    return {
      message: {
        name: 'ลองเช็คเลขดีๆนะครับ',
        data: ''
      }
    };
  }
  console.log(res);
  return {
    message: {
      name: res.NICK,
      data: res.Hints
    }
  };
}
