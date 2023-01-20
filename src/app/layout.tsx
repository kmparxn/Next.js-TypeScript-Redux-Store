import "../styles/globals.css"
import Banner from "./components/Banner"
import Header from "./components/Header"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <div className="bg-gray-100">
        <Header />
        {children}
        </div>   
      </body>
    </html>
  )
}
