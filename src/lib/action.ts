'use server';
import connectdb from './db';
import { buddyFind } from './schema/buddyFind';
import { operaFind } from './schema/opera';
import { revalidatePath, unstable_noStore as NoStore } from 'next/cache';
import nodemailer from 'nodemailer';
export async function dataWitd4less(prevState: any, formData: FormData) {
  NoStore();
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

export async function operaEdit(prevState: any, formData: FormData) {
  NoStore();
  await connectdb();
  const keyword = formData.get('keyword');
  const confirm = formData.get('confirm');
  console.log(confirm);
  const UID = `663210${keyword}`;
  const res = await operaFind.aggregate([
    { $match: { SID03: UID } },
    {
      $lookup: {
        from: 'buddies',
        localField: 'SID03',
        foreignField: 'SID03',
        as: 'collab'
      }
    }
  ]);
  if (!res[0]) {
    console.log('Data not found');
    return {
      message: {
        name: 'ไม่พบข้อมูล', // 'Data not found' in Thai
        data: { NAME: 'ไม่พบข้อมูล' }
      }
    };
  }

  if (confirm == process.env.PASSWORD) {
    console.log('Password correct');
    const data = JSON.parse(JSON.stringify(res));
    return {
      message: {
        name: data[0].NICK,
        data: {
          SID: data[0].SID03,
          NAME: data[0].NAME,
          NICK: data[0].NICK,
          CONTACT: data[0].CONTACT,
          MAIL: data[0].MAIL,
          COLLAB: data[0].collab
        }
      }
    };
  } else {
    console.log('Password incorrect');
    return {
      message: {
        name: 'รหัสผ่านไม่ถูกต้อง', // 'Password incorrect' in Thai
        data: { NAME: 'รหัสผ่านไม่ถูกต้อง' }
      }
    };
  }
}

export async function editHints(prevState: any, formData: FormData) {
  await connectdb();
  const Hints = formData.get('Hints');
  const ID = formData.get('ID');
  const res = await buddyFind.findOneAndUpdate({ SID: ID }, { Hints: Hints });

  revalidatePath('/for03');
  revalidatePath('/for04');
  return {
    message: 'done'
  };
}

export async function sendMail(preveState: any, formData: FormData) {
  const email = formData.get('email');
  const send = email?.toString();
  const { EMAIL, EMAIL_PASS } = process.env;

  const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: EMAIL,
      pass: EMAIL_PASS
    }
  });
  try {
    const testResult = await transport.verify();
  } catch (error) {
    console.log(error);
    return {
      message: 'error'
    };
  }
  try {
    const result = await transport.sendMail({
      from: EMAIL,
      to: send,
      subject: 'เชื่อมสัมพันธ์สายรหัสพี่น้องDE',
      html: '<p>คลิกรูปเพื่อเข้าสู่ website ได้เลย</p><a href="https://buddy04.vercel.app/" ><img src="https://img2.pic.in.th/pic/af46c6e9ebc81c9a8fe4bbcfa981d3ce.png" width="500" height="500" border="0" alt="IMG-20220904-121314" /></a>'
    });
    console.log('success');
    return { message: 'success' };
  } catch (error) {
    console.log(error);
    return { message: 'error' };
  }
}
