import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

function NotesList(props){
    return(
        <div className='container'>
           
            
            <h2 className='display-5'>Notes list- {props.notes.length}</h2>

            <table className='table'>
                <thead>
                    <tr>
                        <td>Title</td>
                        <td>body</td>
                        <td>category</td>
                    </tr>
                </thead>
                <tbody>
                {
                            props.notes.map(note=>{
                                return(
                                    <tr  key={note._id}>
                                    <td >{note.title}</td>
                                    <td >{note.body}</td>
                                    <td >{note.category.name}</td>
                                    </tr>
                                )
                            })
                        }
                </tbody>
            </table>
            <Link to='/notes/add'>Add Note</Link>
            
        </div>


    )
}

const mapStateToProps=(state)=>{
    return{
        notes:state.notes
    }
}
export default connect(mapStateToProps)(NotesList)