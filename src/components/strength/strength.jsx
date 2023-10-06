import React from 'react'

/* import strength component style */
import './strength.css'

class Strength extends React.Component {
    render() {
        return <div className='strength'>
            <span>STRENGTH</span>
            <div>
                <span>MEDIUM</span>
                <div className='indicator'></div>
                <div className='indicator'></div>
                <div className='indicator'></div>
                <div className='indicator'></div>
            </div>
        </div>;
    }
}

export default Strength;