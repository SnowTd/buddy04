import type { Metadata } from 'next';
import { Inter, Kanit } from 'next/font/google';
import './globals.css';
import Header from '@/components/mydesign/headerMenuUI/header';
import Sidebar from '@/components/mydesign/headerMenuUI/sidebar';

const inter = Inter({ subsets: ['latin'] });
const kanit = Kanit({ subsets: ['latin'], weight: '400' });
export const metadata: Metadata = {
  title: 'DE สายรหัส',
  description: 'ตามหาบัดดี้ของพี่ๆน้องๆ'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='th'>
      <body
        className={`${kanit.className} flex justify-center items-center w-full h-screen container bg-[#020817]`}
      >
        {children}
      </body>
    </html>
  );
}
