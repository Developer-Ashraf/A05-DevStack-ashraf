
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
import { Suspense } from 'react'
import './App.css'
import HeroBanner from './components/HeroBanner'
import NavBar from './components/NavBar'
import StackCard from './components/stack/StackCard'


const StackFetch = async() => {
  const res = fetch('/data.json');
  const data = (await res).json();
  return data;
}

function App() {

  const StackPromise = StackFetch();

  return (
    <>
      <NavBar />
      <HeroBanner />
      <Suspense fallback={<h3>Loading...</h3>}>
        <StackCard StackPromise={StackPromise} />
      </Suspense>

    </>
  )
}

export default App
