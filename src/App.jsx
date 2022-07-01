import { useState } from 'react'
import Title from './components/Title'
import About from './components/About'

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
    </>

  )
}

export default App
