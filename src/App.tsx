
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
import { Suspense } from 'react'
import './App.css'
import HeroBanner from './components/HeroBanner'
import NavBar from './components/NavBar'
import StackCard from './components/stack/Stacks'
import type { ITechStack } from './types/StackType'
import FooterSection from './components/FooterSection'


const StackFetch = async():Promise<ITechStack[]> => {
  const res = fetch('/data.json');
  const data = (await res).json();
  return data;
}

function App() {

  const stackPromise = StackFetch();

  return (
    <>
      <NavBar />
      <HeroBanner />
      <Suspense fallback={<h2>Loading...</h2>}>
        <StackCard stackPromise={stackPromise} />
      </Suspense>
      <FooterSection />
    </>
  )
}

export default App
