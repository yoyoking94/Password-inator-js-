import { useState } from 'react'

import './App.css'

/* Import components */
import Preview from './components/preview/preview'
import ParameterContainer from './components/parameterContainer/parameterContainer'

function App() {

  const [password, setPassword] = useState('')
  const [value, setValue] = useState(50)
  const [checked, setChecked] = useState([false, false, false, false])
  const [strength, setStrength] = useState('')

  console.log(checked);
  if (checked[0] === 'true') {
    console.log('true');
  }
  else {
    console.log('false');
  }

  function handleGenerate() {
    console.log(checked);
  }

  return (
    <div className='App'>
      <span className='appTitle'>Password-inator</span>
      <Preview password={password} setPassword={setPassword} />
      <ParameterContainer value={value} setValue={setValue} checked={checked} setChecked={setChecked} strength={strength}
        setStrength={setStrength} handleGenerate={handleGenerate} />
    </div>
  )
}

export default App
