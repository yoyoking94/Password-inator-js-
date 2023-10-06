import React from 'react'

/* import checkbox component style */
import './checkbox.css'

class Checkbox extends React.Component {
    render() {
        return <div className='checkbox'>
            <label htmlFor="upperLetters" className='customCheckbox'>
                <input type="checkbox" name="upperLetters" id="upperLetters" />
                <span className="checkmark"></span>
                Include Uppercase Letters
            </label>
            <label htmlFor="lowerLetters" className='customCheckbox'>
                <input type="checkbox" name="lowerLetters" id="lowerLetters" />
                <span className="checkmark"></span>
                Include Lowercase Letters
            </label>
            <label htmlFor="numbers" className='customCheckbox'>
                <input type="checkbox" name="numbers" id="numbers" />
                <span className="checkmark"></span>
                Include Numbers
            </label>
            <label htmlFor="symbols" className='customCheckbox'>
                <input type="checkbox" name="symbols" id="symbols" />
                <span className="checkmark"></span>
                Include Symbols
            </label>
        </div>;
    }
}

export default Checkbox;