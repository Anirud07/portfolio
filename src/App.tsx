import React, { Suspense } from 'react';
import Layout from './components/Layout';
import { Hero } from './components/sections/Hero';
import { Footer } from './components/sections/Footer';
import Background3D from './components/3d/Background3D';

const About = React.lazy(() => import('./components/sections/About').then(module => ({ default: module.About })));
const Skills = React.lazy(() => import('./components/sections/Skills').then(module => ({ default: module.Skills })));
const Projects = React.lazy(() => import('./components/sections/Projects').then(module => ({ default: module.Projects })));
const Experience = React.lazy(() => import('./components/sections/Experience').then(module => ({ default: module.Experience })));
const Contact = React.lazy(() => import('./components/sections/Contact').then(module => ({ default: module.Contact })));

function App() {
  return (
    <div className="relative min-h-screen">
      {/* Global Background */}
      <div className="fixed inset-0 z-[-1]">
        <Background3D />
      </div>

      <Layout>
        <Hero />
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-white">
          <div className="w-8 h-8 rounded-full border-t-2 border-r-2 border-white animate-spin"></div>
        </div>}>
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </Suspense>
        <Footer />
      </Layout>
    </div>
  );
}

export default App;
