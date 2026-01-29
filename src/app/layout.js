import './globals.css'

export const metadata = {
  title: 'Ahmad Dhavi Fauzan Yudistira - Portfolio',
  description: 'Portfolio website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
