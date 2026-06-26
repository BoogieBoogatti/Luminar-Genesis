export const metadata = {
  title: 'Luminar Genesis',
  description: 'Luminar Genesis App',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
