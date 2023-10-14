/* eslint-disable react/prop-types */
import React from 'react'

/* import parameterContainer component style */
import './parameterContainer.css'

/* Import components */
import Range from '../range/range';
import CheckboxContainer from '../checkbox/checkbox';
import Strength from '../strength/strength';
import GenerateBtn from '../generateBtn/generateBtn';

class ParameterContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { value, setValue, checked, setChecked, strength, setStrength } = this.props

        return <div className='parameterContainer'>
            <Range value={value} setValue={setValue} />
            <CheckboxContainer checked={checked} setChecked={setChecked} />
            <Strength strength={strength} setStrength={setStrength} />
            <GenerateBtn handleGenerate={this.props.handleGenerate} />
        </div>;
    }
}

export default ParameterContainer;