/* eslint-disable react/prop-types */
import React from 'react'

/* import strength component style */
import './strength.css'

class Strength extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const indicator1 = document.getElementById('indicator1')
        const indicator2 = document.getElementById('indicator2')
        const indicator3 = document.getElementById('indicator3')
        const indicator4 = document.getElementById('indicator4')

        if (this.props.strength === ' ') {
            indicator1.classList.remove('tooWeek')
        } else if (this.props.strength === 'too week') {
            indicator1.classList.remove('week')
            indicator2.classList.remove('week')
            indicator3.classList.remove('week')
            indicator4.classList.remove('week')

            indicator1.classList.add('tooWeek')
        } else if (this.props.strength === 'week') {
            indicator1.classList.remove('medium')
            indicator2.classList.remove('medium')
            indicator3.classList.remove('medium')
            indicator4.classList.remove('medium')

            indicator1.classList.add('week')
            indicator2.classList.add('week')
        } else if (this.props.strength === 'medium') {
            indicator1.classList.remove('strong')
            indicator2.classList.remove('strong')
            indicator3.classList.remove('strong')
            indicator4.classList.remove('strong')

            indicator1.classList.add('medium')
            indicator2.classList.add('medium')
            indicator3.classList.add('medium')
        } else if (this.props.strength === 'strong') {
            indicator1.classList.add('strong')
            indicator2.classList.add('strong')
            indicator3.classList.add('strong')
            indicator4.classList.add('strong')
        }

        return <div className='strength'>
            <span>STRENGTH</span>
            <div>
                <span>{this.props.strength}</span>
                <div id='indicator1' className='indicator'></div>
                <div id='indicator2' className='indicator'></div>
                <div id='indicator3' className='indicator'></div>
                <div id='indicator4' className='indicator'></div>
            </div>
        </div>;
    }
}

export default Strength;