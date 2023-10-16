import { useState } from 'react'

import './App.css'

/* Import components */
import Preview from './components/preview/preview'
import Range from './components/range/range'
import Checkbox from './components/checkbox/checkboxes'
import Strength from './components/strength/strength'
import GenerateBtn from './components/generateBtn/generateBtn'

/* import ParameterContainer from './components/parameterContainer/parameterContainer' */

function App() {

  const [password, setPassword] = useState('')
  const [value, setValue] = useState(25)
  const [checked, setChecked] = useState([false, false, false, false])
  const [strength, setStrength] = useState('')

  function handleGenerate() {
    /* console.log(checked);
    console.log(checked.isUpper);
    console.log(checked.isLower);
    console.log(checked.isNumber);
    console.log(checked.isSymbol); */

    const upperChar = [`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`, `P`, `Q`, `R`, `S`, `T`, `U`, `V`, `W`, `X`, `Y`, `Z`];
    const lowerChar = [`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`, `j`, `k`, `l`, `m`, `n`, `o`, `p`, `q`, `r`, `s`, `t`, `u`, `v`, `w`, `y`, `z`];
    const numberChar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const symbolChar = [`&`, `é`, `"`, `'`, `(`, `-`, `è`, `_`, `ç`, `à`, `)`, `=`, `^`, `$`, `ù`, `*`, `,`, `;`, `:`, `!`, `~`, `#`, `{`, `}`, `[`, `]`, `|`, `^`, `@`, `]`, `¤`, `*`, `ù`, `€`];

    const passwordChar = []
    const passwordArray = []

    /* All params */
    if (checked.isUpper && checked.isLower && checked.isNumber && checked.isSymbol) {
      passwordChar.push(...upperChar, ...lowerChar, ...numberChar, ...symbolChar);
      for (let index = 0; index < value; index++) {
        passwordArray.push(passwordChar[Math.floor(Math.random() * passwordChar.length)]);
      }
      const res = passwordArray.join('')
      setPassword(res)
    }
    /* 3 params */
    else if (checked.isUpper && checked.isLower && checked.isNumber) {
      passwordChar.push(...upperChar, ...lowerChar, ...symbolChar);
      for (let index = 0; index < value; index++) {
        passwordArray.push(passwordChar[Math.floor(Math.random() * passwordChar.length)]);
      }
      const res = passwordArray.join('')
      setPassword(res)
    }
    else if (checked.isUpper && checked.isLower && checked.isSymbol) {
      passwordChar.push(...upperChar, ...lowerChar, ...symbolChar);
      for (let index = 0; index < value; index++) {
        passwordArray.push(passwordChar[Math.floor(Math.random() * passwordChar.length)]);
      }
      const res = passwordArray.join('')
      setPassword(res)
    }
    else if (checked.isUpper && checked.isNumber && checked.isSymbol) {
      passwordChar.push(...upperChar, ...numberChar, ...symbolChar);
      for (let index = 0; index < value; index++) {
        passwordArray.push(passwordChar[Math.floor(Math.random() * passwordChar.length)]);
      }
      const res = passwordArray.join('')
      setPassword(res)
    }
    else if (checked.isLower && checked.isNumber && checked.isSymbol) {
      passwordChar.push(...lowerChar, ...numberChar, ...symbolChar);
      for (let index = 0; index < value; index++) {
        passwordArray.push(passwordChar[Math.floor(Math.random() * passwordChar.length)]);
      }
      const res = passwordArray.join('')
      setPassword(res)
    }
    /* 2 params */
    else if (checked.isUpper && checked.isLower) {
      passwordChar.push(...upperChar, ...lowerChar);
      for (let index = 0; index < value; index++) {
        passwordArray.push(passwordChar[Math.floor(Math.random() * passwordChar.length)]);
      }
      const res = passwordArray.join('')
      setPassword(res)
    } else if (checked.isUpper && checked.isNumber) {
      passwordChar.push(...upperChar, ...numberChar);
      for (let index = 0; index < value; index++) {
        passwordArray.push(passwordChar[Math.floor(Math.random() * passwordChar.length)]);
      }
      const res = passwordArray.join('')
      setPassword(res)
    } else if (checked.isUpper && checked.isSymbol) {
      passwordChar.push(...upperChar, ...symbolChar);
      for (let index = 0; index < value; index++) {
        passwordArray.push(passwordChar[Math.floor(Math.random() * passwordChar.length)]);
      }
      const res = passwordArray.join('')
      setPassword(res)
    } else if (checked.isLower && checked.isNumber) {
      passwordChar.push(...lowerChar, ...numberChar);
      for (let index = 0; index < value; index++) {
        passwordArray.push(passwordChar[Math.floor(Math.random() * passwordChar.length)]);
      }
      const res = passwordArray.join('')
      setPassword(res)
    } else if (checked.isLower && checked.isSymbol) {
      passwordChar.push(...lowerChar, ...symbolChar);
      for (let index = 0; index < value; index++) {
        passwordArray.push(passwordChar[Math.floor(Math.random() * passwordChar.length)]);
      }
      const res = passwordArray.join('')
      setPassword(res)
    } else if (checked.isNumber && checked.isSymbol) {
      passwordChar.push(...numberChar, ...symbolChar);
      for (let index = 0; index < value; index++) {
        passwordArray.push(passwordChar[Math.floor(Math.random() * passwordChar.length)]);
      }
      const res = passwordArray.join('')
      setPassword(res)
    }
    /* 1 param */
    else if (checked.isUpper) {
      for (let index = 0; index < value; index++) {
        passwordArray.push(upperChar[Math.floor(Math.random() * upperChar.length)]);
      }
      const res = passwordArray.join('')
      setPassword(res)
    } else if (checked.isLower) {
      for (let index = 0; index < value; index++) {
        passwordArray.push(lowerChar[Math.floor(Math.random() * lowerChar.length)]);
      }
      const res = passwordArray.join('')
      setPassword(res)
    } else if (checked.isNumber) {
      for (let index = 0; index < value; index++) {
        passwordArray.push(numberChar[Math.floor(Math.random() * numberChar.length)]);
      }
      const res = passwordArray.join('')
      setPassword(res)
    } else if (checked.isSymbol) {
      for (let index = 0; index < value; index++) {
        passwordArray.push(symbolChar[Math.floor(Math.random() * symbolChar.length)]);
      }
      const res = passwordArray.join('')
      setPassword(res)
    }
  }

  return (
    <div className='App'>
      <span className='appTitle'>Password-inator</span>
      <Preview password={password} setPassword={setPassword} />
      <div className='parameterContainer'>
        <Range value={value} setValue={setValue} />
        <Checkbox checked={checked} setChecked={setChecked} setStrength={setStrength} />
        <Strength strength={strength} setStrength={setStrength} />
        <GenerateBtn handleGenerate={handleGenerate} />
      </div>
    </div>
  )
}

export default App
