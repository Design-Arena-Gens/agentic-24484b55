export const metadata = {
  title: 'San Francisco International Airport - SFO',
  description: 'Welcome to San Francisco International Airport - Your gateway to the world',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
        {children}
      </body>
    </html>
  )
}
