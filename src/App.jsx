import { useState, useEffect } from 'react'
import Header from './components/header'
import Presentation from './components/presentation'
import About from './components/about'
import Projects from './components/projects'
import Skills from './components/skills'
import Contact from './components/contact'
import cors from 'cors'
import './App.css'

function App() {
  const [data, setData] = useState({
    about:'',
    projects:[],
    skills:[],
    contacts:{}
  })
  
  
  const URL = 'https://drive.google.com/file/d/17sRo8RqJiqlvyf4OgoYffPoLyOD_ghPj/view?usp=drive_link'
  const CORS ='https://cors-anywhere.herokuapp.com/'

  useEffect(()=>{
    fetch('../data/dataPortafolio.json')
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
