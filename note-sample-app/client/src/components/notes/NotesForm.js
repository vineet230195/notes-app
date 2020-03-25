import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {postNote} from '../../action/notesAction'

class NotesForm extends React.Component{
    constructor(){
        super()
        this.state={
            title:'',
            body:'',
            category:''
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
            title:this.state.title,
            body:this.state.body,
            category:this.state.category
        }
        console.log(formData)
        this.props.dispatch(postNote(formData))
        
    }
    render(){
        return(
            <div className='container'>
                <h2>Add Note</h2>
                <form onSubmit={this.handleSubmit}>
                  <div className='form-group'>
                    <label htmlFor='title'>Title</label>
                    <input type='text'className='form-control' name='title' id='title' value={this.state.title} onChange={this.handleChange}/>
                  </div>
                  <div className='form-group'>
                    <label htmlFor='body'>Body</label>
                    <textarea value={this.state.body} className='form-control'id='body'name='body'onChange={this.handleChange}></textarea>
                  </div>
                  <div className='form-group'>
                    <label htmlFor='category'>Category</label>
                    <select className='form-control' value={this.state.category} name='category' onChange={this.handleChange}>
                                <option>select</option>
                                {
                                    this.props.categories.map(category=>{
                                        return <option key={category._id} value={category._id}>{category.name}</option>
                                    })
                                }
                    </select>
                    </div>
                    <input type='submit' className='btn btn-primary'/>
                </form>
                <div>
                <Link to='/notes'>Back</Link>
                </div>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        categories:state.categories
    }
}
export default connect(mapStateToProps)(NotesForm)