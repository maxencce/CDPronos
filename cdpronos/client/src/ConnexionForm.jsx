import React, { Component } from "react";
import { Field } from "./FormItems"



export class ConnexionForm extends Component {

    constructor (props) {
        super(props)
        this.state = {
            email: '',
            password: '',
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange (e) {
        const name = e.target.name
        const type = e.target.type
        const value = type === 'checkbox' ? e.target.checked : e.target.value

        this.setState ({
            [name]: value
        })
    }

    handleSubmit (e) {
        e.preventDefault()
        this.setState({
            email: '',
            password: '',
        })
    }

    render () {
        return <form className="container mt-4" onSubmit={this.handleSubmit}>
            <Field name="email" type="email" value={this.state.email} onChange={this.handleChange}>Email</Field>
            <Field name="password" type="password" value={this.state.password} onChange={this.handleChange}>Password</Field>
            <div className="form-group">
                <button className="btn btn-primary">Se connecter</button>
            </div>
            {JSON.stringify(this.state)}
        </form>
    }
}