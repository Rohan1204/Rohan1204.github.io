// src/App.jsx
import './App.css';
import './index.css';
import { useState } from 'react';

import { LoadingScreen } from './components/LoadingScreen';
import { Navbar }        from './components/Navbar';
import { AboutMe }       from './components/section/AboutMe';
import { Experience }    from './components/section/Experience';
import { Projects }    from './components/section/Projects';
import { Home } from './components/section/Home';
import { Contact } from './components/section/Contact';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {/* Global background wrapper */}
      <div className="min-h-screen w-full 
      bg-gradient-to-r from-[#818aa3] via-[#000000]-800 to-[#2f2963] 
      bg-[length:200%_200%] animate-gradientMove text-white overflow-x-hidden">
        
        {/* 1) Loading Screen */}
        {!isLoaded && (
          <LoadingScreen onComplete={() => setIsLoaded(true)} />
        )}

        {/* 2) Main content */}
        <div
          className={`
            transition-opacity duration-700
            ${isLoaded ? 'opacity-100' : 'opacity-0'}
          `}
        >

          <Navbar />
          <Home />
          <AboutMe />
          <Experience />
          <Projects />
          <Contact/>
          {/* <Projects /> */}
          {/* Future sections: <Resume />, <Contact />, etc. */}
        </div>
      </div>
    </>
  );
}

export default App;
