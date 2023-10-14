/* eslint-disable react/prop-types */
import React from 'react';

import './checkbox.css'

class CheckboxContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isUpper: this.props.checked[0],
            isLower: this.props.checked[1],
            isNumber: this.props.checked[2],
            isSymbol: this.props.checked[3],

        }
        this.handleCheck = this.handleCheck.bind(this);
    }

    handleCheck() {
        this.props.setChecked(this.state)
    }

    render() {
        return (
            <React.Fragment>
                <label className='customCheckbox'>
                    <input type='checkbox' name='isUpper' onClick={() => this.setState({ isUpper: !this.state.isUpper }, this.handleCheck)} />
                    <span className='checkmark'></span>
                    <span className='checkboxSpan'>Include Uppercase Letters</span>
                </label>
                <label className='customCheckbox'>
                    <input type='checkbox' name='lowerCheck' onClick={() => this.setState({ isLower: !this.state.isLower }, this.handleCheck)} />
                    <span className='checkmark'></span>
                    <span className='checkboxSpan'>Include Lowercase Letters</span>
                </label>
                <label className='customCheckbox'>
                    <input type='checkbox' name='numberCheck' onClick={() => this.setState({ isNumber: !this.state.isNumber }, this.handleCheck)} />
                    <span className='checkmark'></span>
                    <span className='checkboxSpan'>Include Numbers</span>
                </label>
                <label className='customCheckbox'>
                    <input type='checkbox' name='symbolCheck' onClick={() => this.setState({ isSymbol: !this.state.isSymbol }, this.handleCheck)} />
                    <span className='checkmark'></span>
                    <span className='checkboxSpan'>Include Symbols</span>
                </label>
            </React.Fragment>
        );
    }
}

export default CheckboxContainer;