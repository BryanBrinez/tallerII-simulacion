import './globals.css'

export const metadata = {
  title: 'Taller II ',
  description: 'Taller II Simulación Computacional ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
