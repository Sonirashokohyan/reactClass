import { useState } from 'preact/hooks'
// import preactLogo from './assets/preact.svg'
// import viteLogo from '/vite.svg'
import './app.css'
import { MainContainer } from './components/MainContainer';
import { Header } from './components/Header';
import { MainContent } from './components/MainContent';
import { Footer } from './components/Footer';

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <MainContent/>
    <Footer/>
      {/* <MainContainer/>  */}
    </>
  )
}
