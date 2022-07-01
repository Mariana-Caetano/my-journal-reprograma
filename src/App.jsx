import { useState } from 'react'
import Title from './Title'
import About from './components/About'
//import Subtitle from './Subtitle'
//import Paragraph from './Paragraph'
//import Image from './Image'

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