import React from 'react'
import {connect} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css'
import {registerUser} from '../../action/userAction'


class Register extends React.Component {
    constructor() {
        super()
        this.state = {
            username: '',
            email: '',
            password: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value 
        })
    }

    handleSubmit = (e) => {
        e.preventDefault() 
        const formData = {
            username: this.state.username, 
            email: this.state.email,
            password: this.state.password
        }
        
        const redirect=()=>{
            return this.props.history.push('/users/login')
        }
        this.props.dispatch(registerUser(formData,redirect))
    }


    render() {
        return (
            
               <div className='container'>
                <div className='row'>
                <div className='col-md-4 offset-md-4'>
                <h2 className='display-5 text-center'>Register</h2>

                <form onSubmit={this.handleSubmit}>
                  <div className='form-group'>
                    <label htmlFor="username">Username</label>
                    <input type="text" className='form-control' id="username" name="username" value={this.state.username} onChange={this.handleChange}/>
                </div>
                <div className='form-group'>
                    <label htmlFor="email">Email</label>
                    <input type="text"  className='form-control' id="email" name="email" value={this.state.email} onChange={this.handleChange} />
              </div>
                <div className='form-group'>
                    <label htmlFor="password">Password</label>
                    <input type="password"   className='form-control'id="password" name="password" value={this.state.password} onChange={this.handleChange} />
                </div>
                    <input type="submit" className='btn btn-primary btn-sm' value="Register" />
                </form>
            </div>
            </div>
            </div>
        
        )
    }
}

export default connect()(Register)
