import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const Sub = () => {
    return (
        <>
            <div>Sub</div>
            <div>
                Sub is: {100 - 200}
            </div>
        </>
    )
    
}

  
  return (
    <>
      <div>
        <h1>This is the React function component App example</h1>
      </div>

     <div>
      <Sub/>
     </div>
    </>
    
  )
}

export default App