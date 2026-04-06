import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import react from 'react'
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import ProductViewer from "./components/ProductViewer.jsx";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import Showcase from "./components/Showcase.jsx";


gsap.registerPlugin(ScrollTrigger)


function App() {

  return (



      <main>
          <Navbar />
          < Hero />
          <ProductViewer />
          <Showcase />
      </main>

  )
}

export default App
