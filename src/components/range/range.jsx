/* eslint-disable react/prop-types */
import React from 'react'

/* import parameterContainer component style */
import './range.css'

class Range extends React.Component {
    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = { value: this.props.value };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const rangeInput = document.getElementById('rangeInput')
        rangeInput.style.backgroundSize = e.target.value + '% 100%';

        this.props.setValue(e.target.value)
    }

    render() {
        return <div className='range'>
            <div>
                <span className='rangeLabel' id='rangeLabel'>Character Lenght</span>
                <span className='characterValue'>{this.props.value}</span>
            </div>
            <div>
                <input type="range" name="range" id="rangeInput" min={0} defaultValue={50} max={100} onChange={this.handleChange} />
            </div>
        </div>;
    }
}

export default Range;