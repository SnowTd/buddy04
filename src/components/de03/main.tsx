'use client';

import FormComponent from './form';
import { useEffect, useState } from 'react';
import Edit from './edit';
import EmailSent from './emailsent';
interface DataType {
  data: {
    SID: '';
    NAME: '';
    NICK: '';
    CONTACT: '';
    MAIL: '';
    COLLAB: any;
  };
}
export default function Main() {
  const [state, setState] = useState<DataType>({
    data: {
      SID: '',
      NAME: '',
      NICK: '',
      CONTACT: '',
      MAIL: '',
      COLLAB: [{}]
    }
  });

  return (
    <div className='min-h-screen '>
      <div className='p-4 border rounded-lg shadow bg-gray-800 border-gray-700'>
        <div className='p-6 text-center bg-gray-900 border-b border-gray-700 rounded-lg'>
          <p className='text-white'>จะเริ่มปั่นน้องรหัสแล้วหรือยัง!?</p>
        </div>
        <div>
          <p className='text-center text-white mt-4 mb-2'> รหัสของคุณพี่ ? </p>
          <FormComponent setState={setState} />
        </div>
        {state.data.NAME && (
          <div className='mt-2'>
            <p className='text-center text-white'>{state.data.NAME}</p>
          </div>
        )}
        {state.data.NICK && (
          <div>
            <p className='text-center text-white'>
              ชื่อของคุณพี่ : {state.data.NICK} ถูกต้องไหมครับ?
            </p>
          </div>
        )}
      </div>
      {state.data.NICK && (
        <div className='p-4 border rounded-lg shadow bg-gray-800 border-gray-700 mt-4 text-white'>
          <p className='mb-2'>คุณพี่ชื่อ : {state.data.NAME}</p>
          <p className='mb-2'>อีเมล : {state.data.MAIL}</p>
          <p className='mb-2'>ช่องทาง : {state.data.CONTACT}</p>
          <p className='mb-2'>คุณพี่มีน้อง : {state.data.COLLAB.length} คน</p>
          <p className='text-red-500 text-center text-sm'>
            หากข้อมูลผิดกรุณาแจ้งหลังบ้าน
          </p>
          {state.data?.COLLAB?.map((e: any) => {
            const NICK = e.NICK;
            return (
              <div key={e.SID}>
                <EmailSent MAIL={e.MAIL} NICK={NICK} />
              </div>
            );
          })}
          <div>
            <p className='text-xs text-red-400'>
              *จะมีดีเลย์ในการส่ง 8 ชั่วโมง Email
            </p>
            <p className='text-xs text-red-400'>
              **เมลที่ส่งไม่ใช่เมลคุณพี่แต่เป็นเมลที่เตรียมไว้
            </p>
          </div>
        </div>
      )}

      {state.data?.COLLAB?.map((e: any) => {
        return (
          <div
            key={e.SID}
            className='p-4 border rounded-lg flex justify-center shadow bg-gray-900 border-gray-700 mt-4 text-white'
          >
            <div>
              <p className='mb-2'>ชื่อน้อง : {e.NAME}</p>
              <p className='mb-2'>ชื่อเล่น : {e.NICK}</p>
              <p className='mb-2'>
                contact : <br />
                {e.CONTACT}
              </p>
              <div className='p-4 shadow-2xl bg-lime-300/10 rounded-md  mt-4 w-64 h-auto '>
                <p className='flex justify-center text-center'>📌คำใบ้📌</p>
                <div className='p-4 flex justify-center'>
                  <p className='text-2xl text-center'>
                    &quot; {e.Hints} &quot;
                  </p>
                </div>
              </div>
              <Edit defaultValue={e.Hints} ID={e.SID} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
