/* eslint-disable react/prop-types */
import React from 'react'

/* import strength component style */
import './strength.css'

class Strength extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { strength } = this.props

        return <div className='strength'>
            <span>STRENGTH</span>
            <div>
                <span>{strength}</span>
                <div className='indicator'></div>
                <div className='indicator'></div>
                <div className='indicator'></div>
                <div className='indicator'></div>
            </div>
        </div>;
    }
}

export default Strength;