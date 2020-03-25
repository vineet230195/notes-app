import React from 'react'
import {connect} from 'react-redux'
import {postCategory} from '../../action/categoriesAction'
class CategoryForm extends React.Component{
    constructor(){
        super()
        this.state={
            name:''
        }
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            name:this.state.name
        }
        this.setState({name:''})
        this.props.dispatch(postCategory(formData))
    }
    render(){
        return(
            <div className='container'>
                <div className='row'>
                <div className='col-md-3'>
                <form onSubmit={this.handleSubmit}>
                <div className='form-group'>
                    <label htmlFor='name'>Category</label>
                    <input type='text' className='form-control' name='name' id='name' value={this.state.name} onChange={this.handleChange}/>
                </div>
                    <input type='submit' className='btn btn-primary btn-sm'/>
                </form>
            </div>
            </div>
            </div>
        )
    }
}

export default connect()(CategoryForm)