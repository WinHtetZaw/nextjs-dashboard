import '@/app/ui/global.css';
import { indieFlower } from './ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${indieFlower.className} antialiased`}>{children}</body>
    </html>
  );
}
