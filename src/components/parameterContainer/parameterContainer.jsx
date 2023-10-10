/* eslint-disable react/prop-types */
import React from 'react'

/* import parameterContainer component style */
import './parameterContainer.css'

/* Import components */
import Range from '../range/range';
import CheckboxContainer from '../checkbox/checkboxContainer';
import Strength from '../strength/strength';
import GenerateBtn from '../generateBtn/generateBtn';

class ParameterContainer extends React.Component {
    render() {
        const { value, setValue } = this.props
        const { checked, setChecked } = this.props

        return <div className='parameterContainer'>
            <Range value={value} setValue={setValue} />
            <CheckboxContainer checked={checked} setChecked={setChecked} />
            <Strength />
            <GenerateBtn />
        </div>;
    }
}

export default ParameterContainer;