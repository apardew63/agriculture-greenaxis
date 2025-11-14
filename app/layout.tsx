import "./globals.css"

export const metadata = {
  title: "AgroGrow - Bring Fresh Growth to Agriculture",
  description: "Sustainable agriculture solutions for modern farms.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans bg-white text-gray-800">
        {children}
      </body>
    </html>
  )
}
