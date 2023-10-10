import { useState } from 'react'

import './App.css'

/* Import components */
import Preview from './components/preview/preview'
import ParameterContainer from './components/parameterContainer/parameterContainer'

function App() {

  const [password, setPassword] = useState('')
  const [value, setValue] = useState(50)

  /* checked */
  const [checked, setChecked] = useState([])
  /* checked */

  return (
    <div className='App'>
      <span className='appTitle'>Password-inator</span>
      <Preview password={password} setPassword={setPassword} />
      <ParameterContainer value={value} setValue={setValue} checked={checked} setChecked={setChecked} />
    </div>
  )
}

export default App
