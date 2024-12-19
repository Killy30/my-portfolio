import { useState, useEffect } from 'react'
import Header from './components/header'
import Presentation from './components/presentation'
import About from './components/about'
import Projects from './components/projects'
import Skills from './components/skills'
import Contact from './components/contact'

import './App.css'

function App() {
  const [data, setData] = useState({
    about:'',
    projects:[],
    skills:[],
    contacts:{}
  })

  useEffect(()=>{
    fetch('../dataPortafolio.json')
    .then(res => res.json())
    .then(datas =>{
      setData(datas)
    })
  },[])
  console.log(data);
  
  
  return (
    <>
      <Header />
      <Presentation />
      <About about={data.about} />
      <Projects projects={data.projects} />
      <Skills skills={data.skills} />
      <Contact contacts={data.contacts} />
    </>
  )
}

export default App
