/* eslint-disable react/prop-types */
import React from 'react';
import dataCheckbox from './dataCheckbox';

import './checkbox.css'
import Checkbox from './checkbox';

class CheckboxContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = { checkedItems: new Map(), }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const item = e.target.name;
        const isChecked = e.target.checked;
        this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item, isChecked) }));
        this.props.setChecked(this.state.checkedItems)

        console.log(this.state.checkedItems);
        console.log(`map : ${this.state.checkedItems}`);
        console.log(`map 0 : ${this.state.checkedItems[0]}`);
    }

    render() {
        return (
            <React.Fragment>
                {
                    dataCheckbox.map(item => (
                        <label key={item.key} className='customCheckbox'>
                            <Checkbox name={item.name} checked={this.state.checkedItems.get(item.name)} onChange={this.handleChange} />
                            <span className='checkmark'></span>
                            <span className='checkboxSpan'>
                                {item.name}
                            </span>
                        </label>
                    ))
                }
            </React.Fragment>
        );
    }
}

export default CheckboxContainer;