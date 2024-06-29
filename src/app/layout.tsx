import type { Metadata } from 'next';
import { Inter, Kanit } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/sonner';

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
      <body className={`${kanit.className} bg-[#020817]`}>
        <div className='flex justify-center mt-[150px] w-full mb-4 container bg-[#020817]'>
          {children}
        </div>
        <Toaster />
      </body>
    </html>
  );
}
