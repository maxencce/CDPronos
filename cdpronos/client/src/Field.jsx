import React, { Component } from "react";

export class Field extends Component {
    
    render () {
        const {name, value, onChange, children} = this.props
        return <div className="form-group">
            <label htmlFor={name}>{children}</label>
            <input type="text" value={value} onChange={onChange} id={name} name={name} className="form-control"/>
        </div>
    }
}