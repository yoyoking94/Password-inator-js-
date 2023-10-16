/* eslint-disable react/prop-types */
import React from 'react';

import './checkbox.css'

class Checkbox extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { checkName, labelSpan } = this.props
        return (
            <React.Fragment>
                <label className='customCheckbox'>
                    <input type='checkbox' name={checkName} />
                    <span className='checkmark'></span>
                    <span className='checkboxSpan'>{labelSpan}</span>
                </label>
            </React.Fragment>
        );
    }
}

export default Checkbox;