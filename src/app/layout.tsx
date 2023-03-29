import './globals.css'

export const metadata = {
  title: 'ACME',
  description: 'ACME, Inc.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
