import React, { useState, useEffect }from 'react'
import styled from 'styled-components'
import Edit from './Edit'


function App() {
  const [codeHtml, setCodeHtml] = useState('')
  const [codeCss, setCodeCss] = useState('')
  const [codeJs, setCodeJs] = useState('')
  const [srcDoc, setSrcDoc] = useState('')

  useEffect(() => {
    const timeout = setTimeout(()=>{
      setSrcDoc(`
        <html>
          <body>${codeHtml}</body>
          <style>${codeCss}</style>
          <script>${codeJs}</script>
        </html>
      `)
    }, 1000)

    return () => clearTimeout(timeout)
  }, [codeHtml, codeCss, codeJs]);

  const blob = new Blob([srcDoc], { type: 'text/html' }) 

  const href = URL.createObjectURL(blob);

  return (
      <>
        <PaneTop>
          <Edit language='xml' displayName="Html" value={codeHtml} onChange={setCodeHtml}/>
          <Edit language='css' displayName="CSS" value={codeCss} onChange={setCodeCss}/>
          <Edit language='javascript' displayName="Javascript" value={codeJs} onChange={setCodeJs}/>
          
        </PaneTop>
        <PaneBottom>
          <Iframe srcDoc={srcDoc}>

          </Iframe>
        </PaneBottom>
        <DownloadButton href={href} download>Download</DownloadButton>
      </>
    );
}

const PaneTop = styled.div`
  display: flex;
  background-color: #250f42;
  color: #fff;
  height: 50vh;
`

const PaneBottom = styled.div`
  height: 50vh;
  display:flex;

`
const Iframe = styled.iframe.attrs({
  title: 'output',
  sandbox:"allow-same-origin allow-scripts allow-popups allow-forms",
  frameBorder: 0,
  width: "100%",
  height: "100%"
})``

const DownloadButton = styled.a`
  border: none;
  padding: 15px;
  background: #000;
  color: #fff;
  border-radius: 15px;
  position: absolute;
  bottom: 15px;
  right: 15px;
  cursor:pointer;

  &&:hover{
    background-color: gray;
  }

`


export default App;
