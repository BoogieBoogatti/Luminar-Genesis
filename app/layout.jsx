import './globals.css';

export const metadata = {
  title: 'Luminar Genesis',
  description: 'The Foundation AI',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-black text-white antialiased">{children}</body>
    </html>
  );
}
