/* eslint-disable react/prop-types */
import React from 'react';

import './checkbox.css'

/* import Checkbox from './checkbox'; */

class Checkboxes extends React.Component {
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
        this.props.setStrength(this.state)


        if (this.state.isUpper && this.state.isLower && this.state.isNumber && this.state.isSymbol) {
            this.props.setStrength('strong')
        } else if (this.state.isUpper && this.state.isLower && this.state.isNumber || this.state.isUpper && this.state.isLower && this.state.isSymbol || this.state.isUpper && this.state.isNumber && this.state.isSymbol || this.state.isLower && this.state.isNumber && this.state.isSymbol) {
            this.props.setStrength('medium')
        } else if (this.state.isUpper && this.state.isLower || this.state.isUpper && this.state.isNumber || this.state.isUpper && this.state.isSymbol || this.state.isLower && this.state.isNumber || this.state.isLower && this.state.isSymbol || this.state.isNumber && this.state.isSymbol) {
            this.props.setStrength('week')
        } else if (this.state.isUpper || this.state.isLower || this.state.isNumber || this.state.isSymbol) {
            this.props.setStrength('too week')
        } else {
            this.props.setStrength(' ')
        }
    }

    render() {
        /* const { checked, setChecked } = this.props */
        return (
            <React.Fragment>
                {/* <Checkbox checkName={'isUpper'} labelSpan={'Include Uppercase Letters'} checked={checked} setChecked={setChecked} onClick={() => this.setState({ isUpper: !this.state.isUpper }, this.handleCheck)} />
                <Checkbox checkName={'lowerCheck'} labelSpan={'Include Lowercase Letters'} checked={checked} setChecked={setChecked} onClick={() => this.setState({ isLower: !this.state.isLower }, this.handleCheck)} />
                <Checkbox checkName={'numberCheck'} labelSpan={'Include Numbers'} checked={checked} setChecked={setChecked} onClick={() => this.setState({ isNumber: !this.state.isNumber }, this.handleCheck)} />
                <Checkbox checkName={'symbolCheck'} labelSpan={'Include Symbols'} checked={checked} setChecked={setChecked} onClick={() => this.setState({ isSymbol: !this.state.isSymbol }, this.handleCheck)} /> */}


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

export default Checkboxes;