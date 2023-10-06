import { useState } from 'react'

import './App.css'

/* Import components */
import Preview from './components/preview/preview'
import ParameterContainer from './components/parameterContainer/parameterContainer'

function App() {

  const [password, setPassword] = useState('')
  const [value, setValue] = useState(50)

  console.log(value);

  return (
    <div className='App'>
      <span className='appTitle'>Password-inator</span>
      <Preview password={password} setPassword={setPassword} />
      <ParameterContainer value={value} setValue={setValue} />
    </div>
  )
}

export default App
