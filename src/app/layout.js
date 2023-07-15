import './globals.css'
import { Fira_Mono } from 'next/font/google'
import NavBar from './components/NavBar/NavBar'
import { ThemeProvider } from './context/ThemeContext'
import Footer from './components/Footer/Footer'

const inter = Fira_Mono({ subsets: ['latin'], weight:'400'})

export const metadata = {
  title: 'ToDo App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <ThemeProvider> */}
        <div className='container'>
          <NavBar/>
            {children}
           <Footer/> 
        </div>   
        
        {/* </ThemeProvider> */}
       </body>
    </html>
  )
}
