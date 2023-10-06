import React from 'react'

/* import parameterContainer component style */
import './parameterContainer.css'

/* Import components */
import Range from '../range/range';
import Checkbox from '../checkbox/checkbox';
import Strength from '../strength/strength';
import GenerateBtn from '../generateBtn/generateBtn';

class ParameterContainer extends React.Component {
    render() {
        // eslint-disable-next-line react/prop-types
        const { value, setValue } = this.props

        return <div className='parameterContainer'>
            <Range value={value} setValue={setValue} />
            <Checkbox />
            <Strength />
            <GenerateBtn />
        </div>;
    }
}

export default ParameterContainer;