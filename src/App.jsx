import { useState } from 'react'
import Title from './components/Title'
import About from './components/About'
import Subtitle from './components/Subtitle'
import Content from './components/Content'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Title 
        title="Meu Diário da Reprograma"
      />

      <About 
        subtitle="Prazer, Mariana"
        text="Aluna da Reprograma e Technical Writer"
        pic="../src/assets/foto-Mariana.png" description="Foto Mariana"
      />

      <Subtitle 
        contentTitle="4 aprendizados na reprograma"
      />

      <Content 
        contentSubtitle="GIT"
        contentImg=""
      />
    </>

  )
}

export default App
