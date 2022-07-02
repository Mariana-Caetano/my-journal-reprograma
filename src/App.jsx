import { useState } from 'react'
import Title from './components/Title'
import About from './components/About'
import Subtitle from './components/Subtitle'
import Content from './components/Content'
import Footer from './components/Footer'

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
        contentImg="../src/assets/kiki git.gif"
        contentText="Mussum Ipsum, cacilds vidis litro abertis. Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus.Delegadis gente finis, bibendum egestas augue arcu ut est.Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis.Aenean aliquam molestie leo, vitae iaculis nisl."
      />

      <Content 
        contentSubtitle="HTML"
        contentImg="../src/assets/kiki html.gif"
        contentText="Mussum Ipsum, cacilds vidis litro abertis. Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus.Delegadis gente finis, bibendum egestas augue arcu ut est.Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis.Aenean aliquam molestie leo, vitae iaculis nisl."
      />

      <Content 
        contentSubtitle="CSS"
        contentImg="../src/assets/kiki css.gif"
        contentText="Mussum Ipsum, cacilds vidis litro abertis. Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus.Delegadis gente finis, bibendum egestas augue arcu ut est.Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis.Aenean aliquam molestie leo, vitae iaculis nisl."
      />

      <Content 
        contentSubtitle="JavaSript"
        contentImg="../src/assets/kiki js.gif"
        contentText="Mussum Ipsum, cacilds vidis litro abertis. Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus.Delegadis gente finis, bibendum egestas augue arcu ut est.Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis.Aenean aliquam molestie leo, vitae iaculis nisl."
      />

      <Footer footerText="Feito com amor por Mariana"/>

    </>

  )
}

export default App
