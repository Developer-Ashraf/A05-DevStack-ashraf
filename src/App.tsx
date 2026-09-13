
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
const LoadingFallback = () => (
  <div className="flex flex-col justify-center items-center py-20 gap-3">
    <div className="w-10 h-10 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
    <p className="text-gray-500 font-medium text-sm">Loading Technologies...</p>
  </div>
);


function App() {

  const stackPromise = StackFetch();

  return (
    <>
      <NavBar />
      <HeroBanner />
      <Suspense fallback={<LoadingFallback />}>
        <StackCard stackPromise={stackPromise} />
      </Suspense>
      <FooterSection />
    </>
  )
}

export default App
